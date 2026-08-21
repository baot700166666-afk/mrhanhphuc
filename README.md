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

---

## 🔐 Trang quản trị — đăng váy không cần sửa code

Vào bằng link `.../mrhanhphuc/#/admin`, hoặc bấm chữ **Quản trị** ở cuối trang.

**Mã mặc định: `mrhp2026`** — đổi ngay sau khi nhận file (xem bên dưới).

### ⚠️ Đọc kỹ chỗ này

GitHub Pages là **hosting tĩnh, không có máy chủ**. Nghĩa là:

- Đây **không phải đăng nhập thật**. Nó chỉ là khoá tay để nhân viên khỏi bấm nhầm.
  Ai mở mã nguồn trang đều thấy được. **Đừng để thông tin nhạy cảm trong app.**
- Sửa trong trang **chưa lưu lên mạng**. Muốn khách thấy thì phải:
  **sửa → Tải index.html mới → upload đè lên GitHub**.
- Đóng tab mà chưa tải file là mất hết. Sửa xong tải ngay.

### Sửa / thêm / xoá / đổi thứ tự bộ sưu tập

Tất cả nằm ngay ở danh sách trong `#/admin`:

| Việc | Làm sao |
|---|---|
| **Đổi tên bộ** | Bấm nút **SỬA** (hoặc bấm vào dòng) → form mở ra → sửa ô **TÊN BỘ** |
| **Đổi giá / kiểu dáng / ghi chú** | Cùng form đó, mỗi bộ có 2 khung Mẫu I và Mẫu II |
| **Thêm bộ mới** | Nút **+ Thêm bộ** ở trên cùng — bộ mới xuất hiện ở đầu danh sách |
| **Xoá bộ** | Mở form ra → nút **Xoá bộ này** ở góc dưới trái |
| **Đổi thứ tự** | Hai nút mũi tên **↑ ↓** bên phải mỗi dòng |
| **Đổi mã (slug)** | Trong form, ô **MÃ (KHÔNG DẤU)**. Đổi mã thì nhớ đổi luôn tên thư mục ảnh tương ứng |

> Sửa xong đừng quên bấm **Tải index.html mới** rồi upload đè lên GitHub. Không làm bước này
> thì mọi thứ chỉ nằm trong tab đang mở.

### Quy trình đăng một mẫu váy mới

1. Vào `#/admin`, nhập mã
2. Bấm **+ Thêm bộ** → điền tên bộ, mã (không dấu), kiểu dáng và giá cho 2 mẫu
3. Bấm **+ Thêm ảnh** ở từng mẫu → chọn ảnh từ máy (chọn nhiều tấm một lúc được).
   Ảnh tự cắt về khổ dọc 3:4 và nén còn ~720×960
4. Bấm **Xong**
5. Bấm **Tải index.html mới** → upload file đó đè lên GitHub → xong

### Bốn nút xuất

| Nút | Khi nào dùng |
|---|---|
| **Tải index.html mới** | Cách chính. Ảnh được nhúng thẳng vào file. Dùng khi tổng ảnh dưới ~8 MB |
| **Tải ảnh .zip** | Khi ảnh đã nhiều. Giải nén vào repo cạnh `index.html`, ảnh nằm ở `anh/<mã>-1/`, `anh/<mã>-2/` |
| **Sao chép dữ liệu** | Khi mở file bằng cách nháy đúp (không qua link web). Copy rồi dán đè khối `BO_SUU_TAP` trong `index.html` bằng Notepad |
| **Xem catalogue** | Quay lại xem thành quả |

> Nút *Tải index.html mới* chỉ chạy khi mở app **qua link web**. Mở file trực tiếp từ ổ đĩa
> thì trình duyệt chặn, lúc đó dùng *Sao chép dữ liệu*.

### Đổi mã quản trị

Mã được lưu dạng băm SHA-256, không phải chữ thường.

1. Vào https://emn178.github.io/online-tools/sha256.html
2. Gõ mật khẩu mới → copy chuỗi băm (64 ký tự)
3. Mở `index.html`, tìm `const MA_QUAN_TRI = '...'` → dán đè chuỗi cũ
4. Xoá luôn dòng ghi chú `Mật khẩu hiện tại: mrhp2026` phía trên

### Muốn đăng nhập thật, lưu trực tiếp từ điện thoại?

Phải có máy chủ. Ba hướng phổ biến:

- **Decap CMS + Netlify Identity** — miễn phí, có tài khoản riêng cho từng nhân viên, sửa xong tự đẩy lên Git
- **Google Sheets làm kho dữ liệu** — nhân viên nhập vào Sheet, app đọc trực tiếp. Rẻ, dễ, hợp với studio nhỏ
- **Firebase / Supabase** — bài bản nhất, có đăng nhập, phân quyền, lưu ảnh

Cần thì nói mình, mình dựng cho.

---

## 🔄 Cập nhật lên GitHub

Upload đè 3 file `index.html`, `sw.js`, `manifest.webmanifest` vào repo → Commit → đợi 1 phút.

> **Bắt buộc mỗi lần cập nhật:** mở `sw.js` tăng số phiên bản
> `const CACHE = 'mrhanhphuc-v6';` → `'mrhanhphuc-v7';`
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
