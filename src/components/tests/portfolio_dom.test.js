import React from "react"; //eslint-disable-line
import { shallow } from "enzyme"

import Conversation from "components/conversation"
import Portfolio from "components/portfolio"

describe("<Portfolio />", () => {
  it("renders some divs", () => {
    const wrapper = shallow(<Portfolio />)
    expect(wrapper.find("div").length).toBe(4)
  })

  it("renders a Conversation element", () => {
    const wrapper = shallow(<Portfolio />)
    expect(wrapper.find(Conversation).length).toBe(1)
  })

  it("renders a button", () => {
    const wrapper = shallow(<Portfolio />)
    expect(wrapper.find("button").length).toBe(1)
  })

  it("renders a text input", () => {
    const wrapper = shallow(<Portfolio />)
    expect(wrapper.find("input").getElement().props.type).toBe("text")
  })
})
