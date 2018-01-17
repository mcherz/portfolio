import { connect } from "react-redux";

import Portfolio from "components/portfolio.js";

import {
  setActiveImageIndex
} from "actions/assets_actions";
import sizePage from "actions/size_page";

const mapStateToProps = (state/*, ownProps*/) => {
  return {
    activeAsset: state.assets.activeAsset,
    pageHeight: state.page.pageHeight,
    pageWidth: state.page.pageWidth
  };
};

const mapDispatchToProps = (dispatch/*, ownProps*/) => {
  return {
    setActiveImageIndex(index, section){
      dispatch(setActiveImageIndex(index, section));
    },
    sizePage(){
      dispatch(sizePage());
    }
  };
};

const PortfolioContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio);

export default PortfolioContainer;
