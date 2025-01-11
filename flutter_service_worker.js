'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "deb43f75b4a7a7527ff614bd5cc2ac3f",
".git/config": "64ed216ce2fbac6a3c7064d46960aeab",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ee32bf449cda604d9f47a0b0bb4a533d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4acbee628ee0a25c559e424bdba1a162",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f66bfef6a191dcd304ab5aa046979cce",
".git/logs/refs/heads/main": "f66bfef6a191dcd304ab5aa046979cce",
".git/logs/refs/remotes/origin/HEAD": "c0da922b950aea32cfe5d3499fdee76e",
".git/logs/refs/remotes/origin/main": "fcdee1a01c16300cd41b405addfb6d2f",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0b/03bf1329cfdf7dfe87522957ae538093660b83": "4fc011a2cbcbae6ee1be17cc9c14ed7a",
".git/objects/17/352c14322d69ad38d7e6349bda5ccac6827415": "8995b92557be3ba8d89b2d3b12db9e51",
".git/objects/21/db3117f008df80bd454cf9d9dc99fdf782bb66": "61379f3a6891c07daf871aee0d3b0542",
".git/objects/25/5d886cd614ceb7311f5dd93cfb20ef6193d13b": "5dc5a7fbf5d4d0dc25260d5938c2b470",
".git/objects/29/856b18dc425e328ec22424bc44e9d50dda002e": "c50eac6bd63a9ee9005c933c29167af2",
".git/objects/31/2627bc6f68de037541f0fc0a48891ba92e194a": "3f11a7a06943886d45513a20219c9058",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/36/4b4cb266346ff140f062004be16b0a84b80d7d": "4b12dc2f72360fecd49ab699dc5dd09d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/41/cec3d58a4700deb65d3b00ed2580b331d498a0": "5d08143333327a1f8e3ff482257b0025",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/5b/c4862e773e128e6aa2a8937f66f60930b4b881": "d2c38f9e0e7a76702269aef271ea2dde",
".git/objects/65/69635d1d043548ad9fd3fa37552b4de9a869d3": "004e3c0efb0ee3ae7c69cff879c9a08d",
".git/objects/6b/6ebf72c8076496cab4f139692903adba715b76": "b959a24e9ac1b54e5f8583ffd34f8c95",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/70/8abb1a06ababa633335fb65235c98b369136de": "434023ea86b734e458393721ed74c9c9",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/88/5956e814fc15cc6e5bdb1abeb9ba57ae7b8d9c": "02d34250346de4c474909ee17a5525e2",
".git/objects/8c/3ceac27205b22f6869136075069c45f520cd5d": "e4d3989e72637cf06d815bde5dbd9409",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/97/2612f377a076596c4eb4157de40c034734eb48": "125bb5051ad92b6d3e2f84b78bcfcec9",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/ba2e0426f794fa9422cb03bf7a53eb0dc762c0": "6706136f74b88eb1a64227f0d18610fd",
".git/objects/a2/796951de36e93f432e324f9effc3c430cbe062": "7fb9e8b85a12c731435da9fdc29781c7",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b5/8b72a9142d1e212c43f20a5df322a0d6bc89ed": "34da762654f837280d5b249cd741ee7e",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c7/da2b21471eb6917e09360c82b063ff0cb4d685": "cb832790660e2a9d82a1a6557a42993d",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e9/fb9df1e96e92730a5101f1f0aefcde74492796": "02b3195ea0d2fe4820dafceb25a7a272",
".git/objects/ea/897fb24986b2eb79208e7624d632f1e2e7d3f1": "64a7bba3ef0eef45583b96cf1287624f",
".git/objects/fd/b1c50b03f184da24461cc5a933da0a8d855c09": "b0a7340006049072d79a64becf66b322",
".git/objects/pack/pack-8bec1a5c6d8e51fcb9e226147537e2404fe386fb.idx": "40fedfcd9cd7d0aa5c626c6e6b69ec67",
".git/objects/pack/pack-8bec1a5c6d8e51fcb9e226147537e2404fe386fb.pack": "d3c7b7d550c35872ee1df08cd993f385",
".git/objects/pack/pack-8bec1a5c6d8e51fcb9e226147537e2404fe386fb.rev": "1cb95545fb85d7104169e86273979ed8",
".git/packed-refs": "778f42782b555c009be190b9255835c1",
".git/refs/heads/main": "491f7f1a9233220d9493294e1cf46db2",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "491f7f1a9233220d9493294e1cf46db2",
"assets/AssetManifest.bin": "8494e32848b5f0ac6b849456da321cce",
"assets/AssetManifest.bin.json": "ddf24f38d78c25c6ad618cb0c5004791",
"assets/AssetManifest.json": "10fd63ea6ee603f67c92631255860814",
"assets/assets/images/bemLogo.png": "a24b5875f469b299cd17c1653f1fb2dc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "46eef04bea2a2a8c3e22626142a2b409",
"assets/NOTICES": "fa3f93a79ad0d74f61d82a353fd508cb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "2ce030d42e6b6b0a5029650b5a64166f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "07057dc71368948bc5c8e20faa5d1727",
"/": "07057dc71368948bc5c8e20faa5d1727",
"main.dart.js": "c44923803f2bea73f6c7d86b6677d022",
"manifest.json": "4887f94ccf7e9a1ad6af00aedd8a29c4",
"README.md": "29b8a1e146363c2c2e6d931e76700fe9",
"version.json": "1c19b7bd763bd8709f0e3307aa08cb83"};
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
