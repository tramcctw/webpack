# 抽离 css 文件

style-loader，仅仅是将 css 文件作为 js 代码放入到 head 里面，而打包的文件中没有 css 文件

需要单独导出则需要库，mini-css-extract-plugin
该库提供一个 plugin 和一个 loader

- plugin 负责生成 css 文件
- loader 负责记录要生成的 css 文件的内容
