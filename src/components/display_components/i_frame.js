import React from "react"; //eslint-disable-line

const IFrame = (props) => {
  return (
    <div className={props.containerClass}>
      <img className={props.imgClass} src={props.imgSrc} />
      <iframe className={props.htmlClass} src={props.htmlSrc} />
    </div>
  );
};

export default IFrame;
