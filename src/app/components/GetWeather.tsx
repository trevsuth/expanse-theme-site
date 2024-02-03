'use client'

import React, { useState } from 'react';
import getCoordFromZip from '../utils/getCoordFromZip';
import getForecast from '../utils/getOffice';

const GetWeather: React.FC = () => {
  const [zipCode, setZipCode] = useState('');
  const [forecast, setForecast] = useState(null);

  const handleGetWeather = async () => {
    const coords = await getCoordFromZip(zipCode);
    if (coords) {

        const lat = Number(coords.lat).toFixed(2);
        const lon = Number(coords.lon).toFixed(2);


      const weatherForecast = await getForecast(lat, lon);
      setForecast(weatherForecast);
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
