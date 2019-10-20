import React from "react"

import constants from "helpers/constants"
// import actions
import * as responseActions from "actions/response_actions"

// define initial state of model
export const responseInitialState = {
  buttonActive: true,

  responseArray: [{
    party: constants.APP_RESPONSE,
    text: <span>"Hi there. Let's chat."</span>
  }],
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
      return { ...state, responseArray: returnArray }
    }
    case responseActions.CLEAR_RESPONSES:
      return { ...state, responseArray: [] }
    case responseActions.SET_BUTTON_ACTIVE:
      return { ...state, buttonActive: action.payload }
    case responseActions.INCREMENT_RESPONSE_COUNT:
      return { ...state, responseCount: state.responseCount + 1 }
    default:
      return state
  }

}

export default response
