import { setListeningTimeout, setListening } from "actions/speech_actions"

import submitText from "actions/submit_text"

const endListening = () => (dispatch, getState) => {
  const state = getState()
  clearTimeout(state.speech.listeningTimeout)
  dispatch(setListeningTimeout(null))
  dispatch(setListening(false))
  
  state.speech.recognizer.stop()
  state.speech.recognizer.onresult = (event) => {
    dispatch(submitText(event.results[0][0].transcript))
  }
}

export default endListening