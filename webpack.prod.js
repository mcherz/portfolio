const common = require("./webpack.common")
const merge = require("webpack-merge")
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")
const webpack = require("webpack")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const autoprefixer = require("autoprefixer")
const path = require("path")

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  entry: ["./src/index.js", "./src/styles.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
      parallel: true,
    }),
    new OptimizeCSSAssetsPlugin({}),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer()
        ]
      }
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ]
})
