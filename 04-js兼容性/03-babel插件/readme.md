# babel 插件

```json
{
  "presets": ["a", "b"],
  "plugins": ["c", "d"]
}
// 执行顺序cdba
```

预设集成的插件可以转化称为标准的语法
插件可以转换一些早期但没有称为标准的语法

`@babel/plugin-transform-runtime`
当代码过多时，每个文件都有转换的辅助函数，造成辅助函数重复，该插件帮助解决
从@babel/runtime 库中导入，需要安装该库
