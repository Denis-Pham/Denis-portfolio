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
      en: 'Turning 300+ stores of messy field execution into a performance loop that refreshes every day — one that store teams trust and managers can act on.',
      vi: 'Biến thực thi vận hành nhiều biến động của 300+ cửa hàng thành một vòng lặp hiệu suất cập nhật mỗi ngày — đủ tin để đội cửa hàng chấp nhận và quản lý dựa vào để quyết định.'
    },
    image: 'projects/kpi-dashboard.svg',
    imageAlt: { en: 'The Hasaki monthly KPI dashboard', vi: 'Dashboard KPI hằng tháng của Hasaki' },

    meta: [
      { label: { en: 'Role', vi: 'Vai trò' },
        value: { en: 'KPI framework owner — design to dashboard', vi: 'Chủ trì khung KPI — từ thiết kế đến dashboard' } },
      { label: { en: 'Timeline', vi: 'Thời gian' }, value: { en: '2023 — present', vi: '2023 — hiện tại' } },
      { label: { en: 'Scope', vi: 'Phạm vi' }, value: { en: '300+ stores · 50+ KPIs · 100+ data fields', vi: '300+ cửa hàng · 50+ KPI · 100+ trường dữ liệu' } },
      { label: { en: 'Tools', vi: 'Công cụ' }, value: 'Excel, JavaScript, Chart.js, Python' },
      { label: { en: 'Context', vi: 'Bối cảnh' }, value: { en: 'Hasaki Vietnam · Cosmetics division', vi: 'Hasaki Việt Nam · Khối Cosmetics' } },
      { label: { en: 'Team', vi: 'Đội ngũ' },
        value: { en: "Me + the tech team's BA · formulas reviewed with BOM/BOD", vi: 'Tôi + BA team tech · công thức rà soát cùng BOM/BOD' } }
    ],

    summary: {
      en: "Hasaki runs 300+ cosmetics retail stores. I designed the KPI framework the division scores stores on — every formula reviewed with BOM/BOD — then delivered the system that produces those scores: automated calculation and recording built with the tech team's BA, and an interactive dashboard I built myself with Claude Code. It replaced a month-start manual compile with an automated daily refresh that now drives monthly performance reviews.",
      vi: 'Hasaki vận hành 300+ cửa hàng mỹ phẩm. Tôi thiết kế khung KPI mà khối dùng để chấm điểm cửa hàng — từng công thức được rà soát cùng BOM/BOD — rồi hoàn thiện hệ thống tạo ra điểm số đó: tính toán & ghi nhận tự động xây cùng BA team tech, và dashboard tương tác tôi tự xây bằng Claude Code. Nó thay thế việc tổng hợp thủ công đầu tháng bằng cập nhật tự động hằng ngày, hiện là cơ sở cho đánh giá hiệu suất hằng tháng.'
    },

    context: {
      title: { en: 'Context', vi: 'Bối cảnh' },
      body: {
        en: [
          'The Cosmetics division measures how well each store runs — from SOP compliance to operational execution — and those scores feed real monthly performance reviews for store staff.',
          'When I took it on, the numbers lived in Excel files compiled by hand at the start of each month. A full refresh took about five days, so by the time anyone saw a problem the month had moved on. There was no reliable way to compare 300+ stores on the same basis, and manual compilation quietly introduced errors.'
        ],
        vi: [
          'Khối Cosmetics đo mức độ vận hành tốt của từng cửa hàng — từ tuân thủ SOP đến thực thi vận hành — và các điểm số đó phục vụ đánh giá hiệu suất hằng tháng thật cho nhân viên cửa hàng.',
          'Khi tôi tiếp nhận, dữ liệu nằm trong các file Excel tổng hợp bằng tay vào đầu mỗi tháng. Một lần cập nhật đầy đủ mất khoảng năm ngày, nên đến lúc thấy được vấn đề thì tháng đã trôi qua. Không có cách đáng tin để so sánh 300+ cửa hàng trên cùng một chuẩn, và việc tổng hợp thủ công âm thầm tạo ra sai số.'
        ]
      }
    },

    challenge: {
      title: { en: 'The challenge', vi: 'Thách thức' },
      body: {
        en: ['Measure execution across 300+ stores consistently, with numbers refreshed daily instead of once a month — without adding manual work for store teams, and trustworthy enough to sit under a performance review.'],
        vi: ['Đo thực thi trên 300+ cửa hàng một cách nhất quán, số liệu tươi mỗi ngày thay vì mỗi tháng một lần — mà không thêm việc thủ công cho đội cửa hàng, và đủ tin để làm cơ sở đánh giá hiệu suất.']
      }
    },

    role: {
      title: { en: 'My role', vi: 'Vai trò của tôi' },
      body: {
        en: ['I owned the loop end to end — the framework, the alignment, and the dashboard:'],
        vi: ['Tôi phụ trách vòng lặp từ đầu đến cuối — khung KPI, khâu thống nhất và dashboard:']
      },
      bullets: {
        en: [
          'Designed the KPI framework: which metrics matter, how each is defined and weighted, and how a store rolls up to a single comparable score.',
          "Reviewed and locked every formula and weight with BOM/BOD, then worked with the tech team's BA to automate calculation and recording to that spec.",
          'Built the interactive dashboard myself with Claude Code, and run it in production — it is the source of the numbers used in monthly reviews.'
        ],
        vi: [
          'Thiết kế khung KPI: chỉ số nào quan trọng, mỗi chỉ số định nghĩa và tính trọng số ra sao, và một cửa hàng gộp lại thành một điểm số so sánh được như thế nào.',
          'Rà soát và chốt từng công thức, trọng số cùng BOM/BOD, rồi phối hợp BA team tech tự động hóa khâu tính toán & ghi nhận theo đúng spec đó.',
          'Tự xây dashboard tương tác bằng Claude Code và vận hành thật — đây là nguồn số liệu dùng trong đánh giá hằng tháng.'
        ]
      }
    },

    constraints: {
      title: { en: 'Constraints', vi: 'Ràng buộc' },
      items: {
        en: [
          'KPI formulas had to be agreed with BOM/BOD before automation — the system computes a spec everyone signed off on, not one person\'s private logic.',
          'Had to run on the data stores already produce; no new field data-entry burden.',
          'A practical, low-cost dashboard stack (JavaScript + Claude Code) I can maintain myself, deployable without heavy infrastructure.',
          'Numbers must be defensible: a store manager should be able to trace a score back to its inputs.'
        ],
        vi: [
          'Công thức KPI phải được thống nhất với BOM/BOD trước khi tự động hóa — hệ thống tính theo spec mọi người đã duyệt, không phải logic riêng của một người.',
          'Phải chạy trên dữ liệu cửa hàng vốn đã tạo ra; không thêm gánh nặng nhập liệu tại hiện trường.',
          'Stack dashboard thực dụng, chi phí thấp (JavaScript + Claude Code) tôi tự duy trì được, triển khai không cần hạ tầng nặng.',
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
          why: { en: 'The durable win was removing manual compilation. Once raw Excel flowed into calculation and recording automatically, the refresh went from a five-day month-start run to a daily update — the dashboard was the easy last mile.', vi: 'Thắng lợi bền vững là loại bỏ tổng hợp thủ công. Khi Excel thô chảy vào tính toán và ghi nhận tự động, cập nhật đi từ đợt chạy 5 ngày đầu tháng thành làm tươi hằng ngày — dashboard chỉ là chặng cuối dễ dàng.' },
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
        { before: { en: '5-day month-start batch', vi: 'Chạy 5 ngày đầu tháng' }, after: { en: 'Daily', vi: 'Hằng ngày' },
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
      href: 'case-study.html?id=task-workflow'
    }
  },

  'task-workflow': {
    id: 'task-workflow',
    eyebrow: { en: 'Case study · Operations Execution', vi: 'Case study · Thực thi Vận hành' },
    title: { en: 'Company-Wide Task Workflow System', vi: 'Hệ thống Task Workflow Toàn công ty' },
    subtitle: {
      en: 'How SOPs stop being documents: designed as flowcharts, configured as flows on the company system, and dispatched as daily tasks to store teams across 300+ stores.',
      vi: 'Để SOP không nằm trên giấy: thiết kế thành flowchart, config thành luồng chạy trên hệ thống công ty, và bắn thành task hằng ngày cho đội cửa hàng trên 300+ cửa hàng.'
    },
    image: 'projects/task-workflow-system.svg',
    imageAlt: { en: 'Task compliance tracking across 300+ stores', vi: 'Theo dõi tuân thủ task trên 300+ cửa hàng' },

    meta: [
      { label: { en: 'Role', vi: 'Vai trò' },
        value: { en: 'Workflow designer & configurator — flowchart → production flow', vi: 'Thiết kế & config workflow — từ flowchart đến luồng chạy thật' } },
      { label: { en: 'Timeline', vi: 'Thời gian' }, value: { en: '2023 — present', vi: '2023 — hiện tại' } },
      { label: { en: 'Scope', vi: 'Phạm vi' }, value: { en: '300+ stores · daily task dispatch', vi: '300+ cửa hàng · bắn task hằng ngày' } },
      { label: { en: 'Tools', vi: 'Công cụ' }, value: { en: "Flowcharts · the company's internal workflow platform", vi: 'Flowchart · nền tảng workflow nội bộ của công ty' } },
      { label: { en: 'Context', vi: 'Bối cảnh' }, value: { en: 'Hasaki Vietnam · Cosmetics division', vi: 'Hasaki Việt Nam · Khối Cosmetics' } },
      { label: { en: 'Team', vi: 'Đội ngũ' },
        value: { en: 'I design & configure the flows · the platform is built by the tech team', vi: 'Tôi thiết kế & config luồng · nền tảng do team tech xây' } }
    ],

    summary: {
      en: "Hasaki's stores run on SOPs — but a standard only matters if it becomes work someone actually does. I take the operating SOPs I manage, design each process as a flowchart, and configure it as a running flow on the company's internal workflow system. Every day the system dispatches the resulting tasks to store staff, tracks completion and compliance across 300+ stores, and the results feed straight into KPI scoring.",
      vi: 'Cửa hàng Hasaki vận hành theo SOP — nhưng một tiêu chuẩn chỉ có nghĩa khi biến thành việc có người làm thật. Tôi lấy các SOP vận hành mình quản lý, thiết kế từng quy trình thành flowchart, rồi config thành luồng chạy trên hệ thống workflow nội bộ của công ty. Mỗi ngày hệ thống bắn task cho nhân viên cửa hàng, theo dõi hoàn thành & tuân thủ trên 300+ cửa hàng, và kết quả chảy thẳng vào chấm điểm KPI.'
    },

    context: {
      title: { en: 'Context', vi: 'Bối cảnh' },
      body: {
        en: [
          'The Cosmetics division runs 300+ stores on a shared set of operating SOPs — daily routines plus recurring events like store openings, closures and procurement. On paper, every store follows the same standard.',
          "In practice, a document can't assign work. Whether each store actually executed each standard, every day, was hard to see consistently from head office — and without execution data there is nothing objective for performance scoring to stand on."
        ],
        vi: [
          'Khối Cosmetics vận hành 300+ cửa hàng trên cùng một bộ SOP — các routine hằng ngày cộng với những sự kiện lặp lại như khai trương, đóng cửa, mua hàng. Trên giấy, mọi cửa hàng theo cùng một chuẩn.',
          'Nhưng thực tế, một tài liệu không tự giao việc được. Từng cửa hàng có thực sự thực thi từng tiêu chuẩn mỗi ngày hay không là điều văn phòng rất khó nhìn thấy một cách nhất quán — và không có dữ liệu thực thi thì chấm điểm hiệu suất không có gì khách quan để đứng lên.'
        ]
      }
    },

    challenge: {
      title: { en: 'The challenge', vi: 'Thách thức' },
      body: {
        en: ['Turn static SOPs into daily, trackable work for every store — automatically, at 300+ store scale, without anyone hand-assigning tasks each morning — and make compliance visible in one place.'],
        vi: ['Biến SOP tĩnh thành công việc hằng ngày, theo dõi được, cho từng cửa hàng — tự động, ở quy mô 300+ cửa hàng, không ai phải giao task bằng tay mỗi sáng — và làm tuân thủ nhìn thấy được ở một nơi.']
      }
    },

    role: {
      title: { en: 'My role', vi: 'Vai trò của tôi' },
      body: {
        en: ['My part is the layer between the standard and the system:'],
        vi: ['Phần của tôi là lớp nằm giữa tiêu chuẩn và hệ thống:']
      },
      bullets: {
        en: [
          'Design each operating process as a flowchart — steps, owners, branches, and what counts as done.',
          "Configure those flows on the company's internal workflow platform so they actually run: triggers, assignees, schedules and completion rules.",
          'Keep them aligned with the SOP system I manage — when a standard changes, the flow and the tasks it dispatches change with it.'
        ],
        vi: [
          'Thiết kế từng quy trình vận hành thành flowchart — các bước, người phụ trách, rẽ nhánh và tiêu chí hoàn thành.',
          'Config các luồng đó trên nền tảng workflow nội bộ của công ty để chúng chạy thật: trigger, người nhận, lịch chạy và điều kiện hoàn thành.',
          'Giữ chúng nhất quán với hệ thống SOP tôi quản lý — chuẩn thay đổi thì luồng và task nó bắn ra thay đổi theo.'
        ]
      }
    },

    constraints: {
      title: { en: 'Constraints', vi: 'Ràng buộc' },
      items: {
        en: [
          "Runs on the company's existing workflow platform — I design and configure; the platform itself is built and operated by the tech team.",
          'Daily cadence at 300+ store scale: dispatch has to be automatic — no one hand-assigns tasks each morning.',
          'Flows must mirror the SOPs of record — the task a store receives is the standard, not a paraphrase of it.',
          'Results must be usable downstream: completion and compliance feed KPI scoring.'
        ],
        vi: [
          'Chạy trên nền tảng workflow sẵn có của công ty — tôi thiết kế và config; bản thân nền tảng do team tech xây và vận hành.',
          'Nhịp hằng ngày ở quy mô 300+ cửa hàng: việc bắn task phải tự động — không ai giao tay mỗi sáng.',
          'Luồng phải phản chiếu đúng SOP gốc — task cửa hàng nhận được chính là tiêu chuẩn, không phải bản diễn dịch lại.',
          'Kết quả phải dùng được ở hạ nguồn: hoàn thành & tuân thủ chảy vào chấm điểm KPI.'
        ]
      }
    },

    approach: {
      title: { en: 'Approach', vi: 'Cách tiếp cận' },
      body: {
        en: [
          "Start from the SOP, not the tool: I map each process as a flowchart first — every step, decision and owner explicit — because a flow that isn't clear on the diagram won't run clearly in production.",
          "Then I translate the flowchart into configuration on the workflow platform: what triggers a flow, who receives each task, on what schedule, and what marks it complete. Once configured, the system dispatches the day's tasks to store teams automatically, and head office watches completion and compliance in one place."
        ],
        vi: [
          'Bắt đầu từ SOP, không phải từ công cụ: tôi vẽ từng quy trình thành flowchart trước — mọi bước, mọi điểm rẽ nhánh, mọi người phụ trách đều tường minh — vì một luồng không rõ ràng trên sơ đồ thì cũng sẽ không chạy rõ ràng trong thực tế.',
          'Sau đó tôi dịch flowchart thành cấu hình trên nền tảng workflow: điều gì kích hoạt một luồng, ai nhận từng task, theo lịch nào, và điều kiện nào tính là hoàn thành. Config xong, hệ thống tự bắn task trong ngày cho đội cửa hàng, còn văn phòng theo dõi hoàn thành & tuân thủ ở một nơi.'
        ]
      },
      figure: {
        src: 'projects/operations-workflows.svg',
        alt: { en: 'Four standardized operations workflows', vi: 'Bốn quy trình vận hành chuẩn hóa' },
        caption: { en: 'The same method covers recurring event workflows — new store opening, closure & liquidation, admin procurement, vendor evaluation.', vi: 'Cùng phương pháp này phủ các quy trình sự kiện lặp lại — khai trương, thanh lý mặt bằng, mua hàng hành chánh, đánh giá nhà cung cấp.' }
      }
    },

    decisions: {
      title: { en: 'Key decisions', vi: 'Quyết định then chốt' },
      items: [
        { title: { en: 'Flowchart first, configuration second', vi: 'Flowchart trước, config sau' },
          why: { en: 'Every process is standardized as a drawn flow before it touches the system. The flowchart is the agreement — configuration is just its translation, so what runs is exactly what was designed.', vi: 'Mọi quy trình được chuẩn hóa thành sơ đồ trước khi đụng vào hệ thống. Flowchart là bản thống nhất — config chỉ là bản dịch của nó, nên thứ chạy thật chính xác là thứ đã thiết kế.' },
          tradeoff: null },
        { title: { en: 'Tasks arrive daily, not as month-end checklists', vi: 'Task đến hằng ngày, không phải checklist cuối tháng' },
          why: { en: "The system dispatches work every day, so a standard becomes today's task with an owner — and a miss is visible the same day it happens, not weeks later.", vi: 'Hệ thống bắn việc mỗi ngày, nên tiêu chuẩn trở thành task hôm nay của một người cụ thể — và một lần bỏ sót nhìn thấy được ngay trong ngày, không phải nhiều tuần sau.' },
          tradeoff: null },
        { title: { en: 'Execution data flows into KPI scoring', vi: 'Dữ liệu thực thi chảy vào chấm điểm KPI' },
          why: { en: "Completion and compliance aren't a separate report — they feed the KPI framework directly, closing the SOP → task → KPI loop with no translation gap.", vi: 'Hoàn thành & tuân thủ không phải một báo cáo riêng — chúng nạp thẳng vào khung KPI, khép kín vòng lặp SOP → task → KPI không qua khâu diễn dịch nào.' },
          tradeoff: null }
      ]
    },

    process: {
      title: { en: 'From standard to scored execution', vi: 'Từ tiêu chuẩn đến thực thi được chấm điểm' },
      body: {
        en: ['Five stages, configured once and then running daily:'],
        vi: ['Năm bước, config một lần rồi chạy hằng ngày:']
      },
      steps: {
        en: ['Operating SOP', 'Flowchart design', 'Flow configuration', 'Daily task dispatch', 'Compliance tracking → KPI'],
        vi: ['SOP vận hành', 'Thiết kế flowchart', 'Config luồng', 'Bắn task hằng ngày', 'Theo dõi tuân thủ → KPI']
      },
      figures: []
    },

    outcome: {
      title: { en: 'Outcome', vi: 'Kết quả' },
      body: {
        en: ['What changed, in operational terms:'],
        vi: ['Thay đổi về mặt vận hành:']
      },
      beforeAfters: [
        { before: { en: 'SOPs as documents', vi: 'SOP dạng tài liệu' }, after: { en: 'Daily dispatched tasks', vi: 'Task bắn hằng ngày' },
          note: { en: 'Every store gets its work with owners and completion rules — automatically', vi: 'Mỗi cửa hàng nhận việc kèm người phụ trách và điều kiện hoàn thành — tự động' }, tone: 'accent' },
        { before: { en: 'Compliance hard to see', vi: 'Tuân thủ khó nhìn thấy' }, after: { en: 'One tracking view', vi: 'Một màn hình theo dõi' },
          note: { en: 'Head office sees every store against the same standard', vi: 'Văn phòng nhìn mọi cửa hàng trên cùng một chuẩn' }, tone: 'accent-2' }
      ],
      metrics: [
        { value: '300+', label: { en: 'Stores dispatched & tracked', vi: 'Cửa hàng được bắn task & theo dõi' }, tone: 'accent' },
        { value: { en: 'Daily', vi: 'Hằng ngày' }, label: { en: 'Dispatch cadence — no manual assignment', vi: 'Nhịp bắn task — không giao tay' }, tone: 'accent-3' },
        { value: '→ KPI', label: { en: 'Execution results feed scoring directly', vi: 'Kết quả thực thi nạp thẳng vào chấm điểm' }, tone: 'accent-4' }
      ]
    },

    reflection: {
      title: { en: 'Reflection', vi: 'Nhìn lại' },
      quote: {
        text: { en: "A standard that doesn't become somebody's task today is just a document. The workflow system is what turns our SOPs into work — and work into numbers.", vi: 'Một tiêu chuẩn không biến thành task của ai đó trong hôm nay thì mới chỉ là một tài liệu. Hệ thống workflow là thứ biến SOP thành công việc — và công việc thành con số.' },
        cite: { en: 'Denis Pham, on the workflow system', vi: 'Denis Pham, về hệ thống workflow' }
      },
      lessons: {
        en: [
          { title: 'Draw it before you config it', body: 'Ambiguity left in the flowchart shows up later as tasks nobody owns — the diagram is where arguments are cheap.' },
          { title: 'Daily beats month-end', body: 'Dispatching and tracking every day surfaces misses while they can still be fixed.' },
          { title: 'Configuration is leverage', body: 'Designing flows on the platform the company already runs ships to 300+ stores without building new software.' }
        ],
        vi: [
          { title: 'Vẽ rõ rồi mới config', body: 'Sự mơ hồ còn sót trong flowchart sẽ hiện ra sau này thành những task không ai nhận — tranh luận trên sơ đồ là lúc rẻ nhất.' },
          { title: 'Hằng ngày thắng cuối tháng', body: 'Bắn và theo dõi mỗi ngày làm lộ những chỗ bỏ sót khi còn kịp sửa.' },
          { title: 'Config là đòn bẩy', body: 'Thiết kế luồng trên nền tảng công ty đang chạy sẵn đưa được tới 300+ cửa hàng mà không phải xây phần mềm mới.' }
        ]
      }
    },

    next: {
      eyebrow: { en: 'Next project', vi: 'Dự án tiếp theo' },
      title: 'Hasaki KPI System',
      href: 'case-study.html?id=hasaki-kpi'
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
      <dd class="dp-csmeta__value" style="font-family:var(--font-display);font-size:clamp(26px,3vw,36px);font-weight:600;color:var(--${m.tone || 'accent'});text-shadow:var(--num-glow)">${t(m.value)}</dd>
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
