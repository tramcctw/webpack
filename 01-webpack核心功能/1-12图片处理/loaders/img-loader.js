const loaderUtils = require('loader-utils')

function img_style(sourceCode){

    // console.log(sourceCode);
    // console.log(toBase64(sourceCode));// 将二进制转换为base64格式
    const { limit=1000,filename="[contenthash:5].[ext]" } = loaderUtils.getOptions(this)
    if(sourceCode.byteLength >= limit){
        var content = getFilePath.call(this,sourceCode,filename)
    }else{
        var content = toBase64(sourceCode)
        console.log(content);
    }
    return `module.exports = \`${content}\``
}

// 二进制当做普通字符串来读是乱码
// 输出二进制，计算机会转换为16进制

// 不加以字符串的方式去读
img_style.raw = true 

function toBase64(buffer){
    return "data:image/jpg;base64," + buffer.toString('base64')
}

function getFilePath(buffer,name){
    console.log(name);
    const filename = loaderUtils.interpolateName(this,name,{
        content:buffer
    })// 生成文件和路径
    console.log(filename);
    this.emitFile(filename,buffer)  //往最终的chunk assets加入该资源,参数1文件名,参数2文件内容
    return filename
}

module.exports = img_style