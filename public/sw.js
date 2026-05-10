const CACHE_NAME = "shivam-portfolio-v4";
const ASSETS_TO_CACHE = ["/Shivam-1.png", "/Shivam-1.jpg"];
const OFFLINE_RESPONSE = new Response("Offline", {
  status: 503,
  statusText: "Offline",
  headers: { "Content-Type": "text/plain" },
});

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE)),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        }),
      ),
    ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  if (url.protocol !== "http:" && url.protocol !== "https:") return;
  const isSameOrigin = url.origin === self.location.origin;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.status === 200 && isSameOrigin) {
          const copy = response.clone();
          caches
            .open(CACHE_NAME)
            .then((cache) => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() =>
        caches
          .match(event.request)
          .then((cached) => cached || OFFLINE_RESPONSE),
      ),
  );
});
