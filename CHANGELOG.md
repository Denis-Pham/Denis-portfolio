# 📜 CHANGELOG — Denis Portfolio

> File ghi lịch sử update của project. **Mọi AI agent / Claude session làm việc trên project này BẮT BUỘC đọc file này trước khi sửa code, và ghi log vào đây sau khi hoàn thành thay đổi.**

---

## 🎯 Mục tiêu project

Xây dựng trang portfolio cá nhân hoàn chỉnh cho **Denis** — KPI Analyst / Performance Specialist tại Hasaki Vietnam — để giới thiệu kỹ năng phân tích dữ liệu, dashboard và các tool nội bộ đã build. Deploy lên GitHub Pages.

## 🗂 Kết cấu project (cập nhật 2026-06-10)

| File | Vai trò |
|---|---|
| `index.html` | Khung trang + toàn bộ style chính (inline `<style>`, CSS variables ở `:root`). Các section: Hero → About → Skills → Experience → Featured Project → Projects → Education → Contact |
| `script.js` | **Toàn bộ nội dung nằm ở đây** — 4 data arrays (`skills`, `experience`, `projects`, `education`) + render functions. Sửa nội dung = sửa array, không cần đụng HTML |
| `style.css` | Style phụ: animations + print stylesheet (xuất PDF làm CV) |
| `README.md` | Hướng dẫn template gốc (customize, chạy local, deploy GitHub Pages) |
| `CHANGELOG.md` | File này — lịch sử update + quy ước làm việc |

**Stack:** HTML + CSS + JavaScript thuần, không framework, không build tool. Chạy local: `python3 -m http.server 5173`.

## 📋 Quy ước cho AI agents

1. **Đọc `CHANGELOG.md` này trước** khi thay đổi bất cứ thứ gì.
2. Sau mỗi thay đổi, **thêm 1 entry mới lên ĐẦU mục "Lịch sử update"** theo format mẫu bên dưới.
3. Nội dung (text, dự án, kinh nghiệm) sửa trong `script.js` — **không hard-code nội dung vào HTML**.
4. Màu sắc / theme sửa qua CSS variables ở `:root` trong `index.html` — không hard-code màu rải rác.
5. Không thêm framework / build tool — giữ project deploy thẳng lên GitHub Pages được.
6. Không xóa các tag `[TODO]` khi chưa có thông tin thật từ Denis — đó là chỗ chờ anh ấy điền.

### Format entry mẫu

```markdown
## [YYYY-MM-DD] — Tiêu đề ngắn gọn
**Agent/Người thực hiện:** (vd: Claude Code, GPT agent, Denis)
**Files thay đổi:** index.html, script.js
**Nội dung:**
- Mô tả thay đổi 1
- Mô tả thay đổi 2
**Lý do / ghi chú:** (nếu có)
```

## ✅ Việc còn tồn đọng (TODO)

- [x] Điền `education` array trong `script.js` — đã điền 2026-06-10 (HCMUT, từ screenshot LinkedIn)
- [x] Cập nhật contact links trong `index.html`: email, LinkedIn, GitHub — đã điền đủ 2026-06-10
- [ ] Thêm link `live` / `github` cho các project trong `script.js` (đang để trống)
- [ ] (Tuỳ chọn) Thêm screenshot dự án vào folder `/projects/` và gán vào `projects[].image`
- [ ] (Tuỳ chọn) Thêm file `your-cv.pdf` và cập nhật nút Download CV
- [ ] Đưa project vào git repo + deploy GitHub Pages

---

# 📅 Lịch sử update

## [2026-06-10] — Deploy GitHub Pages + điền links Vivi Soul
**Agent/Người thực hiện:** Claude Code
**Files thay đổi:** script.js, CHANGELOG.md (+ git init, push)
**Nội dung:**
- Init git repo, commit toàn bộ, tạo repo GitHub `Denis-Pham/Denis-portfolio` qua API, push branch main
- Bật GitHub Pages (main / root) — site live tại **https://denis-pham.github.io/Denis-portfolio/** (đã verify HTTP 200 + đúng nội dung)
- Điền links project Vivi Soul: live `https://denis-pham.github.io/vivi-soul/` (verify HTTP 200), github `https://github.com/Denis-Pham/vivi-soul`
- Xóa số điện thoại khỏi CHANGELOG trước khi public repo (bảo mật)
**Lý do / ghi chú:** Từ giờ quy trình update: sửa code local → ghi CHANGELOG → `git add -A && git commit && git push` → Pages tự rebuild sau ~1 phút.

## [2026-06-10] — Cập nhật quy mô: 50+ → 300+ stores
**Agent/Người thực hiện:** Claude Code (theo Denis cung cấp)
**Files thay đổi:** index.html, script.js, CHANGELOG.md
**Nội dung:**
- Thay toàn bộ "50+" thành "**300+**" ở 7 vị trí: meta description, og:description, hero tagline, hero stat ("300+ Retail stores tracked"), skills item, 2 experience bullets, project summary + metric của Hasaki KPI Dashboard
- Đã verify trên preview: 0 chỗ còn "50+", 7 chỗ hiện "300+"
**Lý do / ghi chú:** Denis xác nhận hệ thống của anh hiện phủ hơn 300 stores.

