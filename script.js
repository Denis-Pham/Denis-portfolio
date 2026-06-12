// ===========================================
// PERSONAL PORTFOLIO — Data + render
// All your content lives in the 4 arrays below.
// Edit them to update the page. No HTML editing
// needed for the data-driven sections.
//
// Look for [TODO] tags — these are placeholders
// you need to fill with your real info.
// ===========================================

// ---------- 1) SKILLS (grouped by category) ----------
const skills = [
  {
    icon: '⚙️',
    category: 'Operations & Performance Systems',
    items: [
      'End-to-end performance loop: SOP → task workflow → KPI scoring',
      'SOP authoring & rollout for retail store operations',
      'Task workflow design, assignment & tracking per store',
      'KPI framework design for store-staff performance reviews'
    ]
  },
  {
    icon: '📊',
    category: 'Data Analysis',
    items: [
      'Excel (advanced — pivots, Power Query, complex formulas)',
      'SQL',
      'Python (pandas, openpyxl)',
      'KPI design & store-level performance metrics'
    ]
  },
  {
    icon: '📈',
    category: 'Dashboards & Reporting',
    items: [
      'Monthly KPI dashboards (300+ retail stores)',
      'Anomaly detection / system-error flagging',
      'Combined sales × KPI cross-analytics',
      'Heatmap visualizations (Chart.js)'
    ]
  },
  {
    icon: '🛠',
    category: 'Tools & Workflow',
    items: [
      'Claude Code (daily — building internal tools)',
      'Git / GitHub',
      'pptxgenjs (PowerPoint automation)',
      'FastAPI (Python web APIs)'
    ]
  },
  {
    icon: '✅',
    category: 'Quality & Process Management',
    items: [
      'Six Sigma Green Belt — 7 QC tools, Lean, JIT',
      'Root-cause analysis (5 Whys, 8D, fishbone, 4M change)',
      'Internal audit planning & execution',
      'Quality document systems & non-conformity resolution'
    ]
  },
  {
    icon: '🌐',
    category: 'Web (learning)',
    items: [
      'HTML / CSS / JavaScript',
      'Responsive design (mobile-first)',
      'Static site deployment (GitHub Pages)',
      'Brand-consistent design systems'
    ]
  }
];

