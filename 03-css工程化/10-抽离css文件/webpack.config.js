const HtmlWebpackPlugin = require("html-webpack-plugin")
var { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.js",  //根据chunk,一个chunk生成一个css文件，把依赖的css打包成一个css文件
        other:'./src/other.js'
    },
    output:{
        filename:'script/[name].[hash:5].js',
        publicPath:'/',
        //file-loader导出文件路径，但并不知道打包好引用该文件的文件位置在哪，
        //所以需要一个publicPath
    },
    module: {
        rules: [
            {
                test: /\.css$/, use: [MiniCssExtractPlugin.loader,"css-loader?modules"]
            },
            {
                test: /\.jpg$/, use: {
                    loader: "file-loader",
                    options: {
                        name: "imgs/[hash:5].[ext]"
                    }
                }
            }
        ]
    },
    devServer: {
        open: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
            //默认将所有的chunk资源引入
        }),
        new MiniCssExtractPlugin({  //文件名默认使用chunk的文件名
            filename:'css/[name].[hash:5].css'
        })
    ]
}