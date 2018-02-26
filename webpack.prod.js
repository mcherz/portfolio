const common = require("./webpack.common")
const merge = require("webpack-merge")
const path = require("path")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const webpack = require("webpack")
const WebpackShellPlugin = require("webpack-shell-plugin")

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new WebpackShellPlugin({
      onBuildEnd:["cp ./src/styles/portfolio.css ./dist/styles.css"]
    })
  ]
})
