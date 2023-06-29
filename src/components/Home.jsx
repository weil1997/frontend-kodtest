import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

// create options that hides x and y lines and the y line labels
const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
    },
  },
};

function Home() {
  const [revenue, setRevenue] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [totalArr, setTotalArr] = useState(0);
  const [totalSeats, setTotalSeats] = useState(0);

  useEffect(() => {
    fetch("https://startdeliver-mock-api.glitch.me/report")
      .then((response) => response.json())
      .then((data) => {
        setTotalArr(data.data.reduce((acc, item) => acc + item.arr, 0));
        setTotalSeats(data.data.reduce((acc, item) => acc + item.seats, 0));
        setChartData({
          labels: data.data.map((item) => item.month),
          datasets: [
            {
              data: data.data.map((item) => item.arr),
              backgroundColor: "#2050fe",
              borderColor: "#2050fe",
              borderWidth: 1,
              borderRadius: 5,
            },
          ],
        });
      })
      .catch((error) => {
        console.error("Error fetching revenue:", error);
      });
  }, []);

  useEffect(() => {
    console.log(revenue);
  }, [revenue]);

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold">Home</h1>
      <div className="flex">
        {/* ARR */}
        <div className="w-1/2">
          <p className="font-bold text-[#a4aabd]">ARR</p>
          <p className="font-bold text-4xl">{totalArr}</p>
        </div>
        {/* Seats */}
        <div className="w-1/2">
          <p className="font-bold text-[#a4aabd]">SEATS</p>
          <p className="font-bold text-4xl">{totalSeats}</p>
        </div>
      </div>
      <p className="font-bold text-[#a4aabd] mt-5">NEW ARR PER MONTH</p>
      {chartData && <Bar data={chartData} options={options} />}
    </div>
  );
}

export default Home;
