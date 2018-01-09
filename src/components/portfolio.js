import React from "react"
import bowser from "bowser"

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

  renderInputSubtitle = () => {
    if (bowser.name === "Chrome") {
      return <div className="input-subtitle">Want to try this <a onClick={() => {this.props.setSpeechRecActive(true)}} >the awesome way</a>?</div>
    } else {
      return <div className="input-subtitle">Protip: the coolest part only works in <a href="https://www.google.com/chrome/browser/" target="_blank" rel="noreferrer noopener" >Chrome</a>.</div>
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
        {this.props.speechRecActive ? "speech! speech!" : this.renderInputSubtitle()}
      </div>
    </div>
  }
}

export default Portfolio
