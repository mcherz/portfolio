export const SET_CURRENT_RESPONSE = "SET_CURRENT_RESPONSE";
export const setCurrentResponse = (response) => {
  return {
    type: SET_CURRENT_RESPONSE,
    payload: response
  };
};