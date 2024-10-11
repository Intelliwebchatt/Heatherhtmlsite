const CACHE_NAME = 'heather-glenn-cache-v2';
const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/information.html',
    '/classroom.html',
    '/styles.css',
    '/scripts.js',
    '/images/eyes.gif',
    '/images/1uJ9.gif',
    'https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Open+Sans&display=swap',
    'https://unpkg.com/aos@2.3.1/dist/aos.css',
    'https://unpkg.com/aos@2.3.1/dist/aos.js',
    'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
];

// Install the service worker and cache the files
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});

// Activate the service worker and clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Fetch cached files or get them from the network if not cached
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
