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
  if (reduced || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // ---------- reading progress bar ----------
  gsap.to('#progress', {
    scaleX: 1, ease: 'none',
    scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.3 }
  });

  // ---------- hero intro (on load, not scroll) ----------
  gsap.from(
    ['.hero .eyebrow', '.hero h1', '.hero .role', '.hero .tagline', '.hero .cta',
     '.hero-meta', '.hero-stats', '.hero-tech'],
    { y: 28, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.09, clearProps: 'all' }
  );

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

  // re-measure triggers once data-driven sections (script.js) have laid out
  window.addEventListener('load', () => ScrollTrigger.refresh());
})();
