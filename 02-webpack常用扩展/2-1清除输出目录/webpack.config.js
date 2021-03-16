const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
  mode:"development",
  entry:{
    index:'./src/index.js'
  },
  output:{
    filename:'[name].[chunkhash:5].js'
  },
  plugins:[
    new CleanWebpackPlugin()
  ]
}
