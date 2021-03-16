const baseConfig = require('./webpack.base.config')
const { CleanWebpackPlugin } =  require('clean-webpack-plugin')
module.exports = {
    ...baseConfig,
    mode:'production',
    plugins:[
        new CleanWebpackPlugin(),
    ]
}