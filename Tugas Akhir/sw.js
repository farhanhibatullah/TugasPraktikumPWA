self.addEventListener('install', function (event) {
    console.log('SW terinstal');
    event.waitUntil(
        caches.open('static')
            .then(function (cache) {
                // cache.add('./');
                // cache.add('./index.html');
                // cache.add('./js/app.js');
                cache.addAll([
                    '.',
                    'index.html',
                    'app.js',
                    'api.php',
                    'dbconfig.php',
                    'images/icons/app-icon-96x96.png',
                    'images/icons/app-icon-144x144.png',
                    'images/icons/app-icon-256x256.png',
                    'images/icons/app-icon-512x512.png'
                ]);
            })
    );
});

self.addEventListener('activate', function () {
    console.log('SW aktif');
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (res) {
                if (res) {
                    return res;
                } else {
                    return fetch(event.request);
                }
            }))
});