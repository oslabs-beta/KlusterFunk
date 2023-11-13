import { useState } from 'react';

import useAuthenticate from '../Hooks/useAuthenticate.jsx';
import LineGraph from '../component/LineGraph.jsx';
import PromAddress from '../component/PromAddress.jsx';
import Navbar from '../component/Navbar.jsx';
import useMetricStore from '../Hooks/useMetricStore.jsx';

const Dashboard = () => {
  const [user, setUser] = useState('');
  const [ signout ] = useAuthenticate(setUser);
  const [promAddress, setPromAddress] = useState(null)
  const [metricStore, resetMetricStore] = useMetricStore(promAddress);

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

  return (
    <main className='fixed inset-0 flex flex-col bg-slate-300 border-slate-500 border-2 rounded-lg'>
      <Navbar promAddress={promAddress} user={user} signout={signout}/>
      <div className='overflow-y-auto bg-white items-center justify-center rounded-lg'>
        {promAddress && (
        <>
          <h1>Active Broker Count: {metricStore.brokerCount[1]}</h1>
          <button type='button' onClick={resetMetricStore} >reset</button>
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

export default Dashboard;