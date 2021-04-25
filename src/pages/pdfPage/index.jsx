import Taro from '@tarojs/taro'
import { useEffect } from 'react'
import { View } from '@tarojs/components'

import "pdfh5/css/pdfh5.css"
import './index.less'

function PDFPage() {
  useEffect(() => {
    try {
      // 缓存中的pdfUrl
      let PDFurl = Taro.getStorageSync('pdfUrl')
      if (PDFurl) {
        if (process.env.TARO_ENV === 'h5') {
          // 因为小程序引入报错，所以按需加载 npm i pdfh5
          let Pdfh5 = require('pdfh5')
          //实例化
          this.pdfh5 = new Pdfh5("#Pdf", {
            pdfurl: PDFurl
          });
        }
      }

    } catch (e) {
      // Do something when catch error
    }
  })

  return (
    <View className='PdfCss' id="Pdf"></View>
  )
}
export default PDFPage