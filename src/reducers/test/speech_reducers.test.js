import reducer from "reducers/speech_reducers"
import * as types from "actions/speech_actions"

import {speechInitialState} from "reducers/speech_reducers"

describe("Speech Reducer tests", () => {
  it("should return the initial state", () => {
    expect(
      reducer(undefined, {})
      ).toEqual(speechInitialState)
  })

  it("should set the speech synth state", () => {
    expect(
      reducer({
        speechSynthActive: true
      }, {
        type: types.SET_SPEECH_SYNTH_ACTIVE,
        payload: false
      })
      ).toEqual(
      {
        speechSynthActive: false
      }
    )
  })

  it("should set the speech rec state", () => {
    expect(
      reducer({
        speechRecActive: true
      }, {
        type: types.SET_SPEECH_REC_ACTIVE,
        payload: false
      })
      ).toEqual(
      {
        speechRecActive: false
      }
    )
  })

  it("should set the microphone modal open state", () => {
    expect(
      reducer({
        modalOpen: true
      }, {
        type: types.SET_MODAL_OPEN,
        payload: false
      })
      ).toEqual(
      {
        modalOpen: false
      }
    )
  })

  it("should set the listening state", () => {
    expect(
      reducer({
        listening: true
      }, {
        type: types.SET_LISTENING,
        payload: false
      })
      ).toEqual(
      {
        listening: false
      }
    )
  })

  it("should set the listening timeout state", () => {
    expect(
      reducer({
        listeningTimeout: null
      }, {
        type: types.SET_LISTENING_TIMEOUT,
        payload: 1234
      })
      ).toEqual(
      {
        listeningTimeout: 1234
      }
    )
  })

  it("should set the listening button state", () => {
    expect(
      reducer({
        listeningButtonDown: false
      }, {
        type: types.SET_LISTENING_BUTTON_DOWN,
        payload: true
      })
      ).toEqual(
      {
        listeningButtonDown: true
      }
    )
  })

  it("should set the recognizer into state", () => {
    expect(
      reducer({
        recognizer: null
      }, {
        type: types.SET_RECOGNIZER,
        payload: {wild: "class instance appears"}
      })
      ).toEqual(
      {
        recognizer: {wild: "class instance appears"}
      }
    )
  })
})
