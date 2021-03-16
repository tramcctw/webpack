# tree shaking

移除掉模块间的无效代码
移除掉不会用到的导出

## 使用

在生产环境，tree shaking 自动开启

## 原理

webpack 会从入口模块出发寻找依赖关系
当解析一个模块时，webpack 会根据 es6 的模块导入导出语句来判断，该模块依赖了另一个模块的哪个导出
webpack 之所以选择 es6 的模块导入语句，因为 es6 有以下特点

1. 导入导出语句只能是顶层语句 // 不需要运行，而 commonjs 可能需要运行代码才能知道是否导入了该模块
2. import 的模块名只能是字符串常量  // commonjs是一个函数调用，可以定义一个变量放在这，需要执行代码
3. import 绑定的变量是不可变的

**import * as obj from 'xxx'将所有导出合成一个模块对象无法修改**

**import obj from 'xxx' 此时 obj 只是一个普通的对象可以修改**

webpack 坚持的原则是：保证代码正常运行，然后再尽量 tree shaking
而default导出的对象，里面不管用没用，都不会被tree shaking

因此我们编写代码时尽量使用 export import {} from 'xxx'

依赖分析完毕后，webpack会根据每个模块每个导出是否被使用，标记没有使用的导出为dead code,交由代码压缩工具terser处理
terser最终移出掉dead code


## 使用第三方库

因为一些库使用的是commonjs，因为commonjs是函数调用，兼容性最好，
而es6属于语法，
而tree shaking无法检测commonjs
但是一些第三方库已经支持es6的导出

## 作用域分析 
tree shaking本身并没有完善的作用域分析，可能导致一些dead code函数中的依赖仍然会被视为依赖，没有对函数内部进行进一步的分析，导致模块引入，插件webpack-deep-scope-plugin可以解决

## 副作用问题
webpack在tree shaking的使用有一个原则：一定要保证代码正确运行
在满足该原则的基础上，再决定tree shaking
因此，当webpack无法确定某个模块使用有副作用时，将其视为副作用,简单的可以确定

```js
// common.js
var n = Math.random()

//index.js
import './common.js'
// 因为此时无法确定random内部有没有副作用
```
解决
在package.json中入
```json
{
    "sideEffects":false  //认为所有的文件都没有副作用
}
```
配置方式
- false
- 数组：设置哪些文件拥有副作用，例如："!src/common.js",表示只要不是common.js文件都有副作用


## css tree shaking
webpack无法对css完成tree shaking，因为css和es6没有关系
因此对css的tree shaking需要其他的插件来完成
例如 purgecss-webpack-plugin
原理对页面中的元素和css文件进行匹配，没有用到的去掉
但是有些元素是在js文件中生成的,所以还需要匹配所有的js文件