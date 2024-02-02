
const cacheVersion = 'v1';
const cacheData = `your-app-cache-${cacheVersion}`;
let urlsToCache = ['favicon.ico', 'src/assets/*', 'src/**/*.css']


this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll(urlsToCache)
        })
    )
})



this.addEventListener('fetch', (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((result) => {
                if (result) {
                    return result;
                }
                const fetchRequest = event.request.clone();

                return fetch(fetchRequest)

            })
        )
    }

})

let deferredPrompt;
this.addEventListener('beforeinstallprompt', (e) => {
    // Prevents the default mini-infobar or install dialog from appearing on mobile
    e.preventDefault();
    // Save the event because you'll need to trigger it later.
    deferredPrompt = e;
    // Show your customized install prompt for your PWA
    // Your own UI doesn't have to be a single element, you
    // can have buttons in different locations, or wait to prompt
    // as part of a critical journey.
    showInAppInstallPromotion();
});

