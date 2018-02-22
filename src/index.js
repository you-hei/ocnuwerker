import React from 'react'
import { render } from 'react-dom'
import App from './App'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sa-bisuwa-ka-.js')
    .then((registration) => {
      console.log('registered')
    })
    .catch((err) => {
      console.log('register failed')
    })
}

render(
  <div><App /></div>,
  document.getElementById('root')
)
