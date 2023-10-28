import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Cluster() {
    const [cluster, setCluster] = useState('')
    const [isDisabled, setIsDisabled] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        async function verifyToken() {
          const response = await fetch('/user/auth');
          if (response.status !== 202) {
            navigate('/');
          }
        }
        verifyToken();
      }, []);
      
    const clusterEndPoint = `/`
    const submitCluster = async () => {
        const res = await fetch(clusterEndPoint, {
            method: 'POST',
            body: JSON.stringify({
                cluster: cluster,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (!res.ok) {
            throw new Error('failed to fetch at cluster')
        }

        if (res.status === 200) navigate('/dashboard')
    }

    return (
        <main className='p-8 bg-slate-300 border-slate-500 border-2 rounded-lg'>
        <form className='space-y-3'>
            <label>ENTER YOUR CLUSTER <br /></label>
            <input
            type='text'
            name='cluster'
            placeholder='ex: http://localhost:9090'
            onSubmit={submitCluster}
            onChange={(e) => {setCluster(e.target.value)}}
            />
            <br />
            <button
            className='border-slate-500 border-1 rounded-lg bg-slate-200'
            name='enterCluster'
            type='submit'
            disabled={isDisabled}
            onClick={() => setIsDisabled(true)}
            >
                ENTER
            </button>
        </form>
        <Link to="/dashboard">to dashboard</Link>
        </main>
    )
}