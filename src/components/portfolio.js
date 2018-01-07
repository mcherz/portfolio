import React from "react"

import Conversation from "components/conversation"

class Portfolio extends React.Component {
  render = () => {
    return <div className="portfolio" style={{height: this.props.pageHeight}}>
      <div className="wrapper">
        <Conversation responseArray={this.props.responseArray} />
        <div className="entry">
          <input ref={(input) => {this.typeEntry = input}} className="type-entry" type="text" />
          <button className="type-commit">Say it</button>
        </div>
      </div>
    </div>
  }
}

export default Portfolio
