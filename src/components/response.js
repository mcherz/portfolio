import React from "react"

import { APP_RESPONSE } from "helpers/constants"

class Response extends React.Component {
  render () {
    return <div className={this.props.response.party === APP_RESPONSE
      ? "response"
      : "query"
    }>
      {this.props.response.text}
    </div>
  }
}

export default Response
