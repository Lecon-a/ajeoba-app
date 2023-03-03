import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Today",
      data: [45, 34, 23, 54, 34, 26, 44],
      borderWidth: 3,
      borderColor: "rgba(100, 100, 200, 0.5)",
      backgroundColor: "rgba(100, 100, 250, 0.5)",
      tension: 0.5,
      fill: true,
    },
    {
      label: "Yesterday",
      data: [45, 54, 34, 26, 34, 23, 44],
      borderWidth: 3,
      borderColor: "rgba(150, 150, 150, 0.25)",
      backgroundColor: "rgba(150, 150, 150, 0.25)",
      tension: 0.5,
      fill: true,
    },
  ],
};

const LineChart = () => {
  return (
    <>
      <Line data={data} />
    </>
  );
};

export default LineChart;
