import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = [0, 10, 5, 2, 20, 30, 45, 34, 37, 45, 40];

const data = {
  labels: labels,
  datasets: [
    {
      data: [0, 10, 5, 2, 20, 30, 45, 34, 37, 45, 40],
    },
    {
      data: [30, 45, 34, 37, 10, 5, 2, 20, 45, 40, 0],
    },
  ],
};

const LineChart = () => {
  return (
      <Line data={data} />
  );
};

export default LineChart;