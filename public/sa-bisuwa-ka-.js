const CACHE_VERSION= 'v1.0.0'

self.addEventListener('install', (event) => {
  console.log('installed!')
})

self.addEventListener('push', (event) => {
  console.log('push イヴェントを受け取ったわ！ほんまやで！', event)
  if (self.Notification && self.Notification.permission === 'granted') {
    const dataJson = event.data.json()
    const { title } = dataJson
    console.log(`title: ${title}, json: ${JSON.stringify(dataJson)}`)
    event.waitUntil(self.registration.showNotification(title, dataJson))
  }
})
