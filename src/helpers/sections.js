const sections = {
  gearCalc: {
    assets: [
      {
        type: "IFRAME",
        key: "gearCalc"
      },
      {
        type: "IMAGE",
        src: "images/calc/iphone-calc-main.png"
      },
      {
        type: "IMAGE",
        src: "images/calc/iphone-calc-settings.png"
      },
      {
        type: "IMAGE",
        src: "images/calc/watch-calc-main.png"
      }
    ],
    body: ["Objective: Replace the paper chart carried by track cyclists everywhere with an intuitive iOS app.",
      "Result: Exclusively 5-star reviews, and a userbase that consistently provides overwhelmingly positive feedback.",
      "Designed and built from scratch in Objective C. Not only replaces a paper gear chart, but also allows direct incrementation of the resulting gear itself, a feature impossible on a piece of paper. Full port to HTML/CSS/jQuery (for Android/Windows PhoneGap builds) shown here (in an iframe); dowload codes available on request."
    ],
    next: "nav",
    previous: "cover",
    sectionKey: "gearCalc",
    subtitle: "Design & ObjC implementation",
    subTitleLinkHref: "https://itunes.apple.com/us/app/track-gear-calculator/id725953062?ls=1&mt=8#",
    subTitleLinkText: "(available in iOS App Store)",
    title: "Track Gear Calculator",
    thumbnailString: "calc-thumb-"
  },

  nav: {
    assets: [
      {
        type: "IMAGE",
        src: "images/nav/nav-main.png"
      },
      {
        type: "IMAGE",
        src: "images/nav/nav-themed.png"
      },
      {
        type: "IMAGE",
        src: "images/nav/theme-picker.png"
      },
      {
        type: "IMAGE",
        src: "images/nav/nav-old.png"
      }
    ],
    body: ["Objective: Replace the non-standard dropdown navigation in Cozi's iOS app with something more intuitive.",
      "Result: A hamburger-style navigation that simultaneously standardized feature navigation, provided a new premium upsell funnel (themes), provided a custom, cross-platform ad unit (takeovers), and eliminated a seldom-used application view (Home).",
      "This design went through several iterations before this result, and solved several problems at once; a deeper look at the process (including both early and final prototypes) is available on request."
    ],
    next: "navAppt",
    previous: "gearCalc",
    sectionKey: "nav",
    subtitle: "Design & jQuery prototype",
    title: "Cozi Navigation",
    thumbnailString: "nav-thumb-"
  },

  navAppt: {
    assets: [
      {
        type: "IFRAME",
        key: "navAppt"
      },
      {
        type: "IMAGE",
        src: "images/nav_appt/appt-1.png"
      },
      {
        type: "IMAGE",
        src: "images/nav_appt/appt-2.png"
      },
      {
        type: "IMAGE",
        src: "images/nav_appt/appt-3.png"
      }
    ],
    body: ["Objective: Use an existing natural language parser to make calendar appointment entry faster and more intuitive.",
      "Result: An interactive prototype that demonstrating animations that show users how their inputs translate into calendar data, and very positive feedback from digital and paper prototype users.",
      "Cozi's current user interface allows for both natural language input and form-based appointment creation; smart defaults would combine those two input methods, saving both screen real estate and user time. A new appointment view in sentence form is more casual, and is still easily skimmed via careful vertical alignment."
    ],
    next: "upsell",
    previous: "nav",
    sectionKey: "navAppt",
    subtitle: "Design & jQuery prototype",
    title: "Cozi Appointment Creation",
    thumbnailString: "nav-appt-thumb-"
  },

  upsell: {
    assets: [
      {
        type: "IMAGE",
        src: "images/upsell/new-old.png"
      },
      {
        type: "IMAGE",
        src: "images/upsell/three-images.png"
      },
    ],
    body: ["Objective: Design an updated premium upsell screen.",
      "Result: A 60% lift (as measured by A/B testing) in conversions to the premium version of the product.",
      "Transitioning from a text-based upsell to a lifestyle image and icon based upsell with a clear call to action yielded a significant bump in premium conversions. A/B testing across a variety of lifestyle images showed minimal differences from image to image; the page structure performed well regardless of the image content."
    ],
    next: "calls",
    previous: "nav",
    sectionKey: "upsell",
    subtitle: "Design",
    title: "Cozi Premium Upsell Refresh",
    thumbnailString: "upsell-thumb-"
  },

  calls: {
    assets: [
      {
        type: "IMAGE",
        src: "images/calls/reporting.png"
      },
      {
        type: "IMAGE",
        src: "images/calls/spec.png"
      },
    ],




    body: ["Objective: Provide access for Marchex customers to directly view their Calls reporting data.",
      "Results: Self-serve customer login replaced Excel spreadsheets emailed to customers weekly (or daily), increasing customer access to data and customer satisfaction and decreasing administrative load on account managers."
    ],
    next: "",
    previous: "upsell",
    sectionKey: "calls",
    subtitle: "Design",
    title: "Marchex Calls Reporting",
    thumbnailString: "calls-thumb-"
  }
};

export default sections;
