import React from "react";

import LeafletMap from "./LeafletMap";

import patternBgMobile from "../images/pattern-bg-mobile.png";

import classes from "./Background.module.css";

function Background() {
  return (
    <div className={classes.container}>
      <img
        className={classes.img}
        src={patternBgMobile}
        alt="background pattern"
      />
      <LeafletMap />
    </div>
  );
}

export default Background;
