async function getStationInfo(lat, lon) {
  const pointUrl = `https://api.weather.gov/points/${lat},${lon}`;

  try {
    const response = await fetch(pointUrl);
    const data = await response.json();
    return {
      forecastHourlyUrl: data.properties.forecastHourly,
    };
  } catch (error) {
    console.error('Error fetching station data:', error);
    return null;
  }
}

export default getStationInfo;
