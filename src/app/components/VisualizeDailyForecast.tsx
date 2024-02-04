import React from 'react';

interface DailyForecast {
  properties: {
    periods: Array<{
      number: number;
      name: string;
      startTime: string; // Start time of the day
      endTime: string; // End time of the day
      temperature: number;
      temperatureUnit: string;
      shortForecast: string;
      detailedForecast: string; // Assume this includes more detailed info
    }>;
  };
}

const VisualizeDailyForecast: React.FC<{ forecast: DailyForecast }> = ({ forecast }) => {
  return (
    <div style={{ display: 'flex', overflowX: 'auto', gap: '20px', padding: '20px' }}>
      {forecast?.properties?.periods.map((period) => (
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
