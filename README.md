# MR HẠNH PHÚC — Catalogue váy cưới (app nội bộ)

**8 danh mục · 100 mục · mỗi mục 10 ảnh.**

Cấu trúc 2 tầng: **Danh mục → Mẫu / Album → Ảnh** — bấm ảnh để xem toàn màn hình.

| Danh mục | Số mục |
|---|---|
| Vest | 10 |
| Áo dài | 12 |
| Váy Basic | 18 |
| Váy Luxury | 18 |
| Album Wedding | 10 |
| Phóng Sự Cưới | 10 |
| Ảnh Cưới Khách Hàng | 12 |
| Pre wedding | 10 |

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
anh/lx-vienman/1.jpg  …  10.jpg
```

Quy tắc: `anh/<slug>/<số>.jpg`. Ảnh `1.jpg` là ảnh bìa.

> Lúc đó sẽ có ~1000 file ảnh — nhớ dùng **GitHub Desktop** (desktop.github.com) để đẩy lên,
> đừng kéo thả trên web. Và nén ảnh dưới 300 KB/tấm bằng https://squoosh.app.

---

## ✏️ Sửa danh sách váy

Mở `index.html`, tìm `const MUC = [`. Mỗi dòng là **một mục**:

```js
{ten:'Viên Mãn', slug:'lx-vienman', dm:'luxury', dang:'xoe', gia:'12.500.000đ', ghiChu:'Xòe lớn, đính pha lê'},
```

| Cột | Nghĩa |
|---|---|
| `ten` | Tên hiện trên app |
| `slug` | Mã không dấu — dùng cho đường dẫn và tên thư mục ảnh |
| `dm` | Mã danh mục: `vest` `aodai` `basic` `luxury` `album` `phongsu` `khachhang` `prewedding` |
| `dang` | Hình vẽ mẫu: `xoe` `chuA` `duoica` `suong` `aodai` `vest` `canh` |
| `gia` | Để `''` nếu không muốn hiện giá |
| `ghiChu` | Mô tả ngắn |

Đổi tên/thêm danh mục thì sửa khối `DANH_MUC` ngay phía trên.

---|---|
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
| 🏠 trong lightbox | Đóng ảnh và về thẳng trang chủ |

**Điều hướng:** mỗi trang có đường dẫn ở trên cùng —
`🏠 Tất cả bộ sưu tập › Viên Mãn › Viên Mãn I` — bấm vào bất kỳ mắt xích nào để nhảy về đó.
Bấm tên **MR HẠNH PHÚC** giữa thanh trên cùng cũng về trang chủ.

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

### Sửa / thêm / xoá / đổi thứ tự

Tất cả nằm ở danh sách trong `#/admin`:

| Việc | Làm sao |
|---|---|
| **Đổi tên** | Bấm **SỬA** → ô **TÊN** |
| **Chuyển sang danh mục khác** | Ô **DANH MỤC** — chọn 1 trong 8 |
| **Đổi giá / ghi chú** | Cùng form |
| **Đổi hình vẽ mẫu** | Ô **HÌNH VẼ MẪU** — Váy xòe / Chữ A / Đuôi cá / Suông / Áo dài / Vest / Bối cảnh |
| **Thêm mục mới** | Nút **+ Thêm mục** |
| **Xoá** | Mở form → **Xoá mục này** |
| **Đổi thứ tự** | Nút **↑ ↓** bên phải mỗi dòng |

> Sửa xong đừng quên **Tải index.html mới** rồi upload đè lên GitHub.

### Quy trình đăng một mẫu mới

1. Vào `#/admin`, nhập mã
2. Bấm **+ Thêm mục** → điền tên, mã (không dấu), chọn danh mục, giá, ghi chú
3. Bấm **+ Thêm ảnh** → chọn ảnh từ máy (chọn nhiều tấm một lúc được).
   Ảnh tự cắt khổ dọc 3:4 và nén còn ~720×960
4. Bấm **Xong**
5. Bấm **Tải index.html mới** → upload file đó đè lên GitHub → xong

### Bốn nút xuất

| Nút | Khi nào dùng |
|---|---|
| **Tải index.html mới** | Cách chính. Ảnh được nhúng thẳng vào file. Dùng khi tổng ảnh dưới ~8 MB |
| **Tải ảnh .zip** | Khi ảnh đã nhiều. Giải nén vào repo cạnh `index.html`, ảnh nằm ở `anh/<mã>/` |
| **Sao chép dữ liệu** | Khi mở file bằng cách nháy đúp (không qua link web). Copy rồi dán đè khối `MUC` trong `index.html` bằng Notepad |
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
> `const CACHE = 'mrhanhphuc-v8';` → `'mrhanhphuc-v9';`
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
