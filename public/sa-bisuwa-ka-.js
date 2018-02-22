const CACHE_VERSION= 'v1.0.0'

self.addEventListener('install', (event) => {
  console.log('installed!')
})

self.addEventListener('push', (event) => {
  console.log('push イヴェントを受け取ったわ！ほんまやで！', event)
})
