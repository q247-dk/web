/* q247.live landing — service worker (instalovatelnost + lehký offline) */
const CACHE = 'q247-landing-v1';
const CORE = ['/', '/index.html', '/en.html', '/favicon.svg', '/icon-192.png', '/apple-touch-icon.png'];
self.addEventListener('install', (e) => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE).catch(() => {}))); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).then((resp) => { const copy = resp.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)).catch(() => {}); return resp; }).catch(() => caches.match(e.request)));
});
