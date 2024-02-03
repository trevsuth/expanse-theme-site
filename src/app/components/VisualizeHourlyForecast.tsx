import React from 'react';

// Adjusted interface to reflect the nested structure of probabilityOfPrecipitation
interface HourlyForecast {
  properties: {
    periods: Array<{
      number: number;
      name: string;
      startTime: string;
      temperature: number;
      temperatureUnit: string;
      probabilityOfPrecipitation: { unitCode: string; value: number }; // Adjusted type
      shortForecast: string;
    }>;
  };
}

const VisualizeHourlyForecast: React.FC<{ forecast: HourlyForecast }> = ({ forecast }) => {
  return (
    <div>
      <h2>Hourly Forecast</h2>
      <ul>
        {forecast?.properties?.periods?.slice(0, 36).map((period) => (
          <li key={period.number}>
            <div>Start Time: {period.startTime}</div>
            <div>Temperature: {period.temperature} {period.temperatureUnit}</div>
            {/* Access the value property directly for precipitation */}
            <div>Precipitation Probability: {period.probabilityOfPrecipitation.value}%</div>
            <div>Forecast: {period.shortForecast}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VisualizeHourlyForecast;
