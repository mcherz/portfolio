import React from "react"; //eslint-disable-line

import sections from "helpers/sections";

const Contact = () => {
  return (
      <div className="contact-wrapper">
        <h4 className="contact-header">{sections.contact.title}</h4>
        <div className="contact">
          <img src="images/icons/email-icon.png" className="contact-icon" />
          <p className="contact-link dark-grey-link"><a href="mailto:matt@mattherz.com">matt@mattherz.com</a></p>
        </div>
        <div className="contact">
          <img src="images/icons/linkedin-icon.png" className="contact-icon" />
          <p className="contact-link dark-grey-link"><a href="https://www.linkedin.com/in/matthew-herz-6a464015">{"https:\/\/www.linkedin.com/in/matthew-herz-6a464015"}</a></p>
        </div>
        <div className="contact">
          <img src="images/icons/telegram-icon.png" className="contact-icon" />
          <p className="contact-link dark-grey-link"><a href="https://telegram.me/limelight">@limelight</a></p>
        </div>
      </div>
  );
};

export default Contact;
