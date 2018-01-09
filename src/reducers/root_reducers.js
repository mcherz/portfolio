import { combineReducers } from "redux"

import response from "reducers/response_reducers"
import speech from "reducers/speech_reducers"

const rootReducers = combineReducers({
  response,
  speech
})

export default rootReducers
