import dotProp from "dot-prop-immutable";

// import actions
import * as responseActions from "actions/response_actions";

// define initial state of model
const responseInitialState = {
  currentResponse: "Hi there. Let's chat.",
};

function page(state = responseInitialState, action){
  switch(action.type){
    case responseActions.SET_CURRENT_RESPONSE:
      return dotProp.set(state, "currentResponse", action.payload);
    default:
      return state;
  }

}

export default page;
