// ===========================================
// BG 3D — full-page wireframe "data world" (Three.js via CDN import map)
// Studied from a reference scroll-portfolio: a fixed canvas behind ALL
// content, camera Y follows native scroll, each section owns a themed
// 3D set piece placed at that section's document position, pieces fade
// by distance to the current chapter, scroll velocity adds gentle spin,
// dust particles span the whole journey.
// Set pieces are DATA/OPERATIONS-themed (this is an analyst's portfolio):
//   hero      — colored KPI skyline (site signature, kept from v1)
//   about     — SOP pages flowing into each other (SOP → task → KPI)
//   skills    — icosahedron "toolbox" with orbiting octahedra
//   experience— ascending career staircase + growth line
//   featured  — scattered cubes ASSEMBLE into a bar chart on scroll
//   projects  — floating wireframe browser windows
//   education — open wireframe book
//   contact   — slow torus behind the closing words
// Progressive enhancement: desktop + WebGL only (?force3d bypasses),
// reduced-motion = fast camera, no spin; bails out clean otherwise.
// ===========================================

const canvas = document.getElementById('stage');

function webglAvailable() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
  } catch { return false; }
}

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const force3d = new URLSearchParams(location.search).has('force3d');

if (canvas && (window.innerWidth >= 900 || force3d) && webglAvailable()) {
  init().catch(err => { canvas.style.display = 'none'; console.warn('bg-3d disabled:', err); });
} else if (canvas) {
  canvas.style.display = 'none';
}

