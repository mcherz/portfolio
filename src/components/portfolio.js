import React from "react"
import bowser from "bowser"

import Conversation from "components/conversation"
import { Volume2, VolumeX } from "icons/volume"

import constants from "helpers/constants"

class Portfolio extends React.Component {
  componentWillReceiveProps = (nextProps) => {
    if (nextProps.speechRecActive && !this.props.speechRecActive) {
      window.addEventListener("keydown", this.handleWindowKeyDown)
      window.addEventListener("keyup", this.handleWindowKeyUp)
    }
  }

  componentWillUnmount = () => {
    window.removeEventListener("keydown", this.handleWindowKeyDown)
    window.removeEventListener("keyup", this.handleWindowKeyUp)
  }

  handleWindowKeyDown = (e) => {
    if (e.keyCode === 32) {
      this.props.startListening()
    }
  }

  handleWindowKeyUp = (e) => {
    if (e.keyCode === 32) {
      this.props.handleListenButtonUp()
    }
  }

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
    navigator.mediaDevices.getUserMedia({ audio: true, video: false })
      .then((stream) => {
        const track = stream.getTracks()[0]  // if only one media track
        track.stop()
        
        this.props.setSpeechRecActive(true)
        this.props.setSpeechSynthActive(true)
      })
      .catch(() => {
        //oh noes
      })
  }

  renderEntry = () => {
    if (this.props.speechRecActive) {
      return <div className="entry" >
        <div className={`hold-to-talk${this.props.listening ? " active" : ""}`} onMouseDown={this.props.startListening} onMouseUp={this.props.handleListenButtonUp} onMouseLeave={this.props.handleListenButtonUp}>Press and hold to speak</div>
      </div>
    } else {
      return <div className="entry">
        <input ref={(input) => {this.typeEntry = input}} className="type-entry" type="text" onKeyDown={this.handleInputKeydown} />
        <button className="type-commit" onClick={this.handleButtonClick}>Say it</button>
      </div>
    }
  }

  renderInputSubtitle = () => {
    if (bowser.name === "Chrome") {
      if (this.props.speechRecActive) {
        return <div className="input-subtitle">Or press and hold the spacebar</div>
      } else {
        return <div className="input-subtitle">Want to try this <a onClick={this.handleTheAwesomeWay} >the awesome way</a>?</div>
      }
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
        {this.renderInputSubtitle()}
      </div>
      {this.props.speechRecActive ? null : this.renderSoundControl()}
    </div>
  }
}

export default Portfolio
