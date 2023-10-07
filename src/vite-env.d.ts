/// <reference types="vite/client" />

type BarcodeFormat =
  | 'aztec'
  | 'code_128'
  | 'code_39'
  | 'code_93'
  | 'codabar'
  | 'data_matrix'
  | 'ean_13'
  | 'ean_8'
  | 'itf'
  | 'pdf417'
  | 'qr_code'
  | 'unknown'
  | 'upc_a'
  | 'upc_e'


interface BarcodeDetectorOptions {
  formats: BarcodeFormat[]
}


declare class BarcodeDetector {
  constructor(barcodeDetectorOptions?: BarcodeDetectorOptions)
  
	static getSupportedFormats(): Promise<BarcodeFormat[]>

  detect(image: ImageBitmapSource): Promise<DetectedBarcode[]>
}
