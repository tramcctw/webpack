const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin =  require('html-webpack-plugin')
module.exports = {
  mode:"development",
  entry:{
    index:'./src/index.js',
  },
  output:{
    filename:'scripts/[name].[chunkhash:5].js'
  },
  module:{
    rules:[
      {
        test:/\.(png)|(jpg)$/,
        use:[
          {
            loader:'file-loader',
            options:{
              name:'scrit/[name].[hash:5].[ext]' //生成文件名，这里的hash指的是该文件内容生成的hash
            }
          }
        ]
      },
      // {
      //   test:/\.(png)|(jpg)$/,
      //   use:[
      //     {
      //       loader:'url-loader',
      //       options:{
      //         // limit:false,不限制图片大小
      //         limit:100*1024,
      //         name:'[name].[hash:5].[ext]', //超过后交给file-loader处理
      //       }
      //     }
      //   ]
      // }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template:'./public/index.html',//指定模板文件
      filename:'index.html',
      chunks:["index"]
    }),
  ],
  devServer:{
    port:3000,         // 需要单独进行配置
    open:true,         // 运行后直接打开页面
    index:'index.html',// 默认配置，当访问页面时，默认找index参数值的页面
    proxy:{
      '/api':{
        target:'https://open.duyiedu.com',
        changeOrigin:true
      },
      stats: {
        colors:false
      }
    }
  }
}
