import { useState } from 'react';

const PromAddress = ({ setPromAddress }) => {
    const [cluster, setCluster] = useState('')

    return (
        <main 
        className='space-y-3'
        >
            <label>Prometheus Address <br /></label>
            <input
            type='text'
            name='prometheus'
            placeholder='ex: http://localhost:9090'
            onChange={(e) => {setCluster(e.target.value)}}
            />
            <br />
            <button
            className='border-slate-500 border-1 rounded-lg bg-slate-200'
            name='enterCluster'
            type='button'
            onClick={() => {setPromAddress(cluster)}}
            >
                ENTER
            </button>
        </main>
    )
}

export default PromAddress;