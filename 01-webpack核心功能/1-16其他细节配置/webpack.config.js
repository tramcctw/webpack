const path = require('path')
module.exports = {
  mode:"development",
  entry:{
    index:'./index.js'
  },
  context:path.resolve(__dirname,'src'),
  output:{
    library:'abc',
    libraryTarget:'window'
  },
  target:'web',
  module:{
    rules:[],
    noParse:/^jquery\.js$/
  },
  resolve:{
    modules:['node_modules'],
    // extentions:['.js','.json'],
    alias:{
      "@":path.resolve(__dirname,'src')
    }
  },
  externals:{jquery:'$'},
  stats:{
    colors:false
  }
}
