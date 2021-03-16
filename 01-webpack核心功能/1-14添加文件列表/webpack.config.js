const FilePlugin = require('./plugins/FilePlugins')
module.exports = {
  mode: "development",
  devtool:'source-map',
  plugins:[
    new FilePlugin('abc.md')
  ]
};
