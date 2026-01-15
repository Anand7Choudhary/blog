self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('timer-v1').then((cache) => {
            return cache.addAll([
                '/timer.html',
                '/icons/icon-192.png',
                '/icons/icon-512.png'
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