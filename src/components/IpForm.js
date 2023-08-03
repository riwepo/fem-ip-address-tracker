import React, { useState } from "react";

import Card from "./ui/Card";

import iconArrow from "../images/icon-arrow.svg";

import classes from "./IpForm.module.css";

function IpForm({ onSubmit }) {
  const [enteredIp, setEnteredIp] = useState("");
  const [isValid, setIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    if (isValid) onSubmit(enteredIp);
  };

  const ipChangeHandler = (event) => {
    const localIp = event.target.value;
    setEnteredIp(localIp);
    if (localIp === "") {
      setIsValid(false);
      return;
    }
    setIsValid(validateIPaddress(localIp));
  };

  function validateIPaddress(ipAddress) {
    var ipformat =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipAddress.match(ipformat);
  }

  return (
    <Card className={classes.card}>
      <form className={classes.form} onSubmit={submitHandler}>
        <input
          type="text"
          className={classes.input}
          placeholder="Search for any IP address or domain"
          onChange={ipChangeHandler}
          value={enteredIp}
        />
        <button title="submit" className={classes.button} disabled={!isValid}>
          <img src={iconArrow} alt="arrow" />
        </button>
      </form>
    </Card>
  );
}

export default IpForm;
