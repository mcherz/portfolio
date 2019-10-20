import React from "react"

import makeResponseElements from "helpers/make_response_elements"
import { APP_RESPONSE } from "helpers/constants"

class Response extends React.Component {
  render () {
    const { response } = this.props
    return <div className={response.party === APP_RESPONSE
      ? "response"
      : "query"
    }>
      {response.party === APP_RESPONSE
        ? makeResponseElements(response.text.props.children, 0).children
        : response.text
      }
    </div>
  }
}

export default Response