// ---------- 2) EXPERIENCE (newest first) ----------
const experience = [
  {
    period: 'Aug 2023 — Present',
    role: 'Operations Performance Specialist',
    company: 'Hasaki.vn · Ho Chi Minh City',
    bullets: [
      // Wrap numbers/key metrics in **double asterisks** — they render in accent color
      'Own the end-to-end performance system for the Cosmetics division: **SOP design → task workflows → KPI scoring** for **300+** retail stores',
      'Author operating SOPs for store teams and convert them into daily task workflows assigned and tracked per store',
      'Designed the KPI framework that scores store staff against those workflows — the numbers behind monthly performance reviews',
      'Built the Hasaki KPI System end-to-end — raw Excel files → automated calculation → automated recording → monthly dashboard covering **300+** stores, **50+ KPIs** and **100+** data fields',
      'Took KPI tracking from **5-day** Excel calculation runs to a **live, realtime** KPI view — and cut monthly report preparation from **3 days** to **~30 minutes**',
      'Created combined sales × KPI cross-analytics and anomaly-detection logic flagging underperforming stores and suspected system errors',
      'Authored an automated PowerPoint redesign pipeline (pptxgenjs) for **5+** company policy documents'
    ]
  },
  {
    period: 'Nov 2021 — Jan 2023',
    role: 'Project Manager',
    company: 'SIPHER · Ho Chi Minh City',
    bullets: [
      'Defined project scope, goals and deliverables with Animation & VFX leads; built and maintained project plans, timelines and budgets',
      'Managed outsourced vendors end-to-end — contract signing, cost and delivery negotiation, and production progress tracking to keep assets on schedule',
      'Ran cross-department communication: status, progress and risk reporting, project documentation, meetings, agendas and follow-up on decisions'
    ]
  },
  {
    period: 'Nov 2019 — Nov 2021',
    role: 'Quality Assurance Engineer',
    company: 'Allied Technologies · Ho Chi Minh City',
    bullets: [
      'Led root-cause investigations of product defects and customer complaints using **5 Whys, 8D, fishbone and 4M-change** analysis',
      'Identified manufacturing-process risks, analyzed data trends and implemented preventive measures to minimize defects',
      'Prepared monthly in-house quality reports and customer-facing quality documentation (Shipment Approval, RoHS, inspection documents)',
      'Planned QC manpower per production line with HR and line managers to keep quality coverage fully staffed'
    ]
  },
  {
    period: 'Apr 2019 — Oct 2019',
    role: 'Quality Assurance Inspector',
    company: 'VinMart+ (VinCommerce) · Vietnam',
    bullets: [
      'Inspected stores against checklists covering hygiene, goods display, brand identity, service quality and process compliance',
      'Supported stores on food-safety and hygiene incidents — direct inspection, complaint handling and removal of non-compliant products',
      'Ran probability-based inventory audits (**10–20** item codes per visit) and appraised inventory-difference explanations',
      'Investigated fraud, loss and theft cases; signed off construction and equipment acceptance for newly opened stores; managed store camera-system operations'
    ]
  },
  {
    period: 'Mar 2017 — Apr 2019',
    role: 'Quality Assurance Leader',
    company: 'FPT Academic International · Ho Chi Minh City',
    bullets: [
      'Implemented the university-wide **KPI plan** for quality data collection and monitored alignment on the **BSC strategy system**',
      'Built the annual internal-audit plan, assigned and led the QA team, and reported audit results and countermeasures to directors',
      'Owned the quality-document system end-to-end: evaluation, non-conformity resolution, releases and cross-department rollout',
      'Contributed to drafting company decisions, coordinated their release with the clerical department and monitored implementation'
    ]
  },
  {
    period: 'Nov 2015 — Nov 2016',
    role: 'Quality Control Inspector',
    company: 'KIMDUC Co., Ltd · Ho Chi Minh City',
    bullets: [
      'Inspected raw materials (PP fabrics, films, threads, straps) and semi-finished goods across spinning, weaving, cutting and coating stages',
      'Reported material and work-in-progress quality to management; partnered with purchasing and production to resolve quality issues'
    ]
  }
];

