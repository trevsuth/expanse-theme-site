'use client'

import React, { useEffect, useState } from 'react';
import getStationInfo from '../../../utils/getStationInfo';
import VisualizeHourlyForecast from '../../../components/VisualizeHourlyForecast';
import getCurrentLocation from '../../../utils/getCurrentLocation';

const HourlyForecastPage = () => {
  const [forecastUrl, setForecastUrl] = useState<string>('');

  useEffect(() => {
    const fetchForecastUrl = async () => {
      try {
        const location = await getCurrentLocation();
        if (location) {
          const { latitude, longitude } = location;
          const stationInfo = await getStationInfo(latitude, longitude);
          if (stationInfo && stationInfo.forecastDailyUrl) {
            setForecastUrl(stationInfo.forecastDailyUrl);
          } else {
            console.error('No forecast URL found');
          }
        }
      } catch (error) {
        console.error('Error fetching forecast URL:', error);
      }
    };

    fetchForecastUrl();
  }, []);

  return (
    <div>
      <h1>Hourly Forecast</h1>
      {forecastUrl ? (
        <VisualizeHourlyForecast forecastUrl={forecastUrl} />
      ) : (
        <p>Loading forecast information...</p>
      )}
    </div>
  );
};

export default HourlyForecastPage;