## [2026-06-10] — Hiện email dạng text trong section Contact
**Agent/Người thực hiện:** Claude Code
**Files thay đổi:** index.html, CHANGELOG.md
**Nội dung:**
- Thêm dòng "Or write to me directly at manhduc1703@gmail.com" (class `.email-plain`) dưới hàng nút Contact — phòng trường hợp khách chưa cấu hình email client nên bấm nút mailto không có gì xảy ra
- Đã verify render đúng trên preview
**Lý do / ghi chú:** Denis hỏi nút Email me có dẫn tới email thật không → giải thích cơ chế mailto + bổ sung phương án dự phòng copy thủ công.

## [2026-06-10] — Điền đầy đủ lịch sử làm việc 6 vị trí từ LinkedIn PDF
**Agent/Người thực hiện:** Claude Code (nguồn: Profile.pdf Denis export từ LinkedIn)
**Files thay đổi:** script.js, index.html, CHANGELOG.md
**Nội dung:**
- `experience` array giờ đủ 6 vị trí: Hasaki.vn Performance Specialist (Aug 2023—nay) → SIPHER Project Manager (2021—2023) → Allied Saigon QA Engineer (2019—2021) → VinMart QA Inspector (2019) → FPT University QA Lead (2017—2019) → KIMDUC QC Inspector (2015—2016); mỗi vị trí 2-3 bullets cô đọng theo achievement
- Hero meta: "3+ years in retail analytics" → "**10+ years** in quality, operations & performance"
- Experience section lede viết lại theo hành trình 10 năm
- About thêm đoạn kể gốc gác: 6 năm QA/QC (audit, root-cause, quality docs) → PM game studio → retail performance
- Đã verify 6 timeline items render đúng, không lỗi console
**Lý do / ghi chú:** Số điện thoại có trong PDF nhưng **cố tình KHÔNG đưa lên trang** — site public, tránh spam; chỉ dùng email làm kênh liên hệ. Languages (English — Limited Working) cũng không đưa lên vì không có lợi cho định vị.

## [2026-06-10] — Cập nhật định vị nghề nghiệp: Operations Performance Specialist (SOP → Task → KPI)
**Agent/Người thực hiện:** Claude Code (theo mô tả công việc Denis cung cấp)
**Files thay đổi:** index.html, script.js, CHANGELOG.md
**Nội dung:**
- Đổi role từ "KPI Analyst & Performance Specialist" → **"Operations Performance Specialist"** (khớp headline LinkedIn) ở title, meta/OG tags, hero, experience
- Viết lại hero tagline + About theo đúng scope thật: own vòng vận hành khép kín cho khối Cosmetics — viết SOP → bắn task workflow → tính KPI cho nhân viên store
- Experience: viết lại bullets nêu bật end-to-end ownership (SOP design → task workflows → KPI scoring cho 50+ stores)
- Skills: thêm category mới đứng đầu "Operations & Performance Systems" (4 items về SOP/workflow/KPI framework) — giờ có 5 skill cards
- Đã verify render đúng trên preview local
**Lý do / ghi chú:** Denis mô tả công việc thật: "xây hệ thống KPI và performance kết hợp xây workflow vận hành của khối Cosmetics từ tạo SOP tới bắn task và cuối cùng là tính KPI". Định vị cũ (KPI Analyst) hẹp hơn thực tế.

## [2026-06-10] — Điền Education từ LinkedIn (qua screenshot Denis cung cấp)
**Agent/Người thực hiện:** Claude Code
**Files thay đổi:** script.js, CHANGELOG.md
**Nội dung:**
- Điền `education` array: Ho Chi Minh City University of Technology (HCMUT — Bách Khoa), Bachelor of Engineering — Engineering/Industrial Management, 2008 — 2013
- Đã verify render đúng trên preview local
**Lý do / ghi chú:** LinkedIn chặn truy cập tự động nên Denis gửi screenshot profile. Ghi nhận thêm: headline LinkedIn của Denis là "Operations Performance Specialist" trong khi site đang dùng "KPI Analyst & Performance Specialist" — chưa đổi, chờ Denis quyết định có muốn đồng bộ không.

