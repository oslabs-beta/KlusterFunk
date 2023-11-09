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

import PromAddress from '../component/PromAddress.jsx';
import Navbar from '../component/Navbar.jsx';

export default function Dashboard() {
  const [metricStore, setMetricStore] = useState({
    bytesInValue: 'a',
    bytesOutValue: 'a',
    cpuValue: 'a',
    ramValue: 'a',
    totalReqCon: 'a',
  })
  const [user, setUser] = useState('');
  const [promAddress, setPromAddress] = useState(null)
  const navigate = useNavigate();
  const location = useLocation();


  useLayoutEffect(() => {
      async function verifyToken() {
        const res = await fetch('/user/auth');
        if (res.status === 401) {
          return navigate('/login');
        }
        if (!res.ok) {
          throw Error('failed to authenticate user')
        }
        const { username } = await res.json()
        setUser(username)
      }
      verifyToken();
    }, []);

  // useEffect(() => {
  //   const endPoint = `/metrics/default?promAddress=${promAddress}` 

  //   const interval = setInterval(async () => {
  //     const res = await fetch(endPoint)
  //     if (!res.ok) {
  //       throw Error('failed to fetch at updating cluster')
  //     }
  //     const metrics = await res.json()
  //     setMetricStore({...metricStore, ...metrics})
  //   }, 3000)
    
  //   return () => clearInterval(interval)

  // }, [metricStore])

  return (
    <main className='fixed inset-0 flex flex-col bg-slate-300 border-slate-500 border-2 rounded-lg'>
      <Navbar promAddress={promAddress} user={user}/>
      <div className='bg-white flex-grow flex-col flex items-center justify-center rounded-lg'>
        {!promAddress && (
          <PromAddress setPromAddress={setPromAddress}/>
        )}
      </div>
    </main>
  );
}
