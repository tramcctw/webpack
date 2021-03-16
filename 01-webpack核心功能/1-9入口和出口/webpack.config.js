const path = require('path')
module.exports = {
    mode:'production',
    entry:{
        // main:'./src/index.js', // 属性名chunk的名称，属性值chunk的入口模块
        // a:'./src/a.js'
        a:["./src/index.js", "./src/a.js"]  //启动模块有两个
    },
    output:{
        path: path.resolve(__dirname,"target"),//必须配置的是绝对路径,打包的目录
        // filename:'[name].[hash:5].js',   //配置的合并的js文件的规则
        filename:'[name].[chunkhash:5].js'
    },
} 
