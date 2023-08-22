"use client";
import React, { useRef } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
  ChartData,
} from "chart.js";

import { Line, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);

type Props = {};

export const LineChart = (props: Props) => {
  const labels: string[] = ["zakir", "hussain", "shireen", "sultana"];
  const data = {
    labels,
    datasets: [
      {
        label: "Views",
        data: [1, 2, 3, 4],
        borderColor: "rgb(107, 70, 193, 0.5)",
        backgroundColor: "#cb46c1",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: "Yearly Views",
      },
    },
  };
  return <Line options={options} data={data} />;
};

export const DoughnutChat = (props: Props) => {
  const labels: string[] = ["zakir", "hussain", "shireen", "sultana"];
  const data = {
    labels: ["Subcribed, Not Subscribed"],
    datasets: [
      {
        label: "Subscriptions",
        data: [3, 20],
        borderColor: ["rgb(62,12,171)", "rgb(214,43,129)"],
        backgroundColor: ["rgba(62,12,171,0.3)", "rgba(214,43,129,0.3)"],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
};
