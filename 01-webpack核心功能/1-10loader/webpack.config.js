module.exports = {
    mode:'development',
    // module:{
    //     rules:[
    //         {
    //             test:/index\.js$/,    //正则表达式，匹配模块的路径，匹配到的模块需要使用对应的loaders
    //             use:[
    //                 {
    //                     loader:'./loader/test-loader', //loader的路径,webpack打包时会require该路径
    //                     options:{
    //                         changeVar:'变量'
    //                     }
    //                 }  //每个loader是一个对象
    //             ]   //匹配到了之后使用哪些loader
    //         }
    //     ]  //模块是否需要loader的匹配规则
    // }

    module:{
        rules:[
            {
                test:/index\.js$/,   
                use:['./loader/loader1?changeVar=变量','./loader/loader2']   
            },
            {
                test:/\.js$/,
                use:['./loader/loader3','./loader/loader4']
            }
        ] 
    }
} 

//过程可理解为[loader1,loader2,loader3,loader4]  //从后往前
// require('规则1') [loader1,loader2]
// require('规则2') [loader3,loader4]