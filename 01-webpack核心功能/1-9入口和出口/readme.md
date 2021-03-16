# 入口和出口
出口配置针对的是总资源列表的文件名或路径名
入口配置针对的是chunk
- output
   - {path:绝对路径,filename:配置合并的js文件规则}
- entry
   - {key:chunk名称,val:chunk的入口文件,...} 可以配置多个chunk
   - {key:chunk名称,val:[chunk的入口文件]}   启动模块有两个，打包生成一个模块列表一个chunk assets
每个chunk都有对应的打包文件
## filename规则 "[].js"
- name: 指的是chunk的name，指定后被chunk的name替换
- hash:number(表示hash取几位): 指的是总的资源的hash，通常用于解决缓存问题，因为浏览器有缓存，当我们改变文件后重新上传服务器，而用户依然使用的是缓存的js，所有希望当我们改变文件后上传服务器，文件名也随之改变，这样浏览器就找不到缓存的文件，需要重新请求
- chunkhash；相应的chunk修改影响相应的生成文件的hash
- id: chunkId 不建议使用，因为开发环境和生产环境不相同

# 入口和出口的最佳实践

## 一个页面对应一个js文件，公共代码抽离
配置入口一个chunk对应一个入口文件
适用于公共代码较少，缺点，会导致公共代码的重复打包，重复传输

## 一个页面对应多个js
开发时，不依赖一个模块，生产时依赖一个公共的模块
分别对应chunk打包即可
打包后
pageA  -- APack.js -- common
pageB  -- BPack.js -- common

开发时
pageA -- index.js(入口模块)
pageB -- index.js(入口模块)
common -- index.js(入口模块)
分别对应chunk打包即可
## 单页应用
一个页面，一个入口模块
配置一个chunk打包即可