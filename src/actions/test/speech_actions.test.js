import * as actions from "actions/speech_actions"

describe("Speech Actions", () => {

  it("should create an action to set the speech synth state.", () => {
    const active = true
    const expectedAction = {
      type: actions.SET_SPEECH_SYNTH_ACTIVE,
      payload: active
    }
    expect(actions.setSpeechSynthActive(active)).toEqual(expectedAction)
  })

  it("should create an action to set the speech recognition state.", () => {
    const active = true
    const expectedAction = {
      type: actions.SET_SPEECH_REC_ACTIVE,
      payload: active
    }
    expect(actions.setSpeechRecActive(active)).toEqual(expectedAction)
  })

  it("should create an action to set the microphone confirm modal state.", () => {
    const open = true
    const expectedAction = {
      type: actions.SET_MODAL_OPEN,
      payload: open
    }
    expect(actions.setModalOpen(open)).toEqual(expectedAction)
  })

  it("should create an action to set the client listening state.", () => {
    const listening = true
    const expectedAction = {
      type: actions.SET_LISTENING,
      payload: listening
    }
    expect(actions.setListening(listening)).toEqual(expectedAction)
  })

  it("should create an action to set the listening timeout state.", () => {
    const timeout = 1234
    const expectedAction = {
      type: actions.SET_LISTENING_TIMEOUT,
      payload: timeout
    }
    expect(actions.setListeningTimeout(timeout)).toEqual(expectedAction)
  })

  it("should create an action to set the listening button state.", () => {
    const down = true
    const expectedAction = {
      type: actions.SET_LISTENING_BUTTON_DOWN,
      payload: down
    }
    expect(actions.setListeningButtonDown(down)).toEqual(expectedAction)
  })

  it("should create an action to set the recognizer.", () => {
    const recognizer = {wild: "class instance"}
    const expectedAction = {
      type: actions.SET_RECOGNIZER,
      payload: recognizer
    }
    expect(actions.setRecognizer(recognizer)).toEqual(expectedAction)
  })
})
