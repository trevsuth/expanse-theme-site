async function getForecast(lat, lon) {
  const pointUrl = `https://api.weather.gov/points/${lat},${lon}`;

  try {
    const pointResponse = await fetch(pointUrl);
    const pointData = await pointResponse.json();
    const forecastHourlyUrl = pointData.properties.forecastHourly;

    const forecastResponse = await fetch(forecastHourlyUrl);
    const forecastData = await forecastResponse.json();
    return forecastData; // This now returns the hourly forecast data
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
}
  
  export default getForecast;
  