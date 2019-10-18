import React from "react"
import { Provider } from "react-redux"
import {
  createStore,
  applyMiddleware,
  compose
} from "redux"
import thunkMiddleware from "redux-thunk"

import rootReducers from "reducers/root_reducers"

import Portfolio from "components/portfolio"

let store
let composeEnhancers

class PortfolioReduxRoot extends React.Component{

  constructor(props){
    super(props)
    // setting dev tools up per question - until we redo the job_batch/job flow in react
    composeEnhancers =
      typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          name: "portfolio"
        }) : compose

    const enhancer = composeEnhancers(
      applyMiddleware(thunkMiddleware)
    )

    let initialState = props

    store = createStore(rootReducers, initialState, enhancer)
  }

  render() {
    return(
      <Provider store={store}>
        <Portfolio />
      </Provider>
    )
  }

}

export default PortfolioReduxRoot
