import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function TestCompleteForm() {
  let location = useLocation();
  let { leftSideHearingResults, rightSideHearingResults } = location.state;

  // Convert object values to arrays for chart data
  const frequencies = Object.keys(leftSideHearingResults); // Extract frequencies as labels
  const leftResults = Object.values(leftSideHearingResults); // Left ear data
  const rightResults = Object.values(rightSideHearingResults); // Right ear data

  // Prepare chart data
  const data = {
    labels: frequencies, // Use frequency keys as labels (250hz, 500hz, etc.)
    datasets: [
      {
        label: "Left Ear",
        data: leftResults, // Data for left ear results
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Right Ear",
        data: rightResults, // Data for right ear results
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Hearing Test Results by Frequency",
      },
    },
  };

  return (
    <div className=" min-h-screen flex flex-col items-center justify-center m-4">
      <div className="flex items-center"> 
        <h2>Test Complete! Here are the results:</h2>
        <Link to={'/testing'}><button className="px-4 py-2 bg-purple-400 ml-8 text-white">Home</button></Link>
        <Link to={'/test'}><button className="px-4 py-2 bg-purple-400 ml-8 text-white">Test Again</button></Link>
      </div>

      <Bar data={data} options={options} />
    </div>
  );
}

export default TestCompleteForm;
