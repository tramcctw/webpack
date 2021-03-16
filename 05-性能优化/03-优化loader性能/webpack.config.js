module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "cache-loader",
            options: {
              cacheDirectory: "./cache", //配置缓存的目录
            },
          },
          "thread-loader",
          "babel-loader",
        ],
        exclude: /lodash/, //排除掉lodash的处理
      },
    ],
  },
};
