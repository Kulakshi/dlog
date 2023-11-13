// In your service-worker.js file
const CACHE_NAME = 'your-cache-name';
const urlsToCache = [
  '/',
  '/styles/main.css',
  '/scripts/main.js',
  // Add other assets to cache
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
