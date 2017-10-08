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
    next: "navAppt",
    previous: "cover",
    sectionKey: "gearCalc",
    subtitle: "Design & ObjC implementation",
    subTitleLinkHref: "https://itunes.apple.com/us/app/track-gear-calculator/id725953062?ls=1&mt=8#",
    subTitleLinkText: "(available in iOS App Store)",
    title: "Track Gear Calculator",
    thumbnailString: "calc-thumb-"
  }
};

export default sections;
