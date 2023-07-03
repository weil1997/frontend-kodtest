import React, { useEffect, useState } from 'react';
import ChartComponent from './Chart.jsx';
import HomeHeader from './HomeHeader.jsx';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js';
import {
  fetchData,
  abbreviateNumber,
  convertDateFormat,
  formatNumberWithThousandsSeparator,
} from '../../utils';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

function Home() {
  const [chartData, setChartData] = useState(null);
  const [totalArr, setTotalArr] = useState('Loading ...');
  const [totalSeats, setTotalSeats] = useState('Loading ...');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      try {
        const data = await fetchData(
          'https://startdeliver-mock-api.glitch.me/report'
        );
        const totalArrValue = abbreviateNumber(
          data.data.reduce((acc, item) => acc + item.arr, 0)
        );
        const totalSeatsValue = formatNumberWithThousandsSeparator(
          data.data.reduce((acc, item) => acc + item.seats, 0)
        );
        const chartDataValue = {
          labels: data.data.map((item) => convertDateFormat(item.month)),
          datasets: [
            {
              data: data.data.map((item) => item.arr),
              backgroundColor: '#2050fe',
              borderColor: '#2050fe',
              borderWidth: 1,
              borderRadius: 5,
            },
          ],
        };

        setTotalArr(totalArrValue);
        setTotalSeats(totalSeatsValue);
        setChartData(chartDataValue);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching revenue:', error);
        setError('Error fetching revenue');
      }
    };

    fetchDataAndSetState();
  }, []);

  const tooltipOptions = {
    callbacks: {
      label: (context) => formatNumberWithThousandsSeparator(context.parsed.y),
    },
  };

  return (
    <div>
      <HomeHeader totalArr={totalArr} totalSeats={totalSeats} />
      <ChartComponent
        chartData={chartData}
        isLoading={isLoading}
        error={error}
        tooltipOptions={tooltipOptions}
      />
    </div>
  );
}

export default Home;
