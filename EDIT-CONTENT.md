# ✏️ Hướng dẫn tự sửa nội dung portfolio (không cần Claude)

> Dành cho Denis. Toàn bộ CHỮ trên trang là dữ liệu — sửa đúng chỗ, save, F5 là thấy ngay.
> Chỉ cần Notepad hoặc VS Code. **Không đụng vào phần CSS/HTML nếu chỉ sửa chữ.**

---

## Quy tắc vàng: chữ nằm ở đâu?

| Muốn sửa | Mở file | Tìm |
|---|---|---|
| Kinh nghiệm làm việc (bullet, chức danh, công ty, thời gian) | `script.js` | `const experience` |
| Dự án (tên, mô tả, tag, link) | `script.js` | `const projects` (phần tử ĐẦU = Featured Project) |
| Kỹ năng | `script.js` | `const skills` |
| Học vấn / chứng chỉ | `script.js` | `const education` |
| Câu chữ "khung trang" — hero, About, tiêu đề section, Contact | **CẢ HAI NƠI**: bản EN trong `index.html` (tìm đúng câu tiếng Anh) **và** bản VI trong `script.js` → `const UI_I18N` | ví dụ tìm `Open to new opportunities` |

**Mỗi chuỗi có 2 bản ngôn ngữ** dạng:
```js
{ en: 'Câu tiếng Anh', vi: 'Câu tiếng Việt' },
```
Sửa cả hai (hoặc một, nếu chỉ muốn đổi 1 ngôn ngữ). Chuỗi đơn (`'SQL'`) dùng chung cho cả 2 ngôn ngữ.

**Đánh dấu số liệu nổi bật:** trong bullet kinh nghiệm, bọc `**như này**` → chữ hiện màu xanh accent. Ví dụ: `'phủ **300+** cửa hàng'`.

---

## Xem kết quả ngay trên máy

1. Double-click **`start-preview.bat`** (trong thư mục này) — trình duyệt tự mở `http://localhost:5173`.
2. Mở `script.js` bằng VS Code / Notepad, sửa chữ, **Ctrl+S**.
3. Qua trình duyệt bấm **F5** (nếu chưa thấy đổi: **Ctrl+Shift+R**).

⚠️ Nếu sau khi sửa mà **trang trắng / section trống** → lỗi cú pháp JS (thường do xóa nhầm dấu `'`, `,`, `}`). Bấm **F12 → tab Console** sẽ báo lỗi ở dòng nào. Lỗi hay gặp: chữ có dấu nháy đơn bên trong chuỗi nháy đơn — viết `'It\'s'` hoặc đổi sang nháy kép `"It's"`.

---

## Đưa lên mạng (GitHub Pages)

Cách 1 — không cần cài gì: vào [github.com/Denis-Pham/Denis-portfolio](https://github.com/Denis-Pham/Denis-portfolio) → mở `script.js` → biểu tượng ✏️ Edit → sửa → **Commit changes**. Đợi ~1 phút, Ctrl+Shift+R trang live.

Cách 2 — từ máy (Git Bash / PowerShell trong thư mục này):
```
git add -A
git commit -m "Update content"
git push
```

---

## Sau khi sửa nội dung: in lại CV

Nút "Download CV" trỏ vào `cv.pdf` / `cv-vi.pdf` — file tĩnh, KHÔNG tự đổi theo trang.
Sửa chữ xong: để `start-preview.bat` đang chạy, double-click **`rebuild-cv.bat`** → 2 CV được in lại tự động (đợi vài giây, file trên Google Drive có thể hiện chậm chút). Nhớ commit cả 2 file PDF khi push.

---

## Những gì ĐỪNG tự sửa (gọi Claude)

- Màu sắc, layout, hiệu ứng (CSS trong `index.html`, `style.css`, `scroll-fx.js`, `bg-3d.js`)
- Thêm section mới / đổi cấu trúc card
- Nếu đổi các file `.js` về logic: nhớ bump `?v=` trong `index.html` (3 chỗ `script src`) để trình duyệt người xem không dùng bản cache cũ — sửa THUẦN NỘI DUNG trong `script.js` thì nên bump luôn cho chắc.
