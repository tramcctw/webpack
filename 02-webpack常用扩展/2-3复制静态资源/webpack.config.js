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
  ]
}
