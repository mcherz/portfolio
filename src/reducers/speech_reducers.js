import dotProp from "dot-prop-immutable"

import constants from "helpers/constants"
import ElizaBot from "elizabot"
// import actions
import * as speechActions from "actions/speech_actions"

// define initial state of model
export const speechInitialState = {
  speechSynthActive: false,
  speechRecActive: false
}

function speech(state = speechInitialState, action){
  switch(action.type){
    case speechActions.SET_SPEECH_SYNTH_ACTIVE:
      return dotProp.set(state, "speechSynthActive", action.payload)
    case speechActions.SET_SPEECH_REC_ACTIVE:
      return dotProp.set(state, "speechRecActive", action.payload)
    default:
      return state
  }

}

export default speech
