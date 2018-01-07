export const ADD_RESPONSE = "ADD_RESPONSE"
export const addResponse = (party, text) => {
  return {
    type: ADD_RESPONSE,
    payload: {party, text}
  }
}