# postCss

将 css 的问题集中处理,实际上就是规范 css 代码，转换 css 代码兼容性，添加一些新语法等

类似于编译器，可以将样式源码编译成最终的 css 代码
分析依赖，抽象语法树--->plugins--->转换成字符串
postcss 仅做代码分析，将分析的结果交给插件处理

## 可以独立使用，也可以和 webpack 配合使用

独立使用需要安装
postcss //核心库分析
postcss-cli //提供命令行接口

## 配置文件

postcss.config.js
配置转换为 css 中间所需要使用的插件,
也可以将 css 文件转换为相应的打包文件

```js
module.exports = {
    plugins:{
        ....
    }
}
```

.browserslistrc // 配置不需要兼容的浏览器范围
可以减少转换后的代码量，因为兼容的浏览器越多，生成的 css 代码越多

# stylelint(库)

用于限制开发时的 css 代码规范
通常安装 stylelint-config-standard(库) 库来提供标准的 css 规则判定，而不是手动规定
通常使用文件.stylelintrc 来制定规则

```json
{
  "extends": "stylelint-config-standard", //stylelint-config-standard规范
  "rules": {
    "indentation": null //此规则错误不报错
  }
}
```
