import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
  const [metricStore, setMetricStore] = useState({
    bytesInValue: 'a',
    bytesOutValue: 'a',
    cpuValue: 'a',
    ramValue: 'a',
    totalReqCon: 'a',
  })
  const [user, setUser] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const { promAddress } = location.state
  console.log(promAddress)

  useLayoutEffect(() => {
      async function verifyToken() {
        const res = await fetch('/user/auth');
        if (!res.ok) {
          throw Error('failed to authenticate user')
        }
        if (res.status !== 202) {
          navigate('/');
        }
        const { username } = await res.json()
        setUser(username)
      }
      verifyToken();
    }, []);

  useEffect(() => {
    const endPoint = `/metrics?promAddress=${promAddress}` 

    const interval = setInterval(async () => {
      const res = await fetch(endPoint)
      if (!res.ok) {
        throw Error('failed to fetch at updating cluster')
      }
      const metrics = await res.json()
      setMetricStore({...metricStore, metrics})
    }, 3000)
    
    return () => clearInterval(interval)
  }, [metricStore])

  return (
    <main className='fixed inset-0 flex flex-col bg-slate-300 border-slate-500 border-2 rounded-lg'>
      <nav className='bg-white p-4 flex space-x-4 rounded-lg my-2 justify-between'>
        <div>Cluster: {promAddress}</div>
        <div>Hello, {user}!</div>
      </nav>
      <div className='bg-white flex-grow flex-col flex items-center justify-center rounded-lg'>
        <div><h1>Active Broker Count: </h1></div>
        <Link to='/dashboard'>DASHBOARD</Link>
      </div>
    </main>
  );
}
