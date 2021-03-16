const moduless = "index.js";
if (Math.random() < 1) {
  const i = require("./utils/" + moduless); // 分析时不执行代码
  //等价于
//   require.context("./utils", true)(moduless)
  console.log(i);
}

// 以上代码等价于调用,内部调用，仅在webpack中
// 参数1: 打包的模块都在哪个目录内
// 参数2: boolean 是否递归查找子目录
// 参数3: 正则 匹配需要打包的模块，不写全部打包
// const context = require.context("./utils", true);
// // console.log(context);
// console.log(context("./a.js")); // 模块导出的结果
// console.log(context.keys()); // 所有打包的模块

const util = require("./utils/index.js");

console.log(util);
