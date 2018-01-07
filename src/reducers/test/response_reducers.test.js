import reducer from "reducers/response_reducers";
import * as types from "actions/response_actions";

describe("Page Reducer tests", () => {
  it("should return the initial state", () => {
    expect(
      reducer(undefined, {})
      ).toEqual(
      {
        currentResponse: "Hi there. Let's chat.",
      }
    );
  });

  it("should set the page height state", () => {
    expect(
      reducer({
        currentResponse: "blah"
      }, {
        type: types.SET_CURRENT_RESPONSE,
        payload: "blah blah"
      })
      ).toEqual(
      {
        currentResponse: "blah blah"
      }
    );
  });
});
