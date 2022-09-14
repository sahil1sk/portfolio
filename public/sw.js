const staticCache = 'cache'; // just giving the name to static file to use it as static data

const assets = [
    '/',
    '/index.html',
    '/fallback.html',
    
    '/images/covid.png',
    '/images/icon.png',
    '/images/google.png',
    '/images/user.png',
    '/images/angular.png',
    '/images/aws.png',
    '/images/auth_server.png',
    '/images/bluetooth.png',
    '/images/flutter.png',
    '/images/html_css.png',
    '/images/netlify_functions.png',
    '/images/quick_meet.png',
    '/images/spring.png',
    '/images/git_logo.png',
    '/pdf/resume.pdf',
    
    '/default.css',
    '/blue.css',
    '/green.css',
    '/purple.css',

    '/app.js',
    '/script.js',
    '/bootstrapJS/min.js',
    '/bootstrapJS/bundleMin.js',
    '/bootstrapJS/scroller.js',

    'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
    'https://fonts.googleapis.com/css2?family=Russo+One&display=swap',
    'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&family=Russo+One&display=swap',
]

// install process // Install all the cache data which is required
self.addEventListener('install', e => {
    // so here we should waint untill ourl caching data will adding
    e.waitUntil(
        caches.open(staticCache).then(cache => {  // opening the static cache file this file is present on the console go to developer tools and then applications you will find this file here
            cache.addAll(assets);                   // here we adding our all assets in cache
        })
    )
})

// activate process
self.addEventListener('activate',e => {
    // console.log('sw is activated');
})

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(staticRes => {
            return staticRes || fetch(e.request)
        }).catch(() => caches.match('/fallback.html')) // so here we return the file on error if the file present in cache data
    )
})
