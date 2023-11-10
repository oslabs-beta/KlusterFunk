import React, { useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors,
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

export default function LineGraph({
  graphTitle,
  metricStore,
  timeLabels,
  dataLabel,
}) {
  const labels = [];
  for (let i = 0; i < metricStore.length; i++) {
    if (metricStore[i][0] === '-') continue;
    else {
      let time = new Date(metricStore[i][0] * 1000);
      time = time.toTimeString().slice(0, 8);
      labels.push(time);
    }
    // console.log('label time: ', metric[i][0]);
  }
  // console.log(labels);

  const dataArr = [];
  for (let i = 0; i < metricStore.length; i++) {
    if (metricStore[i][0] === '-') continue;
    dataArr.push(metricStore[i][1]);
  }
  // console.log(dataArr);

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
        label: dataLabel,
        data: dataArr,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return <Line className='h-12 w-16' options={options} data={data} />;
}
