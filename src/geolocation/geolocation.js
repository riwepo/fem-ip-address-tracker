import API_KEY from "./geolocation_key";

// sample URL
// https://geo.ipify.org/api/v2/country,city?apiKey=at_nwvlYhYKNuZ10ltmgl29dJTZ5ZUWq&ipAddress=8.8.8.8

const API_URL = "https://geo.ipify.org/api/v2/country,city?apiKey=";

const buildIpUrl = (ipAddress) => {
  const url = `${API_URL}${API_KEY}&ipAddress=${ipAddress}`;
  return url;
};

const buildRequestIpUrl = () => {
  const url = `${API_URL}${API_KEY}`;
  return url;
};

// calls geo.ipify API with specified ip address
// finds geo location data including city for that ip
// returns value or error wrapped in an object
export async function getCityForIp(ipAddress) {
  const url = buildIpUrl(ipAddress);
  const result = getCity(url);
  return result;
}

// calls geo.ipify API with no ip address
// finds geo location data including city for the request ip
// returns value or error wrapped in an object
export function getCityForRequestIp() {
  const url = buildRequestIpUrl();
  const result = getCity(url);
  return result;
}

// calls geo.ipify API at given URL
// returns value or error wrapped in an object
export async function getCity(url) {
  let result;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `geolocation request failed with error: ${response.status}`
      );
    }
    const geoResult = await response.json();
    result = { isOk: true, value: geoResult };
    return result;
  } catch (error) {
    result = { isOk: false, error: error.message };
    return result;
  }
}
