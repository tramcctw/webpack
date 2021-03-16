# @babel/preset-env

该预设集成多个插件,解决兼容性问题

## @babel/cli 编译

按文件编译
babel 入口文件 -o 出口文件

按目录编译
babel 目录 -d 目录

# .browserslistrc

既可以限制 babel 也可以限制 postcss 的兼容范围

@babel/polyfill 已过时，目前使用 core.js 和 generator-runtime 取代