// ---------- 3) PROJECTS (first item = Featured) ----------
const projects = [
  {
    title: 'Hasaki KPI System',
    summary: 'End-to-end KPI system for 300+ cosmetics retail stores — from raw Excel files through automated calculation and automated recording to an interactive monthly dashboard. Tracks 50+ KPIs across 100+ data fields and flags anomalies (negative KPIs, formula source mismatches). Took KPIs from 5-day Excel runs to live realtime, and monthly reports from 3 days to ~30 minutes.',
    image: 'projects/kpi-dashboard.svg',
    initial: 'K',
    tags: ['Excel', 'JavaScript', 'Chart.js', 'Automation', 'Anomaly detection'],
    // metrics show as 3 stat boxes on the Featured Project card. Only added to projects[0].
    metrics: [
      { value: '5d → live',   label: 'KPI: Excel to realtime' },
      { value: '3d → 30m',    label: 'Monthly report time' },
      { value: '50+ KPIs',    label: '100+ data fields' }
    ],
    links: { live: '', github: '', caseStudy: '' }
  },
  {
    title: 'Combined Sales × KPI Dashboard',
    summary: 'Joins two separate dashboards (Sales + KPI) to surface a key insight: which stores have low sales but suspiciously high KPI — a flag for performance reviews.',
    image: 'projects/sales-kpi.svg',
    initial: 'C',
    tags: ['Data joining', 'Cross-analytics', 'JavaScript'],
    links: { live: '', github: '', caseStudy: '' }
  },
  {
    title: 'Bills Dashboard',
    summary: 'Heatmap of bills × hour × weekday plus a cash deposit calculator, built from raw payment receipt files. FastAPI backend + static frontend.',
    image: 'projects/bills-heatmap.svg',
    initial: 'B',
    tags: ['Python', 'FastAPI', 'Heatmap', 'JS'],
    links: { live: '', github: '', caseStudy: '' }
  },
  {
    title: 'Quy Định Shop PPTX Redesign',
    summary: 'Tool that extracts a company policy PowerPoint, reviews it as Markdown, then rebuilds a more polished version with pptxgenjs — using official Hasaki brand assets.',
    image: 'projects/pptx-redesign.svg',
    initial: 'Q',
    tags: ['pptxgenjs', 'Node.js', 'Branding', 'Automation'],
    links: { live: '', github: '', caseStudy: '' }
  },
  {
    title: 'Vivi Soul Landing Page',
    summary: 'Dark cinematic landing page for an AI music YouTube channel. Data-driven track cards rendered via JavaScript, fully responsive, deployed to GitHub Pages.',
    image: 'projects/vivi-soul.svg',
    initial: 'V',
    tags: ['HTML', 'CSS', 'JS', 'GitHub Pages'],
    links: {
      live: 'https://denis-pham.github.io/vivi-soul/',
      github: 'https://github.com/Denis-Pham/vivi-soul',
      caseStudy: ''
    }
  }
];

// ---------- 4) EDUCATION ----------
const education = [
  {
    school: 'University of Social Sciences and Humanities (USSH — VNU-HCM)',
    degree: 'Bachelor of Arts — English Language',
    year: '2020 — 2023'
  },
  {
    school: 'Ho Chi Minh City University of Technology (HCMUT — Bách Khoa)',
    degree: 'Bachelor of Engineering — Industrial Management · Quality management focus (7 QC tools, JIT, Lean)',
    year: '2008 — 2013'
  },
  {
    school: 'Certification',
    degree: 'Quality Auditor — Controller (QA/QC)',
    year: '2016'
  },
  {
    school: 'Certification',
    degree: 'Six Sigma Green Belt',
    year: '2012'
  }
];

// ===========================================
// RENDER FUNCTIONS — no need to edit below
// ===========================================

// Transforms **text** into <strong class="metric">text</strong>
// so numbers in experience bullets render in accent color.
function highlight(text) {
  return text.replace(/\*\*([^*]+)\*\*/g, '<strong class="metric">$1</strong>');
}

// ---------- colored tech tags ----------
// Known technologies get their signature color (Excel = green, Python = blue…);
// anything else gets a stable color from a soft 5-color rotation, so the same
// tag is always the same color everywhere on the page.
const TAG_COLORS = {
  'excel':             ['#dcfce7', '#15803d'],
  'python':            ['#dbeafe', '#1d4ed8'],
  'sql':               ['#ccfbf1', '#0f766e'],
  'javascript':        ['#fef3c7', '#b45309'],
  'js':                ['#fef3c7', '#b45309'],
  'html':              ['#ffedd5', '#c2410c'],
  'css':               ['#dbeafe', '#1d4ed8'],
  'chart.js':          ['#ede9fe', '#6d28d9'],
  'fastapi':           ['#ccfbf1', '#0f766e'],
  'pptxgenjs':         ['#ffedd5', '#c2410c'],
  'node.js':           ['#dcfce7', '#15803d'],
  'automation':        ['#ede9fe', '#6d28d9'],
  'anomaly detection': ['#fee2e2', '#b91c1c'],
  'github pages':      ['#f3e8ff', '#7e22ce']
};
const TAG_FALLBACK = [
  ['#dbeafe', '#1d4ed8'], ['#ede9fe', '#6d28d9'], ['#ccfbf1', '#0f766e'],
  ['#fef3c7', '#b45309'], ['#fce7f3', '#be185d']
];
function tagHTML(name) {
  const key = name.toLowerCase();
  let pair = TAG_COLORS[key];
  if (!pair) {
    let h = 0;
    for (let i = 0; i < key.length; i++) h = (h + key.charCodeAt(i) * 7) % 997;
    pair = TAG_FALLBACK[h % TAG_FALLBACK.length];
  }
  return `<span class="tag" style="background:${pair[0]};color:${pair[1]};border-color:transparent">${name}</span>`;
}

