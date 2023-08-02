import API_KEY from "./geolocation_key";

// sample URL
// https://geo.ipify.org/api/v2/country,city?apiKey=at_nwvlYhYKNuZ10ltmgl29dJTZ5ZUWq&ipAddress=8.8.8.8

const API_URL = "https://geo.ipify.org/api/v2/country,city?=";

const buildUrl = (ipAddress) => {
  const url = `${API_URL}${API_KEY}&ipAddress=${ipAddress}`;
  console.log(url);
  return url;
};

export function getCity(ipAddress) {
  const url = buildUrl(ipAddress);
}
