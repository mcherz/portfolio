import constants from "helpers/constants"

import { setListening, setListeningTimeout, setListeningButtonDown, setRecognizer } from "actions/speech_actions"

import endListening from "actions/end_listening"
import submitText from "actions/submit_text"

const startListening = () => (dispatch, getState) => {
  const state = getState()

  let rec = new webkitSpeechRecognition()
  rec.lang = "en-US"
  rec.interimResults = false
  rec.maxAlternatives = 5
  rec.start()

  let loopListen = true
  rec.onresult = (event) => {
    dispatch(submitText(event.results[0][0].transcript))
    loopListen = false
  }

  rec.onend = () => {
    if (loopListen) {
      rec.start()
    }
  }
}

export default startListening