import { connect } from "react-redux";

import Section from "components/section.js";

import {
  setActiveImageIndex
} from "actions/assets_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    activeAsset: state.assets.activeAsset[ownProps.section.sectionKey],
    pageWidth: state.page.pageWidth
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setActiveImageIndex(index){
      dispatch(setActiveImageIndex(index, ownProps.section.sectionKey));
    }
  };
};

const SectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Section);

export default SectionContainer;
