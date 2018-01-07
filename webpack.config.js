const path = require("path")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const webpack = require("webpack")

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["react"]
        }
      },
      {
        test: /\.css$/,
        use: [ "style-loader", "css-loader" ]
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve("./src"),
      path.resolve("./node_modules")
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist")
  },
  plugins: [
    // new UglifyJsPlugin({
    //   sourceMap: false
    // }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
  ]
}
