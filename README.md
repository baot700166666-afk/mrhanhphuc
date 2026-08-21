# MR HẠNH PHÚC — website studio ảnh cưới

Web tĩnh + PWA (cài được như app). Chạy trên **GitHub Pages**, miễn phí vĩnh viễn.
Kết quả: một link công khai để gửi cho khách — giống kiểu `luxstudioht.pic-time.com` nhưng là web của riêng bạn.

---

## 🚀 Đưa lên GitHub Pages — không cần biết code, ~5 phút

### Bước 1 — Tạo repo
1. Vào **https://github.com/new**
2. **Repository name:** `mrhanhphuc`
3. Chọn **Public** (bắt buộc — Pages miễn phí chỉ chạy với repo public)
4. Bấm **Create repository**

### Bước 2 — Upload file
1. Ở trang repo vừa tạo, bấm **"uploading an existing file"**
2. Giải nén file zip, mở thư mục `mrhanhphuc-web`, **chọn hết mọi thứ bên trong** rồi kéo thả vào trang GitHub

   > ⚠️ Kéo **nội dung bên trong** thư mục, đừng kéo cả thư mục cha — nếu không link sẽ thành `.../mrhanhphuc/mrhanhphuc-web/`

3. Bấm **Commit changes**

   > 💡 Trình duyệt hay ẩn 2 thứ bắt đầu bằng dấu chấm: `.nojekyll` và thư mục `.github`.
   > Nếu kéo thả không lên đủ, xem **Cách B** bên dưới — dùng lệnh git thì chắc chắn đủ file.

### Bước 3 — Bật Pages
1. Vào tab **Settings** của repo → menu trái chọn **Pages**
2. Mục **Source** → chọn **GitHub Actions**
3. Đợi 1–2 phút (xem tiến độ ở tab **Actions**)

### Bước 4 — Xong!
Link của bạn:

```
https://<tên-github-của-bạn>.github.io/mrhanhphuc/
```

Ví dụ tài khoản tên `hanhphucstudio` thì link là
`https://hanhphucstudio.github.io/mrhanhphuc/`

> 🎁 **Mẹo link đẹp hơn:** đặt tên repo là `<tên-github>.github.io` thì link rút gọn còn
> `https://<tên-github>.github.io/` — không có phần đuôi.
>
> 🌐 **Tên miền riêng:** mua `mrhanhphuc.com` (~250k/năm) rồi vào **Settings → Pages → Custom domain**
> gõ tên miền vào, bên nhà cung cấp tên miền trỏ CNAME về `<tên-github>.github.io`. GitHub cấp SSL miễn phí.

---

## Cách B — dùng lệnh git (chắc ăn hơn, đủ cả file ẩn)

Mở Terminal / Git Bash ngay trong thư mục `mrhanhphuc-web`:

```bash
git init
git add -A
git commit -m "MR HANH PHUC website"
git branch -M main
git remote add origin https://github.com/<tên-github>/mrhanhphuc.git
git push -u origin main
```

Rồi làm tiếp **Bước 3** ở trên. Lần sau muốn cập nhật chỉ cần:

```bash
git add -A && git commit -m "cap nhat anh" && git push
```

GitHub Actions tự deploy lại, khoảng 1 phút là link có bản mới.

---

## 📱 Biến thành app trên điện thoại

Sau khi có link `https://...github.io/...`:

- **Android / Chrome:** mở link → hiện nút *"Cài app MR HẠNH PHÚC"*, hoặc menu ⋮ → **Thêm vào màn hình chính**
- **iPhone / Safari:** mở link → nút Chia sẻ ⬆️ → **Thêm vào MH chính**

Icon hiện như app thật, mở toàn màn hình không có thanh địa chỉ, và **xem lại được cả khi mất mạng**.

Muốn lên **CH Play / App Store** thật: đưa link vào https://www.pwabuilder.com — nó xuất ra file `.aab` cho CH Play và dự án iOS. (Phí nhà phát triển: Google 25 USD trọn đời, Apple 99 USD/năm.)

