'use client'

import React, { useEffect, useState } from 'react';
import getLatLon from '../../utils/getLatLon';

const DisplayLatLonPage = () => {
  const [stationInfo, setStationInfo] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLatLon = async () => {
      try {
        const info = await getLatLon();
        if (!info) {
          setError('Failed to retrieve station information.');
          return;
        }
        setStationInfo(info);
      } catch (err) {
        setError(`Error: ${err.message}`);
      }
    };

    fetchLatLon();
  }, []);

  return (
    <div>
      <h1>Station Information</h1>
      {error && <div>{error}</div>}
      {stationInfo ? (
        <div>
          <p>Hourly Forecast URL: {stationInfo.forecastHourlyUrl}</p>
          <p>Daily Forecast URL: {stationInfo.forecastDailyUrl}</p>
        </div>
      ) : (
        !error && <p>Loading station information...</p>
      )}
    </div>
  );
};

export default DisplayLatLonPage;
