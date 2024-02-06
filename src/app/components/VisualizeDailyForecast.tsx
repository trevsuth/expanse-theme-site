import React, { useEffect, useState } from 'react';
import getDailyForecast from '../utils/getDailyForecast';

// Define the TypeScript interface for the forecast data
interface Period {
  number: number;
  name: string;
  startTime: string;
  endTime: string;
  temperature: number;
  temperatureUnit: string;
  shortForecast: string;
  detailedForecast: string;
}

interface DailyForecast {
  properties: {
    periods: Period[];
  };
}

const VisualizeDailyForecast: React.FC<{ forecastUrl: string }> = ({ forecastUrl }) => {
  const [dailyForecast, setDailyForecast] = useState<DailyForecast | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchForecast = async () => {
      if (!forecastUrl) {
        setError('No forecast URL provided.');
        return;
      }
      try {
        const forecastData = await getDailyForecast(forecastUrl);
        if (!forecastData || !forecastData.properties || !forecastData.properties.periods) {
          setError('Invalid or incomplete forecast data received.');
          return;
        }
        setDailyForecast(forecastData);
      } catch (error: any) {
        setError(`Failed to fetch daily forecast data: ${error.message || error.toString()}`);
        console.error(error);
      }
    };

    fetchForecast();
  }, [forecastUrl]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!dailyForecast || !dailyForecast.properties || !dailyForecast.properties.periods) {
    return <div>Loading daily forecast...</div>;
  }

  // Render forecast data
  return (
    <div style={{ display: 'flex', overflowX: 'auto', gap: '20px', padding: '20px' }}>
      {dailyForecast.properties.periods.map((period: Period) => (
        <div key={period.number} style={{ flex: '0 1 auto', border: '1px solid #ccc', padding: '10px', borderRadius: '8px', minWidth: '200px' }}>
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
