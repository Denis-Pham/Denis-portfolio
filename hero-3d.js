// ===========================================
// HERO 3D — "KPI Skyline"
// A data-skyline rendered with Three.js (CDN import map, no build step).
// Progressive enhancement: only initializes on desktop widths with WebGL;
// respects prefers-reduced-motion (renders a single static frame).
// No external 3D assets — geometry is generated in code (benchmark budget: <1MB).
// ===========================================

const container = document.getElementById('hero-3d');

function webglAvailable() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
  } catch {
    return false;
  }
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ?force3d=1 bypasses the desktop-width gate (debug/testing in narrow previews)
const force3d = new URLSearchParams(location.search).has('force3d');

if (container && (window.innerWidth >= 900 || force3d) && webglAvailable()) {
  // Defer heavy work until the browser is idle so 3D never blocks first paint
  const start = () => init().catch(err => console.warn('hero-3d disabled:', err));
  'requestIdleCallback' in window ? requestIdleCallback(start, { timeout: 2000 }) : setTimeout(start, 200);
}

async function init() {
  const THREE = await import('three');

  // ---------- Scene & camera ----------
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
  camera.position.set(8.5, 7.2, 11);
  camera.lookAt(0, 1.0, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // benchmark tip: never full retina
  container.appendChild(renderer.domElement);

  // ---------- Lights (cheap: no shadows, lambert-friendly) ----------
  scene.add(new THREE.HemisphereLight(0xffffff, 0xe6e4e0, 1.05));
  const sun = new THREE.DirectionalLight(0xffffff, 1.4);
  sun.position.set(6, 12, 8);
  scene.add(sun);

  const group = new THREE.Group();
  scene.add(group);

  // ---------- Ground slab (paper-warm, hairline edge feel) ----------
  const COLS = 13, ROWS = 9, STEP = 0.74, SIZE = 0.56;
  const groundW = COLS * STEP + 1.2, groundD = ROWS * STEP + 1.2;
  const ground = new THREE.Mesh(
    new THREE.BoxGeometry(groundW, 0.28, groundD),
    new THREE.MeshLambertMaterial({ color: 0xffffff })
  );
  ground.position.y = -0.14;
  group.add(ground);

  // ---------- Bars: deterministic "KPI city" heightmap ----------
  // Two ridges (a "growth curve" diagonal) + seeded noise. Deterministic so
  // every visitor sees the same skyline (no Math.random across reloads).
  function seeded(i, j) {
    const s = Math.sin(i * 127.1 + j * 311.7) * 43758.5453;
    return s - Math.floor(s);
  }
  const heights = [];
  for (let i = 0; i < COLS; i++) {
    for (let j = 0; j < ROWS; j++) {
      const diag = (i / (COLS - 1)) * 0.65 + (1 - Math.abs(j - ROWS / 2) / (ROWS / 2)) * 0.35;
      const h = 0.25 + diag * 2.6 + seeded(i, j) * 1.1;
      heights.push(h);
    }
  }

  // Notion-style discipline: blue carries the structure, sticker colors decorate
  const BLUES = [0x2563eb, 0x3b82f6, 0x60a5fa, 0x93c5fd, 0x1d4ed8];
  const STICKERS = [0x7c3aed, 0x0d9488, 0xd97706, 0xff64c8];
  const stickerAt = new Set([7, 23, 41, 58, 76, 94, 103, 112]); // fixed accent bars

  const barGeo = new THREE.BoxGeometry(SIZE, 1, SIZE); // unit height, scaled per instance
  barGeo.translate(0, 0.5, 0); // grow from the ground up
  const barMat = new THREE.MeshLambertMaterial();
  const bars = new THREE.InstancedMesh(barGeo, barMat, COLS * ROWS);

  const dummy = new THREE.Object3D();
  const color = new THREE.Color();
  let idx = 0;
  for (let i = 0; i < COLS; i++) {
    for (let j = 0; j < ROWS; j++) {
      const x = (i - (COLS - 1) / 2) * STEP;
      const z = (j - (ROWS - 1) / 2) * STEP;
      dummy.position.set(x, 0, z);
      dummy.scale.set(1, 0.001, 1); // grows in via animation
      dummy.updateMatrix();
      bars.setMatrixAt(idx, dummy.matrix);
      const palette = stickerAt.has(idx) ? STICKERS : BLUES;
      color.setHex(palette[Math.floor(seeded(i * 3, j * 7) * palette.length)]);
      bars.setColorAt(idx, color);
      idx++;
    }
  }
  bars.instanceColor.needsUpdate = true;
  group.add(bars);

  // ---------- A few floating "sticker" cubes (decorative depth, Notion-style) ----------
  const floaters = [];
  const floaterDefs = [
    { x: -4.2, y: 4.6, z: -1.5, s: 0.42, c: 0x7c3aed },
    { x: 3.8, y: 5.4, z: -2.2, s: 0.34, c: 0x0d9488 },
    { x: 1.2, y: 6.2, z: 1.8, s: 0.28, c: 0xd97706 }
  ];
  for (const d of floaterDefs) {
    const m = new THREE.Mesh(
      new THREE.BoxGeometry(d.s, d.s, d.s),
      new THREE.MeshLambertMaterial({ color: d.c })
    );
    m.position.set(d.x, d.y, d.z);
    m.rotation.set(0.5, 0.8, 0.2);
    group.add(m);
    floaters.push({ mesh: m, baseY: d.y, phase: d.x });
  }

  group.rotation.y = -0.35;

  // ---------- Sizing ----------
  function resize() {
    const w = container.clientWidth, h = container.clientHeight;
    if (!w || !h) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
  }
  resize();
  window.addEventListener('resize', () => { resize(); renderOnce(); });

  // ---------- Mouse parallax (window-level: canvas is pointer-events: none) ----------
  let targetRX = 0, targetRY = -0.35;
  if (!reduceMotion) {
    window.addEventListener('mousemove', (e) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      targetRY = -0.35 + nx * 0.16;
      targetRX = ny * 0.06;
    }, { passive: true });
  }

  // ---------- Animation ----------
  const clock = new THREE.Clock();
  const GROW_TIME = 1.4;
  const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

  function setBarHeights(progress /* 0..1 */, time) {
    let k = 0;
    for (let i = 0; i < COLS; i++) {
      for (let j = 0; j < ROWS; j++) {
        const x = (i - (COLS - 1) / 2) * STEP;
        const z = (j - (ROWS - 1) / 2) * STEP;
        // stagger: bars further along the diagonal grow later
        const delay = (i + j) / (COLS + ROWS) * 0.5;
        const local = Math.min(Math.max((progress - delay) / (1 - delay), 0), 1);
        let h = heights[k] * easeOutCubic(local);
        if (time !== undefined) h += Math.sin(time * 1.2 + i * 0.7 + j * 0.9) * 0.04; // gentle breathing
        dummy.position.set(x, 0, z);
        dummy.scale.set(1, Math.max(h, 0.001), 1);
        dummy.updateMatrix();
        bars.setMatrixAt(k, dummy.matrix);
        k++;
      }
    }
    bars.instanceMatrix.needsUpdate = true;
  }

  function renderOnce() { renderer.render(scene, camera); }

  // Static path for reduced motion: final state, one frame, no loop
  if (reduceMotion) {
    setBarHeights(1);
    renderOnce();
    window.__hero3d = { mode: 'static', draws: renderer.info.render.calls };
    return;
  }

  // ---------- Render loop with visibility pausing (battery-friendly) ----------
  let visible = true, raf = null;
  new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    if (visible && raf === null) loop();
  }, { threshold: 0.05 }).observe(container);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && visible && raf === null) loop();
  });

  // scroll scrub: as the hero scrolls away the skyline rotates, sinks and shrinks
  const heroEl = document.querySelector('.hero');
  function scrollProgress() {
    const h = (heroEl && heroEl.offsetHeight) || window.innerHeight;
    return Math.min(Math.max(window.scrollY / h, 0), 1);
  }

  function loop() {
    if (!visible || document.hidden) { raf = null; return; }
    raf = requestAnimationFrame(loop);
    const t = clock.getElapsedTime();
    const grow = Math.min(t / GROW_TIME, 1);
    setBarHeights(grow, t);
    for (const f of floaters) {
      f.mesh.position.y = f.baseY + Math.sin(t * 0.8 + f.phase) * 0.18;
      f.mesh.rotation.y += 0.004;
      f.mesh.rotation.x += 0.002;
    }
    const sp = scrollProgress();
    group.rotation.y += (targetRY + sp * 0.55 - group.rotation.y) * 0.05;
    group.rotation.x += (targetRX + sp * 0.12 - group.rotation.x) * 0.05;
    group.position.y += (-sp * 1.6 - group.position.y) * 0.08;
    const s = 1 - sp * 0.18;
    group.scale.setScalar(s);
    renderer.render(scene, camera);
  }
  loop();
  window.__hero3d = { mode: 'animated', draws: () => renderer.info.render.calls };
}
