const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MinCss = require('mini-css-extract-plugin')
const Purge = require('purgecss-webpack-plugin')
const path = require('path')
const globAll = require('glob-all')

const htmlFile = path.resolve(__dirname,'public/index.html')
const jsFile = path.resolve(__dirname,'src')
const paths = globAll.sync([   //返回路径组成的数组
    `${jsFile}**/*.js` ,  //表示该目录下面的所有的js文件
    htmlFile
])

module.exports = {
    mode:"production",
    module:{
        rules:[
            {test:/.css$/,use:[MinCss.loader,"css-loader"]}
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new MinCss(),
        new Purge({  // 生成的css文件，配置需要对比的文件，然后去掉css文件中多余的样式
            paths
        })
    ]
}