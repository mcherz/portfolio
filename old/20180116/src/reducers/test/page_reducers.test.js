import reducer from "reducers/page_reducers";
import * as types from "actions/page_actions";

describe("Page Reducer tests", () => {
  it("should return the initial state", () => {
    expect(
      reducer(undefined, {})
      ).toEqual(
      {
        pageHeight: 1,
        pageWidth: 1
      }
    );
  });

  it("should set the page height state", () => {
    expect(
      reducer({
        pageHeight: 1
      }, {
        type: types.SET_PAGE_HEIGHT,
        payload: 43
      })
      ).toEqual(
      {
        pageHeight: 43
      }
    );
  });

  it("should set the page width state", () => {
    expect(
      reducer({
        pageWidth: 1
      }, {
        type: types.SET_PAGE_WIDTH,
        payload: 42
      })
      ).toEqual(
      {
        pageWidth: 42
      }
    );
  });
});
