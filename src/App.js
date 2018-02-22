import React, { Component } from 'react'
import KeyHenkan from './KeyHenkan'

class App extends Component {
  constructor(props) {
    super(props)

    this.pushチェック = this.pushチェック.bind(this)
    this.subscribeする = this.subscribeする.bind(this)

    this.state = {
      subscription: ''
    }
  }

  // チェックで階層深くなりがちなのでプロミスにしたのを気づくといい
  pushチェック(): Promise {
    console.log('pushチェック')
    return new Promise((resolve, reject) => {
      if ('serviceWorker' in navigator) {
        return navigator.serviceWorker.getRegistration()
          .then((swr: ServiceWorkerRegistration) => {
            if ('pushManager' in swr) {
              console.log('push 使えるよーん')
              resolve(swr)
            } else {
              console.log('残念！push使えませーん')
              reject('ocnu')
            }
          })
      } else {
        console.log('私はサービスワーカーさえ使えないブラウザです')
        reject('ocnu')
      }
    })
  }

  subscribeする() {
    const applicationServerPublicKey: string = 'キーを差し込む'
    const applicationServerKey: Uint8Array = KeyHenkan(applicationServerPublicKey)
    this.pushチェック()
      .then((swr: ServiceWorkerRegistration) => {
        console.log('subsribeする', swr)
        swr.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey
        })
          .then((subscription: PushSubscription) => {
            console.log('subscribe then', subscription)
            this.setState({ subscription })
          })
      })
      .catch(console.error)
  }

  render() {
    return (
      <div>
        Appですよ
        <div>
          <input type="button" value="pushが使えるかチェックしてみよう" onClick={this.pushチェック} />
          <input type="button" value="subscribeしないか" onClick={this.subscribeする} />
        </div>
        <div>
          <h3>this is subscription</h3>
          <p>{JSON.stringify(this.state.subscription)}</p>
        </div>
      </div>
    )
  }
}

export default App
