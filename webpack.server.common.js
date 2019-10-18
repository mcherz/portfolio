const nodeExternals = require("webpack-node-externals")
const path = require("path")
const globImporter = require("node-sass-glob-importer")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const server = {
  target: "node",
  externals: [nodeExternals()],
  entry: "./server/server.js",
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    library: "boilerplate",
    libraryTarget: "commonjs2"
  },
}

const ws_client = {
  target: "web",
  entry: "./server/ws_client.js",
  output: {
    filename: "ws_client.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
  }
}

const base = {
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: { publicPath: "../" } },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          { loader: "sass-loader",
            options: {
              importer: globImporter()
            }
          },
        ],
      },
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
      path.resolve("./"),
      path.resolve("./src"),
      path.resolve("./server"),
      path.resolve("./node_modules")
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "styles.css"
    })
  ]
}

module.exports = {
  base, server, ws_client
}
