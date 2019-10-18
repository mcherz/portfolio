const common = require("./webpack.common")
const merge = require("webpack-merge")
const path = require("path")
const nodeExternals = require("webpack-node-externals")

const bundle = merge(common, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  entry: {
    bundle: ["./src/index.js", "./src/styles.js"],
  },
  output: {},
  resolve: {
    modules: [ path.resolve("./src") ],
  },
})

const root = merge(common, {
  mode: "development",
  externals: [nodeExternals()],
  devtool: "cheap-module-eval-source-map",
  entry: {
    root: ["./src/components/portfolio_redux_root.js"],
  },
  output: {},
  resolve: {
    modules: [ path.resolve("./src") ],
  }
})

module.exports = [ root, bundle ]
