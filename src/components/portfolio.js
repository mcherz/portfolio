import React from "react";

class Portfolio extends React.Component {
  render = () => {
    return <div className="portfolio" style={{height: this.props.pageHeight}}>
      <div className="wrapper">
        <div className="responses">
          {this.props.currentResponse}
        </div>
        <div className="entry">
          <input className="type-entry" type="text" />
          <button className="type-commit">Say it</button>
        </div>
      </div>
    </div>;
  }
}

export default Portfolio;
