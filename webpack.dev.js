const common = require("./webpack.common")
const merge = require("webpack-merge")
const path = require("path")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const webpack = require("webpack")

module.exports = merge(common, {
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "dist")
  },
})
