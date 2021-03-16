const loaderUtils = require('loader-utils')
module.exports = function test_loader(sourceCode){
    const option = loaderUtils.getOptions(this) //this存放了许多相关的信息
    console.log(option);
    const reg = new RegExp(option.changeVar,'g')
    const code =  sourceCode.replace(reg,'var')
    return code
}