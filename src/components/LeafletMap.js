import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "./App.css";
import { Icon } from "leaflet";
// import * as parkData from "./data/skateboard-parks.json";

import "./LeafletMap.css";

function LeafletMap() {
  return (
    <MapContainer
      center={[45.4, -75.7]}
      zoom={12}
      scrollWheelZoom={false}
      className="leaflet-container"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}

export default LeafletMap;
