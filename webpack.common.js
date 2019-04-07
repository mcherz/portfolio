const path = require("path")
const globImporter = require("node-sass-glob-importer")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
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
        exclude: /node_modules/,
        query: {
          presets: ["@babel/react"]
        }
      },
    ]
  },
  resolve: {
    modules: [
      path.resolve("./src"),
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
