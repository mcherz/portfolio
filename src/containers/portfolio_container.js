import { connect } from "react-redux";

import Portfolio from "components/portfolio.js";

import sizePage from "actions/size_page";

const mapStateToProps = (state/*, ownProps*/) => {
  return {
    pageHeight: state.page.pageHeight,
    pageWidth: state.page.pageWidth,

    currentResponse: state.response.currentResponse
  };
};

const mapDispatchToProps = (dispatch/*, ownProps*/) => {
  return {
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
