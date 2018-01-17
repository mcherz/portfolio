import * as actions from "actions/page_actions";

describe("Page Actions", () => {

  it("should create an action to set the page height.", () => {
    const height = 4;
    const expectedAction = {
      type: actions.SET_PAGE_HEIGHT,
      payload: height
    };
    expect(actions.setPageHeight(height)).toEqual(expectedAction);
  });

  it("should create an action to set the page width.", () => {
    const width = 5;
    const expectedAction = {
      type: actions.SET_PAGE_WIDTH,
      payload: width
    };
    expect(actions.setPageWidth(width)).toEqual(expectedAction);
  });

});
