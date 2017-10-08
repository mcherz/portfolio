import React from "react" //eslint-disable-line

import WorkArrow from "components/display_components/work_arrow";

import constants from "helpers/constants";

const Cover = (props) => {
  const handleArrowClick = () => {
    props.onArrowClick(constants.sections.gearCalc);
  };

  let margin = (props.pageHeight - 400)/2;
  if (margin > 110) {
    margin = 110;
  } else if (margin < 20) {
    margin = 20;
  }

  return (
    <div className="full-cover" style={{height: props.pageHeight}}>
      <img className="cover-image" src="images/cover.jpg" />
      <div className="cover-content">
        <h2>Matt Herz</h2>
        <h4>UX Design and Development</h4>
        <h4 className="center-third" style={{marginTop: margin, width: "30%"}}>An experience design portfolio in five chapters.</h4>
        <div className="transparent-button" onClick={handleArrowClick}>
          <div className="transparent-button-text">
            See the Work
          </div>
          <WorkArrow onArrowClick={handleArrowClick} />
        </div>
      </div>
    </div>
  );
};

export default Cover;
