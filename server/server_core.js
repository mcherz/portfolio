import React from "react"
import ReactDOMServer from "react-dom/server"

import http from "http"
import express from "express"
import compression from "compression"
import sslRedirect from "heroku-ssl-redirect"

import makeDevServer from "./server_dev"
import htmlTemplate from "./html_template"

export default port => {
  const production = process.env.NODE_ENV === "production"

  const components = {
    root: require("components/portfolio_redux_root.js").default
  }

  const app = express()
  production && app.use(sslRedirect())
  production && app.use(compression())
  app.use(express.static("dist"))
  app.get("/", (req, res) => {
    res.write("<!doctype html>")
    ReactDOMServer.renderToNodeStream(
      htmlTemplate(React.createElement(components.root), port)
    ).pipe(res)
  })

  return production ? app : makeDevServer(components, http.createServer(app), port)
}
