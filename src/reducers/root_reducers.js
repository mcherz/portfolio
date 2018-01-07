import { combineReducers } from "redux";

import page from "reducers/page_reducers";
import response from "reducers/response_reducers";

const rootReducers = combineReducers({
  page,
  response
});

export default rootReducers;
