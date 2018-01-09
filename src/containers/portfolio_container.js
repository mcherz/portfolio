import { connect } from "react-redux"

import Portfolio from "components/portfolio.js"

import { setSpeechRecActive, setSpeechSynthActive } from "actions/speech_actions"

import submitText from "actions/submit_text"

const mapStateToProps = (state/*, ownProps*/) => {
  return {
    responseArray: state.response.responseArray,
    speechRecActive: state.speech.speechRecActive,
    speechSynthActive: state.speech.speechSynthActive
  }
}

const mapDispatchToProps = (dispatch/*, ownProps*/) => {
  return {
    setSpeechRecActive(active){
      dispatch(setSpeechRecActive(active))
    },
    setSpeechSynthActive(active){
      dispatch(setSpeechSynthActive(active))
    },
    submitText(text){
      dispatch(submitText( text))
    }
  }
}

const PortfolioContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio)

export default PortfolioContainer
