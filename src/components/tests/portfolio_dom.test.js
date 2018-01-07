import React from "react"; //eslint-disable-line
import { shallow } from "enzyme";

import Portfolio from "components/portfolio";

describe("<Portfolio />", () => {
  it("renders 6 sections", () => {
    const mockFunction = () => {};
    const wrapper = shallow(<Portfolio sizePage={mockFunction} />);
    expect(wrapper.find("div").length).toBe(2);
  });
});