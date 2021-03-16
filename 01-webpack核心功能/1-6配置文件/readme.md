# 配置文件

webpack 提供的 cli 支持很多参数，但是参数一旦过多就不好看了
因此我们可以使用更加灵活的配置文件，来控制 webpack 的行为

也可以指定配置文件
npx webpack --config 123.js //指定配置文件运行

## webpack.config.js

配置文件中通过 Commonjs 模块导出一个对象
为什么不使用 es6 导出
因为 webpack.config.js 是在打包的过程中，读取配置的，而打包的过程是在 node 环境下，使用的是 require 的方式导入，所以在 webpack.config 中只支持 Commonjs 的方式导出，而我们的代码在打包的过程中是不会参与运行的，只会去读取我们写的文件的内容

### 基本配置

- mode:编译模式，字符串，development|production 指定编译结果代码的运行环境，会影响 webpack 对编译结果的处理，若与命令行冲突，以命令行为标准
- entry:string 打包入口文件
- output:object {filename:string} 打包结果的位置,默认目录为 dist