function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;
  grid.innerHTML = skills.map(s => `
    <div class="skill-card">
      <div class="skill-icon">${s.icon}</div>
      <h3>${s.category}</h3>
      <ul>${s.items.map(i => `<li>${i}</li>`).join('')}</ul>
    </div>
  `).join('');
}

function renderTimeline() {
  const timeline = document.getElementById('timeline');
  if (!timeline) return;
  timeline.innerHTML = experience.map(job => `
    <div class="timeline-item">
      <p class="period">${job.period}</p>
      <h3>${job.role}</h3>
      <p class="company">${job.company}</p>
      <ul>${job.bullets.map(b => `<li>${highlight(b)}</li>`).join('')}</ul>
    </div>
  `).join('');
}

function renderProjectActions(p) {
  const buttons = [];
  if (p.links.live)      buttons.push(`<a class="btn-link" href="${p.links.live}" target="_blank" rel="noopener noreferrer">Live demo →</a>`);
  if (p.links.github)    buttons.push(`<a class="btn-link" href="${p.links.github}" target="_blank" rel="noopener noreferrer">GitHub →</a>`);
  if (p.links.caseStudy) buttons.push(`<a class="btn-link" href="${p.links.caseStudy}">Case study →</a>`);
  return buttons.join('');
}

function renderFeaturedProject() {
  const container = document.getElementById('featured-project-card');
  if (!container) return;
  const p = projects[0];
  const thumb = p.image
    ? `<img src="${p.image}" alt="${p.title}" loading="lazy">`
    : p.initial;

  // Render metrics row if the project has one
  const metricsHTML = p.metrics ? `
    <div class="featured-metrics">
      ${p.metrics.map(m => `
        <div class="metric-block">
          <div class="metric-value">${m.value}</div>
          <div class="metric-label">${m.label}</div>
        </div>
      `).join('')}
    </div>
  ` : '';

  container.innerHTML = `
    <div class="featured-project-thumb">${thumb}</div>
    <div class="featured-project-content">
      <h3>${p.title}</h3>
      <p>${p.summary}</p>
      ${metricsHTML}
      <div class="tags">${p.tags.map(tagHTML).join('')}</div>
      <div class="actions">${renderProjectActions(p)}</div>
    </div>
  `;
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = projects.slice(1).map(p => {
    const thumb = p.image
      ? `<img src="${p.image}" alt="${p.title}" loading="lazy">`
      : p.initial;
    return `
      <div class="project-card">
        <div class="project-thumb">${thumb}</div>
        <div class="project-body">
          <h3>${p.title}</h3>
          <p>${p.summary}</p>
          <div class="tags">${p.tags.map(tagHTML).join('')}</div>
          ${renderProjectActions(p) ? `<div class="actions">${renderProjectActions(p)}</div>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function renderEducation() {
  const list = document.getElementById('education-list');
  if (!list) return;
  list.innerHTML = education.map(e => `
    <div class="education-item">
      <div>
        <div class="school">${e.school}</div>
        <div class="degree">${e.degree}</div>
      </div>
      <div class="year">${e.year}</div>
    </div>
  `).join('');
}

// Auto-update footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

renderSkills();
renderTimeline();
renderFeaturedProject();
renderProjects();
renderEducation();
