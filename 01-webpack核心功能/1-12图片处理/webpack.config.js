module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jpg$/,
        use: [{ loader: "./loaders/img-loader.js", options: {limit:1000,filename:"img-[contenthash:5].[ext]"} }],
      },
    ],
  },
};
