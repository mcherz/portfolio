import React from "react"; //eslint-disable-line
import { mount } from "enzyme"
import wrap from "helpers/wrap"

import Conversation from "components/conversation"
import Portfolio from "components/portfolio"

describe("<Portfolio />", () => {
  it("renders some divs", () => {
    const wrapper = mount(wrap(<Portfolio />))
    expect(wrapper.find("div").length).toBe(7)
  })

  it("renders a Conversation element", () => {
    const wrapper = mount(wrap(<Portfolio />))
    expect(wrapper.find(Conversation).length).toBe(1)
  })

  it("renders a button", () => {
    const wrapper = mount(wrap(<Portfolio />))
    expect(wrapper.find("button").length).toBe(1)
  })

  it("renders a text input", () => {
    const wrapper = mount(wrap(<Portfolio />))
    expect(wrapper.find("input").getElement().props.type).toBe("text")
  })
})
