self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('timer-v2').then((cache) => {
            return cache.addAll([
                '/timer.html',
                '/manifest.json'
            ]);
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});