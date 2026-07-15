// ===========================================
// CASE STUDY — data + vanilla renderer
// Reusable template: add another entry to CASE_STUDIES keyed by slug
// and it renders at case-study.html?id=<slug>. Bilingual {en, vi}.
// Only real data; unknown fields are null → an honest "Pending
// confirmation" state renders instead of invented content.
// ===========================================

// ---------- i18n (same pattern as script.js; language switch re-renders in place —
// no GSAP on this page, so no reload is needed) ----------
const urlLang = new URLSearchParams(location.search).get('lang');
let LANG = (urlLang === 'en' || urlLang === 'vi')
  ? urlLang
  : (localStorage.getItem('lang') === 'vi' ? 'vi' : 'en');
const t = v => (v && typeof v === 'object' && !Array.isArray(v) && ('en' in v || 'vi' in v)) ? v[LANG] : v;

const CASE_STUDIES = {
  'hasaki-kpi': {
    id: 'hasaki-kpi',
    eyebrow: { en: 'Case study · Operations Performance', vi: 'Case study · Hiệu suất Vận hành' },
    title: 'Hasaki KPI System',
    subtitle: {
      en: 'Turning 300+ stores of messy field execution into a real-time performance loop — one that store teams trust and managers can act on.',
      vi: 'Biến thực thi vận hành nhiều biến động của 300+ cửa hàng thành một vòng lặp hiệu suất thời gian thực — đủ tin để đội cửa hàng chấp nhận và quản lý dựa vào để quyết định.'
    },
    image: 'projects/kpi-dashboard.svg',
    imageAlt: { en: 'The Hasaki monthly KPI dashboard', vi: 'Dashboard KPI hằng tháng của Hasaki' },

    meta: [
      { label: { en: 'Role', vi: 'Vai trò' },
        value: { en: 'Sole designer & builder — end to end', vi: 'Người thiết kế & xây dựng duy nhất — trọn gói' } },
      { label: { en: 'Timeline', vi: 'Thời gian' }, value: { en: '2023 — present', vi: '2023 — hiện tại' } },
      { label: { en: 'Scope', vi: 'Phạm vi' }, value: { en: '300+ stores · 50+ KPIs · 100+ data fields', vi: '300+ cửa hàng · 50+ KPI · 100+ trường dữ liệu' } },
      { label: { en: 'Tools', vi: 'Công cụ' }, value: 'Excel, JavaScript, Chart.js, Python' },
      { label: { en: 'Context', vi: 'Bối cảnh' }, value: { en: 'Hasaki Vietnam · Cosmetics division', vi: 'Hasaki Việt Nam · Khối Cosmetics' } },
      { label: { en: 'Team', vi: 'Đội ngũ' }, value: null } // pending confirmation — do not invent
    ],

    summary: {
      en: 'Hasaki runs 300+ cosmetics retail stores. I designed the KPI framework the division scores stores on, then built the system that produces those scores end to end: raw operational Excel → automated calculation → automated recording → an interactive monthly dashboard with anomaly flags. It replaced multi-day manual reporting with a near-real-time view that now drives monthly performance reviews.',
      vi: 'Hasaki vận hành 300+ cửa hàng mỹ phẩm. Tôi thiết kế khung KPI mà khối dùng để chấm điểm cửa hàng, rồi tự xây hệ thống tạo ra điểm số đó trọn gói: Excel vận hành thô → tính toán tự động → ghi nhận tự động → dashboard tương tác hằng tháng kèm cảnh báo bất thường. Nó thay thế báo cáo thủ công nhiều ngày bằng một góc nhìn gần thời gian thực, hiện là cơ sở cho đánh giá hiệu suất hằng tháng.'
    },

    context: {
      title: { en: 'Context', vi: 'Bối cảnh' },
      body: {
        en: [
          'The Cosmetics division measures how well each store runs — from SOP compliance to operational execution — and those scores feed real monthly performance reviews for store staff.',
          'When I took it on, the numbers lived in Excel files compiled by hand. A full refresh took about five days, so by the time anyone saw a problem the month had moved on. There was no reliable way to compare 300+ stores on the same basis, and manual compilation quietly introduced errors.'
        ],
        vi: [
          'Khối Cosmetics đo mức độ vận hành tốt của từng cửa hàng — từ tuân thủ SOP đến thực thi vận hành — và các điểm số đó phục vụ đánh giá hiệu suất hằng tháng thật cho nhân viên cửa hàng.',
          'Khi tôi tiếp nhận, dữ liệu nằm trong các file Excel tổng hợp bằng tay. Một lần cập nhật đầy đủ mất khoảng năm ngày, nên đến lúc thấy được vấn đề thì tháng đã trôi qua. Không có cách đáng tin để so sánh 300+ cửa hàng trên cùng một chuẩn, và việc tổng hợp thủ công âm thầm tạo ra sai số.'
        ]
      }
    },

    challenge: {
      title: { en: 'The challenge', vi: 'Thách thức' },
      body: {
        en: ['Measure execution across 300+ stores consistently and near-real-time — without adding manual work for store teams, and with numbers trustworthy enough to sit under a performance review.'],
        vi: ['Đo thực thi trên 300+ cửa hàng một cách nhất quán và gần thời gian thực — mà không thêm việc thủ công cho đội cửa hàng, và với số liệu đủ tin để làm cơ sở đánh giá hiệu suất.']
      }
    },

    role: {
      title: { en: 'My role', vi: 'Vai trò của tôi' },
      body: {
        en: ['I owned the whole loop — both the framework and the tool that runs it:'],
        vi: ['Tôi làm chủ toàn bộ vòng lặp — cả khung lẫn công cụ vận hành nó:']
      },
      bullets: {
        en: [
          'Designed the KPI framework: which metrics matter, how each is defined and weighted, and how a store rolls up to a single comparable score.',
          'Built the pipeline end to end: ingest, calculation, recording, and the dashboard — no dedicated dev team.',
          'Own it in production: I maintain and extend it, and it is the source of the numbers used in monthly reviews.'
        ],
        vi: [
          'Thiết kế khung KPI: chỉ số nào quan trọng, mỗi chỉ số định nghĩa và tính trọng số ra sao, và một cửa hàng gộp lại thành một điểm số so sánh được như thế nào.',
          'Xây pipeline trọn gói: nạp dữ liệu, tính toán, ghi nhận và dashboard — không có đội dev riêng.',
          'Vận hành thật: tôi duy trì và mở rộng nó, và đây là nguồn số liệu dùng trong đánh giá hằng tháng.'
        ]
      }
    },

    constraints: {
      title: { en: 'Constraints', vi: 'Ràng buộc' },
      items: {
        en: [
          'No dedicated engineering team — it had to be built and maintained by one person.',
          'Had to run on the data stores already produce; no new field data-entry burden.',
          'Practical, low-cost stack (Excel + JavaScript), deployable without heavy infrastructure.',
          'Numbers must be defensible: a store manager should be able to trace a score back to its inputs.'
        ],
        vi: [
          'Không có đội kỹ thuật riêng — phải do một người xây và duy trì.',
          'Phải chạy trên dữ liệu cửa hàng vốn đã tạo ra; không thêm gánh nặng nhập liệu tại hiện trường.',
          'Stack thực dụng, chi phí thấp (Excel + JavaScript), triển khai không cần hạ tầng nặng.',
          'Số liệu phải bảo vệ được: quản lý cửa hàng có thể truy ngược một điểm số về dữ liệu gốc.'
        ]
      }
    },

    approach: {
      title: { en: 'Approach', vi: 'Cách tiếp cận' },
      body: {
        en: [
          'I treated it as one loop, not a report: standardize the SOPs stores run on, translate them into daily tasks that get tracked, then compute KPIs from the resulting operational data and feed the scores straight back into the next cycle.',
          'The build mirrors that loop as a pipeline — raw Excel in, comparable scores out — with each stage automated so a refresh is a run, not a rebuild.'
        ],
        vi: [
          'Tôi coi đây là một vòng lặp, không phải một báo cáo: chuẩn hóa SOP mà cửa hàng vận hành, chuyển thành công việc hằng ngày được theo dõi, rồi tính KPI từ dữ liệu vận hành thu được và đưa điểm số trở lại chu kỳ tiếp theo.',
          'Bản build phản chiếu vòng lặp đó thành một pipeline — Excel thô vào, điểm số so sánh được ra — với mỗi bước được tự động hóa để một lần cập nhật là một lần chạy, không phải làm lại.'
        ]
      },
      figure: {
        src: 'projects/task-workflow-system.svg',
        alt: { en: 'SOP → daily tasks → KPI scoring loop', vi: 'Vòng lặp SOP → công việc hằng ngày → chấm KPI' },
        caption: { en: 'The operating loop: SOP → daily tasks → KPI scoring, with results feeding the next SOP.', vi: 'Vòng lặp vận hành: SOP → công việc hằng ngày → chấm KPI, kết quả nuôi lại SOP tiếp theo.' }
      }
    },

    decisions: {
      title: { en: 'Key decisions', vi: 'Quyết định then chốt' },
      items: [
        { title: { en: 'Store staff never touch a spreadsheet', vi: 'Nhân viên cửa hàng không đụng tới spreadsheet' },
          why: { en: "Field teams get a read-only dashboard, not an editable Excel file. The number they see is the number of record, so scores can't be quietly changed on the way up.", vi: 'Đội hiện trường nhận dashboard chỉ-đọc, không phải file Excel sửa được. Số họ thấy là số chính thức, nên điểm không thể bị âm thầm thay đổi trên đường đi lên.' },
          tradeoff: { en: 'more upfront work to automate the ingest instead of emailing sheets around.', vi: 'tốn công ban đầu để tự động hóa nạp dữ liệu thay vì gửi file qua email.' } },
        { title: { en: 'Automate the ingest before polishing the charts', vi: 'Tự động hóa nạp dữ liệu trước khi làm đẹp biểu đồ' },
          why: { en: 'The durable win was removing manual compilation. Once raw Excel flowed into calculation and recording automatically, a monthly refresh dropped from days to minutes — the dashboard was the easy last mile.', vi: 'Thắng lợi bền vững là loại bỏ tổng hợp thủ công. Khi Excel thô chảy vào tính toán và ghi nhận tự động, một lần cập nhật tháng giảm từ vài ngày xuống vài phút — dashboard chỉ là chặng cuối dễ dàng.' },
          tradeoff: null },
        { title: { en: 'Flag anomalies so reviews look at exceptions', vi: 'Cảnh báo bất thường để đánh giá tập trung vào ngoại lệ' },
          why: { en: 'The system flags anomalies and likely data errors automatically, so a reviewer looks at the handful of stores that need attention instead of scanning all 300+.', vi: 'Hệ thống tự cảnh báo bất thường và lỗi dữ liệu, nên người đánh giá chỉ nhìn vào số ít cửa hàng cần chú ý thay vì rà hết 300+.' },
          tradeoff: null },
        { title: { en: 'One owner for standard, task, and score', vi: 'Một người làm chủ chuẩn, việc và điểm' },
          why: { en: "Because I own the SOPs, the task workflows, and the KPI framework together, they stay aligned — a change in the standard flows through to what's measured, with no translation gap between teams.", vi: 'Vì tôi làm chủ đồng thời SOP, workflow công việc và khung KPI, chúng luôn nhất quán — một thay đổi trong chuẩn chảy thẳng tới thứ được đo, không có khoảng lệch dịch nghĩa giữa các đội.' },
          tradeoff: null }
      ]
    },

    process: {
      title: { en: 'The pipeline', vi: 'Pipeline' },
      body: {
        en: ['Four automated stages turn raw store data into a comparable score:'],
        vi: ['Bốn bước tự động biến dữ liệu cửa hàng thô thành một điểm số so sánh được:']
      },
      steps: {
        en: ['Raw operational Excel', 'Automated calculation (50+ KPIs)', 'Automated recording', 'Interactive dashboard + anomaly flags'],
        vi: ['Excel vận hành thô', 'Tính toán tự động (50+ KPI)', 'Ghi nhận tự động', 'Dashboard tương tác + cảnh báo']
      },
      figures: [
        { src: 'projects/kpi-dashboard.svg', alt: { en: 'Monthly KPI dashboard', vi: 'Dashboard KPI hằng tháng' },
          caption: { en: 'The interactive monthly dashboard — 50+ KPIs across 100+ data fields.', vi: 'Dashboard tương tác hằng tháng — 50+ KPI trên 100+ trường dữ liệu.' } },
        { src: 'projects/sales-kpi.svg', alt: { en: 'Combined sales × KPI cross-analysis', vi: 'Phân tích chéo doanh số × KPI' },
          caption: { en: 'Cross-analysis: stores with low sales but high KPI — a flag for review.', vi: 'Phân tích chéo: cửa hàng doanh số thấp nhưng KPI cao — một cờ để đánh giá.' } }
      ]
    },

    outcome: {
      title: { en: 'Outcome', vi: 'Kết quả' },
      body: {
        en: ['Measured against the manual process it replaced:'],
        vi: ['So với quy trình thủ công mà nó thay thế:']
      },
      beforeAfters: [
        { before: { en: '5-day Excel batches', vi: 'Chạy Excel 5 ngày' }, after: { en: 'Real-time', vi: 'Thời gian thực' },
          note: { en: 'KPI refresh cadence across 300+ stores', vi: 'Nhịp cập nhật KPI trên 300+ cửa hàng' }, tone: 'accent' },
        { before: { en: '3 days', vi: '3 ngày' }, after: { en: '~30 min', vi: '~30 phút' },
          note: { en: 'To prepare the monthly report', vi: 'Để làm báo cáo hằng tháng' }, tone: 'accent-2' }
      ],
      metrics: [
        { value: '300+', label: { en: 'Stores on one comparable score', vi: 'Cửa hàng trên một điểm chung' }, tone: 'accent' },
        { value: '50+', label: { en: 'KPIs defined & automated', vi: 'KPI được định nghĩa & tự động' }, tone: 'accent-3' },
        { value: '100+', label: { en: 'Data fields ingested', vi: 'Trường dữ liệu được nạp' }, tone: 'accent-4' }
      ]
    },

    reflection: {
      title: { en: 'Reflection', vi: 'Nhìn lại' },
      quote: {
        text: { en: "If one person owns the standard, the task, and the score, they can't drift apart. That alignment — not the dashboard — is what makes the loop work.", vi: 'Nếu một người làm chủ chuẩn, việc và điểm, chúng không thể lệch khỏi nhau. Chính sự nhất quán đó — chứ không phải dashboard — làm cho vòng lặp hoạt động.' },
        cite: { en: 'Denis Pham, on the KPI system', vi: 'Denis Pham, về hệ thống KPI' }
      },
      lessons: {
        en: [
          { title: 'Automate the ingest first', body: 'The chart is the easy part; the durable win is removing manual data entry so the numbers refresh themselves.' },
          { title: 'Make scores traceable', body: "A number people are reviewed on has to be defensible back to its inputs, or it won't be trusted." },
          { title: 'Design for one maintainer', body: 'A practical Excel + JS stack one person can keep running beats a heavier system that needs a team.' }
        ],
        vi: [
          { title: 'Tự động hóa nạp dữ liệu trước', body: 'Biểu đồ là phần dễ; thắng lợi bền vững là loại bỏ nhập liệu thủ công để số tự cập nhật.' },
          { title: 'Làm điểm số truy vết được', body: 'Một con số dùng để đánh giá người khác phải bảo vệ được về tận dữ liệu gốc, nếu không sẽ không được tin.' },
          { title: 'Thiết kế cho một người duy trì', body: 'Stack Excel + JS thực dụng mà một người giữ chạy được thắng một hệ thống nặng cần cả đội.' }
        ]
      }
    },

    next: {
      eyebrow: { en: 'Next project', vi: 'Dự án tiếp theo' },
      title: { en: 'Company-Wide Task Workflow System', vi: 'Hệ thống Task Workflow Toàn công ty' },
      href: 'index.html#projects'
    }
  }
};

