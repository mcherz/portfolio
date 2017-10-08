import * as actions from "actions/assets_actions";

describe("Assets Actions", () => {

  it("should create an action to set the active asset in a section.", () => {
    const index = 0;
    const section = "gearCalc";
    const expectedAction = {
      type: actions.SET_ACTIVE_IMAGE_INDEX,
      payload: {
        index: index,
        section: section
      }
    };
    expect(actions.setActiveImageIndex(index, section)).toEqual(expectedAction);
  });
});
