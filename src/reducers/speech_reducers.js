import dotProp from "dot-prop-immutable"

// import actions
import * as speechActions from "actions/speech_actions"

// define initial state of model
export const speechInitialState = {
  speechSynthActive: false,
  speechRecActive: false,
  recognizer: null,
  modalOpen: false
}

function speech(state = speechInitialState, action){
  switch(action.type){
    case speechActions.SET_SPEECH_SYNTH_ACTIVE:
      return dotProp.set(state, "speechSynthActive", action.payload)
    case speechActions.SET_SPEECH_REC_ACTIVE:
      return dotProp.set(state, "speechRecActive", action.payload)
    case speechActions.SET_MODAL_OPEN:
      return dotProp.set(state, "modalOpen", action.payload)
    case speechActions.SET_RECOGNIZER:
      return dotProp.set(state, "recognizer", action.payload)
    default:
      return state
  }

}

export default speech
