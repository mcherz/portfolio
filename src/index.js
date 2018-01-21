import React from "react"; //eslint-disable-line
import ReactDOM from "react-dom"
import PortfolioReduxRoot from "components/portfolio_redux_root"
require("styles/portfolio.css")

ReactDOM.hydrate(<PortfolioReduxRoot/>, document.getElementById("app"))
