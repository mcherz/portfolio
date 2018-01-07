import reducer from "reducers/response_reducers"
import * as types from "actions/response_actions"

describe("Page Reducer tests", () => {
  it("should return the initial state", () => {
    expect(
      reducer(undefined, {})
      ).toEqual(
      {
        responseArray: [{party: "app", text:"Hi there. Let's chat."}]
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
