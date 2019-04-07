import submitText from "actions/submit_text"

const startListening = () => dispatch => {
  let rec = new window.webkitSpeechRecognition()
  rec.lang = "en-US"
  rec.interimResults = false
  rec.maxAlternatives = 5
  rec.start()

  let loopListen = true
  rec.onresult = (event) => {
    dispatch(submitText(event.results[0][0].transcript))
    loopListen = false
  }

  rec.onend = () => {
    if (loopListen) {
      rec.start()
    }
  }
}

export default startListening
