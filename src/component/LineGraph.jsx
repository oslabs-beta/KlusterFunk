import React, { useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Colors } from 'chart.js';
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
  

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors
);



export default function LineGraph({graphTitle, metricStore, timeLabels }) {
  const labels = ['14:00', '14:05', '14:10', '14:15'];
  const {bytesIn, bytesOut, cpuUsage} = metricStore;

  const options = {
    responsive: true,
    plugins: {
      colors: { forceOverride: true },
      legend: { position: 'top' },
      title: { 
        display: true,
        text: graphTitle,
      },
    },
  };
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Bytes In',
        data: labels.map(() => bytesIn),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Bytes Out',
        data: labels.map(() => bytesOut),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  
  return (
    <Line options={options} data={data} />
  )
}