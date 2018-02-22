import _ from 'lodash'

const KeyHenkan = (applicationServerPublicKey: string): Uint8Array => {
  const padding = '='.repeat((4 - (applicationServerPublicKey.length % 4)) % 4)
  const base64 = (applicationServerPublicKey + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/')

  const rawData = window.atob(base64)

  const u8a = new Uint8Array(rawData.length)
  _.range(0, rawData.length)
    .forEach((i) => { u8a[i] = rawData.charCodeAt(i) })

  return u8a
}

export default KeyHenkan
