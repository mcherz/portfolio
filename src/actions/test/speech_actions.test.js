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
})
