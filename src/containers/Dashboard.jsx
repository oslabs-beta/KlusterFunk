import { useState, useEffect } from 'react';
import LineGraph from '../component/LineGraph.jsx';
import PromAddress from '../component/PromAddress.jsx';
import Nav from '../component/Navbar.jsx';
import useMetricStore from '../Hooks/useMetricStore.jsx';
import useAuthenticate from '../Hooks/useAuthenticate.jsx';


const Dashboard = () => {
  const [ user, setUser ] = useState('');

  // created custom hook to modularize user authentication actions such as verifying user session and signout
  const [ signout ] = useAuthenticate(setUser);
  const [ promAddress, setPromAddress ] = useState(null);

  // created custom hook to modularize the current state of graphs so that the dashboard looks cleaner and metric state hook can be reuseable
  const [ metricStore, resetMetricStore ] = useMetricStore(promAddress);

  // pushing graph components into an array so it is easy to add more metrics
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
      <Nav promAddress={promAddress} user={user} signout={signout} reset={resetMetricStore}/>
      <div className='overflow-y-auto bg-white text-yellow-500 items-center justify-center rounded-lg'>
        {promAddress && (
          <>
          <h1 className=''>Active Broker Count: {metricStore.brokerCount[1]}</h1>
          <button type='button' onClick={resetMetricStore}>Reset</button>
          <div id='chart-container' className='flex flex-wrap justify-items-center justify-center w-full'>
            {graphArray.map((graph, index) => (
              <div key={index} className='w-full sm:w-4/6 p-2'>
                {graph}
              </div>
            ))}
          </div>
        </>
      )}
      {!promAddress && <PromAddress setPromAddress={setPromAddress} />}
    </div>
  </main>
);
}

export default Dashboard;
