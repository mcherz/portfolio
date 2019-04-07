const common = require("./webpack.common")
const merge = require("webpack-merge")
const path = require("path")

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  entry: ["./src/index-dev.js", "./src/styles.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dev")
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dev")
  },
})
