const { server, base } = require("./webpack.server.common")

module.exports = { ...base, ...server, mode: "production" }
