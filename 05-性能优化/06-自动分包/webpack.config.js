const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    mode:"production",
    entry:{
        a:'./src/a',
        index:'./src/index'
    },
    output:{
        filename:'[name].[hash:5].js'
    },
    optimization:{
        splitChunks:{
            //分包策略
            chunks:'all',
            // maxSize:60*1024, //意义不发，总量不变，多出文件，某些浏览器不一定会多线程同步请求
            // automaticNameDelimiter:'.',  //控制分隔符
            // minChunks:3,
            minSize:0,
            // 默认有这个两个缓存组
            // 属性名是缓存组的名称，会影响到分包的chunk名
            // 属性值是缓存组的配置，缓存组继承所有的全局配置
            cacheGroups:{
                vendors:{
                    // 当匹配到相应的模块时，将这些模块进行单独打包
                    test:/[\\/]node_modules[\\/]/,
                    // 缓存组的优先级，优先级越高，该策略越先进行处理默认为0
                    priority:-10
                },
                default:{
                    minChunks:2, // 覆盖全局配置，将最小chunk引用数改为2
                    // 优先级
                    priority:-20,
                    // 重用已经被分离出去的chunk
                    reuseExistingChunk:true
                }
            }
            // cacheGroups:{  //实际上默认情况下已经会分离css,因为style-loader已经将css转换为js代码
            //     styles:{
            //         test:/\.css$/,
            //         minChunks:2,
            //         minSize:0,
            //         priority:0,
            //     }
            // }
        }
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader']
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'css/[name].[hash:5].css',
            chunkFilename:'css/common.[hash:5].css'
            // 配置公共模块的文件名
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:"./public/index.html",
            chunks: ["index"]
            //只引入该chunk相关的chunk，css文件
        })
    ]
}