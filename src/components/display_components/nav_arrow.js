import React from "react";

import constants from "helpers/constants";

class NavArrow extends React.Component {
  handleArrowClick = () => {
    this.props.onArrowClick(this.props.target);
  }

  renderArrow = () => {
    let arrowStyle = {
      zIndex: 100,
      position: "absolute",
      left: (this.props.pageWidth/2 - 19)
    };
    if (this.props.direction === constants.navDirections.up) {
      arrowStyle.top = 5;
    } else {
      arrowStyle.bottom = 5;
    }
    const arrow = constants.arrows[this.props.direction];
    return <svg height="20"
                width="32"
                style={arrowStyle}
                onClick={this.handleArrowClick}>
                  {arrow}
               </svg>;
  }

  render = () => {
    return this.renderArrow();
  }
}

export default NavArrow;
