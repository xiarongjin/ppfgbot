import { WechatyBuilder } from 'wechaty'
import QRCode from 'qrcode-terminal'
const wechaty = WechatyBuilder.build() // get a Wechaty instance
wechaty
  .on('scan', (qrcode, status) => {
    console.log(`Scan QR Code to login: ${status}\n`)
    QRCode.generate(
      `https://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`,
      { small: true },
    )
  })
  .on('login', (user) => console.log(`User ${user} logged in`))
  .on('message', (message) => console.log(`Message: ${message}`))
wechaty.start()
