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

// creating line graphs using chartjs by utilizing data from our metric fetching
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
  }


  const dataArr = [];
  for (let i = 0; i < metricStore.length; i++) {
    if (metricStore[i][0] === '-') continue;
    dataArr.push(metricStore[i][1]);
  }


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
