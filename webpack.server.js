const nodeExternals = require("webpack-node-externals")
const path = require("path")

module.exports = {
  target: "node",
  mode: "production",
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
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/react"]
        }
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve("./src"),
      path.resolve("./node_modules")
    ]
  }
}
