import React from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { Icon } from "leaflet";

// note the Leaflet library is hardcoded to render into a div with class 'leaflet-container'
// so we can't use CSS Modules
// instead we use a simple pure CSS file
import "./LeafletMap.css";

const icon = new Icon({
  iconUrl: process.env.PUBLIC_URL + "/images/icon-location.svg",
  iconSize: [50, 50],
  iconAnchor: [25, 50],
});

function LeafletMap({ center }) {
  return (
    <MapContainer
      center={center}
      zoom={12}
      scrollWheelZoom={false}
      className="leaflet-container"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center} icon={icon} />
      <LeafletMapController targetCenter={center} />
    </MapContainer>
  );
}

// this little component controls the map
function LeafletMapController({ targetCenter }) {
  const map = useMap();
  map.removeControl(map.zoomControl);
  map.flyTo(targetCenter);
  return null;
}

export default LeafletMap;
