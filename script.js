// ===========================================
// PERSONAL PORTFOLIO — Data + render
// All your content lives in the 4 arrays below.
// Edit them to update the page. No HTML editing
// needed for the data-driven sections.
//
// Look for [TODO] tags — these are placeholders
// you need to fill with your real info.
// ===========================================

// ---------- i18n (EN/VI) ----------
// Translatable strings are { en: '...', vi: '...' } objects; t() picks the
// current language. Plain strings (tool names, dates, titles) pass through.
// Switching language stores the choice and reloads — scroll-fx splits
// headings into spans at load, so a clean reload beats live re-rendering.
const LANG = localStorage.getItem('lang') === 'vi' ? 'vi' : 'en';
document.documentElement.lang = LANG;
const t = v => (v && typeof v === 'object' && !Array.isArray(v)) ? v[LANG] : v;

// ---------- 1) SKILLS (grouped by category) ----------
const skills = [
  {
    icon: '⚙️',
    category: { en: 'Operations & Performance Systems', vi: 'Hệ thống vận hành & Performance' },
    items: [
      { en: 'End-to-end performance loop: SOP → task workflow → KPI scoring',
        vi: 'Vòng lặp performance trọn gói: SOP → task workflow → chấm KPI' },
      { en: 'SOP authoring & rollout for retail store operations',
        vi: 'Soạn & triển khai SOP vận hành cho cửa hàng bán lẻ' },
      { en: 'Task workflow design, assignment & tracking per store',
        vi: 'Thiết kế task workflow, giao việc & theo dõi từng cửa hàng' },
      { en: 'KPI framework design for store-staff performance reviews',
        vi: 'Thiết kế khung KPI đánh giá hiệu suất nhân viên cửa hàng' }
    ]
  },
  {
    icon: '📊',
    category: { en: 'Data Analysis', vi: 'Phân tích dữ liệu' },
    items: [
      { en: 'Excel (advanced — pivots, Power Query, complex formulas)',
        vi: 'Excel (nâng cao — pivot, Power Query, công thức phức tạp)' },
      'SQL',
      'Python (pandas, openpyxl)',
      { en: 'KPI design & store-level performance metrics',
        vi: 'Thiết kế KPI & chỉ số hiệu suất cấp cửa hàng' }
    ]
  },
  {
    icon: '📈',
    category: { en: 'Dashboards & Reporting', vi: 'Dashboard & Báo cáo' },
    items: [
      { en: 'Monthly KPI dashboards (300+ retail stores)',
        vi: 'Dashboard KPI hằng tháng (300+ cửa hàng)' },
      { en: 'Anomaly detection / system-error flagging',
        vi: 'Phát hiện bất thường / cảnh báo lỗi hệ thống' },
      { en: 'Combined sales × KPI cross-analytics',
        vi: 'Phân tích chéo doanh số × KPI' },
      { en: 'Heatmap visualizations (Chart.js)',
        vi: 'Trực quan hóa heatmap (Chart.js)' }
    ]
  },
  {
    icon: '🛠',
    category: { en: 'Tools & Workflow', vi: 'Công cụ & Workflow' },
    items: [
      { en: 'Claude Code (daily — building internal tools)',
        vi: 'Claude Code (hằng ngày — xây tool nội bộ)' },
      'Git / GitHub',
      { en: 'pptxgenjs (PowerPoint automation)',
        vi: 'pptxgenjs (tự động hóa PowerPoint)' },
      { en: 'FastAPI (Python web APIs)',
        vi: 'FastAPI (web API bằng Python)' }
    ]
  },
  {
    icon: '✅',
    category: { en: 'Quality & Process Management', vi: 'Quản lý chất lượng & quy trình' },
    items: [
      { en: 'Six Sigma Green Belt — 7 QC tools, Lean, JIT',
        vi: 'Six Sigma Green Belt — 7 công cụ QC, Lean, JIT' },
      { en: 'Root-cause analysis (5 Whys, 8D, fishbone, 4M change)',
        vi: 'Phân tích nguyên nhân gốc (5 Whys, 8D, xương cá, 4M)' },
      { en: 'Internal audit planning & execution',
        vi: 'Lập kế hoạch & thực hiện audit nội bộ' },
      { en: 'Quality document systems & non-conformity resolution',
        vi: 'Hệ thống tài liệu chất lượng & xử lý điểm không phù hợp' }
    ]
  },
  {
    icon: '🌐',
    category: { en: 'Web (learning)', vi: 'Web (đang học)' },
    items: [
      'HTML / CSS / JavaScript',
      { en: 'Responsive design (mobile-first)',
        vi: 'Thiết kế responsive (ưu tiên mobile)' },
      { en: 'Static site deployment (GitHub Pages)',
        vi: 'Deploy site tĩnh (GitHub Pages)' },
      { en: 'Brand-consistent design systems',
        vi: 'Hệ thống thiết kế nhất quán thương hiệu' }
    ]
  }
];

