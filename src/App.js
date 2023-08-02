import React from "react";

import Background from "./components/Background";
import IpForm from "./components/IpForm";

import classes from "./App.module.css";
import TrackingResults from "./components/TrackingResults";

function App() {
  return (
    <main>
      <>
        <div className={classes.foregroundContainer}>
          <h1>IP Address Tracker</h1>
          <IpForm />
          <TrackingResults />
        </div>
        <Background />
      </>
    </main>
  );
}

export default App;
