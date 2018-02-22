import React, { Component } from 'react'

class App extends Component {
  pushチェック() {
    console.log('pushチェック')
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistration()
        .then((swr: ServiceWorkerRegistration) => {
          if ('pushManager' in swr) {
            console.log('push 使えるよーん')
          } else {
            console.log('残念！push使えませーん')
          }
        })
    } else {
      console.log('私はサービスワーカーさえ使えないブラウザです')
    }
  }

  render() {
    return (
      <div>
        Appですよ
        <div>
          <input type="button" value="pushが使えるかチェックしてみよう" onClick={this.pushチェック} />
        </div>
      </div>
    )
  }
}

export default App
