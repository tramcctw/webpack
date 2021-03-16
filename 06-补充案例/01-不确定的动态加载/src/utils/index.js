// 导出当前目录中的所有模块
// 将所有的模块实现统一导出，且可以动态增减
const context = require.context("./", true, /\.js$/);
for (const key of context.keys()) {
  if (key !== "./index.js") {
    const myKey = key.substr(2);
    const props = myKey.substr(0, myKey.length - 3);
    exports[props] = context(key);
  }
}

