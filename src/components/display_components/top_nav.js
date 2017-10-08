import React from "react";

import constants from "helpers/constants";

class TopNav extends React.Component {
  shouldComponentUpdate = (nextProps) => {
    const scrolledDown = nextProps.containerScrollTop > constants.navScrollBreakpoint && this.props.containerScrollTop <= constants.navScrollBreakpoint;
    const scrolledUp = nextProps.containerScrollTop < constants.navScrollBreakpoint && this.props.containerScrollTop >= constants.navScrollBreakpoint;
    return scrolledDown || scrolledUp;
  }

  handleHomeClick = () => {
    this.props.onNavClick(constants.sections.cover);
  }

  handleWorkClick = () => {
    this.props.onNavClick(constants.sections.gearCalc);
  }

  render = () => {
    let topBarClass = "top-bar top-bar-hidden";
    let wrapperClass = "nav-wrapper";
    let linkClass = "nav-link";
    if (this.props.containerScrollTop > constants.navScrollBreakpoint) {
      topBarClass = "top-bar";
      wrapperClass = "small-nav-wrapper";
      linkClass = "small-nav-link";
    }
    return (<div>
        <div className={topBarClass}><span className="matt-herz" onClick={this.handleHomeClick}>Matt Herz</span></div>
        <div className={wrapperClass}>
          <div className={linkClass} onClick={this.handleHomeClick}>home</div>
          <div className={linkClass} onClick={this.handleWorkClick}>work</div>
          <div className={linkClass}>about</div>
          <div className={linkClass}>contact</div>
        </div>
      </div>
    );
  }
}

export default TopNav;
