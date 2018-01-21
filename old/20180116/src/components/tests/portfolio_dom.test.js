import React from "react"; //eslint-disable-line
import { shallow } from "enzyme";

import Portfolio from "../portfolio";

import AboutMe from "components/display_components/about_me";
import Cover from "components/display_components/cover";
import SectionContainer from "containers/section_container";

describe("<Portfolio />", () => {
  it("renders an about me", () => {
    const mockFunction = () => {};
    const wrapper = shallow(<Portfolio sizePage={mockFunction} />);
    expect(wrapper.find(AboutMe).length).toBe(1);
  });

  it("renders a cover", () => {
    const mockFunction = () => {};
    const wrapper = shallow(<Portfolio sizePage={mockFunction} />);
    expect(wrapper.find(Cover).length).toBe(1);
  });

  it("renders 6 sections", () => {
    const mockFunction = () => {};
    const wrapper = shallow(<Portfolio sizePage={mockFunction} />);
    expect(wrapper.find(SectionContainer).length).toBe(6);
  });
});