// ---------- 2) EXPERIENCE (newest first) ----------
const experience = [
  {
    period: 'Aug 2023 — Present',
    role: 'Operations Performance Specialist',
    company: 'Hasaki.vn · Ho Chi Minh City',
    // brand = monogram badge in the timeline, painted with the company's real brand color.
    // Swap to a real logo file later by adding brand.logo = 'logos/<file>.png' (renderer prefers it).
    brand: { mark: 'H', color: '#2e7d52' },
    bullets: [
      // Wrap numbers/key metrics in **double asterisks** — they render in accent color
      { en: 'Own the end-to-end performance system for the Cosmetics division: **SOP design → task workflows → KPI scoring** for **300+** retail stores',
        vi: 'Làm chủ toàn bộ hệ thống performance của khối Cosmetics: **thiết kế SOP → task workflow → chấm KPI** cho **300+** cửa hàng bán lẻ' },
      { en: 'Author operating SOPs for store teams and convert them into daily task workflows assigned and tracked per store',
        vi: 'Soạn SOP vận hành cho đội cửa hàng và chuyển thành task workflow hằng ngày, giao việc & theo dõi theo từng cửa hàng' },
      { en: 'Designed the KPI framework that scores store staff against those workflows — the numbers behind monthly performance reviews',
        vi: 'Thiết kế khung KPI chấm điểm nhân viên cửa hàng theo chính các workflow đó — con số đứng sau đánh giá hiệu suất hằng tháng' },
      { en: 'Built the Hasaki KPI System end-to-end — raw Excel files → automated calculation → automated recording → monthly dashboard covering **300+** stores, **50+ KPIs** and **100+** data fields',
        vi: 'Xây Hasaki KPI System trọn gói — file Excel thô → tính toán tự động → ghi nhận tự động → dashboard hằng tháng phủ **300+** cửa hàng, **50+ KPI** và **100+** trường dữ liệu' },
      { en: 'Took KPI tracking from **5-day** Excel calculation runs to a **live, realtime** KPI view — and cut monthly report preparation from **3 days** to **~30 minutes**',
        vi: 'Đưa KPI từ **5 ngày** chạy Excel thành màn hình KPI **live, realtime** — và rút thời gian làm báo cáo tháng từ **3 ngày** xuống **~30 phút**' },
      { en: 'Created combined sales × KPI cross-analytics and anomaly-detection logic flagging underperforming stores and suspected system errors',
        vi: 'Tạo phân tích chéo doanh số × KPI và logic phát hiện bất thường, cảnh báo cửa hàng kém hiệu suất và nghi vấn lỗi hệ thống' },
      { en: 'Authored an automated PowerPoint redesign pipeline (pptxgenjs) for **5+** company policy documents',
        vi: 'Viết pipeline tự động redesign PowerPoint (pptxgenjs) cho **5+** tài liệu quy định công ty' }
    ]
  },
  {
    period: 'Nov 2021 — Jan 2023',
    role: 'Project Manager',
    company: 'SIPHER · Ho Chi Minh City',
    brand: { mark: 'S', color: '#1c1a33' },
    bullets: [
      { en: 'Defined project scope, goals and deliverables with Animation & VFX leads; built and maintained project plans, timelines and budgets',
        vi: 'Xác định phạm vi, mục tiêu và sản phẩm bàn giao cùng các lead Animation & VFX; xây dựng và duy trì kế hoạch, timeline và ngân sách dự án' },
      { en: 'Managed outsourced vendors end-to-end — contract signing, cost and delivery negotiation, and production progress tracking to keep assets on schedule',
        vi: 'Quản lý vendor thuê ngoài trọn gói — ký hợp đồng, đàm phán chi phí & tiến độ giao, theo dõi sản xuất để asset đúng hạn' },
      { en: 'Ran cross-department communication: status, progress and risk reporting, project documentation, meetings, agendas and follow-up on decisions',
        vi: 'Vận hành giao tiếp liên phòng ban: báo cáo trạng thái, tiến độ & rủi ro, tài liệu dự án, họp hành, agenda và theo dõi quyết định' }
    ]
  },
  {
    period: 'Nov 2019 — Nov 2021',
    role: 'Quality Assurance Engineer',
    company: 'Allied Technologies · Ho Chi Minh City',
    brand: { mark: 'A', color: '#1e5aa8' },
    bullets: [
      { en: 'Led root-cause investigations of product defects and customer complaints using **5 Whys, 8D, fishbone and 4M-change** analysis',
        vi: 'Dẫn dắt điều tra nguyên nhân gốc lỗi sản phẩm và khiếu nại khách hàng bằng **5 Whys, 8D, xương cá và phân tích thay đổi 4M**' },
      { en: 'Identified manufacturing-process risks, analyzed data trends and implemented preventive measures to minimize defects',
        vi: 'Nhận diện rủi ro quy trình sản xuất, phân tích xu hướng dữ liệu và triển khai biện pháp phòng ngừa giảm thiểu lỗi' },
      { en: 'Prepared monthly in-house quality reports and customer-facing quality documentation (Shipment Approval, RoHS, inspection documents)',
        vi: 'Lập báo cáo chất lượng nội bộ hằng tháng và tài liệu chất lượng cho khách hàng (Shipment Approval, RoHS, tài liệu kiểm tra)' },
      { en: 'Planned QC manpower per production line with HR and line managers to keep quality coverage fully staffed',
        vi: 'Hoạch định nhân lực QC theo từng line sản xuất cùng HR và quản lý line để phủ kín kiểm soát chất lượng' }
    ]
  },
  {
    period: 'Apr 2019 — Oct 2019',
    role: 'Quality Assurance Inspector',
    company: 'VinMart+ (VinCommerce) · Vietnam',
    brand: { mark: 'V', color: '#d8232a' },
    bullets: [
      { en: 'Inspected stores against checklists covering hygiene, goods display, brand identity, service quality and process compliance',
        vi: 'Kiểm tra cửa hàng theo checklist: vệ sinh, trưng bày hàng hóa, nhận diện thương hiệu, chất lượng dịch vụ và tuân thủ quy trình' },
      { en: 'Supported stores on food-safety and hygiene incidents — direct inspection, complaint handling and removal of non-compliant products',
        vi: 'Hỗ trợ cửa hàng về sự cố an toàn thực phẩm & vệ sinh — kiểm tra trực tiếp, xử lý khiếu nại và loại bỏ sản phẩm không đạt' },
      { en: 'Ran probability-based inventory audits (**10–20** item codes per visit) and appraised inventory-difference explanations',
        vi: 'Kiểm kê xác suất tồn kho (**10–20** mã hàng mỗi lượt) và thẩm định giải trình chênh lệch tồn kho' },
      { en: 'Investigated fraud, loss and theft cases; signed off construction and equipment acceptance for newly opened stores; managed store camera-system operations',
        vi: 'Điều tra gian lận, thất thoát, trộm cắp; nghiệm thu xây dựng & thiết bị cho cửa hàng mới; quản lý vận hành hệ thống camera' }
    ]
  },
  {
    period: 'Mar 2017 — Apr 2019',
    role: 'Quality Assurance Leader',
    company: 'FPT Academic International · Ho Chi Minh City',
    brand: { mark: 'F', color: '#f37021' },
    bullets: [
      { en: 'Implemented the university-wide **KPI plan** for quality data collection and monitored alignment on the **BSC strategy system**',
        vi: 'Triển khai **kế hoạch KPI** toàn trường cho thu thập dữ liệu chất lượng và giám sát bám sát **hệ thống chiến lược BSC**' },
      { en: 'Built the annual internal-audit plan, assigned and led the QA team, and reported audit results and countermeasures to directors',
        vi: 'Xây kế hoạch audit nội bộ hằng năm, phân công & dẫn dắt team QA, báo cáo kết quả audit và biện pháp khắc phục lên ban giám đốc' },
      { en: 'Owned the quality-document system end-to-end: evaluation, non-conformity resolution, releases and cross-department rollout',
        vi: 'Làm chủ hệ thống tài liệu chất lượng trọn gói: đánh giá, xử lý điểm không phù hợp, ban hành và triển khai liên phòng ban' },
      { en: 'Contributed to drafting company decisions, coordinated their release with the clerical department and monitored implementation',
        vi: 'Tham gia soạn thảo quyết định công ty, phối hợp văn thư ban hành và giám sát thực hiện' }
    ]
  },
  {
    period: 'Nov 2015 — Nov 2016',
    role: 'Quality Control Inspector',
    company: 'KIMDUC Co., Ltd · Ho Chi Minh City',
    brand: { mark: 'K', color: '#0e7490' },
    bullets: [
      { en: 'Inspected raw materials (PP fabrics, films, threads, straps) and semi-finished goods across spinning, weaving, cutting and coating stages',
        vi: 'Kiểm tra nguyên liệu (vải PP, màng, chỉ, dây đai) và bán thành phẩm qua các công đoạn kéo sợi, dệt, cắt, tráng phủ' },
      { en: 'Reported material and work-in-progress quality to management; partnered with purchasing and production to resolve quality issues',
        vi: 'Báo cáo chất lượng nguyên liệu & bán thành phẩm cho quản lý; phối hợp thu mua và sản xuất xử lý vấn đề chất lượng' }
    ]
  }
];

