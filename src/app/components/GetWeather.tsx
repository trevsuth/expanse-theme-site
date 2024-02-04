// components/GetWeather.tsx
'use client';

import React, { useState } from 'react';
import getCoordFromZip from '../utils/getCoordFromZip';
import getStationInfo from '../utils/getStationInfo';
import VisualizeHourlyForecast from './VisualizeHourlyForecast';
import VisualizeDailyForecast from './VisualizeDailyForecast';
import ZipCodeInput from './ZipCodeInput';

const GetWeather: React.FC = () => {
  const [hourlyForecastUrl, setHourlyForecastUrl] = useState<string | null>(null);
  const [dailyForecastUrl, setDailyForecastUrl] = useState<string | null>(null);
  const [error, setError] = useState('');

  const handleZipSubmit = async (zipCode: string) => {
    setError('');
    const coords = await getCoordFromZip(zipCode);
    if (coords) {
      const { lat, lon } = coords;
      const stationInfo = await getStationInfo(lat, lon);
      if (stationInfo) {
        setHourlyForecastUrl(stationInfo.forecastHourlyUrl);
        setDailyForecastUrl(stationInfo.forecastDailyUrl);
      } else {
        setError('Unable to get station info for the provided coordinates.');
      }
    } else {
      setError('Unable to get coordinates for the provided ZIP code.');
    }
  };

  return (
    <div>
      <ZipCodeInput onZipSubmit={handleZipSubmit} />
      {error && <p>{error}</p>}
      {hourlyForecastUrl && <VisualizeHourlyForecast forecastUrl={hourlyForecastUrl} />}
      {dailyForecastUrl && <VisualizeDailyForecast forecastUrl={dailyForecastUrl} />}
    </div>
  );
};

export default GetWeather;