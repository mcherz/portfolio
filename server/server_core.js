import React from "react"
import ReactDOMServer from "react-dom/server"

import http from "http"
import express from "express"
import sslRedirect from "heroku-ssl-redirect"

import makeDevServer from "./server_dev"
import htmlTemplate from "./html_template"

export default port => {
  const production = process.env.NODE_ENV === "production"

  const components = {
    root: require("components/portfolio_redux_root.js").default
  }

  const app = express()
  app.use(express.static("dist"))
  app.use(sslRedirect())
  app.get("/", (req, res) => {
    ReactDOMServer.renderToNodeStream(
      htmlTemplate(React.createElement(components.root), port)
    ).pipe(res)
  })

  return production ? app : makeDevServer(components, http.createServer(app), port)
}
