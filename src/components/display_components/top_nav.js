import React from "react";

import constants from "helpers/constants";

class TopNav extends React.Component {
  shouldComponentUpdate = (nextProps) => {
    const scrolledDown = nextProps.containerScrollTop > constants.navScrollBreakpoint && this.props.containerScrollTop <= constants.navScrollBreakpoint;
    const scrolledUp = nextProps.containerScrollTop < constants.navScrollBreakpoint && this.props.containerScrollTop >= constants.navScrollBreakpoint;
    return scrolledDown || scrolledUp;
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
        <div className={topBarClass}>Matt Herz</div>
        <div className={wrapperClass}>
          <div className={linkClass}>home</div>
          <div className={linkClass}>work</div>
          <div className={linkClass}>about</div>
          <div className={linkClass}>contact</div>
        </div>
      </div>
    );
  }
}

export default TopNav;
