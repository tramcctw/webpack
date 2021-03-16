const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin =  require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  mode:"development",
  entry:{
    index:'./src/index.js',
    a:'./src/a.js'
  },
  output:{
    filename:'scripts/[name].[chunkhash:5].js'
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template:'./public/index.html',//指定模板文件
      filename:'index.html',
      chunks:["index"]
    }),
    new CopyWebpackPlugin([
      {
        from:'./public',to:"./" //to相对于的是dist目录
      },  //复制规则
    ])
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
