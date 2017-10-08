import { combineReducers } from "redux";

import assets from "reducers/assets_reducers";
import page from "reducers/page_reducers";

const rootReducers = combineReducers({
  assets,
  page
});

export default rootReducers;
