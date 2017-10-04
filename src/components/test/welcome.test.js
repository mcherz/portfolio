import React from "react"; //eslint-disable-line
import { shallow } from "enzyme";

import Welcome from "../welcome";

describe("<Welcome />", () => {
  it("renders a thing with an h1", () => {
    const wrapper = shallow(<Welcome/>);
    expect(wrapper.find("h1").length).toBe(1);
  });
  it("renders a thing with a p", () => {
    const wrapper = shallow(<Welcome/>);
    expect(wrapper.find("p").length).toBe(1);
  });
  it("enders a thing with an inpu", () => {
    const wrapper = shallow(<Welcome/>);
    expect(wrapper.find("input").length).toBe(1);
  });
});
