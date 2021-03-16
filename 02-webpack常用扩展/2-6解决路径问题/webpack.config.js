const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: "development",
    devtool: "source-map",
    output: {
        filename: "scripts/[name].[chunkhash:5].js",
        publicPath: "/"
        //当不使用public是
    },
    module: {
        rules: [
            {
                test: /\.(png)|(gif)|(jpg)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "imgs/[name].[hash:5].[ext]",
                        // publicPath:'../'
                    }
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "html/index.html"
        })
    ],
    devServer: {
        open: true,
        openPage: "html/index.html",  //指定打开的html页面
    },
    stats: {
        modules: false,
        colors: true
    }
}