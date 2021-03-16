const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    main: "./src/index.js",
    other: "./src/other.js",
  },
  output: {
    filename: "[name].[hash:5].js",
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!dll", "!dll/*"], //排除清空的文件
    }),
    new webpack.DllReferencePlugin({
      manifest: require("./dll/jquery.manifest.json"), //配置资源清单，当打包时发现资源清单有记录则不导入该模块
    }),
    new webpack.DllReferencePlugin({
      manifest: require("./dll/lodash.manifest.json"), //配置资源清单，当打包时发现资源清单有记录则不导入该模块
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
