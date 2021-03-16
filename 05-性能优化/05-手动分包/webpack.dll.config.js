const webpack = require("webpack");
const path = require("path");
module.exports = {
  mode: "production",
  entry: {
    jquery: ["jquery"], // 可以有多个模块
    lodash: ["lodash"],
  },
  output: {
    filename: "dll/[name].js",
    library: "[name]", // 每个模块暴露全局变量
  },
  plugins: [
    new webpack.DllPlugin({
      //生成 manifest.json文件
      path: path.resolve(__dirname, "dll", "[name].manifest.json"), //生成文件的路径，不参与运行
      name: "[name]", // 记录模块暴露的变量名
    }),
  ],
};