// ---------- 3) PROJECTS (first item = Featured) ----------
const projects = [
  {
    title: 'Hasaki KPI System',
    summary: {
      en: 'End-to-end KPI system for 300+ cosmetics retail stores — from raw Excel files through automated calculation and automated recording to an interactive monthly dashboard. Tracks 50+ KPIs across 100+ data fields and flags anomalies (negative KPIs, formula source mismatches). Took KPIs from 5-day Excel runs to live realtime, and monthly reports from 3 days to ~30 minutes.',
      vi: 'Hệ thống KPI trọn gói cho 300+ cửa hàng mỹ phẩm — từ file Excel thô qua tính toán & ghi nhận tự động đến dashboard tương tác hằng tháng. Theo dõi 50+ KPI trên 100+ trường dữ liệu, cảnh báo bất thường (KPI âm, lệch nguồn công thức). Đưa KPI từ 5 ngày chạy Excel thành realtime, báo cáo tháng từ 3 ngày xuống ~30 phút.'
    },
    image: 'projects/kpi-dashboard.svg',
    initial: 'K',
    tags: ['Excel', 'JavaScript', 'Chart.js', 'Automation', 'Anomaly detection'],
    // metrics show as 3 stat boxes on the Featured Project card. Only added to projects[0].
    // `was` renders as a struck-through old value above the new one — before/after at a glance
    metrics: [
      { was: { en: '5 days', vi: '5 ngày' }, value: 'live',
        label: { en: 'KPI refresh (was Excel batch)', vi: 'Cập nhật KPI (trước: chạy Excel)' } },
      { was: { en: '3 days', vi: '3 ngày' }, value: { en: '30 min', vi: '30 phút' },
        label: { en: 'To build the monthly report', vi: 'Thời gian làm báo cáo tháng' } },
      { value: '50+ KPIs', label: { en: 'Across 100+ data fields', vi: 'Trên 100+ trường dữ liệu' } }
    ],
    links: { live: '', github: '', caseStudy: '' }
  },
  {
    title: 'Combined Sales × KPI Dashboard',
    summary: {
      en: 'Joins two separate dashboards (Sales + KPI) to surface a key insight: which stores have low sales but suspiciously high KPI — a flag for performance reviews.',
      vi: 'Ghép hai dashboard riêng (Doanh số + KPI) để lộ ra insight then chốt: cửa hàng nào doanh số thấp nhưng KPI cao bất thường — cờ đỏ cho kỳ đánh giá hiệu suất.'
    },
    image: 'projects/sales-kpi.svg',
    initial: 'C',
    tags: ['Data joining', 'Cross-analytics', 'JavaScript'],
    links: { live: '', github: '', caseStudy: '' }
  },
  {
    title: 'Bills Dashboard',
    summary: {
      en: 'Heatmap of bills × hour × weekday plus a cash deposit calculator, built from raw payment receipt files. FastAPI backend + static frontend.',
      vi: 'Heatmap hóa đơn × giờ × thứ trong tuần kèm máy tính nộp tiền mặt, xây từ file phiếu thu thô. Backend FastAPI + frontend tĩnh.'
    },
    image: 'projects/bills-heatmap.svg',
    initial: 'B',
    tags: ['Python', 'FastAPI', 'Heatmap', 'JS'],
    links: { live: '', github: '', caseStudy: '' }
  },
  {
    title: 'Quy Định Shop PPTX Redesign',
    summary: {
      en: 'Tool that extracts a company policy PowerPoint, reviews it as Markdown, then rebuilds a more polished version with pptxgenjs — using official Hasaki brand assets.',
      vi: 'Tool bóc tách PowerPoint quy định công ty, review dưới dạng Markdown, rồi dựng lại bản chỉn chu hơn bằng pptxgenjs — dùng bộ nhận diện thương hiệu chính thức của Hasaki.'
    },
    image: 'projects/pptx-redesign.svg',
    initial: 'Q',
    tags: ['pptxgenjs', 'Node.js', 'Branding', 'Automation'],
    links: { live: '', github: '', caseStudy: '' }
  },
  {
    title: 'Vivi Soul Landing Page',
    summary: {
      en: 'Dark cinematic landing page for an AI music YouTube channel. Data-driven track cards rendered via JavaScript, fully responsive, deployed to GitHub Pages.',
      vi: 'Landing page tối màu điện ảnh cho kênh YouTube nhạc AI. Card bài hát render từ dữ liệu bằng JavaScript, responsive hoàn chỉnh, deploy lên GitHub Pages.'
    },
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
    school: { en: 'University of Social Sciences and Humanities (USSH — VNU-HCM)',
              vi: 'ĐH Khoa học Xã hội & Nhân văn (USSH — ĐHQG TP.HCM)' },
    degree: { en: 'Bachelor of Arts — English Language', vi: 'Cử nhân — Ngôn ngữ Anh' },
    year: '2020 — 2023'
  },
  {
    school: { en: 'Ho Chi Minh City University of Technology (HCMUT — Bách Khoa)',
              vi: 'ĐH Bách Khoa TP.HCM (HCMUT)' },
    degree: { en: 'Bachelor of Engineering — Industrial Management · Quality management focus (7 QC tools, JIT, Lean)',
              vi: 'Kỹ sư — Quản lý Công nghiệp · Chuyên sâu quản lý chất lượng (7 công cụ QC, JIT, Lean)' },
    year: '2008 — 2013'
  },
  {
    school: { en: 'Certification', vi: 'Chứng chỉ' },
    degree: { en: 'Quality Auditor — Controller (QA/QC)', vi: 'Quality Auditor — Controller (QA/QC)' },
    year: '2016'
  },
  {
    school: { en: 'Certification', vi: 'Chứng chỉ' },
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
      <h3>${t(s.category)}</h3>
      <ul>${s.items.map(i => `<li>${t(i)}</li>`).join('')}</ul>
    </div>
  `).join('');
}

// Company badge: real logo file if provided (brand.logo), else a monogram in the brand color
function brandBadgeHTML(brand) {
  if (!brand) return '';
  if (brand.logo) return `<img class="co-badge" src="${brand.logo}" alt="" loading="lazy">`;
  return `<span class="co-badge" style="background:${brand.color}">${brand.mark}</span>`;
}

function renderTimeline() {
  const timeline = document.getElementById('timeline');
  if (!timeline) return;
  timeline.innerHTML = experience.map(job => `
    <div class="timeline-item">
      <p class="period">${job.period}</p>
      <h3>${job.role}</h3>
      <p class="company">${brandBadgeHTML(job.brand)}${job.company}</p>
      <ul>${job.bullets.map(b => `<li>${highlight(t(b))}</li>`).join('')}</ul>
    </div>
  `).join('');
}

function renderProjectActions(p) {
  const buttons = [];
  if (p.links.live)      buttons.push(`<a class="btn-link" href="${p.links.live}" target="_blank" rel="noopener noreferrer">${t({ en: 'Live demo', vi: 'Xem demo' })} →</a>`);
  if (p.links.github)    buttons.push(`<a class="btn-link" href="${p.links.github}" target="_blank" rel="noopener noreferrer">GitHub →</a>`);
  if (p.links.caseStudy) buttons.push(`<a class="btn-link" href="${p.links.caseStudy}">${t({ en: 'Case study', vi: 'Case study' })} →</a>`);
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
          <div class="metric-value">${m.was ? `<s class="was">${t(m.was)}</s>` : ''}${t(m.value)}</div>
          <div class="metric-label">${t(m.label)}</div>
        </div>
      `).join('')}
    </div>
  ` : '';

  container.innerHTML = `
    <div class="featured-project-thumb">${thumb}</div>
    <div class="featured-project-content">
      <h3>${p.title}</h3>
      <p>${t(p.summary)}</p>
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
          <p>${t(p.summary)}</p>
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
        <div class="school">${t(e.school)}</div>
        <div class="degree">${t(e.degree)}</div>
      </div>
      <div class="year">${e.year}</div>
    </div>
  `).join('');
}

// ---------- i18n: static page chrome (selector → translation) ----------
// `html: true` entries may contain markup (strong/spans); the rest set textContent.
const UI_I18N = [
  // top nav labels
  { sel: 'nav.links a[href="#about"]',      en: 'About',      vi: 'Giới thiệu' },
  { sel: 'nav.links a[href="#skills"]',     en: 'Skills',     vi: 'Kỹ năng' },
  { sel: 'nav.links a[href="#experience"]', en: 'Experience', vi: 'Kinh nghiệm' },
  { sel: 'nav.links a[href="#projects"]',   en: 'Projects',   vi: 'Dự án' },
  { sel: 'nav.links a[href="#education"]',  en: 'Education',  vi: 'Học vấn' },
  { sel: 'nav.links a[href="#contact"]',    en: 'Contact',    vi: 'Liên hệ' },
  // dot-nav hover tooltips (attribute, not text)
  { sel: '.dot-nav a[href="#about"]',      attr: 'data-label', en: 'About',      vi: 'Giới thiệu' },
  { sel: '.dot-nav a[href="#skills"]',     attr: 'data-label', en: 'Skills',     vi: 'Kỹ năng' },
  { sel: '.dot-nav a[href="#experience"]', attr: 'data-label', en: 'Experience', vi: 'Kinh nghiệm' },
  { sel: '.dot-nav a[href="#projects"]',   attr: 'data-label', en: 'Projects',   vi: 'Dự án' },
  { sel: '.dot-nav a[href="#education"]',  attr: 'data-label', en: 'Education',  vi: 'Học vấn' },
  { sel: '.dot-nav a[href="#contact"]',    attr: 'data-label', en: 'Contact',    vi: 'Liên hệ' },
  // hero
  { sel: '.hero .eyebrow', en: 'Open to new opportunities', vi: 'Sẵn sàng cho cơ hội mới' },
  { sel: '.hero .tagline', html: true,
    en: 'I design how <strong>300+ stores</strong> run — then build the systems that measure it. <strong>SOP → daily tasks → KPI scoring</strong>: one loop, one owner.',
    vi: 'Tôi thiết kế cách <strong>300+ cửa hàng</strong> vận hành — rồi tự xây hệ thống đo lường nó. <strong>SOP → task hằng ngày → chấm KPI</strong>: một vòng lặp, một người làm chủ.' },
  { sel: '.hero .cta .btn-primary',   en: 'Get in touch →', vi: 'Liên hệ ngay →' },
  { sel: '.hero .cta .btn-secondary', en: 'Download CV (PDF)', vi: 'Tải CV (PDF)' },
  { sel: '.hero-meta .meta-item:nth-child(1)', html: true, en: '📍 <strong>Ho Chi Minh City</strong>', vi: '📍 <strong>TP. Hồ Chí Minh</strong>' },
  { sel: '.hero-meta .meta-item:nth-child(3)', html: true,
    en: '⏱ <strong>10+ years</strong> in quality, operations &amp; performance',
    vi: '⏱ <strong>10+ năm</strong> trong quality, vận hành &amp; performance' },
  { sel: '.hero-stats .stat:nth-child(1) .stat-label', en: 'Retail stores tracked', vi: 'Cửa hàng đang theo dõi' },
  { sel: '.hero-stats .stat:nth-child(2) .stat-value .was', en: '5 days', vi: '5 ngày' },
  { sel: '.hero-stats .stat:nth-child(2) .stat-label', en: 'KPI refresh — Excel batch → realtime', vi: 'Cập nhật KPI — Excel → realtime' },
  { sel: '.hero-stats .stat:nth-child(3) .stat-value .was', en: '3 days', vi: '3 ngày' },
  { sel: '.hero-stats .stat:nth-child(3) .stat-value .unit', en: ' min', vi: ' phút' },
  { sel: '.hero-stats .stat:nth-child(3) .stat-label', en: 'To build the monthly report', vi: 'Thời gian làm báo cáo tháng' },
  { sel: '.hero-stats .stat:nth-child(4) .stat-label', en: 'Internal tools shipped', vi: 'Tool nội bộ đã xây' },
  { sel: '.hero-tech .label', en: 'Daily tech stack', vi: 'Tech stack hằng ngày' },
  // about
  { sel: '#about .section-kicker', en: 'About', vi: 'Giới thiệu' },
  { sel: '#about h2', en: 'Numbers tell stories. I help people listen.', vi: 'Những con số biết kể chuyện. Tôi giúp mọi người lắng nghe.' },
  { sel: '#about .section-lede',
    en: 'Ten years in quality and operations, one obsession: turning messy reality into numbers people can act on.',
    vi: 'Mười năm trong quality và vận hành, một đam mê: biến thực tế ngổn ngang thành những con số hành động được.' },
  { sel: '.loop-card .loop-label', en: 'The loop I own', vi: 'Vòng lặp tôi làm chủ' },
  // loop-card children: label(1) step(2) link(3) step(4) link(5) step(6) return(7) — use nth-child
  { sel: '.loop-card .loop-step:nth-child(2) strong', en: 'Write the SOP', vi: 'Viết SOP' },
  { sel: '.loop-card .loop-step:nth-child(2) small', en: 'the standards stores run on', vi: 'chuẩn vận hành của cửa hàng' },
  { sel: '.loop-card .loop-step:nth-child(4) strong', en: 'Dispatch the tasks', vi: 'Bắn task' },
  { sel: '.loop-card .loop-step:nth-child(4) small', en: 'daily work, assigned & tracked', vi: 'việc hằng ngày, giao & theo dõi' },
  { sel: '.loop-card .loop-step:nth-child(6) strong', en: 'Score the KPI', vi: 'Chấm KPI' },
  { sel: '.loop-card .loop-step:nth-child(6) small', en: 'realtime, across 300+ stores', vi: 'realtime, trên 300+ cửa hàng' },
  { sel: '.loop-card .loop-return', en: '↻ scores sharpen the next SOP', vi: '↻ điểm số mài sắc SOP kế tiếp' },
  { sel: '.about-text p:nth-of-type(1)', html: true,
    en: 'I run the performance system for Hasaki Vietnam\'s Cosmetics division, end to end: I <span class="hl">write the SOPs</span> that define how stores operate, turn them into daily task workflows, then measure the results with the <span class="hl">KPI framework I designed</span> — the same numbers that drive monthly performance reviews. One owner for the whole loop means the standards, the tasks, and the scores always agree with each other.',
    vi: 'Tôi vận hành hệ thống performance của khối Cosmetics Hasaki Việt Nam, từ đầu tới cuối: tôi <span class="hl">viết SOP</span> định nghĩa cách cửa hàng vận hành, chuyển thành task workflow hằng ngày, rồi đo kết quả bằng <span class="hl">khung KPI tôi thiết kế</span> — chính những con số đứng sau đánh giá hiệu suất hằng tháng. Một người làm chủ cả vòng lặp nghĩa là chuẩn mực, công việc và điểm số luôn khớp nhau.' },
  { sel: '.about-text p:nth-of-type(2)', html: true,
    en: 'That system thinking comes from <span class="hl">six years of QA/QC</span> across manufacturing, retail and education, then project management at a game studio before moving into retail performance. My toolbox: Excel (deeply), Python pandas, and <span class="hl">Claude Code</span> for shipping internal tools in a single sitting.',
    vi: 'Tư duy hệ thống đó đến từ <span class="hl">sáu năm QA/QC</span> qua sản xuất, bán lẻ và giáo dục, rồi quản lý dự án ở studio game trước khi chuyển sang retail performance. Bộ đồ nghề: Excel (chuyên sâu), Python pandas, và <span class="hl">Claude Code</span> để xây tool nội bộ trong một buổi.' },
  // section headers
  { sel: '#skills .section-kicker', en: 'Skills', vi: 'Kỹ năng' },
  { sel: '#skills h2', en: 'What I bring', vi: 'Tôi mang lại gì' },
  { sel: '#skills .section-lede', en: 'Tools and techniques I use day-to-day, organized by area.', vi: 'Công cụ và kỹ thuật dùng hằng ngày, sắp xếp theo mảng.' },
  { sel: '#experience .section-kicker', en: 'Experience', vi: 'Kinh nghiệm' },
  { sel: '#experience h2', en: "Where I've worked", vi: 'Nơi tôi đã làm việc' },
  { sel: '#experience .section-lede',
    en: "A decade across quality systems, project management and retail operations — now running the performance system for Hasaki's Cosmetics division.",
    vi: 'Một thập kỷ qua hệ thống chất lượng, quản lý dự án và vận hành bán lẻ — hiện vận hành hệ thống performance cho khối Cosmetics của Hasaki.' },
  { sel: '#featured-project .section-kicker', en: 'Featured Project', vi: 'Dự án nổi bật' },
  { sel: '#featured-project h2', en: "The work I'm proudest of right now", vi: 'Sản phẩm tôi tự hào nhất hiện tại' },
  { sel: '#projects .section-kicker', en: 'Projects', vi: 'Dự án' },
  { sel: '#projects h2', en: 'Selected work', vi: 'Dự án chọn lọc' },
  { sel: '#projects .section-lede', en: 'Internal tools, dashboards, and side projects.', vi: 'Tool nội bộ, dashboard và dự án cá nhân.' },
  { sel: '#education .section-kicker', en: 'Education', vi: 'Học vấn' },
  { sel: '#education h2', en: 'Background', vi: 'Nền tảng' },
  // contact
  { sel: '#contact .section-kicker', en: 'Contact', vi: 'Liên hệ' },
  { sel: '#contact h2', en: "Let's talk.", vi: 'Cùng trò chuyện nhé.' },
  { sel: '#contact .wrap > p:not(.section-kicker):not(.email-plain)',
    en: 'Always open to interesting analytics work, freelance projects, or just a coffee chat.',
    vi: 'Luôn sẵn lòng với công việc phân tích thú vị, dự án freelance, hay đơn giản là một buổi cà phê.' },
  { sel: '#contact .contact-buttons .btn-primary', en: 'Email me', vi: 'Gửi email cho tôi' },
  { sel: '.email-plain', html: true,
    en: 'Or write to me directly at <a href="mailto:manhduc1703@gmail.com">manhduc1703@gmail.com</a>',
    vi: 'Hoặc viết thẳng cho tôi qua <a href="mailto:manhduc1703@gmail.com">manhduc1703@gmail.com</a>' }
];

function applyUI() {
  if (LANG === 'en') return; // page ships in English; only rewrite for VI
  UI_I18N.forEach(item => {
    document.querySelectorAll(item.sel).forEach(el => {
      if (item.attr) el.setAttribute(item.attr, item.vi);
      else if (item.html) el.innerHTML = item.vi;
      else el.textContent = item.vi;
    });
  });
}

// Language toggle buttons (header + sidebar): store choice, reload clean
document.querySelectorAll('.lang-toggle button').forEach(btn => {
  btn.classList.toggle('active', btn.dataset.lang === LANG);
  btn.addEventListener('click', () => {
    if (btn.dataset.lang === LANG) return;
    localStorage.setItem('lang', btn.dataset.lang);
    location.reload();
  });
});

// Auto-update footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

applyUI();
renderSkills();
renderTimeline();
renderFeaturedProject();
renderProjects();
renderEducation();
