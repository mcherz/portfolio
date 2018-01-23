export const ADD_RESPONSE = "ADD_RESPONSE"
export const addResponse = (party, text) => {
  return {
    type: ADD_RESPONSE,
    payload: {party, text}
  }
}

export const CLEAR_RESPONSES = "CLEAR_RESPONSES"
export const clearResponses = () => {
  return {
    type: CLEAR_RESPONSES
  }
}

export const SET_BUTTON_ACTIVE = "SET_BUTTON_ACTIVE"
export const setButtonActive = (active) => {
  return {
    type: SET_BUTTON_ACTIVE,
    payload: active
  }
}

export const INCREMENT_RESPONSE_COUNT = "INCREMENT_RESPONSE_COUNT"
export const incrementResponseCount = () => {
  return {
    type: INCREMENT_RESPONSE_COUNT
  }
}