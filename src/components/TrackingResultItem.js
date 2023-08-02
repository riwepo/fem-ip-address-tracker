import React from "react";

import classes from "./TrackingResultItem.module.css";

function TrackingResultItem({ heading, value }) {
  return (
    <div className={classes.container}>
      <p className={classes.heading}>{heading}</p>
      <p className={classes.value}>{value}</p>
    </div>
  );
}

export default TrackingResultItem;
