import constants from "helpers/constants"
import getAppResponse from "helpers/get_app_response"

import { addResponse, incrementResponseCount, setButtonActive } from "actions/response_actions"

import startListening from "actions/start_listening"

const submitText = (text) => (dispatch, getState) => {
  const state = getState()
  if (state.response.buttonActive) {
    dispatch(setButtonActive(false))
    dispatch(addResponse(constants.USER_QUERY, text))
    setTimeout(() => {
      const response = getAppResponse(text, state, dispatch)
      dispatch(addResponse(constants.APP_RESPONSE, response.jsx))
      dispatch(incrementResponseCount())
      if (state.speech.speechSynthActive) {
        let utterThis = new SpeechSynthesisUtterance(response.plainText)
        if (state.speech.speechRecActive) {
          utterThis.onend = () => {
            dispatch(startListening())
          }
        }
        speechSynthesis.speak(utterThis)
      }
      dispatch(setButtonActive(true))
    }, constants.CONVERSATION_LAG)
  }
}

export default submitText