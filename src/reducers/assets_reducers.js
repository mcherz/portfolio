import dotProp from "dot-prop-immutable";

// import actions
import * as assetsActions from "actions/assets_actions";

// define initial state of model
const assetInitialState = {
  activeAsset: {
    gearCalc: 0
  }
};

function assets(state = assetInitialState, action){
  switch(action.type){
  case assetsActions.SET_ACTIVE_IMAGE_INDEX:
    return dotProp.set(state, `activeAsset.${action.payload.section}`, action.payload.index);
  default:
    return state;
  }

}

export default assets;
