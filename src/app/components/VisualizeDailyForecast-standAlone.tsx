import React, { useEffect, useState } from 'react';
import getDailyForecast from '../utils/getDailyForecast';

// Define the TypeScript interface for the forecast data
interface DailyForecast {
  properties: {
    periods: Array<{
      number: number;
      name: string;
      startTime: string;
      endTime: string;
      temperature: number;
      temperatureUnit: string;
      shortForecast: string;
      detailedForecast: string;
    }>;
  };
}

// Assume getDailyForecast is adjusted to fetch data using the provided URL
const VisualizeDailyForecast: React.FC<{ forecastUrl: string }> = ({ forecastUrl }) => {
  const [dailyForecast, setDailyForecast] = useState<DailyForecast | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const forecastData = await getDailyForecast(forecastUrl);
        setDailyForecast(forecastData);
      } catch (error) {
        setError('Failed to fetch daily forecast data.');
        console.error(error);
      }
    };

    if (forecastUrl) {
      fetchForecast();
    }
  }, [forecastUrl]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!dailyForecast) {
    return <div>Loading daily forecast...</div>;
  }

  // Render forecast data
  return (
    <div style={{ display: 'flex', overflowX: 'auto', gap: '20px', padding: '20px' }}>
      {dailyForecast.properties.periods.map((period) => (
        <div key={period.number} style={{ flex: '0 0 auto', border: '1px solid #ccc', padding: '10px', borderRadius: '8px', minWidth: '200px' }}>
          <h3>{period.name}</h3>
          <p><strong>Temperature:</strong> {period.temperature} {period.temperatureUnit}</p>
          <p><strong>Forecast:</strong> {period.shortForecast}</p>
          <p>{period.detailedForecast}</p>
        </div>
      ))}
    </div>
  );
};

export default VisualizeDailyForecast;