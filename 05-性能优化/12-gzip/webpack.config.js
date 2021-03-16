const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const compressionWebpackPlugin = require("compression-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new compressionWebpackPlugin({
      filename: "[file].xx", //配置压缩后的文件名
      test: /main\.js/, //只针对压缩的js文件
      minRatio: 0.8, // 压缩后的比例
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
