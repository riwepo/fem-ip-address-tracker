import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "./App.css";
import { Icon } from "leaflet";
// import * as parkData from "./data/skateboard-parks.json";

// note the Leaflet library is hardcoded to render into a div with class 'leaflet-container'
// so we can't use CSS Modules
// instead we use a simple pure CSS file
import "./LeafletMap.css";

function LeafletMap() {
  return (
    <MapContainer
      center={[-28.0, 153.4]}
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
