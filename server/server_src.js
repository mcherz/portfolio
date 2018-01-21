import React from "react"
import ReactDOMServer from "react-dom/server"
import express from "express"
import sslRedirect from "heroku-ssl-redirect"

import htmlTemplate from "./html_template"
import PortfolioReduxRoot from "../src/components/portfolio_redux_root"

const server = express()

const port = process.env.PORT || 8080

server.use(sslRedirect())
server.use(express.static("dist"))

server.get("/", (req, res) => {
  ReactDOMServer.renderToNodeStream(
        htmlTemplate(React.createElement(PortfolioReduxRoot))
    ).pipe(res)
})

server.listen(port, () => {
  console.log(`listening on port ${port}...`) //eslint-disable-line
})