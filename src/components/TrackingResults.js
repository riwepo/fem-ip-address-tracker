import React from "react";

import Card from "./ui/Card";
import TrackingResultItem from "./TrackingResultItem";

import classes from "./TrackingResults.module.css";

function TrackingResults({ items }) {
  return (
    <Card className={classes.card}>
      <ul className={classes.list}>
        {items.map((item, index) => {
          return (
            <li key={item.heading}>
              <TrackingResultItem
                index={index}
                heading={item.heading}
                value={item.value}
              />
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

export default TrackingResults;
