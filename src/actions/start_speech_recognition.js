import constants from "helpers/constants"

import { addResponse, clearResponses } from "actions/response_actions"
import { setSpeechRecActive, setSpeechSynthActive } from "actions/speech_actions"

import startListening from "actions/start_listening"

const startSpeechRecognition = () => dispatch => {
  dispatch(setSpeechRecActive(true))
  dispatch(setSpeechSynthActive(true))
  dispatch(clearResponses())
  dispatch(addResponse(constants.APP_RESPONSE, "Talk to me, goose! No, really, just start talking."))
  let utterThis = new SpeechSynthesisUtterance("Talk to me, goose! No, really, just start talking.")
  utterThis.onend = () => {
    dispatch(startListening())
  }
  speechSynthesis.speak(utterThis)
}

export default startSpeechRecognition