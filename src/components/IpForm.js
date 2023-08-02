import React from "react";

import Card from "./ui/Card";

import iconArrow from "../images/icon-arrow.svg";

import classes from "./IpForm.module.css";

function IpForm() {
  return (
    <Card className={classes.card}>
      <form className={classes.form}>
        <input />
        <button title="submit" className={classes.button}>
          <img src={iconArrow} alt="arrow" />
        </button>
      </form>
    </Card>
  );
}

export default IpForm;
