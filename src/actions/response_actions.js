export const ADD_RESPONSE = "ADD_RESPONSE"
export const addResponse = (party, text) => {
  return {
    type: ADD_RESPONSE,
    payload: {party, text}
  }
}

export const SET_BUTTON_ACTIVE = "SET_BUTTON_ACTIVE"
export const setButtonActive = (active) => {
  return {
    type: SET_BUTTON_ACTIVE,
    payload: active
  }
}