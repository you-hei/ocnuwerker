self.addEventListener('install', (event) => {
  console.log('installed!')
})

self.addEventListener('fetch', (event) => {
  console.log('fetch', event)
})
