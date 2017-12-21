self.addEventListener('install', (event) => {
  console.log('installed!')
})

self.addEventListener('fetch', (event) => {
  console.log('fetch', event)
  if (event.request.url === 'http://localhost:8888/ocnu.json') {
    console.log('ocnuを取ろうとしてるぞ！')
    event.respondWith(new Promise((resolve) => {
      // 返すjson
      const obj = {
        o: {
          name: 'hoge-',
          color: '#000000',
          nagasa: 2000
        }
      }
      // Blob オブジェクトはファイルに似たオブジェクトで、immutable な生データです。(from MDN)
      const blob = new Blob([JSON.stringify(obj)], { type: 'application/json' })
      // responseにblobとステータスとかをつける
      const response = new Response(blob, { 'status': 200, 'statusText': 'yesyesyes!' })
      // 返す
      resolve(response)
  }

})
