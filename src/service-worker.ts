const CACHE_NAME = 'pwa-learning-v1'
const ASSETS = ['/', '/index.html', '/src/main.tsx', '/styles.css']

self.addEventListener('install', (event: any) => {
  // @ts-ignore
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS)
    })
  )
})

self.addEventListener('activate', (event: any) => {
  // @ts-ignore
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.map((k) => (k === CACHE_NAME ? Promise.resolve() : caches.delete(k)))))
  )
})

self.addEventListener('fetch', (event: any) => {
  // @ts-ignore
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).catch(() => caches.match('/index.html')))
  )
})
