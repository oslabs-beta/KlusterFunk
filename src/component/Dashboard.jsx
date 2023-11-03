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
  } from 'chart.js';
  

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Throughput',
      },
    },
  };

export default function Dashboard() {
  // const query
  const [user, setUser] = useState('');
  const [auth, setAuth] = useState(false);
  const [brokerNum, setbrokerNum] = useState(undefined);
  const [bytesIn, setBytesIn] = useState(undefined);
  const [bytesOut, setBytesOut] = useState(undefined);

  const getBrokerCount = () => {
    setInterval(async () => {
        const response = await fetch('http://localhost:9090/api/v1/query?query=kafka_controller_kafkacontroller_activebrokercount')
        const result = await response.json();
        setbrokerNum(result.data.result[0].value[1]);
    }, 5000);
  }
  getBrokerCount();

  const getBytesInMetrics = () => {
    setInterval(async () => {
        const response = await fetch('http://localhost:9090/api/v1/query?query=kafka_server_brokertopicmetrics_bytesin_total')
        const result = await response.json();
        setBytesIn(result.data.result[0].value[1]);
    }, 5000);
  }
  getBytesInMetrics();

  const getBytesOutMetrics = () => {
    setInterval(async () => {
        const response = await fetch('http://localhost:9090/api/v1/query?query=kafka_server_brokertopicmetrics_bytesout_total')
        const result = await response.json();
        setBytesOut(result.data.result[0].value[1]);
    }, 5000);
  }
  getBytesOutMetrics();

  const labels = ['14:00', '14:05', '14:10', '14:15'];
  
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

  const navigate = useNavigate();
  const time = Date.now();
  const iframeLink =
    'http://localhost:3000/d-solo/b8619a0c-56ed-4f2c-9a99-815480c55442/new-dashboard?orgId=1&refresh=5s&from=1698703993263&panelId=1';
  const iframeLink1 = `http://localhost:3000/d-solo/e611d801-c4f2-4fa1-ac24-f6c2aef62993/test?orgId=1&refresh=5s&from=${time}&panelId=1`;
  // 1698682670152
  // useLayoutEffect(() => {
  //     async function verifyToken() {
  //       const response = await fetch('/user/auth');
  //       if (response.status !== 202) {
  //         navigate('/');
  //       }
  //     }
  //     verifyToken();
  //   }, []);

  return (
    <main className='fixed inset-0 flex flex-col bg-slate-300 border-slate-500 border-2 rounded-lg'>
      <nav className='bg-white p-4 flex space-x-4 rounded-lg my-2 justify-between'>
        <div>Cluster: </div>
        <div>Hello, {user}</div>
      </nav>
      <div className='bg-white flex-grow flex-col flex items-center justify-center rounded-lg'>
        <div><h1>Active Broker Count: {brokerNum}</h1></div>
        <div className='w-3/5 h-4/5'><Line options={options} data={data} /></div>
        {/* <iframe src={iframeLink} width='400' height='200'></iframe>
        <iframe src={iframeLink1} width='400' height='200'></iframe> */}
        <Link to='/dashboard'>DASHBOARD</Link>
      </div>
    </main>
  );
}
