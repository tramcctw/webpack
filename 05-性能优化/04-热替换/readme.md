// 缩短浏览器重新请求资源的时间
![](./assets/2020-02-21-14-20-49.png)

# 热替换

不能减少构建时间(可能还会增加构建时间)，但是可以降低开发时，代码改动页面呈现的时间
使用后，不会让浏览器整个刷新，只请求改动的部分
![](./assets/2020-02-21-14-22-32.png)

使用和原理

```js
module.exports = {
  mode: "development",
  devServer: {
    hot: true,
  },
  plugins: [
    // wbepack4 可选，不写默认加上，由它完成
    new webpack.HotModuleReplacementPlugin(),
  ],
};
```

在入口文件中加入

```js
if (module.hot) {
  module.hot.accept();
}
```

原理
首先这段代码是会参与最终的运行，
无论是否开启热更新，当重新打包后都会调用 location.reload 属性页面
当开启热更新后，webpack-dev-server 会向打包结果中注入 module.hot 属性,
if module.hot 判断进入，就会执行 module.hot.accept();代码，改变这一行为，交由 HotModuleReplacementPlugin 处理，不触发 location.reload
module.hot.accept()的作用是让 webpack-dev-server 通过 socket(服务器可以主动发送) 管道，把服务器更新的内容发送到浏览器，然后交给插件 HotModuleReplacementPlugin
过程

1. 服务器通过 socket 告诉 HotModuleReplacementPlugin 我更新了
2. HotModuleReplacementPlugin 通过 socket 告诉服务器更新了哪些
3. 服务器通过 socket 发送更新的内容
4. HotModuleReplacementPlugin 不刷新浏览器， 将改变的内容放入打包的 js 中
5. 浏览器重新执行打包好的 js 文件

# 样式热替换

该方式也可以实现样式热替换，只能使用 style-loader,而不能影响 mini-css-extract-plugin
因为热替换是发生在浏览器运行期间，仅在已有样式文件中替换新的样式，重新运行样式文件