---

## 🖼 Thay ảnh của bạn

Bỏ ảnh vào thư mục `anh/` theo tên:

| Vị trí | Tên file |
|---|---|
| Hero — 5 ảnh chạy đầu trang | `hero1.jpg` … `hero5.jpg` |
| Ảnh phần "Về studio" | `story7.jpg` |
| Gallery — 28 ảnh | `lum11.jpg` … `lum38.jpg` |

Rồi mở `index.html`, tìm dòng:

```js
const IMG = (seed,w,h)=>`https://picsum.photos/seed/${seed}/${w}/${h}`+(GRAYSCALE?'?grayscale':'');
```

Đổi thành:

```js
const IMG = (seed,w,h)=>`./anh/${seed}.jpg`;
```

**Quan trọng:** nén ảnh còn dưới 400 KB/tấm bằng https://squoosh.app trước khi upload — web sẽ load nhanh hơn nhiều và repo không bị nặng. Xuất `.webp` càng tốt (nhớ đổi `.jpg` → `.webp` ở dòng trên).

---

## ✏️ Sửa nội dung

Mở `index.html` bằng VS Code, hoặc sửa thẳng trên GitHub (bấm vào file → icon bút chì ✏️), tìm và thay:

| Cần sửa | Tìm chuỗi |
|---|---|
| Số điện thoại | `+84 90 123 4567` |
| Email | `hello@mrhanhphuc.com` |
| Địa chỉ | `128 Nguyễn Huệ, Q.1, TP.HCM` |
| Số liệu Về studio | `480+`, `9`, `7` |
| Cảm nhận khách | biến `VOICES` trong phần JS |
| 5 slide đầu trang | biến `HERO` |
| Tên & danh mục 28 ảnh | biến `T` và `CIDS` |

---

## 📬 Nối form đặt lịch để nhận email thật

Mặc định form chỉ hiện thông báo (demo). Để nhận thật:

1. Đăng ký https://formspree.io (miễn phí 50 mail/tháng), lấy endpoint dạng `https://formspree.io/f/xxxxxxx`
2. Trong `index.html`, tìm `toast('Đã gửi! Studio sẽ phản hồi trong 24 giờ ♥');` và thay bằng:

```js
fetch('https://formspree.io/f/xxxxxxx', {
  method: 'POST',
  headers: {'Content-Type':'application/json','Accept':'application/json'},
  body: JSON.stringify({
    ten: name.value, email: mail.value, sdt: phone.value,
    goi: document.querySelector('#fType').value,
    ngay: document.querySelector('#fDate').value,
    noiDung: document.querySelector('#fMsg').value
  })
}).then(()=>{ toast('Đã gửi! Studio sẽ phản hồi trong 24 giờ ♥'); e.target.reset(); })
  .catch(()=> toast('Gửi lỗi, bạn nhắn Zalo giúp mình nhé'));
```

---

## ⚠️ Sau mỗi lần cập nhật

Mở `sw.js`, tăng số phiên bản:

```js
const CACHE = 'mrhanhphuc-v1';   →   const CACHE = 'mrhanhphuc-v2';
```

Không làm bước này thì khách đã cài app sẽ vẫn thấy bản cũ đã lưu trong máy.

---

## 📂 Các file trong repo

| File | Việc của nó |
|---|---|
| `index.html` | Toàn bộ website (HTML + CSS + JS trong 1 file) |
| `manifest.webmanifest` | Khai báo tên/icon để cài được như app |
| `sw.js` | Service worker — chạy offline, cache |
| `icon/` | Icon app 192px & 512px |
| `anh/` | Thư mục bỏ ảnh của bạn |
| `404.html` | Bản sao index, để link lạ vẫn về đúng trang |
| `.nojekyll` | Bảo GitHub đừng xử lý qua Jekyll — **đừng xoá** |
| `.github/workflows/pages.yml` | Tự động deploy mỗi lần push |
