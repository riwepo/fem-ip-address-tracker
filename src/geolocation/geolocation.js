import API_KEY from "./geolocation_key";

// sample URL
// https://geo.ipify.org/api/v2/country,city?apiKey=at_nwvlYhYKNuZ10ltmgl29dJTZ5ZUWq&ipAddress=8.8.8.8

const API_URL = "https://geo.ipify.org/api/v2/country,city?apiKey=";

const buildUrl = (ipAddress) => {
  if (ipAddress == null) {
    const url = `${API_URL}${API_KEY}`;
    return url;
  }
  const url = `${API_URL}${API_KEY}&ipAddress=${ipAddress}`;
  return url;
};

// calls geo.ipify API
// returns value or error wrapped in an object
export async function getCity(ipAddress) {
  const url = buildUrl(ipAddress);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `geolocation request failed with error: ${response.status}`
      );
    }
    const geoResult = await response.json();
    const result = { isOk: true, value: geoResult };
    return result;
  } catch (error) {
    return { isOk: false, error: error.message };
  }
}
