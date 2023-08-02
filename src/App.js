import React from "react";

import Background from "./components/Background";

import classes from "./App.module.css";

function App() {
  return (
    <main>
      <>
        <div className={classes.foregroundContainer}>
          <h1>IP Address Tracker</h1>
        </div>
        <Background />
      </>
    </main>
  );
}

export default App;
