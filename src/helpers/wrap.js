import React from "react"
import { Provider } from "react-redux"
import {
  createStore,
  applyMiddleware,
  compose
} from "redux"
import thunkMiddleware from "redux-thunk"

import rootReducers from "reducers/root_reducers"

const wrap = component => {
  const enhancer = compose(
    applyMiddleware(thunkMiddleware)
  )

  const store = createStore(rootReducers, {}, enhancer)

  return <Provider store={store}>
    {component}
  </Provider>
}

export default wrap
