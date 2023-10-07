import barcode from './barcode.svg'
import './style.css'

document.body.innerHTML = `
  <figure>
    <img src="${barcode}">
  </figure>

  <output></output>
`

const image = document.querySelector('img')
const output = document.querySelector('output')

if (image && output) {
  const barcodeDetector = new BarcodeDetector()

  image.onload = async () => {
    const result = await barcodeDetector.detect(image)

    output.innerText = result[0].rawValue
  }
}
