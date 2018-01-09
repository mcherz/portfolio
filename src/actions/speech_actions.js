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

