# MR HẠNH PHÚC — Catalogue váy cưới (app nội bộ)

**50 bộ sưu tập × 2 mẫu = 100 mẫu váy, mỗi mẫu 10 ảnh.**

Cấu trúc 3 tầng: **Bộ sưu tập → 2 mẫu váy → 10 ảnh** — bấm ảnh để xem toàn màn hình.

---

## 🎨 Ảnh đang là ảnh máy vẽ

App tự vẽ váy bằng canvas ngay trên máy người xem — **không có file ảnh nào**, nên cả catalogue
1000 tấm chỉ nằm gọn trong 1 file ~58 KB. Upload 1 file là xong, khỏi kéo thư mục.

Mỗi mẫu có 10 bố cục khác nhau: Toàn thân · Lệch trái · Nắng cửa sổ · Trung cảnh · Cận thân trên ·
Chân váy · Toàn cảnh · Góc thấp · Cận nếp vải · Ngược sáng.

### Khi có ảnh chụp thật

1. Trong `index.html` tìm dòng `const DEMO = true;` → đổi thành `false`
2. Tạo thư mục ảnh theo mã mẫu, ví dụ bộ **Viên Mãn** (`slug: 'vienman'`) có 2 mẫu:

```
anh/vienman-1/1.jpg  …  10.jpg     ← mẫu I
anh/vienman-2/1.jpg  …  10.jpg     ← mẫu II
```

Quy tắc: `anh/<slug>-<1 hoặc 2>/<số>.jpg`. Ảnh `1.jpg` là ảnh bìa.

> Lúc đó sẽ có ~1000 file ảnh — nhớ dùng **GitHub Desktop** (desktop.github.com) để đẩy lên,
> đừng kéo thả trên web. Và nén ảnh dưới 300 KB/tấm bằng https://squoosh.app.

---

## ✏️ Sửa danh sách váy

Mở `index.html`, tìm `const BO_SUU_TAP = [`. Mỗi dòng là **một bộ sưu tập**:

```js
{ten:'Viên Mãn', slug:'vienman', dang:['xoe','duoica'], gia:['12.500.000đ','9.800.000đ']},
```

| Cột | Nghĩa |
|---|---|
| `ten` | Tên bộ hiện trên app |
| `slug` | Mã không dấu — dùng cho đường dẫn và tên thư mục ảnh |
| `dang` | 2 kiểu dáng của 2 mẫu trong bộ |
| `gia` | 2 mức giá tương ứng |

**5 kiểu dáng dùng được:** `xoe` (Xòe) · `chuA` (Chữ A) · `duoica` (Đuôi cá) · `suong` (Suông) · `aodai` (Áo dài)

Thêm bộ mới = thêm 1 dòng. Xoá bộ = xoá dòng đó. Số đếm trên tab tự cập nhật.

Muốn đổi mô tả từng kiểu dáng thì sửa khối `GHI_CHU` ngay bên dưới.

---

## 🛠 Nút trên app

| Nút | Công dụng |
|---|---|
| 🔍 | Tìm nhanh theo tên bộ, tên mẫu, kiểu dáng, giá |
| 👁 | **Chế độ khách** — ẩn hết giá trước khi đưa máy cho khách xem |
| ☀️/🌙 | Sáng / tối |
| ♥ trên phải | Danh sách **váy khách thích** |
| ♥ trên mẫu | Lưu mẫu khách ưng |
| Tab dáng | Lọc nhanh theo kiểu dáng |
| **Trình chiếu** | Chạy tự động 10 ảnh của mẫu, toàn màn hình |
| **Sao chép danh sách** | Copy váy khách thích kèm giá → dán vào Zalo |

Trong lúc xem ảnh lớn: **vuốt** trái/phải, **nháy đúp** hoặc lăn chuột để phóng to, kéo để di chuyển,
phím **←/→** chuyển ảnh, **Space** bật/tắt trình chiếu.

> ⚠️ Danh sách "váy khách thích" chỉ giữ trong lượt xem hiện tại. Xong buổi tư vấn nhớ bấm
> **Sao chép danh sách** dán vào Zalo, đóng app là mất.

---

## 🔄 Cập nhật lên GitHub

Upload đè 3 file `index.html`, `sw.js`, `manifest.webmanifest` vào repo → Commit → đợi 1 phút.

> **Bắt buộc mỗi lần cập nhật:** mở `sw.js` tăng số phiên bản
> `const CACHE = 'mrhanhphuc-v4';` → `'mrhanhphuc-v5';`
> Không làm thì máy đã cài app vẫn thấy bản cũ.

## 📱 Cài lên máy nhân viên

- **Android / Chrome:** mở link → nút *"Cài app vào máy"*, hoặc ⋮ → Thêm vào màn hình chính
- **iPhone / Safari:** Chia sẻ ⬆️ → Thêm vào MH chính

Cài xong **dùng được cả khi mất mạng**.

---

## 🔒 Lưu ý bảo mật

GitHub Pages là **public** — ai có link đều xem được, kể cả giá. Nếu không muốn lộ giá:
để trống cột `gia`, hoặc luôn bật **Chế độ khách** khi có người ngoài, hoặc chuyển sang
hosting có mật khẩu (Cloudflare Access, Netlify trả phí).
