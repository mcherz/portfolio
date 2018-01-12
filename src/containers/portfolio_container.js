import { connect } from "react-redux"

import Portfolio from "components/portfolio"

import { setModalOpen, setSpeechRecActive, setSpeechSynthActive } from "actions/speech_actions"

import handleListenButtonUp from "actions/handle_listen_button_up"
import submitText from "actions/submit_text"
import startSpeechRecognition from "actions/start_speech_recognition"

const mapStateToProps = (state/*, ownProps*/) => {
  return {
    listening: state.speech.listening,
    modalOpen: state.speech.modalOpen,
    responseArray: state.response.responseArray,
    speechRecActive: state.speech.speechRecActive,
    speechSynthActive: state.speech.speechSynthActive
  }
}

const mapDispatchToProps = (dispatch/*, ownProps*/) => {
  return {
    handleListenButtonUp(){
      dispatch(handleListenButtonUp())
    },
    setModalOpen(open){
      dispatch(setModalOpen(open))
    },
    setSpeechRecActive(active){
      dispatch(setSpeechRecActive(active))
    },
    setSpeechSynthActive(active){
      dispatch(setSpeechSynthActive(active))
    },
    startSpeechRecognition(){
      dispatch(startSpeechRecognition())
    },
    submitText(text){
      dispatch(submitText(text))
    }
  }
}

const PortfolioContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio)

export default PortfolioContainer
