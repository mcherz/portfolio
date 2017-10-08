import React from "react";

import SectionContainer from "containers/section_container";

import constants from "helpers/constants";
import sections from "helpers/sections";

class Portfolio extends React.Component {
  componentWillMount = () => {
    this.props.sizePage();
  }

  handleArrowClick = (navSection) => {
    let scrollTop = this[navSection].offsetTop;
    if (navSection !== "cover") {
      scrollTop -= 40;
    }
    this.container.scrollTop = scrollTop;
  }

  render = () => {
    return <div ref={(div) => {
      this.container = div;
    }} className="portfolio" style={{height: this.props.pageHeight}}>
      <div ref={(div) => {
        this.gearCalc = div;
      }} style={{height: this.props.pageHeight - constants.navBarHeight}} className="section-wrapper">
        <SectionContainer
          section={sections.gearCalc}
          pageHeight={this.props.pageHeight}
          onArrowClick={this.handleArrowClick} />
      </div>
      <div ref={(div) => {
        this.navAppt = div;
      }} style={{height: this.props.pageHeight - constants.navBarHeight}} className="section-wrapper">
        <SectionContainer
          section={sections.gearCalc}
          pageHeight={this.props.pageHeight}
          onArrowClick={this.handleArrowClick} />
      </div>
    </div>;
  }
}

export default Portfolio;
