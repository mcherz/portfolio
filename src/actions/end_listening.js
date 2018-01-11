import { setListeningTimeout, setListening } from "actions/speech_actions"

const endListening = () => (dispatch, getState) => {
  const state = getState()
  clearTimeout(state.speech.listeningTimeout)
  dispatch(setListeningTimeout(null))
  dispatch(setListening(false))
}

export default endListening