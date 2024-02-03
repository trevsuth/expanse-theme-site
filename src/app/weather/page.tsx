// pages/page.tsx

import React from 'react';
import GetWeather from '../components/GetWeather';

const Page: React.FC = () => {
  return (
    <div>
      <h1>Weather Forecast</h1>
      <GetWeather />
    </div>
  );
};

export default Page;
