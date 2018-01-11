import { setListeningButtonDown } from "actions/speech_actions"

import endListening from "actions/end_listening"

const handleListenButtonUp = () => (dispatch, getState) => {
  const state = getState()

  dispatch(setListeningButtonDown(false))
  if (state.speech.listening) {
    dispatch(endListening())
  }
}

export default handleListenButtonUp