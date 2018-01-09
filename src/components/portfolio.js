import React from "react"
import bowser from "bowser"

import Conversation from "components/conversation"
import { Volume2, VolumeX } from "icons/volume"

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

  handleTheAwesomeWay = () => {
    this.props.setSpeechRecActive(true)
    this.props.setSpeechSynthActive(true)
  }

  renderEntry = () => {
    if (this.props.speechRecActive) {
      return null
    } else {
      return <div className="entry">
        <input ref={(input) => {this.typeEntry = input}} className="type-entry" type="text" onKeyDown={this.handleInputKeydown} />
        <button className="type-commit" onClick={this.handleButtonClick}>Say it</button>
      </div>
    }
  }

  renderInputSubtitle = () => {
    if (bowser.name === "Chrome") {
      return <div className="input-subtitle">Want to try this <a onClick={this.handleTheAwesomeWay} >the awesome way</a>?</div>
    } else {
      return <div className="input-subtitle">Protip: the coolest part only works in <a href="https://www.google.com/chrome/browser/" target="_blank" rel="noreferrer noopener" >Chrome</a>.</div>
    }
  }

  renderSoundControl = () => {
    return <div className="synth-control" onClick={() => {this.props.setSpeechSynthActive(!this.props.speechSynthActive)}} >
      {this.props.speechSynthActive ? VolumeX : Volume2}
    </div>
  }

  render = () => {
    return <div className="portfolio" style={{height: this.props.pageHeight}}>
      <div className="wrapper">
        <Conversation responseArray={this.props.responseArray} />
        {this.renderEntry()}
        {this.props.speechRecActive ? null : this.renderInputSubtitle()}
      </div>
      {this.props.speechRecActive ? null : this.renderSoundControl()}
    </div>
  }
}

export default Portfolio
