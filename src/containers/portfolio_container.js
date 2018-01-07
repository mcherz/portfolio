import { connect } from "react-redux"

import Portfolio from "components/portfolio.js"

import submitText from "actions/submit_text"

const mapStateToProps = (state/*, ownProps*/) => {
  return {
    responseArray: state.response.responseArray
  }
}

const mapDispatchToProps = (dispatch/*, ownProps*/) => {
  return {
    submitText(text){
      dispatch(submitText( text))
    }
  }
}

const PortfolioContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio)

export default PortfolioContainer
