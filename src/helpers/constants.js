import { SET_LISTENING_TIMEOUT } from "../actions/speech_actions"

const constants = {
  APP_RESPONSE: "app",
  USER_QUERY: "query",

  MAX_CONVERSATION: 6,

  CONVERSATION_LAG: 400, //stolen from halt and catch fire :-)
  SET_LISTENING_TIMEOUT: 14000 // speechrec gets screwy after 15s
}

export default constants