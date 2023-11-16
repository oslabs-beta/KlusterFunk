import { useState, useEffect } from 'react';

const PromAddress = ({ setPromAddress }) => {
    const [cluster, setCluster] = useState('')

    // On mount, checks sessionStorage for a prometheus key value pair. If there is one, immediately setPromAddress state to the value of that
    useEffect(() => {
        if (sessionStorage.getItem('prometheus')) {
            setPromAddress(sessionStorage.getItem('prometheus'))
        }
    }, [])

    return (
        <main className='flex flex-col items-center justify-center h-screen'>
          <label htmlFor='prometheus' className='mb-2 text-xl font-bold'>
            Prometheus Address
          </label>
          <input
            type='text'
            id='prometheus'
            name='prometheus'
            placeholder='ex: http://localhost:9090'
            onChange={(e) => { setCluster(e.target.value) }}
            className='border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full max-w-sm'
          />
          <button
            className='border border-slate-500 border-1 rounded-lg bg-slate-200 text-lg px-6 py-3'
            name='enterCluster'
            type='button'
            onClick={() => { 
                setPromAddress(cluster)
                sessionStorage.setItem('prometheus', `${cluster}`)
             }}
          >
            ENTER
          </button>
        </main>
      );
}

export default PromAddress;