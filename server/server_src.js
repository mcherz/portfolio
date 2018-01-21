import React from "react"
import ReactDOMServer from "react-dom/server"
import express from "express"

import htmlTemplate from "./html_template"
import PortfolioReduxRoot from "../src/components/portfolio_redux_root"

const server = express()

const port = process.env.PORT || 8080

server.use((req, res, next) => {
  if (req.header["x-forwarded-proto"] === "http") {
    res.redirect(`https://${req.header("host")}${req.url}`)
  } else {
    next()
  }
})

server.use(express.static("dist"))

server.get("/", (req, res) => {
  ReactDOMServer.renderToNodeStream(
        htmlTemplate(React.createElement(PortfolioReduxRoot))
    ).pipe(res)
})

server.listen(port, () => {
  console.log(`listening on port ${port}...`) //eslint-disable-line
})