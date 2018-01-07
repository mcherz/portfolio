import constants from "helpers/constants"
import getAppResponse from "helpers/get_app_response"

import { addResponse, setButtonActive } from "actions/response_actions"

const submitText = (text) => (dispatch, getState) => {
  const state = getState()
  if (state.response.buttonActive) {
    dispatch(setButtonActive(false))
    dispatch(addResponse(constants.USER_QUERY, text))
    setTimeout(() => {
      dispatch(addResponse(constants.APP_RESPONSE, getAppResponse(text)))
      dispatch(setButtonActive(true))
    }, constants.CONVERSATION_LAG)
  }
}

export default submitText