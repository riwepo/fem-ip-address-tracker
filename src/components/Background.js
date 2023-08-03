import React from "react";

import LeafletMap from "./LeafletMap";

import patternBgMobile from "../images/pattern-bg-mobile.png";
import patternBgDesktop from "../images/pattern-bg-desktop.png";

import classes from "./Background.module.css";

function Background({ center }) {
  return (
    <div className={classes.container}>
      <picture className={classes.picture}>
        <source srcSet={patternBgDesktop} media="(min-width: 768px)" />
        <img
          className={classes.img}
          src={patternBgMobile}
          alt="background pattern"
        />
      </picture>
      <LeafletMap center={center} />
    </div>
  );
}

export default Background;
