import React, { useEffect, useState } from 'react';
import getDailyForecast from '../utils/getDailyForecast';

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

// Update props to accept a URL instead of the entire forecast object
const VisualizeDailyForecast: React.FC<{ forecastUrl: string }> = ({ forecastUrl }) => {
  const [dailyForecast, setDailyForecast] = useState<DailyForecast | null>(null);

  useEffect(() => {
    const fetchForecast = async () => {
      const forecastData = await getDailyForecast(forecastUrl);
      setDailyForecast(forecastData);
    };

    fetchForecast();
  }, [forecastUrl]); // Depend on forecastUrl to refetch if it changes

  if (!dailyForecast) {
    return <p>Loading daily forecast...</p>;
  }

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
