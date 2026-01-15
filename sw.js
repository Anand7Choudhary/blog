self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (e) => {
  // This allows the app to work while the phone is offline
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});