const ExtractTextPlugin = require("extract-text-webpack-plugin")
const nodeExternals = require("webpack-node-externals")
const path = require("path")

module.exports = {
  target: "node",
  externals: [nodeExternals()],
  entry: "./server/server_src.js",
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    library: "portfolio",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        // exclude: /node_modules/,
        query: {
          presets: ["react"]
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve("./src"),
      path.resolve("./node_modules")
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
}
