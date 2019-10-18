const url = `ws://localhost:${document.getElementsByName("ws_port")[0].content}`
const connection = typeof WebSocket !== "undefined" && new WebSocket(url)

if (connection) {
  connection.onmessage = message => {
    if (message.data === "reload") {
      location.reload()
    } else {
      // the whole point is to show the message; I don't even feel bad for disable-lining
      console.log(message.data) // eslint-disable-line
    }
  }
} else {
  console.error("no websocket support in this browser :-( your dev-x will be bumpy")
}
