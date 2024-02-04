import React, { useEffect, useState } from 'react';
import getHourlyForecast from '../utils/getHourlyForecast';
import { Chart as ChartJS, ChartOptions, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const VisualizeHourlyForecast: React.FC<{ forecastUrl: string }> = ({ forecastUrl }) => {
  const [forecastData, setForecastData] = useState<any>(null);

  useEffect(() => {
    const fetchForecast = async () => {
      if (!forecastUrl) return;
      const data = await getHourlyForecast(forecastUrl);
      setForecastData(data);
    };

    fetchForecast();
  }, [forecastUrl]);

  if (!forecastData) {
    return <div>Loading hourly forecast...</div>;
  }

  // Assuming forecastData follows the structure you provided earlier
  const labels = forecastData.properties.periods.slice(0, 36).map((period: { startTime: string | number | Date; }) => new Date(period.startTime).toLocaleTimeString());

  const data = {
    labels,
    datasets: [
      {
        label: 'Temperature (°F)',
        data: forecastData.properties.periods.slice(0, 36).map((period: { temperature: any; }) => period.temperature),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Precipitation Probability (%)',
        data: forecastData.properties.periods.slice(0, 36).map((period: { probabilityOfPrecipitation: { value: any; }; }) => period.probabilityOfPrecipitation.value),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1',
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };
  

  return (
    <div>
      <h2>Hourly Forecast Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default VisualizeHourlyForecast;
