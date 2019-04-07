import dotProp from "dot-prop-immutable"

import constants from "helpers/constants"
// import actions
import * as responseActions from "actions/response_actions"

// define initial state of model
export const responseInitialState = {
  buttonActive: true,

  responseArray: [{party: constants.APP_RESPONSE, text:"Hi there. Let's chat."}],
  responseCount: 0
}

function response(state = responseInitialState, action){
  switch(action.type){
    case responseActions.ADD_RESPONSE: {
      let returnArray = [...state.responseArray]
      returnArray.push(action.payload)
      if (returnArray.length > constants.MAX_CONVERSATION) {
        returnArray.shift()
      }
      return dotProp.set(state, "responseArray", returnArray)
    }
    case responseActions.CLEAR_RESPONSES:
      return dotProp.set(state, "responseArray", [])
    case responseActions.SET_BUTTON_ACTIVE:
      return dotProp.set(state, "buttonActive", action.payload)
    case responseActions.INCREMENT_RESPONSE_COUNT:
      return dotProp.set(state, "responseCount", state.responseCount + 1)
    default:
      return state
  }

}

export default response
