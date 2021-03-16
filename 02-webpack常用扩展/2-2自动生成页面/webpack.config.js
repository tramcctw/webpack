const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin =  require('html-webpack-plugin')
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
    new HTMLWebpackPlugin({
      template:'./public/index.html',//指定模板文件
      filename:'a.html',  //指定打包后的html文件名
      chunks:["a"]    //指定引入的chunk
    }),
  ]
}
