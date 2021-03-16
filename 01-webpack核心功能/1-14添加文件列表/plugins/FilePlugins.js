module.exports = class FilePlugins{

    constructor(filename = 'fileList.txt'){
        this.filename = filename
    }

    apply(compiler){
        
        compiler.hooks.emit.tap('filePlugins',complation=>{  //形成导出文件之前的事件
            const arr = []
            for(let prop in complation.assets){
                const content = `【${prop}】大小${complation.assets[prop].size()/1000}KB`
                arr.push(content)
            }
            const str = arr.join('\n\n')
            complation.assets[this.filename] = {
                source(){
                    return str  //返回key的内容
                },
                size(){
                    return str.length // 返回key内容的大小
                }
            }
        })
    }
}