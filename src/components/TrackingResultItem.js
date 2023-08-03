import React from "react";

import classes from "./TrackingResultItem.module.css";

function TrackingResultItem({ heading, value }) {
  return (
    <div className={classes.container}>
      <div className={classes.separator}></div>
      <div className={classes.contentContainer}>
        <p className={classes.heading}>{heading}</p>
        <p className={classes.value}>{value}</p>
      </div>
    </div>
  );
}

export default TrackingResultItem;
