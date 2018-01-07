import React from "react";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      containerScrollTop: 0
    };
  }

  componentWillMount = () => {
    this.props.sizePage();
    window.addEventListener("resize", this.props.sizePage);
  }

  render = () => {
    return <div className="portfolio" style={{height: this.props.pageHeight}}>
      <div ref={(div) => {
        this.container = div;
      }}
      className="portfolio-content"
      style={{height: this.props.pageHeight}}>
        hello world
      </div>
    </div>;
  }
}

export default Portfolio;
