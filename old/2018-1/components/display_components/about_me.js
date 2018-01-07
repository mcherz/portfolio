import React from "react"; //eslint-disable-line

import sections from "helpers/sections";

const AboutMe = () => {
  return (
    <div className="section" style={{paddingTop: 0}}>
      <div className="column">
        <div className="column-text">
          <h4>{sections.about.title}</h4>
          <p>
            {sections.about.text}
            <a href={sections.about.resumeHref} target="_blank" rel="noopener noreferrer" className="grey-link">{sections.about.resumeText}</a>
            <span>.</span>
          </p>
        </div>
      </div>
      <div className="column">
        <img className="profile-photo" src="./images/mh_square.jpg" />
      </div>
    </div>
  );
};

export default AboutMe;
