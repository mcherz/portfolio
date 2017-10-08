import React from "react";

import Description from "components/display_components/description";
import IFrame from "components/display_components/i_frame";
import NavArrow from "components/display_components/nav_arrow";
import Thumbnail from "components/display_components/thumbnail";

import constants from "helpers/constants";

class Section extends React.Component {
  componentWillMount = () => {
    this.thumbs = [];
    for (let a in this.props.section.assets) {
      this.thumbs.push(<Thumbnail key={a}
                                  index={a}
                                  onThumbClick={this.props.setActiveImageIndex}
                                  prefix={this.props.section.thumbnailString} />);
    }
  }

  handleArrowClick = (target) => {
    this.props.onArrowClick(target);
  }

  renderAsset = (indexString) => {
    const asset = this.props.section.assets[parseInt(indexString)];
    switch (asset.type) {
    case "IFRAME":
      return <IFrame iFrame={constants.iFrames[asset.key]} />;
    case "IMAGE":
      return <img className="image-default" src={asset.src} />;
    }
  }

  render = () => {
    return <div className="section">
      <div className="work">
        <div className="image-wrapper">
          {this.renderAsset(this.props.activeAsset)}
          <div className="thumbnail-holder">
            {this.thumbs}
          </div>
        </div>
      </div>
      <Description section={this.props.section} />
      <NavArrow
        direction={constants.navDirections.up}
        target={this.props.section.previous}
        pageWidth={this.props.pageWidth}
        onArrowClick={this.handleArrowClick} />
      <NavArrow
        direction={constants.navDirections.down}
        target={this.props.section.next}
        pageWidth={this.props.pageWidth}
        onArrowClick={this.handleArrowClick} />
    </div>;
  }
}

export default Section;
