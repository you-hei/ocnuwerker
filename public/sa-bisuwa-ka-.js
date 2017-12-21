self.addEventListener('install', (event) => {
  console.log('installed!')
})

self.addEventListener('fetch', (event) => {
  console.log('fetch', event)
  if (event.request.url === 'http://localhost:8888/ocnu.json') {
    console.log('ocnuを取ろうとしてるぞ！')
    event.respondWith(fetch(event.request))
  }

})
