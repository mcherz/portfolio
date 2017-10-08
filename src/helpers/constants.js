import React from "react";

const constants = {
  arrows: {
    down: <polygon points="13,1 19,1 19,3 31,3 16,19 1,3 13,3" fill="none" stroke="#cccccc" strokeWidth="1" />,
    up: <polygon points="13,19 19,19 19,17 31,17 16,1 1,17 13,17" fill="none" stroke="#cccccc" strokeWidth="1" />
  },

  iFrames: {
    gearCalc: {
      containerClass: "scale",
      imgClass: "phone-hardware-horizontal",
      imgSrc: "images/phones/iphone-horizontal.png",
      htmlClass: "phone-screen-horizontal",
      htmlSrc: "iframes/gear_calc/index.html"
    },
    navAppt: {
      containerClass: "scale-vertical",
      imgClass: "phone-hardware-vertical",
      imgSrc: "images/phones/iphone-vertical.png",
      htmlClass: "phone-screen-vertical",
      htmlSrc: "iframes/nav_appt/index.html"
    }
  },

  navBarHeight: 40,
  navDirections: {
    up: "up",
    down: "down"
  },
  navScrollBreakpoint: 20,

  sections: {
    cover: "cover",
    gearCalc: "gearCalc",
    nav: "nav",
    navAppt: "navAppt",
    upsell: "upsell",
    calls: "calls"
  },

  thumbnailPath: "images/thumbs/"
};

export default constants;
