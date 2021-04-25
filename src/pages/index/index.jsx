import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { Button, View } from '@tarojs/components'
import { Loading } from '../../components/loading'

import { useAsyncEffect } from '../../utils/index'

function Index() {
  const [loading, setLoading] = useState(true)

  useAsyncEffect(async () => {
    try {
      setLoading(false)
    } catch (error) {
      setLoading(true)
    }
  }, [])

  const gotoPDF = () => {
    console.log('去看PDF')
    if(process.env.TARO_ENV === 'h5'){
      console.log('h5')
    }else if(process.env.TARO_ENV === 'weapp'){
      Taro.downloadFile({
        url: 'https://static.zje.com/1619076422102_.pdf',
        success: function (res) {
          var filePath = res.tempFilePath
          // Taro.openDocument 新开页面打开文档，支持格式"doc" | "docx" | "xls" | "xlsx" | "ppt" | "pptx" | "pdf" ,支持端weapp
          Taro.openDocument({
            filePath: filePath,
            success: function (res) {
              console.log('打开文档成功')
            }
          })
        }
      })
    }
  }


  const contentEl = loading ? <Loading />
    : (
      <Button onClick={gotoPDF} >在线预览pdf</Button>
    )

  return (
    <View className='index'>
      {contentEl}
    </View>
  )
}

export default Index
