const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public", "scripts"),
    filename: "app.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  devtool: "cheap-module-eval-source_map",
  devServer: {
    contentBase: path.join(__dirname, "public")
  }
};