// ===========================================
// RENDER — small string-template helpers, then the page
// ===========================================

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

function figureHTML(fig, ratio) {
  if (!fig) return '';
  const cap = fig.caption ? `<figcaption class="dp-figure__caption">${t(fig.caption)}</figcaption>` : '';
  // Missing src → dashed "Image pending" empty state, never a broken img
  if (!fig.src) {
    const label = LANG === 'vi' ? 'Ảnh đang chờ bổ sung' : 'Image pending';
    return `<figure class="dp-figure">
      <div class="dp-figure__empty" style="aspect-ratio:${ratio || '16 / 10'}" role="img" aria-label="${esc(t(fig.alt) || label)}">
        <span class="dp-figure__empty-glyph" aria-hidden="true">🖼</span>
        <span class="dp-figure__empty-label">${label}</span>
      </div>${cap}
    </figure>`;
  }
  return `<figure class="dp-figure">
    <div class="dp-figure__frame" style="aspect-ratio:${ratio || '16 / 10'}">
      <img src="${fig.src}" alt="${esc(t(fig.alt) || '')}" loading="lazy">
    </div>${cap}
  </figure>`;
}

function sectionHTML(num, title, inner, wide) {
  return `<section class="cs-section">
    <div class="cs-col${wide ? ' cs-col--wide' : ''}">
      <div class="cs-sec-head">
        <span class="cs-sec-num">${String(num).padStart(2, '0')}</span>
        <h2 class="cs-sec-title">${title}</h2>
      </div>
      ${inner}
    </div>
  </section>`;
}

