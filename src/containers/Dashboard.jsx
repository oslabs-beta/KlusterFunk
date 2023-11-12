import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LineGraph from '../component/LineGraph.jsx';
import PromAddress from '../component/PromAddress.jsx';
import Navbar from '../component/Navbar.jsx';
import useMetricStore from '../Hooks/metricStore.jsx';

export default function Dashboard() {
  const [user, setUser] = useState('');
  const [promAddress, setPromAddress] = useState(null)

  const [metricStore, resetMetricStore] = useMetricStore(promAddress);
  const navigate = useNavigate();

  const graphArray = [];
  for (let i in metricStore) {
    if (i === 'brokerCount') continue;
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

  return (
    <main className='fixed inset-0 flex flex-col bg-slate-300 border-slate-500 border-2 rounded-lg'>
      <Navbar promAddress={promAddress} user={user}/>
      <div className='overflow-y-auto bg-white items-center justify-center rounded-lg'>
        {promAddress && (
        <>
          <h1>Active Broker Count: {metricStore.brokerCount[1]}</h1>
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

