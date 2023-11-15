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

const LineGraph = ({
  graphTitle,
  metricStore,
  timeLabels,
  dataLabel,
}) => {
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
  ChartJS.defaults.backgroundColor = '#9BD0F5';
  ChartJS.defaults.borderColor = '#36A2EB';
  ChartJS.defaults.color = '#000';

  const options = {
    responsive: true,
    plugins: {
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
        borderColor: '#520049',
        backgroundColor: '#520049',
      },
    ],
  };

  return <Line className='h-12 w-16 font-bold text-yellow-500' options={options} data={data} />;
}

export default LineGraph;
