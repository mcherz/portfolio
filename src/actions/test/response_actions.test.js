import * as actions from "actions/response_actions";

describe("Response Actions", () => {

  it("should create an action to set the current response.", () => {
    const response = "wat";
    const expectedAction = {
      type: actions.SET_CURRENT_RESPONSE,
      payload: response
    };
    expect(actions.setCurrentResponse("wat")).toEqual(expectedAction);
  });
});
