'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicons/favicon-32x32.png": "44a84905ee909183cb744e206cc848aa",
"favicons/apple-touch-icon.png": "29488aa4120461e98b4306bab691c1ea",
"favicons/favicon-16x16.png": "ad93fb4d6ca7afea1d591538da9d8f3e",
"assets/AssetManifest.json": "d793e0e98c7b9e570aed9e682c611c49",
"assets/AssetManifest.bin": "01e60a17e3ae182a12a14b030f036920",
"assets/assets/fonts/GowunBatang-Bold.ttf": "04977f1734ccba2e1525b50660f96458",
"assets/assets/fonts/GowunBatang-Regular.ttf": "9c229195073bb2e4de42ff8a541e6eee",
"assets/assets/images/10.jpeg": "ba368d8ee0b7f1a3e348ea557977dc4b",
"assets/assets/images/intro.png": "e50134aacf1b202602fb1cd1d203437e",
"assets/assets/images/31.jpeg": "ae2128b666afcfdf2c3660315ba420a1",
"assets/assets/images/33.jpeg": "d40356fdb44c6481bc48885ee244708f",
"assets/assets/images/15.jpeg": "fe1005c4dd773f3807eac0ec6eace27e",
"assets/assets/images/3.jpeg": "0323215f832474c7240eca52497f65fd",
"assets/assets/images/20.jpeg": "16f9ba60795e6a5546c4ce33a0039d96",
"assets/assets/images/11.jpeg": "a8dc87ab2c38a9dad64c75054c43cce8",
"assets/assets/images/23.jpeg": "fd15cd67796814846b4ff78d9d226f03",
"assets/assets/images/6.jpeg": "c7e844eb053e86fd7eebcc66354c7481",
"assets/assets/images/24.jpeg": "f99384097cb18e8e36b7ed353987d18a",
"assets/assets/images/17.jpeg": "8aef9041192a5074e8ec8beab61ae3cd",
"assets/assets/images/22.jpeg": "2655d54d2ffd79b3554d6926e0cd0e17",
"assets/assets/images/16.jpeg": "310f4d99422bfeb0a0fb6ef051b6bdea",
"assets/assets/images/header.png": "642ed6024251852db2ab4f85a25b2d98",
"assets/assets/images/18.jpeg": "959b6e9679950b1a1e5ff266cc4abaae",
"assets/assets/images/30.jpeg": "e17e184caf0bc871178110c095da1d74",
"assets/assets/images/7.jpeg": "491267297c3ef4654e86abc286e54134",
"assets/assets/images/14.jpeg": "6b9bfbb8f23dac3ad704e8e804e057ba",
"assets/assets/images/12.jpeg": "1ca242ca7c44da65115fd52185a555cf",
"assets/assets/images/4.jpeg": "99c93b008eb463e38190e8e0d44dd03f",
"assets/assets/images/27.jpeg": "bf264bd25685bf28e8b6f739073125df",
"assets/assets/images/2.jpeg": "c9bcde78aefcee9a6c0062b1bac1e339",
"assets/assets/images/13.jpeg": "5cd49512973670157df711ab1e19fdf0",
"assets/assets/images/9.jpeg": "28e62723c4622848c677bff4dd6ee4a6",
"assets/assets/images/29.jpeg": "a37e62d13b26cb08bbc7578204e66f54",
"assets/assets/images/guide.png": "484962c53ba759d358544283ed855ed0",
"assets/assets/images/28.jpeg": "eaeb79b8408d67800ce9eba31f0c15cc",
"assets/assets/images/21.jpeg": "87596da8ea31b7e6c8a27d1b9504558b",
"assets/assets/images/19.jpeg": "0a766c0f54e67ea5018385c76151bf29",
"assets/assets/images/developer.png": "7c60dc302937a8860a385f18a075e43c",
"assets/assets/images/32.jpeg": "3e4be3e4a5cc563a9840be4c2b5a4743",
"assets/assets/images/wedding_cover.jpeg": "afac4c3e7e4bbacc3b33cf04744adee5",
"assets/assets/images/1.jpeg": "04e09098d5f7d58e6a4ed1910b35e662",
"assets/assets/images/invitation.png": "a8dc2c019ac5736a0cf9964e0a6cdc40",
"assets/assets/images/8.jpeg": "761ec95cc74486d13af45363413344e9",
"assets/assets/images/26.jpeg": "7e8bb3bda30795cce05ba6328ee17180",
"assets/assets/images/25.jpeg": "a273f439308dc681e5196bbc9e58ce86",
"assets/assets/images/5.jpeg": "239533f2b95dc15fd39cdb1118e200a9",
"assets/FontManifest.json": "6caa214f216a42dc52d984eb1a97153e",
"assets/fonts/MaterialIcons-Regular.otf": "77faf4e223d9683c437cbf8e6dd70b0d",
"assets/AssetManifest.bin.json": "a51ced72855dd379e718de8c9c22159c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "94f11433f2955fa58f16e39f0b865cb0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"manifest.json": "679a4f83c268e44eb4d80a3abbb0c919",
"version.json": "68e391ff83b40976b571ed858d36d801",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"index.html": "6a0d419a184365a48c859cca56745501",
"/": "6a0d419a184365a48c859cca56745501",
"flutter_bootstrap.js": "633777099d45114a79ca362787780308",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "384b6a6d64f7fc98fd2a206259d33689"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
