import '/scss/style.scss'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    Image editor
  </div>
`

setupCounter(document.querySelector('#counter'))
