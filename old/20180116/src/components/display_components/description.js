import React from "react" //eslint-disable-line

class Description extends React.Component {
  componentWillMount = () => {
    this.subTitleLink = <span>.</span>;
    if (this.props.section.subTitleLinkText) {
      this.subTitleLink = <span> <a className="medium-grey-link" href={this.props.section.subTitleLinkHref}>
                            {this.props.section.subTitleLinkText}
                          </a>.</span>;
    }

    this.descriptionText = [];
    for (let p in this.props.section.body) {
      const paragraph = this.props.section.body[p];
      this.descriptionText.push(
        <p key={p}>
          {paragraph}
        </p>
      );
    }
  }

  render = () => {
    return (
      <div className="description">
        <h4>{this.props.section.title}</h4>
        <p className="sub-title">
          {this.props.section.subtitle}
          {this.subTitleLink}
        </p>
        <div>
          {this.descriptionText}
        </div>
      </div>
    );
  }
}

export default Description;
