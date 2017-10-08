import React from "react"; //eslint-disable-line

const IFrame = (props) => {
  return (
    <div className={props.iFrame.containerClass}>
      <img className={props.iFrame.imgClass} src={props.iFrame.imgSrc} />
      <iframe className={props.iFrame.htmlClass} src={props.iFrame.htmlSrc} />
    </div>
  );
};

export default IFrame;
