import React, { useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";
Chart.register(CategoryScale);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    labels: [
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
    ],
    datasets: [
      {
        label: "Chats",
        data: [30, 45, 35, 40, 30, 42, 34, 43, 45, 40, 38, 40, 38, 35],
        barThickness: 8,
        borderRadius: 1000,
        backgroundColor: [
          "#E4E4E7",
          "#E4E4E7",
          "#E4E4E7",
          "#E4E4E7",
          "#E4E4E7",
          "#E4E4E7",
        ],
        hoverBackgroundColor: "#4F46E5",
      },
    ],
  });
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        borderWidth: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div>
      <div className="flex justify-between mt-1 mb-12">
        <h1 className="text-base font-bold text-dark-heading">Charts Started</h1>
        <div>
          <select className="border border-[#E4E4E7] rounded-md p-2 outline-none cursor-pointer">
            <option>Last 7 Days</option>
            <option>Last Month</option>
            <option>Last Year</option>
          </select>
        </div>
      </div>
      <div className="h-60">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
