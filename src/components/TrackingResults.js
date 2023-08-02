import React from "react";

import Card from "./ui/Card";
import TrackingResultItem from "./TrackingResultItem";

import classes from "./TrackingResults.module.css";

function TrackingResults({ items }) {
  return (
    <Card className={classes.card}>
      {items.map((item) => {
        return (
          <li>
            <TrackingResultItem heading={item.heading} value={item.value} />
          </li>
        );
      })}
    </Card>
  );
}

export default TrackingResults;
