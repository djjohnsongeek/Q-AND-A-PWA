const GIT_HUB_PATH = "/Q-AND-A-PWA"
const VERSION = 'v0.1.1';
const CACHE_NAME = `question-answer-${VERSION}}`;
const CACHED_RESOURCES = [
  `${GIT_HUB_PATH}/`,
  `${GIT_HUB_PATH}/index.html`,
  `${GIT_HUB_PATH}/js/index.js`,
  `${GIT_HUB_PATH}/js/data.js`,
  `${GIT_HUB_PATH}/css/pico.min.css`,
  `${GIT_HUB_PATH}/css/app.css`,
  `${GIT_HUB_PATH}/icons/q512.png`
];

// Use the install event to pre-cache all initial resources.
self.addEventListener('install', event => {
    console.log("Install event fired.");
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        cache.addAll(CACHED_RESOURCES);
    })());
});

// TODO add activate event to delte old cache
self.addEventListener("activate", event => {
    console.log("Activate event fired.");
});

self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);

    // Get the resource from the cache.
    const cachedResponse = await cache.match(event.request);
    if (cachedResponse) {
      return cachedResponse;
    } else {
        try {
          // If the resource was not in the cache, try the network.
          const fetchResponse = await fetch(event.request);

          // Save the resource in the cache and return it.
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        } catch (e) {
          // The network failed.
        }
    }
  })());
});