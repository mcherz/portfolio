import React from "react";

import Cover from "components/display_components/cover";
import SectionContainer from "containers/section_container";
import TopNav from "components/display_components/top_nav";

import animateScroll from "helpers/animate_scroll";
import constants from "helpers/constants";
import sections from "helpers/sections";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      containerScrollTop: 0
    };
  }

  handleScroll = () => {
    this.setState({
      containerScrollTop: this.container.scrollTop
    });
  }

  componentWillMount = () => {
    this.props.sizePage();
    window.addEventListener("resize", this.props.sizePage);
  }

  navigateToSection = (navSection) => {
    if (navSection && this[navSection]) {
      let scrollTop = this[navSection].offsetTop;
      if (navSection !== "cover") {
        scrollTop -= 40;
      }
      animateScroll(this.container, scrollTop);
    }
  }

  render = () => {
    return <div className="portfolio" style={{height: this.props.pageHeight}}>
      <TopNav containerScrollTop={this.state.containerScrollTop} onNavClick={this.navigateToSection} />
      <div ref={(div) => {
        this.container = div;
      }}
      className="portfolio-content"
      style={{height: this.props.pageHeight}}
      onScroll={this.handleScroll}>
        <div ref={(div) => {
          this.cover = div;
        }} style={{height: this.props.pageHeight}}>
          <Cover pageHeight={this.props.pageHeight} onArrowClick={this.navigateToSection} />
        </div>
        <div ref={(div) => {
          this.gearCalc = div;
        }} style={{height: this.props.pageHeight - constants.navBarHeight}} className="section-wrapper">
          <SectionContainer
            section={sections.gearCalc}
            pageHeight={this.props.pageHeight}
            onArrowClick={this.navigateToSection} />
        </div>
        <div ref={(div) => {
          this.nav = div;
        }} style={{height: this.props.pageHeight - constants.navBarHeight}} className="section-wrapper">
          <SectionContainer
            section={sections.nav}
            pageHeight={this.props.pageHeight}
            onArrowClick={this.navigateToSection} />
        </div>
        <div ref={(div) => {
          this.navAppt = div;
        }} style={{height: this.props.pageHeight - constants.navBarHeight}} className="section-wrapper">
          <SectionContainer
            section={sections.navAppt}
            pageHeight={this.props.pageHeight}
            onArrowClick={this.navigateToSection} />
        </div>
        <div ref={(div) => {
          this.upsell = div;
        }} style={{height: this.props.pageHeight - constants.navBarHeight}} className="section-wrapper">
          <SectionContainer
            section={sections.upsell}
            pageHeight={this.props.pageHeight}
            onArrowClick={this.navigateToSection} />
        </div>
        <div ref={(div) => {
          this.calls = div;
        }} style={{height: this.props.pageHeight - constants.navBarHeight}} className="section-wrapper">
          <SectionContainer
            section={sections.calls}
            pageHeight={this.props.pageHeight}
            onArrowClick={this.navigateToSection} />
        </div>
      </div>
    </div>;
  }
}

export default Portfolio;
