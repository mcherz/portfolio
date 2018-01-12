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

export const SET_MODAL_OPEN = "SET_MODAL_OPEN"
export const setModalOpen = (open) => {
  return {
    type: SET_MODAL_OPEN,
    payload: open
  }
}

export const SET_RECOGNIZER = "SET_RECOGNIZER"
export const setRecognizer = (recognizer) => {
  return {
    type: SET_RECOGNIZER,
    payload: recognizer
  }
}