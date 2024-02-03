async function getHourlyForecast(forecastHourlyUrl) {
    try {
      const response = await fetch(forecastHourlyUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching hourly weather data:', error);
      return null;
    }
  }
  
  export default getHourlyForecast;
  