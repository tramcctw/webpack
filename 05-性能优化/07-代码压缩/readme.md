# 代码压缩

减少体积，破坏代码的可读性，提升破解成本

之前使用的是`UglifyJs`不支持 es6 语法
现在使用的是 terser 基于 `UglifyJs`

副作用函数，函数运行过程中对外部环境造成影响的功能

- 异步
- localstorage
- 对外部数据的修改

纯函数，没有副作用，且返回的参数仅依赖参数，叫做纯函数

webpack 自动继承 terser
处理没有使用的变量，无意义的纯函数，优化判断逻辑
永远不会访问到的代码

**export 的东西不会被压缩删除**
