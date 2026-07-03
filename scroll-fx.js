// ===========================================
// SCROLL CHOREOGRAPHY — GSAP + ScrollTrigger (CDN)
// Techniques studied from a reference scroll-portfolio:
// progress bar, word-reveal headings, reversible staggered
// reveals, count-up stats. Progressive: bails out entirely on
// prefers-reduced-motion or if the GSAP CDN failed to load —
// content is never hidden without JS, so nothing breaks.
// ===========================================

(function () {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // ?print=1 (used by the headless-Chrome CV export) bails out of ALL animation so the
  // PDF captures the authored values — e.g. the count-up stat stays "300+" instead of a
  // mid-tween number. Content is rendered by script.js, so skipping fx breaks nothing.
  const printMode = new URLSearchParams(location.search).has('print');
  if (reduced || printMode || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // ---------- reading progress bar ----------
  gsap.to('#progress', {
    scaleX: 1, ease: 'none',
    scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.3 }
  });

  // ---------- hero intro: orchestrated timeline (on load, not scroll) ----------
  // One continuous ~1.5s gesture, order matches the DOM: name → thesis → evidence → action.
  const hi = gsap.timeline({ defaults: { ease: 'power3.out', opacity: 0, clearProps: 'all' } });
  hi.from('.hero .eyebrow',    { y: 14, duration: 0.45 })
    .from('.hero h1',          { y: 26, duration: 0.75 }, '-=0.2')
    .from('.hero .role',       { y: 18, duration: 0.55 }, '-=0.45')
    .from('.hero .tagline',    { y: 20, duration: 0.6 },  '-=0.3')
    .from('.hero-stats .stat', { y: 22, duration: 0.55, stagger: 0.07 }, '-=0.3')
    .from('.hero .cta',        { y: 18, duration: 0.5 },  '-=0.3')
    .from(['.hero-meta', '.hero-tech'], { y: 14, duration: 0.45, stagger: 0.08 }, '-=0.3');
  // h1 wipe — runs over the rise; clip-path animates the WHOLE h1 so the
  // background-clip:text gradient (style.css) is untouched (why word-reveal skips h1).
  // -5% top/bottom margins keep Crimson Pro descenders out of the clip edge.
  gsap.fromTo('.hero h1',
    { clipPath: 'inset(-5% 100% -5% 0)' },
    { clipPath: 'inset(-5% -5% -5% 0)', duration: 0.9, ease: 'power3.out', delay: 0.12, clearProps: 'clipPath' });

  // ---------- word-reveal for section headings (skip hero h1 — gradient text) ----------
  document.querySelectorAll('section:not(.hero) h2').forEach(el => {
    const text = el.textContent;
    el.innerHTML = '';
    text.split(/(\s+)/).forEach(part => {
      if (/^\s+$/.test(part)) { el.appendChild(document.createTextNode(' ')); return; }
      const w = document.createElement('span'); w.className = 'w';
      const inner = document.createElement('span'); inner.textContent = part;
      w.appendChild(inner); el.appendChild(w);
    });
    gsap.fromTo(el.querySelectorAll('.w > span'),
      { yPercent: 110 },
      { yPercent: 0, duration: 0.85, ease: 'power3.out', stagger: 0.05,
        scrollTrigger: { trigger: el, start: 'top 82%', toggleActions: 'play none none reverse' } });
  });

  // ---------- generic reveals (per-element trigger = natural stagger) ----------
  const REVEAL = [
    '.section-kicker', '.section-lede', '.about-grid',
    '#skills-grid .skill-card', '.timeline-item',
    '.featured-project-card', '#projects-grid .project-card',
    '.education-item', '.contact p', '.contact-buttons', '.email-plain'
  ].join(', ');
  document.querySelectorAll(REVEAL).forEach(el => {
    gsap.fromTo(el, { y: 36, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.85, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none reverse' } });
  });

  // ---------- count-up hero stats (integers only: 300+, 5+) ----------
  document.querySelectorAll('.hero-stats .stat-value').forEach(el => {
    const node = el.firstChild;
    if (!node || node.nodeType !== Node.TEXT_NODE) return;
    const m = node.textContent.trim().match(/^(\d+)$/);
    if (!m) return; // "5d", "3d" are labels, not counters
    const to = +m[1];
    ScrollTrigger.create({
      trigger: el, start: 'top 95%', once: true,
      onEnter: () => {
        const o = { v: 0 };
        gsap.to(o, { v: to, duration: 1.6, ease: 'power1.out',
          onUpdate: () => { node.textContent = Math.round(o.v); } });
      }
    });
  });

  // ---------- nav scrollspy: THE blue pill travels with the reader ----------
  // Rest position (hero) = Contact, so it keeps reading as the CTA;
  // scrolling moves it across About → Skills → … → Education → Contact.
  const nav = document.querySelector('nav.links');
  const forceSpy = new URLSearchParams(location.search).has('force3d'); // shared debug flag for narrow previews
  if (nav && (window.matchMedia('(min-width: 601px)').matches || forceSpy)) {
    const pill = document.createElement('span');
    pill.className = 'nav-pill';
    nav.prepend(pill);
    document.body.classList.add('spy-on'); // hands the CTA paint over to the pill

    const linkFor = href => document.querySelector(`nav.links a[href="${href}"]`);
    const restLink = linkFor('#contact');
    // section id -> nav link (featured rolls into Projects)
    const SPY = [
      ['#about', linkFor('#about')],
      ['#skills', linkFor('#skills')],
      ['#experience', linkFor('#experience')],
      ['#featured-project', linkFor('#projects')],
      ['#projects', linkFor('#projects')],
      ['#education', linkFor('#education')],
      ['#contact', restLink]
    ];
    let activeLink = null;

    function placePill(link) {
      pill.style.left = (link.offsetLeft - 14) + 'px';
      pill.style.width = (link.offsetWidth + 28) + 'px';
      pill.style.opacity = '1';
    }
    function setActive(link) {
      activeLink = link;
      nav.querySelectorAll('a').forEach(a => a.classList.toggle('active-link', a === link));
      // mirror to the left dot rail (visible ≥1100px)
      const hash = link.getAttribute('href');
      document.querySelectorAll('.dot-nav a').forEach(a =>
        a.classList.toggle('active', a.getAttribute('href') === hash));
      placePill(link);
    }

    SPY.forEach(([sel, link]) => {
      const el = document.querySelector(sel);
      if (!el || !link) return;
      ScrollTrigger.create({
        trigger: el, start: 'top 45%', end: 'bottom 45%',
        onToggle: self => { if (self.isActive) setActive(link); },
        onLeaveBack: sel === '#about' ? () => setActive(restLink) : undefined // back at hero: pill rests on Contact
      });
    });
    window.addEventListener('resize', () => { if (activeLink) placePill(activeLink); });
    // rest position immediately, then re-measure once fonts/layout settle
    setActive(restLink);
    window.addEventListener('load', () => { if (activeLink) placePill(activeLink); });
  }

  // re-measure triggers once data-driven sections (script.js) have laid out
  window.addEventListener('load', () => ScrollTrigger.refresh());
})();
