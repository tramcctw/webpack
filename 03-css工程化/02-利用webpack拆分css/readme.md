解决的是 css 细分的问题

# 利用 webpack 拆分 css

之前只能将 css 文件写在静态资源中
因为 css 无法被 webpack 识别，webpack 打包只能识别 js 代码
所以需要 loader 进行转换

## css-loader

作用就是将 css 代码转换为 js 代码，处理很简单，转换为字符串导出,把其他的依赖作为依赖导入，
以便 webpack 分析，导入，并合并导出，其他的不做任何处理
例如

```js
.red{
    color:"#f40";
    background:url("./bg.png)
}
//转换后
var import1 = require('./bg.png')
module.export = `.red{
    color:"#f40";
    background:url(`${import1}`)
`
```

## style-loader

由于 css-loader 仅提供将 css 转换为字符串导出的能力，
style-loader 可以进 css-loader 转换后的代码进一步处理，加入到页面的 style 元素中去

```js
module.exports = `.red{
    color:'#f40'
}`;
var style = module.exports;
var styleElem = document.createElement("style");
styleElem.innnerHTML = style;
document.head.appendChild(styleElem);
module.exports = {};
```

多次导入不会多次创建 style,因为打包过程中有模块记录，
每一个 css 文件生成一个 style 标签
