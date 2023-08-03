import React, { useState } from "react";

import Card from "./ui/Card";

import iconArrow from "../images/icon-arrow.svg";

import classes from "./IpForm.module.css";

function IpForm({ onSubmit }) {
  const [enteredIp, setEnteredIp] = useState("");
  const [isValid, setIsValid] = useState(false);

  const submitHandler = async (event) => {
    const broadbeachLibrary = "123.103.192.10";
    event.preventDefault();
    // const localIp = event.target.value;
    const localIp = broadbeachLibrary;
    if (localIp === "") {
      setIsValid(false);
      return;
    }
    setEnteredIp(localIp);
    onSubmit(localIp);
  };

  return (
    <Card className={classes.card}>
      <form className={classes.form} onSubmit={submitHandler}>
        <input
          className={classes.input}
          placeholder="Search for any IP address or domain"
        />
        <button title="submit" className={classes.button}>
          <img src={iconArrow} alt="arrow" />
        </button>
      </form>
    </Card>
  );
}

export default IpForm;
