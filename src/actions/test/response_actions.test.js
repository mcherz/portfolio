import * as actions from "actions/response_actions"

describe("Response Actions", () => {

  it("should create an action to set the current response.", () => {
    const response = {party: "app", text: "wat"}
    const expectedAction = {
      type: actions.ADD_RESPONSE,
      payload: response
    }
    expect(actions.addResponse("app", "wat")).toEqual(expectedAction)
  })
})
