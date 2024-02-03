'use client';

import React, { useState } from 'react';
import getCoordFromZip from '../utils/getCoordFromZip';
import getStationInfo from '../utils/getStationInfo';
import getHourlyForecast from '../utils/getHourlyForecast';

const GetWeather: React.FC = () => {
  const [zipCode, setZipCode] = useState('');
  const [forecast, setForecast] = useState<object | string | null>(null);

  const handleGetWeather = async () => {
    const coords = await getCoordFromZip(zipCode);
    if (coords) {
      const { lat, lon } = coords;
      const stationInfo = await getStationInfo(lat, lon);
      if (stationInfo && stationInfo.forecastHourlyUrl) {
        const hourlyForecast = await getHourlyForecast(stationInfo.forecastHourlyUrl);
        setForecast(hourlyForecast);
      } else {
        setForecast('Unable to get station info for the provided coordinates.');
      }
    } else {
      setForecast('Unable to get coordinates for the provided ZIP code.');
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
      <div>
        {forecast && <pre>{JSON.stringify(forecast, null, 2)}</pre>}
      </div>
    </div>
  );
};

export default GetWeather;
