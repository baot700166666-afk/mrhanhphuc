# MR HẠNH PHÚC — Catalogue váy cưới (app nội bộ)

App cho nhân viên mở ra giới thiệu váy cho khách. Chạy trên điện thoại, máy tính bảng, máy tính.
Cấu trúc: **Danh mục → Mẫu váy → Ảnh chi tiết**.

---

## ⭐ Thêm một mẫu váy — chỉ 3 bước

**Bước 1.** Tạo thư mục trong `anh/`, đặt tên không dấu, không khoảng trắng:

```
anh/aria/
```

**Bước 2.** Bỏ ảnh vào, đặt tên theo số. **`1.jpg` sẽ là ảnh bìa.**

```
anh/aria/1.jpg
anh/aria/2.jpg
anh/aria/3.jpg
```

**Bước 3.** Mở `index.html`, tìm khối `const VAY = [` rồi thêm 1 dòng:

```js
{ten:'Aria Dress', dm:'vayxoe', thuMuc:'aria', soAnh:8, gia:'6.000.000đ', ghiChu:'Xòe lớn, đính pha lê', ngay:'22/06/2025'},
```

Xong. Không phải sửa gì thêm.

| Cột | Nghĩa |
|---|---|
| `ten` | Tên hiện trên app |
| `dm` | Mã danh mục — phải trùng 1 mã trong `DANH_MUC` |
| `thuMuc` | Tên thư mục trong `anh/` |
| `soAnh` | Có mấy tấm (1.jpg → soAnh.jpg) |
| `gia` | Giá thuê — để `''` nếu không muốn hiện |
| `ghiChu` | Mô tả ngắn — để `''` nếu không cần |
| `ngay` | Ngày cập nhật — để `''` nếu không cần |

### Xoá một mẫu
Xoá đúng dòng đó đi. Ảnh trong `anh/` để lại cũng không sao.

### Thêm / đổi danh mục
Sửa khối `DANH_MUC` ngay phía trên. Ví dụ thêm danh mục Vest:

```js
{id:'vest', ten:'Vest chú rể'},
```

Rồi mẫu nào thuộc nhóm đó thì ghi `dm:'vest'`. Số đếm trên tab tự cập nhật.

---

## 🔴 QUAN TRỌNG — chuyển từ ảnh mẫu sang ảnh thật

Ngay đầu khối cấu hình có dòng:

```js
const DEMO = true;
```

Đang là `true` → app dùng **ảnh mẫu trên mạng** để bạn xem thử bố cục.
Khi đã bỏ ảnh thật vào `anh/`, **đổi thành `false`**:

```js
const DEMO = false;
```

---

## 📸 Ảnh nên chuẩn bị thế nào

- **Khổ dọc 3:4** là đẹp nhất (app cắt theo tỉ lệ này)
- Nén còn **dưới 400 KB/tấm** bằng https://squoosh.app — quan trọng, app sẽ mượt hơn hẳn khi mạng yếu ở cửa hàng
- Đặt tên đúng số thứ tự, không dấu: `1.jpg`, `2.jpg`… (viết thường)
- Muốn dùng `.webp`: sửa `.jpg` thành `.webp` ở dòng `return './anh/...'` trong hàm `src()`

---

## 🛠 Các nút trên app

| Nút | Công dụng |
|---|---|
| 🔍 (trên trái) | Tìm nhanh theo tên váy, chất liệu, ghi chú |
| 👁 (trên trái) | **Chế độ khách** — ẩn hết giá trước khi đưa máy cho khách xem |
| ☀️/🌙 | Sáng / tối |
| ♥ (trên phải) | Danh sách **váy khách thích** |
| ♥ trên mỗi mẫu | Lưu mẫu khách ưng |
| **Trình chiếu** | Tự động chạy hết ảnh của mẫu đó, toàn màn hình |
| **Sao chép danh sách** | Copy danh sách váy khách thích kèm giá → dán thẳng vào Zalo |

Trong lúc xem ảnh lớn: **vuốt** trái/phải để chuyển, **nháy đúp** hoặc lăn chuột để phóng to, kéo để di chuyển ảnh, phím **←/→** chuyển ảnh, **Space** bật/tắt trình chiếu.

> ⚠️ Danh sách "váy khách thích" chỉ giữ trong lượt xem hiện tại. Xem xong nhớ bấm **Sao chép danh sách** rồi dán vào Zalo, đóng app là mất.

---

## 🔄 Cập nhật lên GitHub

Sau khi sửa xong, upload đè lên repo:

**Cách nhanh (không cần cài gì):** vào repo → `Add file` → `Upload files` → kéo file/thư mục đã sửa vào → Commit.

**Cách dùng lệnh:**
```bash
git add -A && git commit -m "them vay moi" && git push
```

Đợi ~1 phút là link có bản mới.

> **Bắt buộc mỗi lần cập nhật:** mở `sw.js`, tăng số phiên bản
> `const CACHE = 'mrhanhphuc-v2';` → `'mrhanhphuc-v3';`
> Không làm bước này thì máy nhân viên đã cài app sẽ vẫn thấy bản cũ.

---

## 📱 Cài lên máy nhân viên

Mở link trên điện thoại:

- **Android / Chrome:** hiện nút *"Cài app vào máy"*, hoặc menu ⋮ → **Thêm vào màn hình chính**
- **iPhone / Safari:** nút Chia sẻ ⬆️ → **Thêm vào MH chính**

Sau khi cài, **app xem được cả khi mất mạng** — rất hợp khi cửa hàng sóng yếu hoặc đi gặp khách bên ngoài.

---

## 🔒 Lưu ý về bảo mật

Đây là web tĩnh trên GitHub Pages **public** — ai có link đều xem được, kể cả giá.
Nếu không muốn lộ giá ra ngoài:

- Bỏ trống cột `gia` của mọi mẫu, chỉ ghi giá trong sổ riêng, **hoặc**
- Luôn bật **Chế độ khách** 👁 khi có người ngoài, **hoặc**
- Chuyển sang hosting có mật khẩu (Netlify bản trả phí, hoặc Cloudflare Access)

---

## 📂 File trong repo

| File | Việc của nó |
|---|---|
| `index.html` | Toàn bộ app — khối cấu hình nằm ngay đầu thẻ `<script>` |
| `anh/` | Thư mục ảnh, mỗi mẫu váy một thư mục con |
| `manifest.webmanifest` | Để cài được như app |
| `sw.js` | Chạy offline — nhớ tăng phiên bản mỗi lần cập nhật |
| `icon/` | Icon app |
| `.nojekyll` | **Đừng xoá** — thiếu nó GitHub ăn mất thư mục |
| `.github/workflows/` | Tự động deploy khi push |
