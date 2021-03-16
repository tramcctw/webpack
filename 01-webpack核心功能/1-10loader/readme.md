# loader
webpack的功能就是分析模块关系，然后形成资源列表，最终打包
更多的功能需要借助loaders和plugins来完成

## loader
实际上就是一个函数，将模块内容读取出来后，在转换成抽象语法树之前，将代码传给loader函数，然后将loader函数的返回结果转换为抽象语法树

## loader处理流程
```js
if(module需要loader处理){
   return [loader1,loader2,loader3]
   //loader1-->loader2-->loader3-->抽象语法树
}else{
   return []
}
```

## 配置是否需要loader处理规则