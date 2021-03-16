# 解决路径问题

在使用 file-loader 或 url-loader 时，可能会遇到一个非常有趣的问题

比如，通过 webpack 打包的目录结构如下：

```yaml
dist
    |—— img
        |—— a.png  #file-loader生成的文件
    |—— scripts
        |—— main.js  #export default "img/a.png"
    |—— html
        |—— index.html #<script src="../scripts/main.js" ></script>
```

当 file-loader 处理时，图片文件会将自己的路径导出，而并不知道 index.html 文件在哪里，而 HtmlWebpackPlugin 插件在复制 index.html 时，会使用相对路径去导入打包好的 js 文件，此时 js 文件可以正常执行，而在 js 在引入图片时，依然使用的是图片导出的路径，此时，在 index.html 目录下找不到该图片

解决
webpack 的配置 publicPath，一般配置为'/'
本质，就是一个字符串，配置后，打包后的文件，会在图片导出路径前面加上 publicPath 字符串
而对 publicPath 处理过的插件也会将其导入路径前面加上 publicPath 字符串,此时使用的是服务器的绝对路径，即https://xxxx.com/xxxx

也可在图片 loader 下配置 publicPath 为相对路径
