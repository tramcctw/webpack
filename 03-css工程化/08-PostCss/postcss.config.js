module.exports = {
    map:false, //关闭css源码地图
    plugins:{
        "postcss-preset-env":{//内部集成autoprefixer帮助添加厂商前缀   
            stage:0         //内部集成cssnext帮助使用未来的css语法,0,1,2,3稳定性依次增加
        },  //整合了多种插件，默认处理         
        "postcss-apply":{},  //支持某个css新语法   
        "postcss-color-function":{},  //在css中可以使用一些颜色函数  
        "stylelint":{},  //添加css代码限制，在转换过程中，发现不规范报错，但是一般不需要，因为可以在编写过程中通过插件和配置文件.stylelintrc就可以发现错误                
    }
}