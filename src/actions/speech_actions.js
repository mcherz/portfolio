export const SET_SPEECH_SYNTH_ACTIVE = "SET_SPEECH_SYNTH_ACTIVE"
export const setSpeechSynthActive = (speechSynthActive) => {
  return {
    type: SET_SPEECH_SYNTH_ACTIVE,
    payload: speechSynthActive
  }
}

export const SET_SPEECH_REC_ACTIVE = "SET_SPEECH_REC_ACTIVE"
export const setSpeechRecActive = (speechRecActive) => {
  return {
    type: SET_SPEECH_REC_ACTIVE,
    payload: speechRecActive
  }
}

export const SET_LISTENING = "SET_LISTENING"
export const setListening = (listening) => {
  return {
    type: SET_LISTENING,
    payload: listening
  }
}

export const SET_LISTENING_TIMEOUT = "SET_LISTENING_TIMEOUT"
export const setListeningTimeout = (listeningTimeout) => {
  return {
    type: SET_LISTENING_TIMEOUT,
    payload: listeningTimeout
  }
}

export const SET_LISTENING_BUTTON_DOWN = "SET_LISTENING_BUTTON_DOWN"
export const setListeningButtonDown = (listeningButtonDown) => {
  return {
    type: SET_LISTENING_BUTTON_DOWN,
    payload: listeningButtonDown
  }
}