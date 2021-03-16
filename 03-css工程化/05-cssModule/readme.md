解决类名冲突

# 思路

认为模块内，不可以冲突，模块之间，可以冲突
使用 css-loader 处理，启用，将 css-loader 配置 modules 设置为 true

# 导出结果中将类名替换为 hash 值，

hash 值 由模块路径 + 类名 生成
此时，css-loader 的导出值，有转换类名后的文件样式，也有原来类名以及对于转换后的 hash 值

```js
{
    {
       .dksgjhdfhgf{
           //xxxx
       },
       .jfklsdjflkdjf{
           //xxxx
       }
    }
   local:{
    c1:'dksgjhdfhgf',
    c2:'jfklsdjflkdjf'
    }
}
```

**细节**
:global(.xxx){

}
表示全局样式，css-loader 不会去转换它
没有使用 global,默认为:local(.xxx){}

控制生成的 hash

```js
modules: {
  localIdentName: "[local]-[hash:5]";
}
```

**注意事项**
css module 往往配合构建工具使用
css module 仅仅处理顶级类名
css module 仅仅处理类选择器
类名见名知意即可

## style-loader

进一步提取 local，
仅仅将 local 导出
