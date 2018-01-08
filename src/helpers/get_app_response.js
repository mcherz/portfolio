import React from "react" //eslint-disable-line
import ElizaBot from "elizabot"

import magic from "helpers/magic_responses"

const getAppResponse = (inputString) => {
  const lowString = inputString.toLowerCase()
  switch (true) {
    case lowString.match("resume") !== null:
      return magic.resume
    case lowString.match("linkedin") !== null:
      return magic.linkedin
    case lowString.match("twitter") !== null:
      return magic.twitter
    case lowString.match("alexa") !== null:
      return magic.alexa
    case lowString.match("cortana") !== null:
      return magic.cortana
    case lowString.match("google") !== null:
      return magic.google
    case lowString.match("siri") !== null:
      return magic.siri
    case lowString.match("eliza") !== null:
      return magic.eliza
    case lowString.match("open source") !== null:
    case lowString.match("source code") !== null:
      return magic.open_source
    case lowString.match("email") !== null:
      return magic.email
    default:
      const eliza = new ElizaBot()
      const returnString = eliza.transform(inputString)
      return {
        jsx: <span>{returnString}</span>,
        plainText: returnString
      }
  }
}

export default getAppResponse