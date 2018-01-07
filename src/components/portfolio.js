import React from "react"

import Conversation from "components/conversation"

import constants from "helpers/constants"

class Portfolio extends React.Component {
  handleButtonClick = () => {
    this.props.submitText(this.typeEntry.value)
    this.typeEntry.value = ""
  }

  handleInputKeydown = (e) => {
    if (e.keyCode === 13) {
      // press enter
      e.preventDefault()
      this.handleButtonClick()
    }
  }

  render = () => {
    return <div className="portfolio" style={{height: this.props.pageHeight}}>
      <div className="wrapper">
        <Conversation responseArray={this.props.responseArray} />
        <div className="entry">
          <input ref={(input) => {this.typeEntry = input}} className="type-entry" type="text" onKeyDown={this.handleInputKeydown} />
          <button className="type-commit" onClick={this.handleButtonClick}>Say it</button>
        </div>
      </div>
    </div>
  }
}

export default Portfolio
