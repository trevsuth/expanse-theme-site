async function getHourlyForecast(forecastHourlyUrl) {
    try {
      const response = await fetch(forecastHourlyUrl);
      const forecastData = await response.json();
      return forecastData;
    } catch (error) {
      console.error('Error fetching hourly forecast data:', error);
      return null;
    }
  }
  
  export default getHourlyForecast;
  