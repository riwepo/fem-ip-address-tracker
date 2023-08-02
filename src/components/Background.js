import React from "react";

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
      <div className={classes.map}></div>
    </div>
  );
}

export default Background;
