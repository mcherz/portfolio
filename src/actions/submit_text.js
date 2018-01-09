import constants from "helpers/constants"
import getAppResponse from "helpers/get_app_response"

import { addResponse, setButtonActive } from "actions/response_actions"

const submitText = (text) => (dispatch, getState) => {
  const state = getState()
  if (state.response.buttonActive) {
    dispatch(setButtonActive(false))
    dispatch(addResponse(constants.USER_QUERY, text))
    setTimeout(() => {
      const response = getAppResponse(text)
      dispatch(addResponse(constants.APP_RESPONSE, response.jsx))
      if (state.speech.speechSynthActive) {
        let utterThis = new SpeechSynthesisUtterance(response.plainText)
        speechSynthesis.speak(utterThis)
      }
      dispatch(setButtonActive(true))
    }, constants.CONVERSATION_LAG)
  }
}

export default submitText