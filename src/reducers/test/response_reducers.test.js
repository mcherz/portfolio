import reducer from "reducers/response_reducers"
import * as types from "actions/response_actions"

import {responseInitialState} from "reducers/response_reducers"

describe("Page Reducer tests", () => {
  it("should return the initial state", () => {
    expect(
      reducer(undefined, {})
      ).toEqual(responseInitialState)
  })

  it("should set the button active state", () => {
    expect(
      reducer({
        buttonActive: true
      }, {
        type: types.SET_BUTTON_ACTIVE,
        payload: false
      })
      ).toEqual(
      {
        buttonActive: false
      }
    )
  })

  it("should add a response", () => {
    expect(
      reducer({
        responseArray: ["blah"]
      }, {
        type: types.ADD_RESPONSE,
        payload: "wat"
      })
      ).toEqual(
      {
        responseArray: ["blah", "wat"]
      }
    )
  })

  it("should cap the conversation at MAX_CONVERSATION", () => {
    expect(
      reducer({
        responseArray: [1,2,3,4,5,6]
      }, {
        type: types.ADD_RESPONSE,
        payload: 7
      })
      ).toEqual(
      {
        responseArray: [2,3,4,5,6,7]
      }
    )
  })
})
