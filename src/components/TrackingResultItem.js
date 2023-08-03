import React from "react";

import classes from "./TrackingResultItem.module.css";

function TrackingResultItem({ index, heading, value }) {
  return (
    <div
      className={`${classes.container} ${index === 0 ? classes.first : null}`}
    >
      <div className={classes.separator}></div>
      <div className={classes.contentContainer}>
        <p className={classes.heading}>{heading}</p>
        <p className={classes.value}>{value}</p>
      </div>
    </div>
  );
}

export default TrackingResultItem;
