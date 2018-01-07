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

  it("should create an action to set the button state.", () => {
    const active = true
    const expectedAction = {
      type: actions.SET_BUTTON_ACTIVE,
      payload: active
    }
    expect(actions.setButtonActive(active)).toEqual(expectedAction)
  })
})
