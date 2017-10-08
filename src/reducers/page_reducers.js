import dotProp from "dot-prop-immutable";

// import actions
import * as pageActions from "actions/page_actions";

// define initial state of model
const pageInitialState = {
  pageHeight: 1,
  pageWidth: 1
};

function page(state = pageInitialState, action){
  switch(action.type){
  case pageActions.SET_PAGE_HEIGHT:
    return dotProp.set(state, "pageHeight", action.payload);
  case pageActions.SET_PAGE_WIDTH:
    return dotProp.set(state, "pageWidth", action.payload);
  default:
    return state;
  }

}

export default page;
