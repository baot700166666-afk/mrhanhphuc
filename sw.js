/* MR HẠNH PHÚC — service worker
   Cache "app shell" để web mở được cả khi mất mạng và cài được như app.
   Mỗi lần bạn sửa index.html, tăng số CACHE lên (v2, v3...) để khách nhận bản mới. */
const CACHE = 'mrhanhphuc-v5';
const SHELL = ['./', './index.html', './manifest.webmanifest',
               './icon/icon-192.png', './icon/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  // Trang HTML: ưu tiên mạng, hỏng thì lấy bản cache
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).catch(() => caches.match('./index.html')));
    return;
  }
  // Ảnh / font / còn lại: cache trước, nền tự cập nhật
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res && res.status === 200 && (res.type === 'basic' || res.type === 'cors')) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
      }
      return res;
    }).catch(() => new Response('', {status: 504, statusText: 'offline'})))
  );
});
