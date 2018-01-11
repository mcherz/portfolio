import dotProp from "dot-prop-immutable"

import constants from "helpers/constants"
import ElizaBot from "elizabot"
// import actions
import * as speechActions from "actions/speech_actions"

// define initial state of model
export const speechInitialState = {
  speechSynthActive: false,
  speechRecActive: false,
  recognizer: null,

  listening: false,
  listeningTimeout: null,
  listeningButtonDown: false
}

function speech(state = speechInitialState, action){
  switch(action.type){
    case speechActions.SET_SPEECH_SYNTH_ACTIVE:
      return dotProp.set(state, "speechSynthActive", action.payload)
    case speechActions.SET_SPEECH_REC_ACTIVE:
      return dotProp.set(state, "speechRecActive", action.payload)
    case speechActions.SET_MODAL_OPEN:
      return dotProp.set(state, "modalOpen", action.payload)
    case speechActions.SET_LISTENING:
      return dotProp.set(state, "listening", action.payload)
    case speechActions.SET_LISTENING_TIMEOUT:
      return dotProp.set(state, "listeningTimeout", action.payload)
    case speechActions.SET_LISTENING_BUTTON_DOWN:
      return dotProp.set(state, "listeningButtonDown", action.payload)
    case speechActions.SET_RECOGNIZER:
      return dotProp.set(state, "recognizer", action.payload)
    default:
      return state
  }

}

export default speech
