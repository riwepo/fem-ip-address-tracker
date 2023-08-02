import React from "react";

import Background from "./components/Background";
import IpForm from "./components/IpForm";
import TrackingResults from "./components/TrackingResults";

import classes from "./App.module.css";

function App() {
  return (
    <main>
      <>
        <div className={classes.foregroundContainer}>
          <h1 className={classes.heading}>IP Address Tracker</h1>
          <IpForm />
          <TrackingResults />
        </div>
        <Background />
      </>
    </main>
  );
}

export default App;
