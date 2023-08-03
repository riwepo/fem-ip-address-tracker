import React, { useState, useEffect } from "react";

import Background from "./components/Background";
import IpForm from "./components/IpForm";
import TrackingResults from "./components/TrackingResults";

import { getCity } from "./geolocation/geolocation";

import classes from "./App.module.css";

const dummyTrackingResults = [
  { heading: "IP Address", value: "ipaddress" },
  { heading: "Location", value: "location" },
  { heading: "Timezone", value: "timezone" },
  { heading: "ISP", value: "isp" },
];
const homeLatLong = [-28.026, 153.428];

function App() {
  const [trackingResults, setTrackingResults] = useState(dummyTrackingResults);
  const [latLong, setLatLong] = useState(homeLatLong);

  const ipSubmitHandler = async (enteredIp) => {
    await asyncUpdateCity(enteredIp);
  };

  const asyncUpdateCity = async (ipAddress) => {
    const geoResult = await getCity(ipAddress);
    const trackingResults = convertGeoResult(geoResult);
    setTrackingResults(trackingResults);
    const geoLatLong = getLatLong(geoResult);
    setLatLong(geoLatLong);
  };

  const updateCity = () => {
    asyncUpdateCity(null);
  };

  // update city on first load with null ip
  // will use ip of request to show our ip
  useEffect(updateCity, []);

  function convertGeoResult(geoResult) {
    const formatLocation = (location) => {
      return `${location.city}, ${location.region} ${location.postalCode}`;
    };
    const formatTimezone = (timezone) => {
      return `UTC ${timezone}`;
    };
    const trackingResults = [
      { heading: "IP Address", value: geoResult.value.ip },
      { heading: "Location", value: formatLocation(geoResult.value.location) },
      {
        heading: "Timezone",
        value: formatTimezone(geoResult.value.location.timezone),
      },
      { heading: "ISP", value: geoResult.value.isp },
    ];

    return trackingResults;
  }

  function getLatLong(geoResult) {
    const latLong = [
      geoResult.value.location.lat,
      geoResult.value.location.lng,
    ];
    return latLong;
  }

  return (
    <main>
      <>
        <div className={classes.foregroundContainer}>
          <h1 className={classes.heading}>IP Address Tracker</h1>
          <IpForm onSubmit={ipSubmitHandler} />
          <TrackingResults items={trackingResults} />
        </div>
        <Background center={latLong} />
      </>
    </main>
  );
}

export default App;
