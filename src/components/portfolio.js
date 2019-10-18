import React from "react"
import { connect } from "react-redux"
import bowser from "bowser"

import Conversation from "components/conversation"
import { Volume2, VolumeX } from "icons/volume"

import { setModalOpen, setSpeechRecActive, setSpeechSynthActive } from "actions/speech_actions"

import submitText from "actions/submit_text"
import startSpeechRecognition from "actions/start_speech_recognition"

const InputSubtitle = props => {
  if (props.browser === null) { //node
    return <div id="placeholder" className="input-subtitle" />
  }
  if (props.browser.name === "Chrome" && props.browser.osname !== "ios") {
    if (props.speechRecActive) {
      return null
    } else {
      return <div id="awesome" className="input-subtitle">
        Want to try this
        <a onClick={() => {props.setModalOpen(true)}} > the awesome way</a>
        ?
      </div>
    }
  } else if (!props.browser.x) {
    return <div id="chrome" className="input-subtitle">Protip: the coolest part only works in <a href="https://www.google.com/chrome/browser/" target="_blank" rel="noreferrer noopener" >Chrome</a>.</div>
  } else {
    return <div id="placeholder" className="input-subtitle" />
  }
}

const SoundControl = props =>
  <div
    className="synth-control"
    onClick={() => {props.setSpeechSynthActive(!props.speechSynthActive)}}
  >
    {props.speechSynthActive ? VolumeX : Volume2}
  </div>

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      browser: null
    }
  }
  componentDidMount = () => {
    if (this.typeEntry) {
      this.typeEntry.focus()
    }
    this.setState({ browser: bowser })
  }

  handleButtonClick = () => {
    if (this.typeEntry.value.trim().length > 0) {
      this.props.submitText(this.typeEntry.value)
      this.typeEntry.value = ""
    }
  }

  handleInputKeydown = (e) => {
    if (e.keyCode === 13) {
      // press enter
      e.preventDefault()
      this.handleButtonClick()
    }
  }

  handleTheAwesomeWay = () => {
    this.props.setModalOpen(false)
    navigator.mediaDevices.getUserMedia({ audio: true, video: false })
      .then((stream) => {
        const track = stream.getTracks()[0]  // if only one media track
        track.stop()

        this.props.startSpeechRecognition()

      })
      .catch(() => {
        //oh noes
      })
  }

  renderTakeover = () => {
    return <div className="takeover">
      <div className="modal">
        <div className="modal-text">
          Spoiler alert: the awesome way is voice recognition.
        </div>
        <div className="modal-text">
          In just a sec, the browser will ask you to allow microphone access
          (because otherwise there's nothing to recognize.)
        </div>
        <div className="modal-buttons">
          <button
            className="modal-confirm"
            onClick={this.handleTheAwesomeWay}
          >Let's do it!</button>
          <button
            className="modal-cancel"
            onClick={() => {this.props.setModalOpen(false)}}
          >Creepy, no.</button>
        </div>
      </div>
    </div>
  }

  render = () => {
    return <div className="portfolio" style={{height: this.props.pageHeight}}>
      <div className="wrapper">
        <Conversation responseArray={this.props.responseArray} />
        {!this.props.speechRecActive && <div className="entry">
          <input
            ref={(input) => {this.typeEntry = input}}
            className="type-entry"
            type="text"
            onKeyDown={this.handleInputKeydown}
          />
          <button className="type-commit" onClick={this.handleButtonClick}>Say it</button>
        </div>}
        <InputSubtitle { ...this.props } browser={this.state.browser} />
      </div>
      {this.props.speechRecActive ? null : <SoundControl { ...this.props } />}
      {this.props.modalOpen ? this.renderTakeover() : null}
    </div>
  }
}

const mapStateToProps = state => ({
  modalOpen: state.speech.modalOpen,
  responseArray: state.response.responseArray,
  speechRecActive: state.speech.speechRecActive,
  speechSynthActive: state.speech.speechSynthActive
})

const mapDispatchToProps = {
  setModalOpen,
  setSpeechRecActive,
  setSpeechSynthActive,
  startSpeechRecognition,
  submitText
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio)
