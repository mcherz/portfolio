const { server, ws_client, base } = require("./webpack.server.common")

module.exports = [
  { ...base, ...server, mode: "development" },
  { ...base, ...ws_client, mode: "development" }
]
