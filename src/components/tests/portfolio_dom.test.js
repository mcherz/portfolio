import React from "react"; //eslint-disable-line
import { shallow } from "enzyme"

import Conversation from "components/conversation"
import Portfolio from "components/portfolio"

describe("<Portfolio />", () => {
  it("renders some divs", () => {
    const mockFunction = () => {}
    const wrapper = shallow(<Portfolio sizePage={mockFunction} />)
    expect(wrapper.find("div").length).toBe(5)
  })

  it("renders a Conversation element", () => {
    const mockFunction = () => {}
    const wrapper = shallow(<Portfolio sizePage={mockFunction} />)
    expect(wrapper.find(Conversation).length).toBe(1)
  })

  it("renders a button", () => {
    const mockFunction = () => {}
    const wrapper = shallow(<Portfolio sizePage={mockFunction} />)
    expect(wrapper.find("button").length).toBe(1)
  })

  it("renders a text input", () => {
    const mockFunction = () => {}
    const wrapper = shallow(<Portfolio sizePage={mockFunction} />)
    expect(wrapper.find("input").getElement().props.type).toBe("text")
  })
})