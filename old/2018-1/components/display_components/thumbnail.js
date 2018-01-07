import React from "react"; //eslint-disable-line

import constants from "helpers/constants";

const Thumbnail = (props) => {
  const handleClick = () => {
    props.onThumbClick(props.index);
    // props.onThumbnailClick(props.index);
  };

  return (
    <div key={props.index} className="thumbnail" onClick={handleClick}>
      <img src={`${constants.thumbnailPath}${props.prefix}${props.index}.png`} />
    </div>
  );

};

export default Thumbnail;
