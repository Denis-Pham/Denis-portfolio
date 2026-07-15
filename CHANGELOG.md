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

0. **Đọc `DESIGN.md` (Notion design analysis) trước khi viết bất kỳ UI nào.** Áp dụng có chọn lọc: canvas giấy ấm + card trắng, CTA pill, shadow nhiều lớp mờ, hairline border, màu accent phụ (violet/teal/amber) chỉ dùng TRANG TRÍ. **Ngoại lệ của project này:** heading dùng serif Crimson Pro (chữ ký riêng, không đổi sang Inter), accent chính giữ #2563eb + gradient xanh→tím cho CTA.
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

## [2026-07-15] — Iteration 2: áp design handoff từ claude.ai Design (7 hạng mục + trang case study)
**Agent/Người thực hiện:** Claude Code (Denis đưa bộ handoff `~/Downloads/design_handoff_portfolio_v2` — output của claude.ai Design chạy trên DESIGN-SYSTEM-PROMPT.md — và yêu cầu áp vào trang)
**Files thay đổi:** index.html, script.js, style.css, case-study.html (MỚI), case-study.js (MỚI), cv.pdf + cv-vi.pdf (in lại)
**Nội dung (port thủ công sang vanilla — KHÔNG mang React/bundle của handoff vào repo):**
1. **Token bổ sung** vào `:root` index.html: `--font-display/--font-body`, `--radius-sm→2xl/pill`, `--ease-signature`, `--text-kicker/--text-label` (theme-invariant). `section[id]{scroll-margin-top:72px}` để anchor CTA không bị header dính che.
2. **Hero CTA:** primary → **"See the KPI system →"** (#featured-project), secondary → **"Get in touch"** (#contact). **DEVIATION so với handoff:** handoff đòi BỎ nút Download CV vì tưởng cv.pdf không tồn tại — SAI, repo có cv.pdf + cv-vi.pdf hoạt động (đổi theo ngôn ngữ). Giữ nút CV, hạ thành `.btn-link .cv-link`; UI_I18N đổi selector swap href sang `.cv-link`.
3. **Credibility strip** (`.cred`) dưới hero: label uppercase + 4 employer monogram (Hasaki/SIPHER/Allied/FPT, tái dùng `.co-badge`), data `credibility` + `renderCredibility()`.
4. **About extras:** "How I work" (4 nguyên tắc, grid 2 cột, số serif accent) + "A good fit for" (panel surface-2, ✓ teal) — data `principles`/`goodFit` + `renderAboutExtras()`; heading dịch qua `#principles-title`/`#goodfit-title`.
5. **Featured evidence:** `projects[0]` thêm `caseStudyId:'hasaki-kpi'` + `evidence{context,problem,role}`; renderFeaturedProject chèn `<dl class="evidence">` (3 hàng label 92px + hairline) giữa summary↔metrics và footer `.featured-cta` (nút "View case study →" → case-study.html?id=hasaki-kpi + note uppercase).
6. **Contact:** availability badge (pulse dot, class mới `.avail-badge`), body mới (class `.contact-body` — selector UI_I18N cũ theo :not() sẽ dính nhầm dòng mới nên đổi hẳn), 3 reason chips (`contactReasons` + renderer), primary "Discuss a project →" (mailto kèm subject), what-next line `.contact-next`, giữ LinkedIn/GitHub/email-plain.
7. **Mobile burger (≤820px):** `nav.links` ẩn, cụm `.nav-mobile-tools` (theme-toggle 44px + burger 44px) hiện; panel `.mobile-menu` trượt xuống (6 link ≥44px/hàng + Contact accent + lang-toggle), burger 3 gạch → X, `aria-expanded/controls`, bấm link tự đóng. Theme-toggle giờ 2 instance → script.js chuyển sang querySelectorAll + syncIcons. Xóa 2 rule nav mobile cũ ở ≤600px (chết sau thay đổi này).
8. **Trang case study MỚI** (`case-study.html` + `case-study.js`): shell vanilla + token block COPY từ index (ghi chú sync 2 chiều) + toàn bộ CSS cs-*/dp-* port từ component specs (meta grid có "Pending confirmation"/"Chờ bổ sung" cho field null — Team đang pending, KHÔNG bịa; Figure có empty-state ảnh thiếu; BeforeAfter; DesignDecision + trade-off amber; Quote; Lesson; NextProject; Pipeline 4 bước tô 4 accent). Renderer data-driven đọc `?id=` từ `CASE_STUDIES` (song ngữ đầy đủ, entry đầu: hasaki-kpi, ảnh dùng projects/*.svg sẵn có). **Đổi ngôn ngữ re-render tại chỗ** (trang không có GSAP nên không cần reload như index) + lưu chung key `lang`; theme flip như index.
9. **Print:** ẩn `.cred/.featured-cta/.nav-mobile-tools/.mobile-menu`; evidence + principles + goodfit IN RA (nội dung CV tốt — đã check bản in).
**Verify:** preview DOM — EN & VI đủ mọi khối (CTA/cred/4 principles/3 fit/3 evidence/3 reasons/avail/what-next; VI: "Xem hệ thống KPI →", cv-vi.pdf swap, "Chờ bổ sung"); case study 9 mục 01-09 + 2 BeforeAfter + 4 decisions (1 trade-off) + 3 lessons + quote + pipeline + next-project, đổi EN↔VI tại chỗ không reload; mobile 375px: burger mở/đóng + aria + hàng 55px + không tràn ngang (cả 2 trang); dark mode: token ăn đúng trên cred/goodfit/chips/burger; console sạch; in lại CẢ HAI CV (đọc lại cv.pdf 10 trang: trắng, mục mới in đẹp, featured-cta ẩn đúng). Screenshot timeout do hero 3D (bẫy env cũ) — verify DOM.
**Lý do / ghi chú:** Handoff nằm ở Downloads (KHÔNG copy React refs vào repo). CONTENT-CHECKLIST của handoff còn các mục chờ Denis: team size Hasaki (đang "Pending"), screenshot dashboard thật (đang dùng SVG minh họa), logo công ty thật, headshot, testimonial. Agent sau muốn thêm case study mới: thêm entry vào `CASE_STUDIES` trong case-study.js là xong (template tái dùng).

## [2026-07-14] — Thêm DESIGN-SYSTEM-PROMPT.md (prompt cho claude.ai Design)
**Agent/Người thực hiện:** Claude Code (Denis: "đọc lại portfolio và cho anh một prompt tạo system design để đưa qua claude design")
**Files thay đổi:** DESIGN-SYSTEM-PROMPT.md (mới)
**Nội dung:**
- Đóng gói toàn bộ design system hiện tại thành 1 prompt để Denis dán vào Project Instructions trên claude.ai (giống pattern "Vivi Soul Design System"): triết lý Notion-warm + numbers-first, đủ bảng token light/dark (kể cả --grad-*/glow/tracking sau đợt nâng cấp UI 12 hạng mục), typography scale clamp, component signatures (pill CTA, hero stats hairline panel, bento, loop card, dot-nav…), motion rules + reduced-motion, ràng buộc no-framework/no-build/print/i18n, và 5 quy tắc output (HTML chạy được, đủ 2 theme, nội dung thật, hỏi trước khi phá cách, mã ghép thẳng về index.html).
**Lý do / ghi chú:** Token trích trực tiếp từ index.html hiện tại (bản sau UI upgrade 03/07). Agent sau sửa token trong index.html thì NHỚ sync lại file prompt này.

## [2026-07-11] — Viết lại kinh nghiệm Hasaki theo phạm vi công việc
**Agent/Người thực hiện:** Neo (Hermes)
**Files thay đổi:** script.js, CHANGELOG.md
**Nội dung:**
- Viết lại 6 bullet Hasaki theo các mảng công việc: phạm vi vận hành & hiệu suất, SOP/task workflow, workflow sự kiện bán lẻ, mua hàng & đánh giá nhà cung cấp, khung KPI và tự động hóa báo cáo
- Giảm phần KPI từ 4/6 bullet xuống 2/6 bullet vì Hasaki KPI System đã có Featured Project riêng
- Giữ nguyên các số liệu đã có căn cứ: **300+ cửa hàng**, **50+ KPI**, **100+ trường dữ liệu**, **5 ngày → real-time**, **3 ngày → ~30 phút**
**Lý do / ghi chú:** Entry cũ thiên về giới thiệu một dự án KPI hơn là phản ánh đầy đủ vai trò Operations Performance Specialist. Nội dung mới chỉ dùng phạm vi và ví dụ đã xuất hiện trong CV/portfolio hoặc ghi chú công việc của Denis.

## [2026-07-03] — Bộ kit tự sửa nội dung cho Denis (EDIT-CONTENT.md + 2 file .bat)
**Agent/Người thực hiện:** Claude Code (Denis: "có cách nào để anh sửa nội dung chữ mà ra kết quả ngay không phải nhờ em")
**Files thay đổi:** EDIT-CONTENT.md (mới), start-preview.bat (mới), rebuild-cv.bat (mới)
**Nội dung:**
- `EDIT-CONTENT.md`: bảng tra "muốn sửa gì → mở file nào" (4 arrays script.js + quy tắc UI_I18N sửa CẢ index.html lẫn script.js), cú pháp `{en, vi}` và `**metric**`, cách debug trang trắng (F12), 2 cách deploy (GitHub web editor / git push), nhắc bump `?v=`
- `start-preview.bat`: double-click → mở server 5173 + trình duyệt (đã verify python 3.11 + Chrome có trên máy)
- `rebuild-cv.bat`: in lại cv.pdf + cv-vi.pdf bằng headless Chrome (cần preview đang chạy)
**Lý do / ghi chú:** Site vốn data-driven nên self-service được — thiếu mỗi hướng dẫn + launcher. Nội dung thuần chữ Denis tự sửa; layout/màu/hiệu ứng vẫn gọi Claude.

## [2026-07-03] — Fix 3D background không hiện: gate width chỉ check 1 lần lúc load
**Agent/Người thực hiện:** Claude Code (Denis: "lỗi không thấy hình 3d ở background")
**Files thay đổi:** bg-3d.js, index.html
**Nội dung:**
- **Root cause:** gate `window.innerWidth >= 900` trong bg-3d.js chỉ chạy MỘT lần lúc load. Tab preview/pre-render load trang khi viewport = 0px → rơi nhánh tắt, `#stage` bị `display:none` vĩnh viễn dù sau đó cửa sổ phình to. (Đây cũng là lý do session trước phải dùng `?force3d`.)
- **Fix:** bọc gate vào `maybeBoot()` — gọi lại khi `resize`, `visibilitychange`, `pageshow`; boot xong thì no-op. Load hẹp → phóng to ≥900px là 3D tự khởi động, không cần reload.
- **Kèm theo:** đánh version `?v=20260703` cho script.js / bg-3d.js / scroll-fx.js trong index.html — bust cache trình duyệt khi JS đổi (đổi JS lần sau nhớ bump). Trước đó trang chạy JS cũ từ heuristic cache dù server đã có bản mới.
**Lý do / ghi chú:** Verify: load 600px (3D off đúng) → resize 1280px → boot (8 pieces, 6 draws, canvas block), không lỗi console. **Bẫy env đáng nhớ:** `preview_resize` (CDP emulation) đổi innerWidth mà KHÔNG bắn event `resize` — verify resize-handler phải `window.dispatchEvent(new Event('resize'))` bằng tay.

## [2026-07-03] — Nâng cấp UI 12 hạng mục theo frontend-design + UI/UX Pro Max + trend Dribbble 2026
**Agent/Người thực hiện:** Claude Code (theo yêu cầu Denis; nguồn guidance: anthropics/skills frontend-design, nextlevelbuilder/ui-ux-pro-max-skill, trend research 2026). Plan tổng hợp bởi workflow 5 lens (typography/hero/layout/darkmode/motion) + 1 synthesis.
**Files thay đổi:** index.html, style.css, script.js, scroll-fx.js, bg-3d.js, cv.pdf + cv-vi.pdf (in lại)
**Nội dung:**
1. **Reduced-motion đầy đủ:** CSS block tắt pulse/smooth-scroll/transition; bg-3d freeze `t=1000` (skyline mọc đủ, pose tĩnh) + gate mọi tích lũy `+=` (floaters, About pages, Projects windows)
2. **Hero thesis reorder:** tagline dời lên trước stats, thành dòng thesis serif Crimson (clamp 21-30px, strong=accent); role hạ thành kicker uppercase 13px
3. **Hero entrance có đạo diễn:** GSAP timeline ~1.5s (thay stagger đều cũ) + h1 clip-path wipe (kinetic signature duy nhất)
4. **Hero stats = 1 panel chia hairline** (bỏ 4 card rời); tick accent 24px thay bar full-width; `tabular-nums` chống giật count-up; fold 2 cột có border-top/left đúng
5. **Typography scale:** h1 → clamp 44/6.5vw/76 lh 1.05; h2 → clamp 32/4vw/44; contact h2 54px; `text-wrap: balance`; preconnect fonts + bỏ weight thừa (Inter 300, Crimson 500); pin weight 600 cho thumb serif
6. **Token gradient-fill + dark glow:** `--grad-a/b(-strong)`, `--cta-glow/--pill-glow/--num-glow/--dot-idle` — 9 chỗ fill đổi sang token; dark: hover SÁNG hơn, CTA/pill/số có glow, fix contrast trắng-trên-pastel; CTA hover cross-fade 350ms qua ::before (hết snap); press 60ms; `:focus-visible` toàn site
7. **3D wireframe theo theme:** ink light/dark (trước đây dark mode wireframe tàng hình trên nền #1a1a18), ground slab hết chói, MutationObserver theo `data-theme`
8. **Measure caps:** timeline ul 72ch (trước ~150ch), about 62ch, featured 60ch, contact 54ch centered
9. **Tracking 2 bậc** `--track-kicker: 0.2em`/`--track-label: 0.08em` thống nhất 8 kiểu label; **fix bug:** `.contact p` đè `.section-kicker` → kicker Contact từng render 17px xám (giờ `:not(.section-kicker)`)
10. **Skills bento** (≥901px): card thesis "Operations & Performance Systems" span 4/6 + list 2 cột; 6 card = 3 hàng kín
11. **Projects bento** (≥1000px): card đầu full-width nằm ngang (lead), card có items[] span 2 (data-driven trong renderProjects); grid 3 cột kín
12. **Featured project = white card Notion** + metric tiles surface-2; print strip về kiểu typographic cũ
- **Thêm `?theme=dark|light`** vào no-flash script (tooling chụp headless + link chia sẻ, cùng pattern ?lang/?print)
**Lý do / ghi chú:** Verify: DOM checks EN+VI light+dark qua preview (transition-throttle trap đã né bằng `transition:none` trước khi đo); screenshot headless light+dark (hero) + full-page light qua `?print=1` (GSAP kẹt giữa timeline dưới virtual-time nếu không có flag); 2 CV in lại — trang 1 đọc name → kicker → thesis → panel, metrics print vẫn typographic. Skill cài vào ~/.claude/skills bị permission chặn — dùng in-place từ scratchpad. Screenshot lưu scratchpad (hero-light/hero-dark/full-light.png).

## [2026-06-15] — Sửa page-break khi in CV (mỗi section sang trang mới)
**Agent/Người thực hiện:** Claude Code (theo yêu cầu Denis: "cv xấu quá phần lớn bị cắt đôi, để phần lớn ở đầu trang")
**Files thay đổi:** style.css, cv.pdf, cv-vi.pdf (in lại)
**Nội dung:**
- `@media print`: thêm `break-before: page` cho `#skills, #experience, #featured-project, #projects, #education` → mỗi section lớn bắt đầu ở ĐẦU trang mới (kicker không còn kẹt lẻ loi cuối trang). `#about` vẫn flow dưới hero ở trang 1
- Mở rộng `break-inside: avoid` cho `.featured-project-card, .stat, .project-items li` (trước chỉ có timeline/project/skill/education); thêm `break-after: avoid` cho kicker + h2 + h3 trong card (giữ tiêu đề dính nội dung)
- In lại cv.pdf (EN, 9 trang) + cv-vi.pdf (VI, 9 trang) — verify từng trang: section ở đầu trang, không card bị cắt đôi
**Lý do / ghi chú:** Trade-off: CV dài hơn (7→9 trang) và có khoảng trắng cuối vài trang, đổi lại bố cục sạch đúng yêu cầu. Lệnh in: xem entry CV trước (`?print=1` / `?print=1&lang=vi`, profile tạm trống).

## [2026-06-15] — Bỏ 3 project khỏi portfolio
**Agent/Người thực hiện:** Claude Code (theo yêu cầu Denis)
**Files thay đổi:** script.js
**Nội dung:**
- Xóa 3 project khỏi `projects` array: "Quy Định Shop PPTX Redesign", "Lark Task Manager", "Claude Code Telegram Bot" (Bot Telegram điều khiển Claude Code)
- Còn lại 7 project: Hasaki KPI System (featured) + 6 trong grid (Company-Wide Task Workflow System, Hermes, Combined Sales × KPI, Bills Dashboard, Operations Workflows, Vivi Soul)
**Lý do / ghi chú:** Verify preview: grid còn 6, 3 project đã bỏ không còn dấu vết, không lỗi console. Còn 3 file SVG thumbnail mồ côi (`projects/pptx-redesign.svg`, `lark-task-manager.svg`, `telegram-claude-bot.svg`) — chưa xóa, chờ xác nhận.

## [2026-06-15] — Gộp 4 workflow vận hành thành 1 card "Operations Workflows"
**Agent/Người thực hiện:** Claude Code (Denis: "gộp lại đi")
**Files thay đổi:** script.js, style.css, projects/operations-workflows.svg (mới); XÓA store-opening/store-closure/admin-procurement/vendor-evaluation.svg; cv.pdf + cv-vi.pdf (in lại)
**Nội dung:**
- Thay 4 card workflow riêng (Khai trương / Thanh lý / Mua hàng HC / Đánh giá NCC) bằng **1 card "Operations Workflows"** (VI: "Bộ Quy trình Vận hành") — câu intro ngắn + danh sách 4 quy trình con bên trong.
- **Cơ chế mới `items`:** project object có thể kèm `items: [{en,vi}]`; `renderProjects` render thành `<ul class="project-items">` (chèn HTML nên `<strong>` in đậm tên quy trình). CSS `.project-items` trong style.css: list gọn, chấm gradient accent, tên đậm màu fg.
- SVG tổng `operations-workflows.svg`: lưới 2×2 mini-icon (cửa hàng/awning, building+check, cart, bars+sao) màu amber/teal/blue/violet.
- Xóa 4 SVG cũ (giờ thành rác sau khi gộp) — surgical cleanup.
**Lưới Projects giờ gọn còn 9 card grid + 1 featured:** Task Workflow System → Hermes → Telegram Bot → Lark → Combined Sales×KPI → Bills → PPTX → **Operations Workflows** → Vivi Soul.
**Lý do / ghi chú:** Denis thấy 13 dự án quá dài cho cú quét 10-15s của HR. Verify preview: 9 card, Operations Workflows liệt kê đủ 4 item (EN), SVG parse OK, console sạch. In lại CẢ HAI CV (danh sách item hiển thị trong CV vì print không ẩn `.project-items`).

## [2026-06-15] — Thêm project flagship: Company-Wide Task Workflow System
**Agent/Người thực hiện:** Claude Code (Denis: "project kiểm soát task workflow toàn công ty thì sao không đưa vào")
**Files thay đổi:** script.js, projects/task-workflow-system.svg (mới), cv.pdf + cv-vi.pdf (in lại)
**Nội dung:**
- Thêm card **"Company-Wide Task Workflow System"** làm card ĐẦU lưới (projects[1], ngay sau Featured Hasaki KPI) — đây là lớp "task" giữa SOP → KPI, một trong các việc lớn nhất của Denis, trước đây chỉ nằm trong Experience/Featured chứ chưa có card riêng.
- Mô tả EN/VI: biến SOP thành workflow công việc hằng ngày, giao & theo dõi hoàn thành/tuân thủ trên 300+ cửa hàng, dữ liệu chảy thẳng vào chấm điểm KPI. Tags: Workflow system · Task tracking · 300+ stores · Compliance.
- SVG `task-workflow-system.svg`: bảng giám sát tuân thủ — nhiều dòng cửa hàng, progress bar mức hoàn thành task + chấm trạng thái xanh/cam/đỏ.
**Cụm Projects giờ:** 1 Featured + 12 card grid (Task Workflow → Hermes → Telegram → Lark → Combined Sales×KPI → Bills → PPTX → 4 workflow → Vivi Soul).
**Lý do / ghi chú:** Verify preview: 12 card, Task Workflow đứng đầu, SVG OK, console sạch. In lại CẢ HAI CV. **Số liệu giữ ở mức 300+ stores (đã có căn cứ); chờ Denis xác nhận scope "toàn công ty" có rộng hơn 300+ store Cosmetics không, và có metric ấn tượng nào (vd % tuân thủ, số task/ngày) để gắn thêm.** Lưới đang dài (13 dự án) — đã gợi ý Denis cân nhắc gộp 4 workflow vận hành thành 1 card.

## [2026-06-15] — Thêm 2 project: Claude Telegram Bot + Lark Task Manager
**Agent/Người thực hiện:** Claude Code (Denis: "bổ sung thêm các project tôi đã làm")
**Files thay đổi:** script.js, projects/telegram-claude-bot.svg + lark-task-manager.svg (mới), cv.pdf + cv-vi.pdf (in lại)
**Nội dung:** Thêm 2 card vào cụm AI/automation (ngay sau Hermes, trước Combined Sales×KPI). Nguồn từ chính workspace của Denis (`claude-telegram-bot/`, `lark-task-manager/`):
  - **Claude Code Telegram Bot** — bot Telegram điều khiển Claude Code headless trên máy (whitelist user + sandbox). Tags: Python · Telegram Bot · Claude Code · Automation. SVG: điện thoại chat → terminal Claude Code làm việc.
  - **Lark Task Manager** — toolkit Python trên Lark Bitable, dựng hệ thống lập kế hoạch đa bảng (objectives/action plan/Gantt, liên kết bản ghi, công thức deadline), đang phát triển thành agent Claude. Tags: Python · Lark/Bitable API · Automation · AI agent. SVG: 2 bảng Bitable liên kết + dải Gantt.
**Cụm Projects giờ (11 card grid + 1 featured):** Hermes → Claude Telegram Bot → Lark Task Manager → Combined Sales×KPI → Bills → PPTX Redesign → 4 workflow → Vivi Soul.
**Lý do / ghi chú:** Verify preview: 11 card đúng thứ tự, 2 SVG parse OK, console sạch. In lại CẢ HAI CV. **Chưa thêm `yuvomi`** — maintainer GitHub là `ulsklyc`, chưa rõ là project của Denis hay anh chỉ self-host/đóng góp → chờ Denis xác nhận. Nếu Denis có project khác (vd english-levelup) ở ngoài workspace này thì gửi chi tiết.

## [2026-06-15] — Thêm project Hermes (agent AI tự host Docker), đặt đầu nhóm Projects
**Agent/Người thực hiện:** Claude Code (Denis: "AI agent Hermes đang xây thành trợ lý AI… tự xây cài riêng trên Docker")
**Files thay đổi:** script.js, projects/hermes-agent.svg (mới), cv.pdf + cv-vi.pdf (in lại)
**Nội dung:**
- Thêm card **"Hermes — Personal AI Agent"** làm card ĐẦU TIÊN sau Featured (projects[1]) để nổi chất AI-forward.
- Mô tả EN/VI: agent AI Denis tự xây & tự host trên Docker, làm trợ lý cá nhân (review/soạn nội dung, sắp xếp việc, tác vụ vận hành), đang mở rộng. Có ghi proof point thật: chính Hermes đã chạy bản audit câu chữ cho trang này (đúng theo entry 2026-06-13).
- Tags: AI agent · Docker · Self-hosted · Claude. Không có live/github (self-host nội bộ).
- SVG `hermes-agent.svg`: hub agent trung tâm (spark tím) nối tới 4 node năng lực (review/tasks/data/chat) + stack "container layers" gợi ý self-host Docker.
**Lý do / ghi chú:** Verify preview EN: grid 9 card, Hermes đứng đầu, SVG fetch/parse OK (preview tab nền throttle nên naturalWidth=0 — bình thường, headless print render đúng). Đọc lại cv.pdf: Hermes là project đầu, nền trắng. Đã in lại CẢ HAI CV. **Cần Denis xác nhận:** model (đang để tag "Claude" theo hệ sinh thái của anh) và mô tả năng lực cho khớp thực tế Hermes.

## [2026-06-15] — CV tải về theo ngôn ngữ: EN → cv.pdf, VI → cv-vi.pdf
**Agent/Người thực hiện:** Claude Code (Denis: "chọn tiếng anh thì down tiếng anh, chọn tiếng việt thì down bản tiếng việt")
**Files thay đổi:** script.js, cv-vi.pdf (mới)
**Nội dung:**
- **`?lang=vi|en` ưu tiên hơn localStorage** khi khởi tạo `LANG` (script.js) — để lệnh in headless ép được từng ngôn ngữ. Không có param thì vẫn theo localStorage, mặc định EN.
- **Nút Download CV trỏ file theo ngôn ngữ:** thêm 1 entry UI_I18N `{ sel: '.hero .cta .btn-secondary', attr: 'href', en: 'cv.pdf', vi: 'cv-vi.pdf' }`. EN ship sẵn href=cv.pdf trong HTML; VI thì applyUI đổi sang cv-vi.pdf.
- **Tạo cv-vi.pdf** — bản CV tiếng Việt hoàn chỉnh (tên "Phạm Mạnh Đức", toàn bộ section + tiêu đề mục dịch sang VI; tiêu đề chức danh trong Experience + tên project tiếng Anh giữ nguyên như trên web).
**Lệnh in CV (cập nhật — giờ có 2 bản):**
- EN: `... --print-to-pdf="cv.pdf" ... "http://localhost:5173/?print=1"`
- VI: `... --print-to-pdf="cv-vi.pdf" ... "http://localhost:5173/?print=1&lang=vi"`
- Mỗi lần đổi nội dung portfolio phải in lại **CẢ HAI** file. Dùng profile tạm trống + `Start-Sleep 18` (Drive sync) như cũ.
**Lý do / ghi chú:** Verify preview: EN → nút "Download CV (PDF)" href=cv.pdf; VI → "Tải CV (PDF)" href=cv-vi.pdf; console sạch. Đọc lại cv-vi.pdf 7 trang: nền trắng, 300+ đúng, tiếng Việt đầy đủ.

## [2026-06-15] — Dịch tên theo ngôn ngữ: EN "Denis Pham" ↔ VI "Phạm Mạnh Đức"
**Agent/Người thực hiện:** Claude Code (Denis: "chuyển qua tiếng việt mà tên Denis Pham không chuyển thành Phạm Mạnh Đức")
**Files thay đổi:** index.html, script.js
**Nội dung:**
- Tên hiện ở 3 chỗ nhìn thấy: logo header, hero `<h1>`, footer. Trước đây cứng "Denis Pham" cả 2 ngôn ngữ.
- Logo và footer có span con (`.dot`, `.logo-role`, `#year`) nên KHÔNG set textContent thẳng được → bọc tên vào span riêng: `.logo-name` và `.footer-name`. Hero h1 là text thuần nên dùng selector `.hero h1` trực tiếp.
- Thêm 3 entry vào `UI_I18N`: `.logo-name`, `.hero h1`, `.footer-name` → EN "Denis Pham", VI "Phạm Mạnh Đức".
**Lý do / ghi chú:** Verify preview: VI cả 3 chỗ thành "Phạm Mạnh Đức" (dấu chấm + "Operations Excellence" còn nguyên), EN vẫn "Denis Pham", console sạch. cv.pdf KHÔNG cần in lại — CV xuất bản EN nên giữ "Denis Pham", việc bọc span không đổi text hiển thị.

## [2026-06-15] — Thêm 4 workflow vận hành vào mục Projects
**Agent/Người thực hiện:** Claude Code (Denis yêu cầu: bổ sung các workflow đã xây thành công)
**Files thay đổi:** script.js, projects/store-opening.svg + store-closure.svg + admin-procurement.svg + vendor-evaluation.svg (mới), cv.pdf (in lại)
**Nội dung:**
- Thêm 4 project card (đặt trước Vivi Soul để gom nhóm công việc vận hành, project cá nhân ở cuối):
  1. **New Store Opening Workflow** — Quy trình khai trương chi nhánh mới
  2. **Store Closure & Liquidation Workflow** — Quy trình thanh lý mặt bằng kinh doanh
  3. **Admin Procurement Workflow** — Quy trình mua hàng hành chánh
  4. **Vendor Evaluation Template & Skill** — Template & skill mẫu đánh giá nhà cung cấp
- Mỗi card có `summary {en, vi}`, tags, và 1 SVG thumbnail minh họa cùng phong cách bộ SVG cũ (viewBox 640×400, header bar + dot màu, dùng palette brand; 3 cái đầu là stepper 4 bước, vendor-evaluation là bảng so sánh có cột NCC trúng tô xanh + huy hiệu sao). Không có live/github (đây là quy trình nội bộ, không phải web app).
- **`title` giờ hỗ trợ song ngữ:** các project mới dùng `title: {en, vi}`. Renderer (`renderProjects`, `renderFeaturedProject`) đổi `${p.title}` → `${t(p.title)}` ở cả `<h3>` lẫn `alt` ảnh — chuỗi thường đi qua `t()` không đổi nên các card cũ (title tiếng Anh) giữ nguyên, card mới dịch EN/VI.
**Lý do / ghi chú:** Verify trên preview: 8 card trong grid (slice(1)), 4 SVG mới load OK (naturalWidth 240), title EN↔VI dịch đúng, console sạch. cv.pdf in lại đã có đủ 4 card. (Screenshot timeout do hero 3D WebGL — verify bằng DOM như thường lệ.)

## [2026-06-15] — Đồng bộ lại cv.pdf với portfolio + fix 2 lỗi khi in CV
**Agent/Người thực hiện:** Claude Code (Denis: "check bản CV down từ portfolio với trang portfolio xem có lệch không")
**Files thay đổi:** style.css, scroll-fx.js, cv.pdf (in lại)
**Bối cảnh:** `cv.pdf` (nút Download CV) lệch nội dung so với portfolio vì in trước đợt sửa 13/06. So `cv.pdf` cũ ↔ portfolio hiện tại thấy 6 điểm lệch: số store hero (cũ in ra số count-up dở), tiêu đề About ("Numbers tell stories…" → "I turn operating data…"), About đoạn 1 ("write the SOPs/always agree" → "manage the SOP system/aligned"), bằng HCMUT (Engineering → degree), bullet+skill pptxgenjs (đã bỏ), realtime → real-time. (File topcv gốc `PHAM-MANH-DUC-Project Manager.pdf` đã outdated — bỏ qua; `cv-new.pdf` thực ra là bản in portfolio cũ, không phải CV riêng.)
**Nội dung:**
- **In lại cv.pdf** từ portfolio hiện tại → khớp đủ 6 điểm trên.
- **Fix lỗi CV in ra nền tối:** từ 13/06 thêm dark mode mặc định theo OS; Chrome headless trên máy đang ở dark nên CV in ra nền đen chữ mờ. Print stylesheet (`style.css`) thêm khối ép sáng trong `@media print`: override các biến `:root[data-theme="dark"]` về giá trị sáng bằng `!important` (custom property có `!important` mới thắng được khối dark inline load sau). → CV **luôn in nền trắng** dù người xem đang bật dark mode.
- **Fix lỗi count-up nhảy số:** ô "RETAIL STORES TRACKED" in ra số ngẫu nhiên (70/106/111…) vì Chrome chụp PDF giữa lúc animation đếm 0→300 đang chạy. `scroll-fx.js` thêm cờ `?print=1`: gộp vào guard đầu file để **bỏ qua toàn bộ animation** (count-up, word-reveal, intro, scrollspy). Lệnh in CV giờ trỏ `http://localhost:5173/?print=1`. → stat in ra đúng **300+**.
**Lệnh in lại CV:** `chrome --headless=new --disable-gpu --no-pdf-header-footer --user-data-dir=<tmp trống> --print-to-pdf="cv.pdf" --virtual-time-budget=12000 "http://localhost:5173/?print=1"` rồi `Start-Sleep 18` (Drive sync lag), verify bằng `git hash-object`. **Nhớ dùng `?print=1` và profile tạm trống** (localStorage rỗng → ra bản EN, không dính dark mode của profile thật).
**Lý do / ghi chú:** Đã verify đọc lại cv.pdf 6 trang: nền trắng, 300+ đúng, nội dung khớp portfolio. Số điện thoại/địa chỉ trong topcv gốc vẫn KHÔNG đưa lên CV/portfolio public.

## [2026-06-15] — Sửa câu chữ dòng email dự phòng (VI)
**Agent/Người thực hiện:** Claude Code (theo yêu cầu Denis)

- `script.js` — sửa bản dịch VI của `.email-plain`: "Hoặc viết thẳng cho tôi qua …" → **"Hoặc trao đổi trực tiếp với tôi qua email: …"** (câu cũ đọc kỳ).
- Bản EN giữ nguyên ("Or write to me directly at …").

**Lý do / ghi chú:** Denis báo câu VI viết kỳ. Đã verify trên preview (lang=vi): dòng hiển thị đúng câu mới.

## [2026-06-13] — Sửa nội dung theo đính chính của Denis (SOP, pptxgenjs, bằng cấp)
**Agent/Người thực hiện:** Claude Code (theo yêu cầu Denis)
**Files thay đổi:** index.html, script.js
**Nội dung:**
- **SOP — quản lý chứ không viết:** mọi chỗ "write/author/design SOP" → "manage the SOP system" (VI: "viết/soạn/thiết kế SOP" → "quản lý hệ thống SOP"). Gồm: loop card bước 1, bullet Hasaki 1–2, mục kỹ năng, đoạn About p1
- **Bỏ pptxgenjs/PowerPoint redesign:** xóa bullet kinh nghiệm Hasaki, mục kỹ năng "pptxgenjs (PowerPoint automation)" và chip "pptxgenjs" ở hero. **Giữ** project card "Quy Định Shop PPTX Redesign" (dự án thật) — chờ xác nhận nếu muốn bỏ luôn
- **Bằng cấp HCMUT:** "Kỹ sư" → "Cử nhân" (EN: "Bachelor of Engineering" → "Bachelor's degree") — Quản lý Công nghiệp
**Lý do / ghi chú:** Verify preview EN+VI: 0 "write/viết SOP", 0 "Kỹ sư", bullet Hasaki còn 6, chip pptxgenjs đã bỏ, degree đúng, không lỗi console.

## [2026-06-13] — Rà soát & sửa câu chữ theo audit của Hermes (EN + VI)
**Agent/Người thực hiện:** Claude Code (theo yêu cầu Denis, nguồn: portfolio-language-audit-denis.md)
**Files thay đổi:** index.html, script.js
**Nội dung:**
- **Lỗi khách quan (áp toàn bộ):** `realtime` → `real-time` (EN) / `thời gian thực` (VI) ở mọi chỗ user-facing (hero stat, loop card, bullet Hasaki, featured project); bỏ slang nội bộ "Bắn task" → "Chuyển thành công việc" (EN: "Dispatch the tasks" → "Translate into tasks"); làm dịu overclaim "scores always agree with each other" → "keeps ... aligned" / "được giữ nhất quán"; "↻ scores sharpen the next SOP" → "↻ KPI results improve the next SOP"
- **Giảm trộn Anh-Việt ở bản VI:** "performance" → "hiệu suất" (hero meta, experience intro, about, skill title, bullet); "trong quality" → "trong chất lượng"; "retail performance" → "mảng hiệu suất bán lẻ"; "task workflow" → "workflow công việc hằng ngày"; "tool nội bộ trong một buổi" (casual/overclaim) → "xây nhanh công cụ nội bộ"
- **Đổi giọng About sang trực diện (theo lựa chọn của Denis):** headline "Numbers tell stories. I help people listen." → "I turn operating data into decisions teams can act on."; section-lede bớt thơ, nêu rõ 10+ năm
- **Footer VI:** thêm i18n cho link footer → "Giới thiệu / Liên hệ" (trước đó vẫn là About/Contact tiếng Anh ở chế độ VI)
- Featured project + contact: viết lại gọn theo audit; cập nhật cả field `en` lẫn `vi` trong UI_I18N cho đồng bộ với HTML
**Lý do / ghi chú:** Verify trên preview cả EN và VI: 0 "realtime", 0 "performance"/"Bắn task" sót trong bản VI, footer dịch đúng, không lỗi console. **Giữ nguyên** các đề xuất chỉ mang tính tùy chọn (tách câu dài, đổi "Write the SOP"→"Define"...) để bám voice gốc. cv.pdf chưa in lại — copy đã đổi nên cần tạo lại nếu muốn nút Download CV khớp.

## [2026-06-13] — Thêm chế độ màn hình tối (dark mode)
**Agent/Người thực hiện:** Claude Code (theo yêu cầu Denis)
**Files thay đổi:** index.html, script.js
**Nội dung:**
- Thêm khối `:root[data-theme="dark"]` override toàn bộ palette (bg/surface/fg/border/shadow + accent sáng hơn cho contrast) — lật biến là toàn site đổi màu, không phải sửa từng rule
- Đưa 3 chỗ hardcode màu sáng sang biến để dark mode tự theo: topnav bg → `--nav-bg`, `.btn-secondary` bg trắng → `--surface`, hero gradient top → `--hero-top`
- Override riêng `.dot-nav a::after` trong dark (tooltip trước đó nền = `--fg` → trắng-trên-trắng)
- Nút toggle 🌙/☀️ trong header (cạnh lang-toggle); inline script trong `<head>` apply theme TRƯỚC khi paint (no-flash); chọn theme lưu `localStorage('theme')`, mặc định theo OS `prefers-color-scheme`
- Print: nút tự ẩn vì print stylesheet đã ẩn cả `header.topnav`
**Lý do / ghi chú:** Verify trên preview: toggle lật body/nav/card/button + accent đúng, lưu localStorage, không lỗi console. (Screenshot timeout do hero 3D WebGL — verify bằng DOM.)

## [2026-06-13] — Rút gọn footer
**Agent/Người thực hiện:** Claude Code (theo yêu cầu Denis)
**Files thay đổi:** index.html
**Nội dung:**
- Footer rút gọn còn "© [year] Denis Pham · About · Contact"; bỏ đoạn "Built with HTML, CSS, JS · Hosted on GitHub Pages"
**Lý do / ghi chú:** Denis thấy footer viết nhiều, muốn đơn giản.

## [2026-06-12] — Sidebar v2: thay panel 232px bằng dot nav tối giản (theo ý Denis)
**Agent/Người thực hiện:** Claude Code (Denis: "sidebar làm sai ý anh rồi, làm đơn giản là những dấu chấm kéo to" — tham khảo dennis95.netlify.app, link đã chết 404)
**Files thay đổi:** index.html, script.js, scroll-fx.js, style.css, cv.pdf (tạo lại), CHANGELOG.md
**Nội dung:**
- **Bỏ hẳn** `<aside class="sidebar">` 232px (identity + nav chữ + social) và `body padding-left` — layout về full-center với wrap 1240px
- **Thêm `.dot-nav`** (≥1100px): cột 6 chấm tròn 9px cố định bên trái (left 22px, giữa màn hình theo chiều dọc). Hover: chấm phóng 1.35× + tooltip tên section trượt ra (nền tối, dịch theo ngôn ngữ qua attr `data-label`). **Active: chấm kéo dài thành pill dọc 30px gradient xanh→tím** — đúng kiểu "dấu chấm kéo to"
- scroll-fx.js: mirror active từ scrollspy sang `.dot-nav a` (đổi từ `.side-nav`)
- UI_I18N: applyUI hỗ trợ field `attr` để dịch attribute (tooltip không phải textContent); 2 nút lang toggle giờ chỉ còn ở header
- Print: ẩn `.dot-nav`
- **Bẫy debug đáng nhớ:** trong preview env (tab nền), CSS transition KHÔNG tiến triển → getComputedStyle trả mãi giá trị đầu transition (height kẹt 9px dù rule 30px đúng). Muốn verify giá trị cuối phải `el.style.transition='none'` trước khi đo. Đã mất ~5 vòng debug vì tưởng cascade hỏng
**Lý do / ghi chú:** Sidebar panel to chiếm chỗ và trùng chức năng topnav; dot rail giữ được wow-factor mà không tranh không gian. Code thật chạy đúng — trên trình duyệt thật chấm stretch mượt với cubic-bezier.

## [2026-06-12] — Sidebar trái + title header + nới layout 1240px + chuyển ngữ EN/VI
**Agent/Người thực hiện:** Claude Code (Denis yêu cầu: title ngắn trên đầu trang, sidebar trái, trang rộng ra, chuyển đổi EN/VI)
**Files thay đổi:** index.html, script.js, scroll-fx.js, style.css, cv.pdf (tạo lại), CHANGELOG.md
**Nội dung:**
- **Layout rộng hơn:** `.wrap` max-width 1080 → **1240px**, padding 32 → 36px
- **Header:** thêm `.logo-role` "Operations Excellence" cạnh logo (uppercase nhỏ, ẩn ≤760px)
- **Sidebar trái (≥1280px):** fixed 232px — avatar DP gradient + tên + title, nav dọc 6 mục (active màu accent-soft, đồng bộ scrollspy qua setActive trong scroll-fx.js), cuối sidebar là lang toggle + social links. `body { padding-left: 232px }` đẩy nội dung sang phải, lấp khoảng trống cũ. Topnav + pill giữ nguyên
- **i18n EN/VI hoàn chỉnh:** `LANG` từ localStorage, helper `t()` — chuỗi dịch là object `{en, vi}` trong data arrays (skills/experience bullets/projects summaries/education/featured metrics ĐÃ DỊCH HẾT sang tiếng Việt); chrome tĩnh dịch qua `UI_I18N` (selector → bản dịch, hỗ trợ html) gồm nav, hero, stats, about + loop card, section headers, contact. **Đổi ngữ = lưu localStorage + reload** (word-reveal của GSAP tách h2 thành span lúc load nên reload sạch hơn re-render). Mặc định EN
- 2 nút toggle EN/VI: header (mọi cỡ màn hình) + sidebar; nút active sơn gradient
- Print: ẩn `.sidebar`/`.lang-toggle`, body padding-left về 0; cv.pdf in bản EN (headless Chrome không có localStorage)
- Verify: 1440px sidebar hiện + đồng bộ active khi cuộn (Skills); VI phủ đủ nav/hero/stats/about/skills/experience/featured/education/contact; toggle round-trip EN↔VI ok; mobile 375px không overflow, toggle vẫn dùng được; console sạch
**Lý do / ghi chú:** Selector trong UI_I18N phụ thuộc cấu trúc index.html — agent sửa markup hero/about/loop card NHỚ kiểm tra lại UI_I18N trong script.js. Chuỗi mới thêm vào trang phải có cặp {en, vi}.

## [2026-06-12] — Favicon + brand badge công ty + làm rõ stat "5d → live"
**Agent/Người thực hiện:** Claude Code (Denis yêu cầu: favicon, brand icon công ty cũ, và "5d - live" người xem không hiểu)
**Files thay đổi:** favicon.svg (mới), index.html, script.js, style.css, cv.pdf (tạo lại), CHANGELOG.md
**Nội dung:**
- **favicon.svg:** monogram "DP" trắng trên nền gradient xanh→tím (đồng bộ CTA), bo góc 14px; link rel=icon + theme-color #2563eb
- **Brand badges trong Experience:** mỗi entry trong `experience` (script.js) có thêm `brand: { mark, color }` — monogram 26px theo màu thương hiệu thật: Hasaki xanh lá #2e7d52, SIPHER đen tím #1c1a33, Allied xanh dương #1e5aa8, VinMart+ đỏ #d8232a, FPT cam #f37021, KIMDUC teal #0e7490. Renderer `brandBadgeHTML()` ưu tiên `brand.logo` (file trong /logos/) nếu có — **không hotlink logo từ web** (Google s2 favicons chỉ trả icon quả cầu generic, hasaki.vn/fpt.edu.vn chặn curl trả HTML). Denis cung cấp file logo thật thì gắn `brand.logo` là xong
- **Stats trước/sau dễ hiểu:** "5d → live" đổi thành dòng cũ gạch ngang ~~5 days~~ phía trên + giá trị mới to **live**, label "KPI refresh — Excel batch → realtime"; tương tự ~~3 days~~ **30 min** "To build the monthly report". Áp dụng cả hero stats lẫn featured metrics (renderer hỗ trợ `m.was`); `.featured-metrics` thêm `align-items: end` để block không có "was" vẫn thẳng hàng
- Print CSS: ẩn `.co-badge` (in không có background → chữ trắng vô hình)
- Lưu ý kỹ thuật: Chrome headless ghi PDF thẳng vào Google Drive path có thể bị sync lag — file "tàng hình" vài chục giây rồi mới hiện; kiểm tra bằng `git hash-object` thay vì `Get-Item`
**Lý do / ghi chú:** Gạch-ngang-trước/sau là cách kể "đã làm được gì" không cần lời; format mũi tên cũ "5d → live" bắt người xem tự giải mã.

## [2026-06-12] — Tái định vị chức danh: Operations Excellence & Performance Management
**Agent/Người thực hiện:** Claude Code (Denis chốt sau khi bàn định vị nghề nghiệp)
**Files thay đổi:** index.html, cv.pdf (tạo lại), CHANGELOG.md
**Nội dung:**
- Headline hero + `<title>` + meta description + og:title/description đổi từ "Operations Performance Specialist" → **"Operations Excellence & Performance Management"** — đúng từ khóa thị trường OpEx/Performance Management mà recruiter chuỗi bán lẻ tìm
- Tagline hero đổi thành câu định vị: *"I design how 300+ stores run — then build the systems that measure it. SOP → daily tasks → KPI scoring: one loop, one owner."*
- **QUAN TRỌNG — giữ nguyên có chủ đích:** chức danh trong Experience (script.js, Hasaki) vẫn là "Operations Performance Specialist" — đây là chức danh chính thức trong hợp đồng, phải khớp khi HR check reference. Headline là ĐỊNH VỊ, experience là SỰ THẬT. Agent nào sửa experience role phải hỏi Denis trước
- Lý do không chọn hướng Data Analyst: tool là phương tiện, 10 năm kinh nghiệm vận hành mới là giá trị chính
**Lý do / ghi chú:** "Specialist" bán rẻ scope thực tế (own toàn bộ vòng lặp một khối ngành hàng, 300+ store). Denis nên đồng bộ LinkedIn headline theo hướng này.

## [2026-06-12] — About v2: hết "chữ mờ" + loop card SOP→Task→KPI làm điểm nhấn
**Agent/Người thực hiện:** Claude Code (Denis góp ý: trang không đẹp, chữ mờ, không điểm nhấn, quá đơn điệu)
**Files thay đổi:** index.html, style.css, cv.pdf (tạo lại), CHANGELOG.md
**Nội dung:**
- **Fix "chữ mờ":** bỏ rule `.about-text p:last-child { color: var(--muted) }` — di sản từ thời có đoạn hobby cuối; sau khi rút còn 2 đoạn thì đoạn QA/QC quan trọng thành last-child và bị xám. Giờ cả 2 đoạn đều màu chữ chính
- **Thay avatar "DP" placeholder bằng `.loop-card`:** sơ đồ vòng lặp công việc — ① Write the SOP → ② Dispatch the tasks → ③ Score the KPI (realtime, 300+ stores) → "↻ scores sharpen the next SOP". Card trắng + shadow, badge số màu blue/violet/teal, connector kẻ đứt — đúng signature nghề của Denis, vừa là điểm nhấn thị giác vừa kể chuyện
- about-grid 240px → 290px; mobile loop-card max-width 380px
- Print CSS: ẩn `.loop-card` (trang trí, không cần trong CV) + `.about-grid` về 1 cột để không chừa track rỗng
- Lưu ý kỹ thuật: chọn step 2/3 phải dùng `:nth-child(4)/(6)` vì các div `.loop-link` xen giữa làm nth-of-type đếm sai
- Verify preview: 2 đoạn đều rgb(28,27,26), 3 badge đúng 3 màu, avatar đã bỏ
**Lý do / ghi chú:** Điểm nhấn phải kể đúng câu chuyện nghề nghiệp thay vì khối chữ cái vô nghĩa.

## [2026-06-12] — Hero "numbers-first": số liệu lên đầu trang cho HR quét 10 giây
**Agent/Người thực hiện:** Claude Code (Denis góp ý: trang nhiều chữ không điểm nhấn, HR phải thấy con số ấn tượng trước tiên)
**Files thay đổi:** index.html, scroll-fx.js, cv.pdf (tạo lại), CHANGELOG.md
**Nội dung:**
- **Đảo bố cục hero:** eyebrow → tên → role → **4 STAT CARDS** → tagline → CTA → meta → tech. Số liệu (300+ stores, 5d→live, 3d→30m, 5+ tools) giờ là thứ đầu tiên HR đọc, nằm trọn trong màn hình đầu không cần cuộn (desktop & mobile)
- **Stats nâng từ hàng chữ nhỏ → 4 card nổi:** nền trắng glass + shadow + bo 14px, thanh màu 3px trên đầu mỗi card (blue/violet/teal/amber — sticker palette), số serif phóng to 28→50px (mobile 27px để "3d → 30m" không bị cắt, đã verify)
- **Cắt chữ:** tagline hero 4 dòng → 1 câu ("One loop, one owner: SOP → daily tasks → KPI scoring..."); About bỏ lede placeholder ("A short intro — who I am...") thay bằng câu thật; About rút 3 đoạn → 2 đoạn (bỏ đoạn hobby web dev)
- **Thêm class `.hl`** — highlight vàng nhạt kiểu Notion cho cụm từ then chốt (write the SOPs / KPI framework I designed / six years of QA/QC / Claude Code) → mắt quét có điểm dừng
- scroll-fx.js: đổi thứ tự stagger hero intro khớp DOM mới (stats hiện ra ngay sau role)
- Verify preview: desktop 1280px = 4 card 1 hàng, font 50px, đáy stats ở 534/900px; mobile 375px = lưới 2×2, không tràn ngang, không cắt chữ
**Lý do / ghi chú:** Nguyên tắc 10-15 giây của HR — số trước, chữ sau. Mobile dùng lưới 2×2 thay 1 cột để cả 4 số vẫn trên màn hình đầu.

## [2026-06-12] — Fix tag bị xé đôi chữ / tràn mép card trong projects grid
**Agent/Người thực hiện:** Claude Code (Denis báo: tag bị xé đôi hoặc mất chữ, ví dụ "Cross-analytics")
**Files thay đổi:** index.html, CHANGELOG.md
**Nội dung:**
- Root cause: `.project-body .tags` thiếu `display: flex` (chỉ featured có) → tag là span inline, chữ bẻ dòng giữa chừng và `gap` không tác dụng; tag cuối ("Automation") tràn mép card
- Fix: `.project-body .tags` thêm `display: flex; flex-wrap: wrap`; `.tag` thêm `white-space: nowrap` — tag không bao giờ gãy chữ, cả hàng tag wrap xuống dòng thay thế
- Verify preview: 15/15 tag trong projects grid đều 1 dòng, không tràn mép card
**Lý do / ghi chú:** Bài học: rule `.tags` ở featured và projects grid là 2 selector riêng — sửa layout tag phải sửa cả hai.

## [2026-06-12] — Tô màu tech tags trong projects + chỉnh căn hàng card
**Agent/Người thực hiện:** Claude Code (Denis góp ý: tag Excel... không màu, căn chỉnh chưa đẹp)
**Files thay đổi:** script.js, index.html, cv.pdf (tạo lại), CHANGELOG.md
**Nội dung:**
- `script.js`: thêm `TAG_COLORS` map màu đặc trưng từng công nghệ (Excel xanh lá, Python/CSS xanh dương, SQL/FastAPI teal, JS vàng hổ phách, Chart.js/Automation tím, pptxgenjs/HTML cam, Anomaly detection đỏ nhạt...) + 5 cặp màu fallback hash ổn định cho tag lạ → **cùng tag = cùng màu ở mọi nơi**; helper `tagHTML()` dùng cho cả featured + projects grid
- Bỏ render `<div class="actions">` rỗng khi project không có link (hết khoảng trống thừa đáy card)
- CSS: `.tag` font-weight 500, line-height đều; `.tags` ghim đáy card (`margin-top: auto`) để hàng tag thẳng nhau giữa các card; `.actions` có border-top phân tách + gap 14px
- Verify: 20/20 tags có màu, Excel nhất quán, chỉ còn 1 actions div (Vivi Soul); tạo lại cv.pdf (7 trang)
**Lý do / ghi chú:** Đồng bộ ngôn ngữ màu với tech chips ở hero — đúng triết lý DESIGN.md: màu sticker chỉ trang trí, không sơn cấu trúc.

## [2026-06-12] — Scrollspy v2: nút xanh CTA tự di chuyển theo mục + thêm Education vào nav
**Agent/Người thực hiện:** Claude Code (Denis góp ý: nút xanh phải đi theo từng mục, và nav thiếu Education)
**Files thay đổi:** index.html, scroll-fx.js, CHANGELOG.md
**Nội dung:**
- Nav thêm link **Education** (giờ đủ: About / Skills / Experience / Projects / Education / Contact); section education map vào đúng mục Education (trước gộp vào Projects)
- **Thiết kế lại indicator:** thay pill xanh nhạt phụ bằng **chính nút gradient xanh→tím** — nghỉ ở Contact khi ở đầu trang (vẫn là CTA), cuộn tới đâu nút trượt tới mục đó (chữ active chuyển trắng), tới section Contact thì về lại Contact
- Contact đổi từ `.btn-primary` sang `.contact-link`: CSS mặc định giữ nguyên dáng nút gradient (fallback khi không có JS/reduced-motion/mobile); khi spy chạy (`body.spy-on`, chỉ ≥601px) thì pill JS tiếp quản phần nền
- Fix: đặt vị trí nghỉ ban đầu bằng gọi trực tiếp `setActive(restLink)` — `requestAnimationFrame` không chạy được trong môi trường preview; cờ `?force3d` giờ dùng chung để force spy khi test cửa sổ hẹp
- Verify đủ: load → nghỉ ở Contact; Skills/Education/Contact active đúng; về hero → nghỉ lại ở Contact
**Lý do / ghi chú:** Mobile (≤600px) chỉ hiện nút Contact CTA tĩnh — spy vô nghĩa khi các link đã ẩn.

## [2026-06-12] — Nav scrollspy: pill trượt theo mục đang xem
**Agent/Người thực hiện:** Claude Code (Denis báo nav không di chuyển theo section)
**Files thay đổi:** index.html, scroll-fx.js, CHANGELOG.md
**Nội dung:**
- Thêm scrollspy cho topnav: **pill xanh nhạt (`.nav-pill`) trượt mượt** (cubic-bezier 0.35s) dưới nav link của section đang xem; link active đổi màu `--accent-dark`
- Mapping: about→About, skills→Skills, experience→Experience, featured-project/projects/education→Projects, **contact→nút Contact phát sáng viền** (`.cta-glow`, pill ẩn); ở hero không mục nào active
- Driven bằng ScrollTrigger (window 45%-45% viewport), reposition pill khi resize; ẩn pill ở ≤600px (nav links đã ẩn trên mobile)
- Verify bằng instant-scroll: Skills/Contact/hero đều active đúng. Lưu ý test: `scrollIntoView` smooth + dispatch event giả sẽ cho kết quả lệch — phải dùng `scrollTo({behavior:'instant'})` rồi dispatch
**Lý do / ghi chú:** Denis tưởng nút Contact xanh là indicator nên thấy "nó ở hoài mục contact" — giờ có indicator thật sự di chuyển theo scroll.

## [2026-06-12] — Nâng cấp 3D: thế giới wireframe toàn trang (học từ file mẫu v3)
**Agent/Người thực hiện:** Claude Code (tham khảo "index (3).html" — chỉ học kỹ thuật, không copy nội dung)
**Files thay đổi:** bg-3d.js (mới, thay hero-3d.js — đã xóa), index.html, style.css, CHANGELOG.md
**Nội dung:**
- Kiến trúc mới từ file mẫu: **canvas cố định toàn trang** sau nội dung; **camera Y trôi theo scroll** (lerp); **mỗi section một set piece 3D** đặt đúng vị trí chương; **fade theo khoảng cách** (chỉ rõ trong chương của mình, material clone riêng từng nhóm); **bụi 320 hạt** rải suốt hành trình; **vận tốc cuộn → spin** vật thể; mouse parallax camera
- Set pieces wireframe mực (ink monochrome — chuyên nghiệp) theo chủ đề data/operations: hero = KPI skyline màu (giữ chữ ký cũ), about = 3 trang SOP nối mũi tên (SOP→task→KPI), skills = icosahedron + octahedra quay quanh, experience = cầu thang 6 bậc + đường tăng trưởng (6 vị trí sự nghiệp), **featured = cubes bay hỗn loạn RÁP thành bar chart khi cuộn tới** (điểm nhấn), projects = cửa sổ browser bay, education = sách mở, contact = torus xoay chậm
- Nền sections chuyển **bán trong suốt** (`--surface-glass` 0.84, `--bg-glass` 0.62) để thế giới wireframe lộ ra phía sau; sections z-index 1 trên canvas
- Giữ nguyên gates: ≥900px + WebGL (`?force3d` bypass), reduced-motion (camera nhanh, không spin), print ẩn #stage, pause khi tab ẩn
- Verify: 8 pieces dựng đủ, frustum culling tự nhiên (5 draws ở hero → 21 ở featured), 0 lỗi console
**Lý do / ghi chú:** Denis muốn background 3D ấn tượng + chuyên nghiệp hơn. File mẫu theme thời trang/mỹ phẩm → đổi hoàn toàn sang data/operations cho đúng người. hero-3d.js đã xóa khỏi repo (bg-3d.js thay thế).

## [2026-06-12] — Scroll choreography: GSAP + ScrollTrigger (học từ file mẫu Denis cung cấp)
**Agent/Người thực hiện:** Claude Code (tham khảo file "index (1).html" — portfolio scroll mẫu)
**Files thay đổi:** scroll-fx.js (mới), index.html, style.css, hero-3d.js, cv.pdf (tạo lại), CHANGELOG.md
**Nội dung:**
- Kỹ thuật học từ file mẫu: **progress bar** scrub theo scroll (gradient accent, 3px, top); **word-reveal** từng chữ cho section h2 (bỏ qua hero h1 vì gradient text); **reveal có đảo chiều** (toggleActions play/reverse) cho kicker/lede/cards/timeline/education — thay animation fadeIn load-một-lần cũ; **counter đếm số** cho hero stats (chỉ số nguyên: 300+, 5+); **hero intro stagger** khi load
- `hero-3d.js`: thêm scroll scrub — skyline xoay (+0.55 rad), chìm (-1.6) và thu nhỏ (0.82×) dần khi cuộn qua hero
- GSAP 3.12.5 + ScrollTrigger qua jsDelivr CDN; `scroll-fx.js` tự no-op nếu CDN fail hoặc `prefers-reduced-motion` — nội dung không bao giờ bị ẩn vĩnh viễn
- **Print-proof:** thêm `section * { opacity: 1 !important; transform: none !important }` vào print CSS — GSAP để element dưới fold ở opacity 0, không có rule này CV in ra sẽ trắng trang
- Verify: 46 ScrollTriggers active, reveal/word-split/progress bar/counter chạy đúng, 0 lỗi console, cv.pdf in đủ nội dung (KIMDUC + education có mặt)
**Lý do / ghi chú:** Denis gửi file portfolio mẫu (của Đông Nguyễn) yêu cầu học phần cuộn trang. KHÔNG copy nội dung/branding của file mẫu — chỉ học kỹ thuật animation. Quirk khi test: `scrollIntoView` qua console không phát scroll event nên scrub không nhúc nhích — cuộn thật thì chạy bình thường.

## [2026-06-12] — Đính chính số liệu: tách 2 thành tích KPI realtime vs report time
**Agent/Người thực hiện:** Claude Code (Denis đính chính)
**Files thay đổi:** index.html, script.js, cv.pdf (tạo lại), CHANGELOG.md
**Nội dung:**
- "3d → 30m / Reporting time saved" trước đây gộp sai 2 thành tích. Đúng là: (1) **KPI từ tính Excel 5 ngày → live realtime**, (2) **report từ 3 ngày → 30 phút**
- Hero stats mở rộng 3 → 4 ô: 300+ stores | **5d → live** (KPI: Excel runs to realtime) | **3d → 30m** (Monthly report time) | 5+ tools; grid 4 cột, 2 cột ở ≤900px, 1 cột ở ≤600px
- Experience bullet tách thành câu riêng; featured project summary + metrics cập nhật tương ứng (metrics: 5d→live | 3d→30m | 50+ KPIs)
- Tạo lại cv.pdf; verify render đúng trên preview
**Lý do / ghi chú:** Số liệu impact là thứ recruiter đọc đầu tiên — phải chính xác tuyệt đối. "5d → live" thực ra còn ấn tượng hơn bản cũ.

## [2026-06-10] — Hero 3D "KPI Skyline" (Three.js, sau khi benchmark các 3D portfolio)
**Agent/Người thực hiện:** Claude Code (benchmark: Bruno Simon, Henry Heffernan, Jesse Zhou, GitHub Skyline...)
**Files thay đổi:** hero-3d.js (mới), index.html, style.css, CHANGELOG.md
**Nội dung:**
- Benchmark 7 trang 3D nổi tiếng → chọn concept **"KPI Skyline"** (kiểu GitHub Skyline): thành phố cột 3D data-driven, hợp chất data analyst — KHÔNG làm game/room scene (cần Blender, sai định vị)
- `hero-3d.js`: Three.js qua CDN import map (pin v0.165.0, không build step), scene 100% geometry code — không file model nào; InstancedMesh 117 cột (13×9) + 3 cube "sticker" bay; màu theo DESIGN.md (xanh cấu trúc + sticker palette điểm xuyết)
- **Progressive enhancement đúng benchmark:** chỉ init khi viewport ≥900px + có WebGL; mobile giữ hero 2D; `prefers-reduced-motion` → render 1 frame tĩnh; lazy-init qua requestIdleCallback (không chặn first paint); pause khi canvas ra khỏi viewport/tab ẩn; pixelRatio clamp 2
- Canvas đặt nửa phải hero, `pointer-events: none` + mask gradient — text/CTA luôn đọc được và click được; mouse parallax xoay nhẹ scene
- Cờ debug `?force3d=1` bypass gate độ rộng (preview panel hẹp); ẩn `#hero-3d` khi in CV
- Verify: 0 lỗi console, **4 draw calls** (budget <100), mode animated chạy, gate mobile hoạt động
**Lý do / ghi chú:** Denis muốn portfolio 3D. Theo benchmark, nội dung CV giữ nguyên HTML scannable — 3D chỉ là lớp hero. Báo cáo benchmark đầy đủ trong chat 2026-06-10.

## [2026-06-10] — Tạo lại cv.pdf từ trang đã cập nhật
**Agent/Người thực hiện:** Claude Code (theo yêu cầu Denis)
**Files thay đổi:** cv.pdf
**Nội dung:**
- In lại trang (headless Chrome, print stylesheet) thành cv.pdf mới — bao gồm đủ: Hasaki KPI System (50+ KPIs, 100+ data fields), bằng Ngôn ngữ Anh USSH, 2 chứng chỉ, skill "Quality & Process Management", các bullets kinh nghiệm bổ sung từ CV gốc
**Lý do / ghi chú:** Nút "Download CV (PDF)" trỏ vào cv.pdf — file cũ in trước khi cập nhật nội dung. Lệnh tạo lại: `chrome --headless=new --no-pdf-header-footer --print-to-pdf=cv.pdf http://localhost:5173/index.html`

## [2026-06-10] — Nâng featured project: "Hasaki KPI Dashboard" → "Hasaki KPI System"
**Agent/Người thực hiện:** Claude Code (theo yêu cầu Denis)
**Files thay đổi:** script.js
**Nội dung:**
- Đổi tên + viết lại summary featured project: hệ thống KPI end-to-end (file Excel thô → tự động tính → tự động ghi nhận → dashboard), không chỉ là dashboard
- Cập nhật metrics: 300+ stores · 50+ KPIs / 100+ data fields · 3d → 30m (bỏ "12+ KPIs")
- Thêm tag "Automation"; cập nhật bullet Hasaki trong `experience` tương ứng
**Lý do / ghi chú:** Denis làm rõ quy mô thật của hệ thống — hơn 50 KPI, hơn 100 trường data.

## [2026-06-10] — Thêm bằng Ngôn ngữ Anh (USSH — VNU-HCM)
**Agent/Người thực hiện:** Claude Code (theo yêu cầu Denis)
**Files thay đổi:** script.js
**Nội dung:**
- Thêm vào `education`: Bachelor of Arts — English Language, University of Social Sciences and Humanities (USSH — VNU-HCM), 2020 — 2023; xếp trên HCMUT vì mới hơn
**Lý do / ghi chú:** Denis bổ sung trực tiếp, không có trong CV PDF.

## [2026-06-10] — Bổ sung thông tin từ CV gốc (PHAM-MANH-DUC-Project Manager.pdf)
**Agent/Người thực hiện:** Claude Code (theo yêu cầu Denis)
**Files thay đổi:** script.js
**Nội dung:**
- Thêm 2 chứng chỉ vào `education`: Six Sigma Green Belt (2012), Quality Auditor — Controller QA/QC (2016); xóa comment `[TODO]` certifications
- Bổ sung chi tiết học vấn HCMUT: Quality management focus (7 QC tools, JIT, Lean)
- Thêm skill category mới "Quality & Process Management" (Six Sigma, root-cause, internal audit, quality docs)
- Bổ sung bullets kinh nghiệm: Allied (phân tích rủi ro sản xuất), VinMart+ (an toàn thực phẩm, camera), FPT (soạn thảo & theo dõi quyết định công ty)
- Chuẩn hóa theo CV: "Allied Saigon" → "Allied Technologies", "VinMart (Vingroup)" → "VinMart+ (VinCommerce)", "FPT University" → "FPT Academic International", "QA Lead" → "QA Leader", kỳ VinMart May–Nov 2019 → Apr–Oct 2019
**Lý do / ghi chú:** Đồng bộ portfolio với CV gốc do Denis cung cấp. KIMDUC (2015–2016) không có trong CV nhưng giữ nguyên vì đã có từ LinkedIn.

## [2026-06-10] — Notion-ize: áp design system từ DESIGN.md (getdesign.md)
**Agent/Người thực hiện:** Claude Code (theo yêu cầu Denis, nguồn: getdesign.md/design-md/notion)
**Files thay đổi:** DESIGN.md (mới), index.html, style.css (gián tiếp qua cv.pdf), cv.pdf (tạo lại), CHANGELOG.md
**Nội dung:**
- Cài `DESIGN.md` (bản phân tích design Notion, tải qua `npx getdesign add notion`) vào project làm chuẩn UI cho mọi agent — thêm quy ước #0
- **Canvas giấy ấm:** `--bg` #fafaf9 → **#f6f5f4**; nav backdrop đồng bộ; section Skills + Education đổi từ `--surface-2` sang dải **trắng** để giữ nhịp tương phản giấy/trắng
- **CTA pill:** border-radius nút 8px → **999px** + hiệu ứng nhấn `scale(0.97)`
- **Shadow nhiều lớp mờ:** thêm token `--shadow-1`/`--shadow-2` (4 lớp gần trong suốt kiểu Notion) thay các drop-shadow đơn ở card hover, nút secondary
- **Typography:** tracking heading -0.015em → -0.02em, hero h1 → -0.03em (nguyên tắc "càng to càng âm")
- Giữ nguyên: heading serif Crimson Pro, gradient CTA xanh→tím, sticker palette trang trí (đúng triết lý Notion: màu phụ chỉ decorate)
- Tạo lại cv.pdf (vẫn 5 trang); verify computed styles trên preview: bg/radius/shadow/tracking đều đúng
**Lý do / ghi chú:** Denis muốn trang đẹp hơn theo design.md từ getdesign.md. Chọn Notion vì mô tả "warm minimalism, serif headings, soft surfaces" khớp định hướng sẵn có.

## [2026-06-10] — Thumbnails cho 5 projects + tạo cv.pdf
**Agent/Người thực hiện:** Claude Code
**Files thay đổi:** projects/*.svg (5 file mới), script.js, style.css, cv.pdf (mới), CHANGELOG.md
**Nội dung:**
- Vẽ 5 thumbnail SVG minh họa phong cách dashboard cho từng project (kpi-dashboard, sales-kpi, bills-heatmap, pptx-redesign, vivi-soul) — KHÔNG dùng số liệu thật để bảo mật; gán vào `projects[].image`
- Tạo `cv.pdf` (5 trang) bằng Chrome headless in từ chính trang web qua print stylesheet — nút "Download CV (PDF)" hết 404
- **Fix bug print CSS:** khối `<style>` inline trong index.html load SAU style.css nên đè ngược các rule print cùng specificity → các rule print giờ dùng `!important`; đồng thời ẩn thumbnail/CTA/lede khi in và nén font cho CV gọn (11 trang → 5 trang)
- Verify: 5/5 ảnh load OK trên preview (naturalWidth > 0), cv.pdf hợp lệ có đúng nội dung hero
**Lý do / ghi chú:** Khi nội dung trang thay đổi đáng kể, nhớ chạy lại lệnh tạo cv.pdf (xem README hoặc dùng Chrome headless --print-to-pdf). Thumbnail SVG có thể thay bằng screenshot thật (đã ẩn danh số liệu) sau này.

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
