'use client'

import React, { useEffect, useState } from 'react';
import getCurrentLocation from '../../utils/getCurrentLocation';

const GeolocatePage = () => {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    getCurrentLocation()
      .then((loc) => {
        setLocation(loc);
      })
      .catch((err) => {
        setError('Failed to retrieve location: ' + err);
      });
  }, []);

  return (
    <div>
      <h1>Geolocation Test</h1>
      {error && <p>Error: {error}</p>}
      {location ? (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      ) : (
        !error && <p>Fetching location...</p>
      )}
    </div>
  );
};

export default GeolocatePage;