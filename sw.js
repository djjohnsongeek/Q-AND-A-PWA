const GIT_HUB_PATH = "/Q-AND-A-PWA"
const VERSION = 'v0.1.8';
const CACHE_NAME = `question-answer-${VERSION}}`;
const EXPECTED_CACHES = [CACHE_NAME];
const CACHED_RESOURCES = [
  `${GIT_HUB_PATH}/`,
  `${GIT_HUB_PATH}/index.html`,
  `${GIT_HUB_PATH}/js/index.js`,
  `${GIT_HUB_PATH}/js/data.js`,
  `${GIT_HUB_PATH}/css/pico.min.css`,
  `${GIT_HUB_PATH}/css/app.css`,
  `${GIT_HUB_PATH}/icons/q512.png`,
  `${GIT_HUB_PATH}/icons/q256.png`,
  `${GIT_HUB_PATH}/icons/q128.png`,
  `${GIT_HUB_PATH}/icons/q64.png`,
  `${GIT_HUB_PATH}/icons/q32.png`,
  `${GIT_HUB_PATH}/icons/q24.png`,
  `${GIT_HUB_PATH}/icons/q16.png`,
];

// Use the install event to pre-cache all initial resources.
self.addEventListener('install', event => {
    console.log(`Service Worker (${CACHE_NAME}) Installing.`);
    self.skipWaiting();
    event.waitUntil((async () => {
      const cache = await caches.open(CACHE_NAME);
      cache.addAll(CACHED_RESOURCES);
    })());
});

// TODO add activate event to delte old cache
self.addEventListener('activate', event => {
  // delete any caches that aren't in Expected Caches
  console.log("Beginning Service Worker Activation.");

  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (!EXPECTED_CACHES.includes(key)) {
          return caches.delete(key);
        }
      })
    )).then(() => {
      console.log(`New Service Worker (${CACHE_NAME}) Activated.`);
    })
  );
});


self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);

    // Get the resource from the cache.
    const cachedResponse = await cache.match(event.request);
    if (cachedResponse) {
      return cachedResponse;
    }
    else {
      try {
        // If the resource was not in the cache, try the network.
        const fetchResponse = await fetch(event.request);

        // Save the resource in the cache and return it.
        cache.put(event.request, fetchResponse.clone());
        return fetchResponse;
      }
      catch (e) {
        // The network failed.
      }
    }
  })());
});
