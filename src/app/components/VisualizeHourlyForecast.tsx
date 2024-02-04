import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface HourlyForecast {
  properties: {
    periods: Array<{
      number: number;
      startTime: string;
      temperature: number;
      temperatureUnit: string;
      probabilityOfPrecipitation: { unitCode: string; value: number };
      shortForecast: string;
    }>;
  };
}

const VisualizeHourlyForecast: React.FC<{ forecast: HourlyForecast }> = ({ forecast }) => {
  const labels = forecast.properties.periods.slice(0, 36).map(period => new Date(period.startTime).toLocaleTimeString());

  const data = {
    labels,
    datasets: [
      {
        label: 'Temperature (°F)',
        data: forecast.properties.periods.slice(0, 36).map(period => period.temperature),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Precipitation Probability (%)',
        data: forecast.properties.periods.slice(0, 36).map(period => period.probabilityOfPrecipitation.value),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1',
      },
    ],
  };

  const options = {
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
          drawOnChartArea: false, // only want the grid lines for one axis to show up
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