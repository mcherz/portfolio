import constants from "helpers/constants"

import { setListening, setListeningTimeout, setListeningButtonDown, setRecognizer } from "actions/speech_actions"

import endListening from "actions/end_listening"

const startListening = () => (dispatch, getState) => {
  const state = getState()
  if (!state.speech.listeningButtonDown) {
    dispatch(setListeningButtonDown(true))
    dispatch(setListening(true))
    dispatch(setListeningTimeout(setTimeout(() => {
      dispatch(endListening())
    }, constants.LISTENING_TIMEOUT)))

    let rec = new webkitSpeechRecognition()
    rec.lang = "en-US"
    rec.interimResults = false
    rec.maxAlternatives = 5
    rec.start()
    dispatch(setRecognizer(rec))
  }
}

export default startListening