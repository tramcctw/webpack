# 不同的模块化标准

webpack 支持打包 es6 模块标准和 Commonjs 模块化标准
也支持它们混用的打包

## es6 导出，Commonjs 导入

```js
//文件a
export var a = 1;
export default 2;
//导入
const obj = require("./a");
obj ===
  {
    a: 1,
    default: 2,
  };
```

## commonjs 导出，es6 导入

```js
// a文件
module.exports = {
  a: 1,
  b: 2,
};

// es6 导入
import * as obj from "./a";
或者;
import c from "./a";
{
    a:1,
    b:2
}
```

**最佳实践选择其中一种就可以了**
