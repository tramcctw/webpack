const webpack = require('webpack ')

module.exports = {
    mode: "development",
    devtool: "source-map",
    plugins:[
        new webpack.DefinePlugin({
            PI:`Math.PI`, //key为常量名，value为常量值
            VERSION: `"1.1.1`,
        }),
        new webpack.BannerPlugin({
            banner:`author twc`
        }),
        new webpack.ProvidePlugin({
            $:'jquery', //全局导入，之后在其他文件中不再需要导入
        })
    ]
}