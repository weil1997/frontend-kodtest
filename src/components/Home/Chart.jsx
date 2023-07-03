import { Bar } from 'react-chartjs-2';

function Chart({ chartData, isLoading, error, tooltipOptions }) {
  return (
    <div>
      <p className='font-bold text-[#a4aabd] mt-5'>NEW ARR PER MONTH</p>
      {isLoading ? (
        <p>Loading chart...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <Bar
          data={chartData}
          options={{ responsive: true, plugins: { tooltip: tooltipOptions } }}
        />
      )}
    </div>
  );
}

export default Chart;
