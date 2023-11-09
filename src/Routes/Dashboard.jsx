import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LineGraph from '../component/LineGraph.jsx';
import PromAddress from '../component/PromAddress.jsx';
import Navbar from '../component/Navbar.jsx';

export default function Dashboard() {
  const [metricStore, setMetricStore] = useState({
    bytesIn: [
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
    ],
    bytesOut: [
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
    ],
    cpuUsage: [
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
    ],
    brokerCount: [
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
    ],
  });
  const [user, setUser] = useState('');
  const [promAddress, setPromAddress] = useState(null)

  const navigate = useNavigate();

  const graphArray = [];
  for (let i in metricStore) {
    graphArray.push(
      <LineGraph
        metricStore={metricStore[i]}
        graphTitle={i}
        dataLabel={i}
        timeLabels={metricStore[i]}
      />
    );
  }

  useLayoutEffect(() => {
    async function verifyToken() {
      const res = await fetch('/user/auth');
      if (res.status === 401) {
        return navigate('/login');
      }
      if (!res.ok) {
        throw Error('failed to authenticate user');
      }
      const { username } = await res.json();
      setUser(username);
    }
    verifyToken();
  }, []);

  useEffect(() => {
    const endPoint = `/metrics/default?promAddress=${promAddress}`;

    const interval = setInterval(async () => {
      const res = await fetch(endPoint);
      if (!res.ok) {
        throw Error('failed to fetch at updating cluster');
      }
      const metrics = await res.json();
      const newStore = { ...metricStore };

      newStore.bytesIn = newStore.bytesIn.slice(1);
      newStore.bytesIn.push(metrics.bytesIn);
      newStore.bytesOut = newStore.bytesOut.slice(1);
      newStore.bytesOut.push(metrics.bytesOut);
      newStore.cpuUsage = newStore.cpuUsage.slice(1);
      newStore.cpuUsage.push(metrics.cpuUsage);

      setMetricStore(newStore);
    }, 2000);

    return () => clearInterval(interval);
  }, [metricStore]);

  const graphTitle = 'Throughput';
  return (
    <main className='fixed inset-0 flex flex-col bg-slate-300 border-slate-500 border-2 rounded-lg'>
      <Navbar promAddress={promAddress} user={user}/>
      <div className='overflow-y-auto bg-white items-center justify-center rounded-lg'>
        {promAddress && (
        <>
        <div>
          {/* <h1>Active Broker Count: {metricStore.brokerCount}</h1> */}
        </div>
        {graphArray}
        </>
        )}
        {!promAddress && (
          <PromAddress setPromAddress={setPromAddress}/>
        )}
      </div>
    </main>
  );
}

