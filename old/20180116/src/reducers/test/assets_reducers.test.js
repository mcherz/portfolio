import reducer from "reducers/assets_reducers";
import * as types from "actions/assets_actions";

describe("Asset Reducer tests", () => {
  it("should return the initial state", () => {
    expect(
      reducer(undefined, {})
      ).toEqual(
      {
        activeAsset: {
          segmentation: 0,
          gearCalc: 0,
          nav: 0,
          navAppt: 0,
          upsell: 0,
          calls: 0
        }
      }
    );
  });

  it("should set an asset into active state", () => {
    expect(
      reducer({
        activeAsset: {
          gearCalc: 0
        }
      }, {
        type: types.SET_ACTIVE_IMAGE_INDEX,
        payload: {
          index: 3,
          section: "gearCalc"
        }
      })
      ).toEqual(
      {
        activeAsset: {
          gearCalc: 3
        }
      }
    );
  });
});