async function init() {
  const THREE = await import('three');

  const INK = 0x1c1b1a; // --fg
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 10;

  // lights only matter for the lambert skyline; lines ignore them
  scene.add(new THREE.HemisphereLight(0xffffff, 0xe6e4e0, 1.05));
  const sun = new THREE.DirectionalLight(0xffffff, 1.3);
  sun.position.set(6, 12, 8);
  scene.add(sun);

  const lineMat = new THREE.LineBasicMaterial({ color: INK, transparent: true, opacity: 0.42 });
  const lineSoft = new THREE.LineBasicMaterial({ color: INK, transparent: true, opacity: 0.18 });
  const edges = (g, soft) => new THREE.LineSegments(new THREE.EdgesGeometry(g), soft ? lineSoft : lineMat);
  const wires = (g, soft) => new THREE.LineSegments(new THREE.WireframeGeometry(g), soft ? lineSoft : lineMat);
  const polyline = (pts, soft) => new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), soft ? lineSoft : lineMat);

  // deterministic pseudo-random (same world every visit, resume-safe)
  function seeded(i, j = 1) {
    const s = Math.sin(i * 127.1 + j * 311.7) * 43758.5453;
    return s - Math.floor(s);
  }

  /* ---------- set piece builders (all return THREE.Group) ---------- */

  // hero — the colored KPI skyline, ported from hero-3d.js
  let skylineAPI = null;
  function buildHero() {
    const g = new THREE.Group();
    const COLS = 13, ROWS = 9, STEP = 0.74, SIZE = 0.56;
    const ground = new THREE.Mesh(
      new THREE.BoxGeometry(COLS * STEP + 1.2, 0.28, ROWS * STEP + 1.2),
      new THREE.MeshLambertMaterial({ color: 0xffffff, transparent: true })
    );
    ground.position.y = -0.14;
    g.add(ground);

    const heights = [];
    for (let i = 0; i < COLS; i++) for (let j = 0; j < ROWS; j++) {
      const diag = (i / (COLS - 1)) * 0.65 + (1 - Math.abs(j - ROWS / 2) / (ROWS / 2)) * 0.35;
      heights.push(0.25 + diag * 2.6 + seeded(i, j) * 1.1);
    }
    const BLUES = [0x2563eb, 0x3b82f6, 0x60a5fa, 0x93c5fd, 0x1d4ed8];
    const STICKERS = [0x7c3aed, 0x0d9488, 0xd97706, 0xff64c8];
    const stickerAt = new Set([7, 23, 41, 58, 76, 94, 103, 112]);
    const barGeo = new THREE.BoxGeometry(SIZE, 1, SIZE);
    barGeo.translate(0, 0.5, 0);
    const bars = new THREE.InstancedMesh(barGeo, new THREE.MeshLambertMaterial({ transparent: true }), COLS * ROWS);
    const dummy = new THREE.Object3D(), color = new THREE.Color();
    let idx = 0;
    for (let i = 0; i < COLS; i++) for (let j = 0; j < ROWS; j++) {
      dummy.position.set((i - (COLS - 1) / 2) * STEP, 0, (j - (ROWS - 1) / 2) * STEP);
      dummy.scale.set(1, 0.001, 1);
      dummy.updateMatrix();
      bars.setMatrixAt(idx, dummy.matrix);
      const pal = stickerAt.has(idx) ? STICKERS : BLUES;
      color.setHex(pal[Math.floor(seeded(i * 3, j * 7) * pal.length)]);
      bars.setColorAt(idx, color);
      idx++;
    }
    bars.instanceColor.needsUpdate = true;
    g.add(bars);

    const floaters = [];
    [[-4.2, 4.6, -1.5, 0.42, 0x7c3aed], [3.8, 5.4, -2.2, 0.34, 0x0d9488], [1.2, 6.2, 1.8, 0.28, 0xd97706]]
      .forEach(([x, y, z, s, c]) => {
        const m = new THREE.Mesh(new THREE.BoxGeometry(s, s, s), new THREE.MeshLambertMaterial({ color: c, transparent: true }));
        m.position.set(x, y, z); m.rotation.set(0.5, 0.8, 0.2);
        g.add(m); floaters.push({ mesh: m, baseY: y, phase: x });
      });

    const GROW = 1.4, ease = t => 1 - Math.pow(1 - t, 3);
    function setHeights(prog, time) {
      let k = 0;
      for (let i = 0; i < COLS; i++) for (let j = 0; j < ROWS; j++) {
        const delay = (i + j) / (COLS + ROWS) * 0.5;
        const local = Math.min(Math.max((prog - delay) / (1 - delay), 0), 1);
        let h = heights[k] * ease(local);
        if (time !== undefined) h += Math.sin(time * 1.2 + i * 0.7 + j * 0.9) * 0.04;
        dummy.position.set((i - (COLS - 1) / 2) * STEP, 0, (j - (ROWS - 1) / 2) * STEP);
        dummy.scale.set(1, Math.max(h, 0.001), 1);
        dummy.updateMatrix();
        bars.setMatrixAt(k, dummy.matrix);
        k++;
      }
      bars.instanceMatrix.needsUpdate = true;
    }
    g.rotation.y = -0.35;
    g.userData.update = (t, _p, spin) => {
      setHeights(Math.min(t / GROW, 1), t);
      floaters.forEach(f => {
        f.mesh.position.y = f.baseY + Math.sin(t * 0.8 + f.phase) * 0.18;
        f.mesh.rotation.y += 0.004; f.mesh.rotation.x += 0.002;
      });
      g.rotation.y = -0.35 + spin * 0.8;
    };
    g.scale.setScalar(0.62);
    skylineAPI = { setHeights };
    return g;
  }

  // a "document page": rectangle + heading line + body lines
  function pageMesh(w = 0.95, h = 1.25, soft) {
    const pg = new THREE.Group();
    pg.add(edges(new THREE.PlaneGeometry(w, h), soft));
    const innerPts = [];
    const lines = [[0.34, 0.62], [0.18, 0.8], [0.06, 0.8], [-0.06, 0.8], [-0.18, 0.55], [-0.34, 0.7], [-0.46, 0.4]];
    lines.forEach(([y, len]) => {
      innerPts.push(new THREE.Vector3(-w * 0.38, y * h, 0), new THREE.Vector3(-w * 0.38 + w * 0.76 * len, y * h, 0));
    });
    const geo = new THREE.BufferGeometry().setFromPoints(innerPts);
    pg.add(new THREE.LineSegments(geo, soft ? lineSoft : lineMat));
    return pg;
  }

  // about — three SOP pages cascading, linked by arrows (SOP → task → KPI)
  function buildAbout() {
    const g = new THREE.Group();
    const items = [];
    [[-1.3, 1.5, 0, 0.1, false], [0.1, 0.2, -0.5, -0.08, false], [1.5, -1.1, -1, 0.12, true]]
      .forEach(([x, y, z, rz, soft], i) => {
        const p = pageMesh(0.95, 1.25, soft);
        p.position.set(x, y, z); p.rotation.z = rz;
        p.userData.seed = i * 2.3;
        items.push(p); g.add(p);
      });
    [[-0.85, 1.0, -0.35, 0.55], [0.55, -0.35, 1.05, -0.75]].forEach(([x1, y1, x2, y2]) => {
      g.add(polyline([new THREE.Vector3(x1, y1, -0.2), new THREE.Vector3(x2, y2, -0.2)], true));
      g.add(polyline([new THREE.Vector3(x2, y2, -0.2), new THREE.Vector3(x2 - 0.14, y2 + 0.1, -0.2)], true));
      g.add(polyline([new THREE.Vector3(x2, y2, -0.2), new THREE.Vector3(x2 - 0.05, y2 + 0.17, -0.2)], true));
    });
    g.userData.update = t => {
      items.forEach(p => {
        p.position.y += Math.sin(t * 0.6 + p.userData.seed) * 0.0012;
        p.rotation.y = Math.sin(t * 0.25 + p.userData.seed) * 0.3;
      });
    };
    g.scale.setScalar(1.5);
    return g;
  }

  // skills — icosahedron core + orbiting octahedra ("toolbox")
  function buildSkills() {
    const g = new THREE.Group();
    const core = wires(new THREE.IcosahedronGeometry(1.25, 0), true);
    g.add(core);
    const inner = edges(new THREE.IcosahedronGeometry(0.7, 0));
    g.add(inner);
    const orbiters = [];
    for (let i = 0; i < 3; i++) {
      const o = edges(new THREE.OctahedronGeometry(0.2));
      o.userData.phase = i / 3 * Math.PI * 2;
      orbiters.push(o); g.add(o);
    }
    g.userData.update = t => {
      core.rotation.y = t * 0.12; core.rotation.x = Math.sin(t * 0.1) * 0.25;
      inner.rotation.y = -t * 0.2; inner.rotation.z = t * 0.07;
      orbiters.forEach(o => {
        const a = t * 0.4 + o.userData.phase;
        o.position.set(Math.cos(a) * 2.0, Math.sin(a * 1.3) * 0.5, Math.sin(a) * 2.0);
        o.rotation.y = a;
      });
    };
    g.scale.setScalar(1.35);
    return g;
  }

  // experience — ascending staircase of boxes + growth polyline (10-year climb)
  function buildExperience() {
    const g = new THREE.Group();
    const steps = 6; // one per role
    const tops = [];
    for (let i = 0; i < steps; i++) {
      const h = 0.45 + i * 0.42;
      const b = edges(new THREE.BoxGeometry(0.78, h, 0.78), i % 2 === 1);
      b.position.set((i - (steps - 1) / 2) * 0.95, h / 2 - 1.6, -i * 0.12);
      g.add(b);
      tops.push(new THREE.Vector3(b.position.x, h - 1.6 + 0.12, b.position.z));
    }
    g.add(polyline(tops));
    const dotGeo = new THREE.BufferGeometry().setFromPoints(tops);
    g.add(new THREE.Points(dotGeo, new THREE.PointsMaterial({ color: INK, size: 0.09, transparent: true, opacity: 0.5 })));
    g.userData.update = (t, _p, spin) => { g.rotation.y = Math.sin(t * 0.15) * 0.12 + spin * 0.5; };
    g.scale.setScalar(1.45);
    return g;
  }

  // featured — scattered cubes assemble into a tidy 3D bar chart on scroll
  let assembly = null;
  function buildAssembly() {
    const g = new THREE.Group();
    const colHeights = [2, 4, 3, 6, 4, 5]; // cubes per column
    const CUBE = 0.42, SPX = 0.58, BASE = -1.5;
    const items = [];
    colHeights.forEach((n, ci) => {
      for (let k = 0; k < n; k++) {
        const b = edges(new THREE.BoxGeometry(CUBE, CUBE, CUBE), (ci + k) % 3 === 2);
        b.userData = {
          target: new THREE.Vector3((ci - (colHeights.length - 1) / 2) * SPX, BASE + CUBE / 2 + k * (CUBE + 0.02), 0),
          scatter: new THREE.Vector3((seeded(ci, k) - 0.5) * 7, (seeded(k, ci) - 0.5) * 7, -seeded(ci * 7, k * 3) * 4),
          seed: seeded(ci + 1, k + 1)
        };
        items.push(b); g.add(b);
      }
    });
    // axes
    const W = colHeights.length * SPX + 0.6, H = Math.max(...colHeights) * (CUBE + 0.02) + 0.5;
    g.add(polyline([
      new THREE.Vector3(-W / 2, BASE + H, 0), new THREE.Vector3(-W / 2, BASE - 0.12, 0),
      new THREE.Vector3(W / 2, BASE - 0.12, 0)
    ]));
    g.userData.progress = 0;
    g.userData.update = t => {
      const p = g.userData.progress;
      items.forEach(b => {
        const d = b.userData;
        const m = THREE.MathUtils.smoothstep(p, d.seed * 0.5, d.seed * 0.5 + 0.5);
        b.position.lerpVectors(d.scatter, d.target, m);
        const ra = (1 - m) * (t * (0.3 + d.seed * 0.4) + d.seed * 7);
        b.rotation.set(ra, ra * 0.7, 0);
      });
    };
    g.scale.setScalar(1.5);
    assembly = g;
    return g;
  }

  // projects — floating wireframe browser windows
  function buildProjects() {
    const g = new THREE.Group();
    const items = [];
    [[-0.9, 1.3, 0, 0.08], [0.9, -0.1, -0.7, -0.1], [-0.5, -1.6, -1.2, 0.05]].forEach(([x, y, z, rz], i) => {
      const w = new THREE.Group();
      const W = 1.7, H = 1.15;
      w.add(edges(new THREE.PlaneGeometry(W, H), i === 2));
      w.add(polyline([new THREE.Vector3(-W / 2, H / 2 - 0.2, 0), new THREE.Vector3(W / 2, H / 2 - 0.2, 0)], i === 2));
      // tiny chart inside: 4 mini bars
      const bars = [];
      for (let bI = 0; bI < 4; bI++) {
        const bh = 0.18 + seeded(i, bI) * 0.42;
        bars.push(new THREE.Vector3(-0.5 + bI * 0.33, -H / 2 + 0.18, 0), new THREE.Vector3(-0.5 + bI * 0.33, -H / 2 + 0.18 + bh, 0));
      }
      w.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(bars), i === 2 ? lineSoft : lineMat));
      w.position.set(x, y, z); w.rotation.z = rz; w.userData.seed = i * 2.1;
      items.push(w); g.add(w);
    });
    g.userData.update = t => {
      items.forEach(w => {
        w.position.y += Math.sin(t * 0.55 + w.userData.seed) * 0.0012;
        w.rotation.y = Math.sin(t * 0.22 + w.userData.seed) * 0.33;
      });
    };
    g.scale.setScalar(1.4);
    return g;
  }

  // education — open book
  function buildEducation() {
    const g = new THREE.Group();
    [-1, 1].forEach(sgn => {
      const half = new THREE.Group();
      half.add(edges(new THREE.PlaneGeometry(1.1, 1.5)));
      const pts = [];
      [[0.45, 0.75], [0.25, 0.85], [0.05, 0.7], [-0.15, 0.85], [-0.35, 0.6]].forEach(([y, len]) => {
        pts.push(new THREE.Vector3(-0.42, y * 0.75, 0), new THREE.Vector3(-0.42 + 0.84 * len, y * 0.75, 0));
      });
      half.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(pts), lineSoft));
      half.rotation.y = sgn * 0.52;
      half.position.x = sgn * 0.52;
      g.add(half);
    });
    g.rotation.x = -0.35;
    g.userData.update = t => { g.rotation.y = Math.sin(t * 0.2) * 0.25; };
    g.scale.setScalar(1.35);
    return g;
  }

  // contact — slow majestic torus
  function buildContact() {
    const g = new THREE.Group();
    const torus = wires(new THREE.TorusGeometry(2.5, 0.75, 10, 44), true);
    g.add(torus);
    g.userData.update = t => {
      torus.rotation.y = t * 0.16;
      torus.rotation.x = 0.4 + Math.sin(t * 0.12) * 0.15;
    };
    g.position.z = -3;
    return g;
  }

  /* ---------- world wiring ---------- */
  const PIECES = [
    { sel: '.hero', build: buildHero, side: 0.5 },     // right
    { sel: '#about', build: buildAbout, side: 0.55 },
    { sel: '#skills', build: buildSkills, side: -0.55 },
    { sel: '#experience', build: buildExperience, side: 0.55 },
    { sel: '#featured-project', build: buildAssembly, side: -0.55 },
    { sel: '#projects', build: buildProjects, side: 0.55 },
    { sel: '#education', build: buildEducation, side: -0.55 },
    { sel: '#contact', build: buildContact, side: 0 }
  ];
  const world = [];
  for (const p of PIECES) {
    const el = document.querySelector(p.sel);
    if (!el) continue;
    const group = p.build();
    scene.add(group);
    world.push({ el, group, side: p.side });
  }

  // independent material clones per group so distance-fade is per-chapter
  world.forEach(w => {
    w.group.traverse(o => {
      if (o.material) {
        o.material = o.material.clone();
        o.material.userData.base = o.material.opacity ?? 1;
      }
    });
  });

  // dust across the whole scroll length
  const DUST_N = 320;
  const dustGeo = new THREE.BufferGeometry();
  const dustArr = new Float32Array(DUST_N * 3);
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dustArr, 3));
  scene.add(new THREE.Points(dustGeo, new THREE.PointsMaterial({ color: INK, size: 0.022, transparent: true, opacity: 0.3 })));

  let SCALE = 1, VISH = 9.3;
  function sync() {
    const visible = 2 * camera.position.z * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    SCALE = visible / window.innerHeight;
    VISH = visible;
    const halfW = (visible * camera.aspect) / 2;
    world.forEach(w => {
      const y = w.el.offsetTop + w.el.offsetHeight / 2;
      w.group.position.y = -y * SCALE;
      w.group.position.x = halfW * w.side;
    });
    const worldH = document.documentElement.scrollHeight * SCALE;
    for (let i = 0; i < DUST_N; i++) {
      dustArr[i * 3] = (seeded(i, 3) - 0.5) * 14;
      dustArr[i * 3 + 1] = -seeded(i, 5) * worldH;
      dustArr[i * 3 + 2] = -1 - seeded(i, 7) * 5;
    }
    dustGeo.attributes.position.needsUpdate = true;
  }

  /* ---------- scroll/render loop ---------- */
  let camY = 0, lastScroll = window.scrollY, velo = 0, spin = 0;
  const mouse = { x: 0, y: 0 };
  if (!reduced) {
    window.addEventListener('pointermove', e => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });
  }

  // assembly progress driven by the featured section's position (no GSAP dependency)
  const featuredEl = document.querySelector('#featured-project');
  function assemblyProgress() {
    if (!featuredEl || !assembly) return;
    const vh = window.innerHeight;
    const p = (window.scrollY + vh * 0.85 - featuredEl.offsetTop) / (featuredEl.offsetHeight + vh * 0.3);
    assembly.userData.progress = Math.min(Math.max(p, 0), 1);
  }

  const clock = new THREE.Clock();
  let running = true;
  document.addEventListener('visibilitychange', () => {
    running = !document.hidden;
    if (running) frame();
  });

  function frame() {
    if (!running) return;
    requestAnimationFrame(frame);
    const t = clock.getElapsedTime();

    const camYT = -(window.scrollY + window.innerHeight / 2) * SCALE;
    camY = THREE.MathUtils.lerp(camY, camYT, reduced ? 0.3 : 0.085);
    camera.position.y = camY;
    camera.position.x = mouse.x * 0.32;
    camera.rotation.y = -mouse.x * 0.018;
    camera.rotation.x = mouse.y * 0.01;

    const dv = window.scrollY - lastScroll; lastScroll = window.scrollY;
    velo = THREE.MathUtils.lerp(velo, THREE.MathUtils.clamp(dv, -60, 60), 0.12);
    spin = reduced ? 0 : THREE.MathUtils.lerp(spin, velo * 0.004, 0.08);

    assemblyProgress();
    world.forEach(w => {
      if (w.group.userData.update) w.group.userData.update(t, 0, spin);
      // distance fade: pieces glow in their own chapter, vanish elsewhere
      const dist = Math.abs(camY - w.group.position.y) / VISH;
      const f = THREE.MathUtils.clamp(1.45 - dist, 0, 1);
      w.group.traverse(o => {
        if (o.material && o.material.userData.base !== undefined)
          o.material.opacity = o.material.userData.base * f;
      });
    });

    renderer.render(scene, camera);
  }

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    sync();
  });
  window.addEventListener('load', sync);
  sync();
  frame();

  window.__bg3d = {
    pieces: world.length,
    draws: () => renderer.info.render.calls,
    setScroll: y => { window.scrollTo(0, y); }
  };
}