## [2026-06-10] — Fix nút Contact tàng hình + làm giàu bảng màu + điền email/GitHub
**Agent/Người thực hiện:** Claude Code
**Files thay đổi:** index.html, style.css, CHANGELOG.md
**Nội dung:**
- **Fix bug:** chữ "Contact" trên nav bị rule `nav.links a { color: var(--muted) }` (specificity 0,1,2 — cao hơn `.btn-primary` 0,1,0) đè thành xám nhạt trên nền xanh → thêm rule `nav.links a.btn-primary { color: #fff }`
- **Bảng màu:** thêm 3 accent phụ vào `:root` (violet `--accent-2`, teal `--accent-3`, amber `--accent-4` + bản soft/dark); nút primary gradient xanh→tím; hero thêm radial gradients màu; hero h1 gradient 3 màu (style.css); tech chips xen kẽ 3 màu; skill icons mỗi card 1 màu (nth-child); hero stats units + featured metrics đổi màu theo vị trí; section-kicker bar gradient; contact section nền radial nhạt
- **Nội dung:** điền email `manhduc1703@gmail.com`, GitHub `https://github.com/Denis-Pham`; thêm meta description + Open Graph tags
- Đã verify trên preview local: nút Contact rõ chữ trắng, màu render đúng ở hero/skills/contact
**Lý do / ghi chú:** Denis báo màu đơn điệu + nút Contact chìm vào nền. LinkedIn không tự lấy được data (HTTP 999 + Chrome extension chưa kết nối) → Education vẫn placeholder, chờ Denis cung cấp.

## [2026-06-10] — Cập nhật LinkedIn contact link
**Agent/Người thực hiện:** Neo (Hermes)
**Files thay đổi:** index.html, CHANGELOG.md
**Nội dung:**
- Cập nhật nút LinkedIn trong section Contact sang profile thật của Denis: `https://www.linkedin.com/in/ph%E1%BA%A1m-m%E1%BA%A1nh-%C4%91%E1%BB%A9c-92237816a/`
- Cập nhật TODO contact links: chỉ còn thiếu email và GitHub
**Lý do / ghi chú:** LinkedIn public page bị authwall khi kiểm tra bằng browser, nhưng URL do Denis cung cấp đã được điền nguyên văn.

## [2026-06-10] — Điền thông tin cá nhân cơ bản cho Denis
**Agent/Người thực hiện:** Neo (Hermes)
**Files thay đổi:** index.html, script.js, CHANGELOG.md
**Nội dung:**
- Thay placeholder `[Your Name]` bằng `Denis Pham` ở title, logo, hero h1 và footer
- Cập nhật avatar initials từ `[YN]` thành `DP`
- Cập nhật retail analytics experience trong hero thành `3+ years`
- Điền period Hasaki trong `script.js` thành `2023 — Present`
**Lý do / ghi chú:** Chỉ điền các thông tin đã có căn cứ từ context/changelog. Vẫn giữ TODO cho education, email, LinkedIn, GitHub, CV và project links vì chưa có dữ liệu thật.

## [2026-06-10] — Audit toàn trang (chưa sửa code)
**Agent/Người thực hiện:** Claude Code
**Files thay đổi:** CHANGELOG.md (ghi log audit)
**Nội dung:**
- Chạy trang local + kiểm tra render: 8 sections đổ data đúng, không lỗi console, responsive hoạt động
- Phát hiện: nút Download CV trỏ `cv.pdf` không tồn tại (404); 3 contact links còn placeholder; thiếu meta description, Open Graph tags, favicon; 0 hình ảnh thật trên trang (toàn chữ cái placeholder); toàn bộ project links (live/github) trống; CSS `.skill-card` bị define 2 lần trong index.html (dòng ~262 và ~356)
- Kết quả nghiên cứu best practices đã báo cáo cho Denis (xem chat 2026-06-10) — hướng cải tiến chính: Featured project viết theo khung Problem→Impact, thêm screenshot dashboard thật, SEO/OG tags
**Lý do / ghi chú:** Audit làm cơ sở cho roadmap cải tiến trước khi đội agents vào build.

## [2026-06-10] — Khởi tạo CHANGELOG + rà soát kết cấu project
**Agent/Người thực hiện:** Claude Code
**Files thay đổi:** CHANGELOG.md (mới)
**Nội dung:**
- Rà soát toàn bộ kết cấu project: 4 files (index.html, style.css, script.js, README.md), template portfolio data-driven, chưa có git repo
- Tạo file CHANGELOG.md ghi lịch sử update + quy ước làm việc cho đội AI agents
- Liệt kê danh sách TODO còn tồn đọng (placeholder chưa điền, links trống, chưa deploy)
**Lý do / ghi chú:** Chuẩn bị đưa đội AI agents + Claude vào project để hoàn thiện portfolio. File này là điểm đồng bộ chung giữa các agents.

## [Trước 2026-06-10] — Khởi tạo project từ template
**Agent/Người thực hiện:** Claude (skill personal-portfolio)
**Files thay đổi:** index.html, style.css, script.js, README.md
**Nội dung:**
- Tạo template portfolio light professional: Hero, About, Skills, Experience, Featured Project, Projects grid, Education, Contact
- Đã điền sẵn nội dung thật một phần: skills (Data Analysis, Dashboards, Tools, Web), experience tại Hasaki, 5 projects (KPI Dashboard, Sales × KPI, Bills Dashboard, PPTX Redesign, Vivi Soul Landing)
- Kèm print stylesheet để xuất PDF làm CV
