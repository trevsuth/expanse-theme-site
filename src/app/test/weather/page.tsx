'use client'

import React, { useState } from 'react';
import getForecast from '../../utils/getStationInfo';

const TestForecast: React.FC = () => {
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [output, setOutput] = useState('');

  const handleLookup = async () => {
    const forecast = await getForecast(lat, lon);
    setOutput(JSON.stringify(forecast, null, 2));
  };

  return (
    <div>
      <h1>Test Forecast Lookup</h1>
      <div>
        <input
          type="text"
          value={lat}
          placeholder="Latitude"
          onChange={(e) => setLat(e.target.value)}
        />
        <input
          type="text"
          value={lon}
          placeholder="Longitude"
          onChange={(e) => setLon(e.target.value)}
        />
        <button onClick={handleLookup}>Get Forecast</button>
      </div>
      <pre>{output}</pre>
    </div>
  );
};

export default TestForecast;
