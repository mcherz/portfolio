import React from "react"

import constants from "helpers/constants"

class Conversation extends React.Component {
  renderResponses = () => {
    let responses = []
    for (let response of this.props.responseArray) {
      responses.push(<div className={response.party === constants.APP_RESPONSE ? "response" : "query"}>
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