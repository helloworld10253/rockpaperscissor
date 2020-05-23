module.exports = {
  entry: "./src/app.js",
  module: {
    rules: [
      {
        test: /\.html$/,
        use: "html-loader",
      },
    ],
  },
};
