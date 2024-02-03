import React from 'react';

interface DailyForecast {
  properties: {
    periods: Array<{
      number: number;
      name: string;
      startTime: string;
      endTime: string;
      isDaytime: boolean;
      temperature: number;
      temperatureUnit: string;
      windSpeed: string;
      windDirection: string;
      icon: string;
      shortForecast: string;
      detailedForecast: string;
    }>;
  };
}

const VisualizeDailyForecast: React.FC<{ forecast: DailyForecast }> = ({ forecast }) => {
  return (
    <div>
      <h2>Daily Forecast</h2>
      <ul>
        {forecast?.properties?.periods?.map((period) => (
          <li key={period.number}>
            <div>Name: {period.name}</div>
            <div>Temperature: {period.temperature} {period.temperatureUnit}</div>
            <div>Wind: {period.windSpeed} {period.windDirection}</div>
            <div>{period.shortForecast}</div>
            {period.icon && <img src={period.icon} alt="Weather icon" />}
            <p>{period.detailedForecast}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VisualizeDailyForecast;