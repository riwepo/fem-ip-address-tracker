import React from "react";

import Background from "./components/Background";
import IpForm from "./components/IpForm";
import TrackingResults from "./components/TrackingResults";

import classes from "./App.module.css";

function App() {
  const dummyTrackingResults = [
    { heading: "IP Address", value: "ipaddress" },
    { heading: "Location", value: "location" },
    { heading: "Timezone", value: "timezone" },
    { heading: "ISP", value: "isp" },
  ];
  const homeLatLong = [-28.026, 153.428];
  return (
    <main>
      <>
        <div className={classes.foregroundContainer}>
          <h1 className={classes.heading}>IP Address Tracker</h1>
          <IpForm />
          <TrackingResults items={dummyTrackingResults} />
        </div>
        <Background center={homeLatLong} />
      </>
    </main>
  );
}

export default App;
