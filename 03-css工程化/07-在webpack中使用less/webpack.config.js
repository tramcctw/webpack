const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    devServer: {
        open: true
    },
    module:{
        rules:[
            {
                test:/\.less$/,
                use:['style-loader','css-loader?modules','less-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}