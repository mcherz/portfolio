import constants from "helpers/constants"

import { setListening, setListeningTimeout, setListeningButtonDown } from "actions/speech_actions"

import endListening from "actions/end_listening"

const startListening = () => (dispatch, getState) => {
  const state = getState()
  if (!state.speech.listeningButtonDown) {
    dispatch(setListeningButtonDown(true))
    dispatch(setListening(true))
    dispatch(setListeningTimeout(() => dispatch => {
      dispatch(endListening())
    }, constants.LISTENING_TIMEOUT))
  }
}

export default startListening