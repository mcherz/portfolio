import React from "react"

import constants from "helpers/constants"

class Conversation extends React.Component {
  renderResponses = () => {
    let responses = []
    for (let r = 0; r < this.props.responseArray.length; r++) {
      const response = this.props.responseArray[r]
      responses.push(<div key={r} className={response.party === constants.APP_RESPONSE
        ? "response"
        : "query"
      }>
        {response.text}
      </div>)
    }
    return responses
  }

  render = () => {
    return <div className="conversation">
      {this.renderResponses()}
    </div>
  }
}

export default Conversation
