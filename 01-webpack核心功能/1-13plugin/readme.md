# plugin

当 xxx 时，xxx
本质，当编译过程到达某个阶段时，触发相应的 plugin

## plugin 的本质

是带有一个 apply 方法的对象

- 参数
  compiler 带 webpack 初始化阶段创建的，整个打包期间只有一个
  后续完成打包工作的是 compiler 对象内部创建的 compilation
  complier 对象只有一个，而当 webpack watch 时，每次重新保存文件时，webpack 重新编译，而不从初始化开始，然后再**重新创建**compilation 完成打包

apply 函数是在初始化阶段，创建 compiler 对象后立即运行
可以在 apply 函数内部注册事件

```js
complier.hooks.事件名称.事件类型(name, function (comilation) {
  //事件处理函数
});
```

## webpack 使用插件

```js
module.exports = {
  mode: "development",
  plugins: [插件对象],
};
```
