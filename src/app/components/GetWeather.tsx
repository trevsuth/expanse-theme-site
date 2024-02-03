// components/GetWeather.tsx
'use client';

import React, { useState } from 'react';
import getCoordFromZip from '../utils/getCoordFromZip';
import getStationInfo from '../utils/getStationInfo';
import getHourlyForecast from '../utils/getHourlyForecast';
import getDailyForecast from '../utils/getDailyForecast'; // Ensure this utility is correctly implemented
import VisualizeHourlyForecast from './VisualizeHourlyForecast';
import VisualizeDailyForecast from './VisualizeDailyForecast';

const GetWeather: React.FC = () => {
  const [zipCode, setZipCode] = useState('');
  const [forecastData, setForecastData] = useState<any>(null); // Consider specifying a more accurate type
  const [dailyForecast, setDailyForecast] = useState<any>(null); // Adjust for consistency and clarity
  const [error, setError] = useState('');

  const handleGetWeather = async () => {
    setError('');
    const coords = await getCoordFromZip(zipCode);
    if (coords) {
      const { lat, lon } = coords;
      const stationInfo = await getStationInfo(lat, lon);
      if (stationInfo && stationInfo.forecastHourlyUrl && stationInfo.forecastDailyUrl) { // Assume stationInfo includes forecastDailyUrl
        const hourlyForecastData = await getHourlyForecast(stationInfo.forecastHourlyUrl);
        setForecastData(hourlyForecastData);

        // Assuming getDailyForecast is correctly implemented and stationInfo.forecastDailyUrl exists
        const dailyForecastData = await getDailyForecast(stationInfo.forecastDailyUrl); 
        setDailyForecast(dailyForecastData); // Correctly use setDailyForecast for daily data
      } else {
        setError('Unable to get station info for the provided coordinates.');
      }
    } else {
      setError('Unable to get coordinates for the provided ZIP code.');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
        placeholder="Enter ZIP code"
      />
      <button onClick={handleGetWeather}>Get Weather</button>
      {error && <p>{error}</p>}
      {forecastData && <VisualizeHourlyForecast forecast={forecastData} />}
      {dailyForecast && <VisualizeDailyForecast forecast={dailyForecast} />}
    </div>
  );
};

export default GetWeather;
