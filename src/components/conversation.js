import React from "react"

import Response from "components/response"

class Conversation extends React.Component {
  render = () => {
    return <div className="conversation">
      {(this.props.responseArray).map((response, index) => {
        return <Response key={index} response={response} />
      })}
    </div>
  }
}

export default Conversation
