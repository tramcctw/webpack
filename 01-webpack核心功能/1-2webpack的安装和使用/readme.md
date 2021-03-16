# webpack 简介

将一切视为模块
它通过一个开发时态的入口模块为起点，分析出所有的依赖关系，然后经过一系列的过程(压缩，合并)，最终生成运行时态的文件

## webpack 特点

- 为前端工程化而生，特别是对于浏览器端工程化问题
- 简单易用，支持零配置，不写配置全部用默认
- 强大的生态，灵活，可拓展，本身功能不多，提供可拓展机制，使第三方库融入
- 基于 nodejs，打包的过程基于 node 环境
- 基于模块化：webpack 在构建过程中，依赖的东西打包，不依赖的不打包，支持 es6 Commonjs AMD CMD 等，打包后既不是 es6 模块也不是 Commonjs 模块

## webpack 安装

- webpack 核心包，包含构建的所有 api
- webpack-cli：提供一个简单的 cli 命令，它调用了 webpack 核心包的 api 来完成构建

- 本地安装，每个工程都有自己对于的版本

## 使用

webpack

webpack 会以./src/index.js 作为入口文件分析依赖关系，打包到./dist/main.js 文件中

## 指定打包后运行的环境(打包后的代码格式不同)

webpack --mode=production
webpack --mode=development // 方便调试