const parasHTML = body => (t(body) || []).map(p => `<p class="cs-para">${p}</p>`).join('');

function render() {
  const root = document.getElementById('cs-root');
  const id = new URLSearchParams(location.search).get('id');
  const d = CASE_STUDIES[id] || CASE_STUDIES[Object.keys(CASE_STUDIES)[0]];
  document.documentElement.lang = LANG;
  document.getElementById('cs-back-name').textContent = LANG === 'vi' ? 'Phạm Mạnh Đức' : 'Denis Pham';

  if (!d) {
    root.innerHTML = `<div class="cs-empty"><p>Case study not found. <a href="index.html">← ${LANG === 'vi' ? 'Về portfolio' : 'Back to portfolio'}</a></p></div>`;
    return;
  }
  document.title = `${t(d.title)} — ${LANG === 'vi' ? 'Case study' : 'Case study'} · Denis Pham`;

  let n = 0;
  const next = () => ++n;
  const pending = LANG === 'vi' ? 'Chờ bổ sung' : 'Pending confirmation';
  const tones = ['accent', 'accent-2', 'accent-3', 'accent-4'];

  const metaHTML = `<dl class="dp-csmeta" style="grid-template-columns:repeat(${Math.min(d.meta.length, 3)}, minmax(0,1fr))">
    ${d.meta.map(m => `<div class="dp-csmeta__cell">
      <dt class="dp-csmeta__label">${t(m.label)}</dt>
      <dd class="dp-csmeta__value">${m.value != null && m.value !== '' ? t(m.value) : `<span class="pending">${pending}</span>`}</dd>
    </div>`).join('')}
  </dl>`;

  const pipelineHTML = `<ol class="cs-pipeline" aria-label="Pipeline stages">
    ${(t(d.process.steps) || []).map((s, i, arr) => `
      <li class="cs-pipe-step" style="--pipe: var(--${tones[i % tones.length]})">
        <span class="cs-pipe-num">${i + 1}</span>
        <span class="cs-pipe-label">${s}</span>
        ${i < arr.length - 1 ? '<span class="cs-pipe-arrow" aria-hidden="true">→</span>' : ''}
      </li>`).join('')}
  </ol>`;

  const beforeLabel = LANG === 'vi' ? 'Trước' : 'Before';
  const afterLabel = LANG === 'vi' ? 'Sau' : 'After';
  const basHTML = d.outcome.beforeAfters.map(ba => `
    <div class="dp-ba" style="--ba-accent: var(--${ba.tone || 'accent'})">
      <div class="dp-ba__side">
        <span class="dp-ba__tag dp-ba__tag--before">${beforeLabel}</span>
        <span class="dp-ba__val dp-ba__val--before">${t(ba.before)}</span>
      </div>
      <span class="dp-ba__arrow" aria-hidden="true">→</span>
      <div class="dp-ba__side">
        <span class="dp-ba__tag dp-ba__tag--after">${afterLabel}</span>
        <span class="dp-ba__val dp-ba__val--after"><b>${t(ba.after)}</b></span>
      </div>
      ${ba.note ? `<p class="dp-ba__note">${t(ba.note)}</p>` : ''}
    </div>`).join('');

  // outcome metrics reuse the meta grid look (3 hairline cells, toned values)
  const metricsHTML = `<dl class="dp-csmeta" style="grid-template-columns:repeat(3, minmax(0,1fr))">
    ${d.outcome.metrics.map(m => `<div class="dp-csmeta__cell">
      <dd class="dp-csmeta__value" style="font-family:var(--font-display);font-size:clamp(26px,3vw,36px);font-weight:600;color:var(--${m.tone || 'accent'});text-shadow:var(--num-glow)">${m.value}</dd>
      <dt class="dp-csmeta__label" style="margin:6px 0 0">${t(m.label)}</dt>
    </div>`).join('')}
  </dl>`;

  const decisionsHTML = d.decisions.items.map((dec, i) => `
    <div class="dp-decision">
      <div class="dp-decision__num" aria-hidden="true">${i + 1}</div>
      <div>
        <h4 class="dp-decision__title">${t(dec.title)}</h4>
        <p class="dp-decision__why">${t(dec.why)}</p>
        ${dec.tradeoff ? `<div class="dp-decision__tradeoff"><b>${LANG === 'vi' ? 'Đánh đổi' : 'Trade-off'}</b> — ${t(dec.tradeoff)}</div>` : ''}
      </div>
    </div>`).join('');

  const lessonsHTML = (t(d.reflection.lessons) || []).map(l => `
    <div class="dp-lesson">
      <span class="dp-lesson__mark" aria-hidden="true">✓</span>
      <div>
        <div class="dp-lesson__title">${l.title}</div>
        <p class="dp-lesson__body">${l.body}</p>
      </div>
    </div>`).join('');

  root.innerHTML = `
    <section class="cs-hero">
      <div class="cs-col cs-col--wide">
        <p class="cs-eyebrow">${t(d.eyebrow)}</p>
        <h1 class="cs-title">${t(d.title)}</h1>
        <p class="cs-subtitle">${t(d.subtitle)}</p>
      </div>
      <div class="cs-col cs-col--wide">
        ${figureHTML({ src: d.image, alt: d.imageAlt }, '16 / 8')}
        <div class="cs-meta">${metaHTML}</div>
      </div>
    </section>

    <section class="cs-section cs-summary">
      <div class="cs-col"><p class="cs-lede">${t(d.summary)}</p></div>
    </section>

    ${sectionHTML(next(), t(d.context.title), parasHTML(d.context.body))}
    ${sectionHTML(next(), t(d.challenge.title), parasHTML(d.challenge.body))}
    ${sectionHTML(next(), t(d.role.title), `
      ${parasHTML(d.role.body)}
      <ul class="cs-list">${(t(d.role.bullets) || []).map(b => `<li>${b}</li>`).join('')}</ul>
    `)}
    ${sectionHTML(next(), t(d.constraints.title), `
      <ul class="cs-list cs-list--constraints">${(t(d.constraints.items) || []).map(i => `<li>${i}</li>`).join('')}</ul>
    `)}
    ${sectionHTML(next(), t(d.approach.title), `
      <div class="cs-col-inner">${parasHTML(d.approach.body)}</div>
      ${d.approach.figure ? `<div style="margin-top:26px">${figureHTML(d.approach.figure, '16 / 8')}</div>` : ''}
    `, true)}
    ${sectionHTML(next(), t(d.decisions.title), `<div class="cs-decisions">${decisionsHTML}</div>`)}
    ${sectionHTML(next(), t(d.process.title), `
      <div class="cs-col-inner">${parasHTML(d.process.body)}${pipelineHTML}</div>
      <div class="cs-figs">${d.process.figures.map(f => figureHTML(f)).join('')}</div>
    `, true)}
    ${sectionHTML(next(), t(d.outcome.title), `
      <div class="cs-col-inner">${parasHTML(d.outcome.body)}</div>
      <div class="cs-beforeafters">${basHTML}</div>
      <div class="cs-metrics">${metricsHTML}</div>
    `, true)}
    ${sectionHTML(next(), t(d.reflection.title), `
      <blockquote class="dp-quote">
        <p class="dp-quote__text">${t(d.reflection.quote.text)}</p>
        <cite class="dp-quote__cite">${t(d.reflection.quote.cite)}</cite>
      </blockquote>
      <div class="cs-lessons">${lessonsHTML}</div>
    `)}

    <section class="cs-section cs-foot">
      <div class="cs-col cs-col--wide">
        <a class="dp-nextproj" href="${d.next.href}">
          <span>
            <span class="dp-nextproj__eyebrow">${t(d.next.eyebrow)}</span>
            <span class="dp-nextproj__title">${t(d.next.title)}</span>
          </span>
          <span class="dp-nextproj__arrow" aria-hidden="true">→</span>
        </a>
        <div class="cs-contact">
          <p class="cs-contact-line">
            ${LANG === 'vi' ? 'Muốn trao đổi về một hệ thống hiệu suất tương tự? ' : 'Want to talk about a system like this? '}
            <a href="mailto:manhduc1703@gmail.com">manhduc1703@gmail.com</a>
          </p>
          <div class="cs-contact-btns">
            <a class="btn btn-primary" href="mailto:manhduc1703@gmail.com?subject=Project%20inquiry%20%E2%80%94%20from%20your%20portfolio">${LANG === 'vi' ? 'Trao đổi về một dự án →' : 'Discuss a project →'}</a>
            <a class="btn btn-secondary" href="index.html">${LANG === 'vi' ? 'Xem toàn bộ portfolio' : 'See the full portfolio'}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ---------- toggles ----------
// Language: re-render in place + persist (shared 'lang' key with index.html)
function syncLangButtons() {
  document.querySelectorAll('.lang-toggle button').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.lang === LANG));
}
document.querySelectorAll('.lang-toggle button').forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.dataset.lang === LANG) return;
    LANG = btn.dataset.lang;
    localStorage.setItem('lang', LANG);
    syncLangButtons();
    render();
  });
});

// Theme: same flip as index.html (pre-paint script in <head> applied the saved theme)
const themeToggle = document.querySelector('.theme-toggle');
if (themeToggle) {
  const syncIcon = () => {
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    themeToggle.textContent = dark ? '☀️' : '🌙';
    themeToggle.setAttribute('aria-pressed', String(dark));
  };
  syncIcon();
  themeToggle.addEventListener('click', () => {
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (dark) document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', dark ? 'light' : 'dark');
    syncIcon();
  });
}

syncLangButtons();
render();
