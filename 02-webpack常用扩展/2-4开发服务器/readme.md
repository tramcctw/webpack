# 开发服务器

webpack 单独制作了一个库：webpack-dev-server
**它既不是 plugin，也不是 loader**

## 使用

直接使用 webpack-dev-server，附加参数和 webpack 一致，运行即可
内部执行

1. 内部执行 webpack 命令，传递命令参数
2. 开启 watch
3. 注册 hooks:
   hooks 主要功能:
   1. 将资源列表保存起来
   2. 禁止 webpack 输出文件
4. 使用 express 开启一个服务器，监听某个端口，当请求到达后，根据请求的路径，给予相应的资源内容

## 配置

跨域问题，在开发阶段，如果请求其他域的地址，会产生跨域问题，
使用 Proxy 配置去解决
在开发时实际上请求的是 http://localhost:3000/api/student/findAll?appkey=demo13_1545210570249
但是在 node 服务器收到请求后，转而请求https://open.duyiedu.com/api/student/findAll?appkey=demo13_1545210570249，将数据返回给服务器端

```js
devServer: {
    port:3000,         // 需要单独进行配置
    open:true,         // 运行后直接打开页面
    index:'index.html',// 默认配置，当访问页面时，默认找index参数值的页面,
    proxy:{
        '正则':{ // 当请求的api中被正则匹配到了，则替换host
            target:'https://open.duyiedu.com',//替换host
            changeOrigin:true       //更改请求头中的host和origin
        },
        stats:{} //控制控制台里面的输出
    }
}
```
