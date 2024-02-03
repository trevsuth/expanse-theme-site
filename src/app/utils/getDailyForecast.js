async function getDailyForecast(forecastUrl) {
    try {
      const response = await fetch(forecastUrl);
      const forecastData = await response.json();
      return forecastData;
    } catch (error) {
      console.error('Error fetching daily forecast data:', error);
      return null;
    }
  }
  
  export default getDailyForecast;
  