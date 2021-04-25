# 在线预览PDF
用Taro3 React开发的demo

支持H5端、小程序端在线预览pdf

适配安卓、ios

yarn global add @tarojs/cli3.2.5

# 更新说明
1、v1.0.0  完成H5端、微信端在线预览PDF。

# 学习资料
1、Taro: 一个开放式跨端跨框架解决方案 <https://taro.aotu.io/>

2、pdfh5: web/h5/移动端PDF预览插件 <https://github.com/gjTool/pdfh5>

# H5端在线预览PDF编写代码步骤简要概述
1、H5端在线预览PDF

安装插件 npm i pdfh5

2、定义查看PDF的事件，点击触发将pdfUrl地址保存在缓存中，跳转页面pdfPage,做H5端的新开页面访问PDF

3、在新开页面pdfPage中按需加载pdfh5插件,因为直接引入pdfh5在小程序生成之后会报错，记得引入pdfh5.css
<pre><code>
import "pdfh5/css/pdfh5.css"

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


<View className='PdfCss' id="Pdf"></View>
</code></pre>


# 小程序端在线预览PDF编写代码简要概述
1、Taro.downloadFile :下载文件资源到本地,客户端直接发起一个 HTTPS GET 请求，返回文件的本地临时路径，单次下载允许的最大文件为 50MB。

2、Taro.openDocument 新开页面打开文档，支持格式"doc" | "docx" | "xls" | "xlsx" | "ppt" | "pptx" | "pdf" ，支持端weapp

3、定义查看PDF的事件，点击触发，通过内置环境变量process.env.TARO_ENV做好H5端及小程序端的代码区别

<pre><code>
const gotoPDF = () => {
    if (process.env.TARO_ENV === 'h5') {
      Taro.setStorageSync('pdfUrl', 'https://static.zje.com/1619076422102_.pdf')
      Taro.navigateTo({
        url: '/pages/pdfPage/index',
      })
    } else if (process.env.TARO_ENV === 'weapp') {
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
</code></pre>

 
