const myPlugin = require('./plugins/myPlugins')
module.exports = {
  mode: "development",
  plugins:[
    new myPlugin()
  ]
};
