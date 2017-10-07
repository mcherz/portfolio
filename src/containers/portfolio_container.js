import { connect } from "react-redux";

import Portfolio from "components/portfolio.js";

const mapStateToProps = (/*state, ownProps*/) => {
  return {

  };
};

const mapDispatchToProps = (/*dispatch, ownProps*/) => {
  return {

  };
};

const PortfolioContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio);

export default PortfolioContainer;
