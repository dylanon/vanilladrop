const path = require("path");

module.exports = {
  mode: "production",
  devtool: "source-map",
  optimization: {
    minimize: true
  },
  entry: "./scripts/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "scripts")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  }
};
