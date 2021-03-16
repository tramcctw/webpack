module.exports = class MyPlugin{
    apply(compiler){
        console.log('插件运行');
        complier.hooks.事件名称.事件类型(name,function(comilation){
            //事件处理函数
        })
    }
}