import React, { useEffect, useState, useLayoutEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Prom() {
    const [cluster, setCluster] = useState('')
    const navigate = useNavigate()

    useLayoutEffect(() => {
        async function verifyToken() {
          const response = await fetch('/user/auth');
          if (response.status !== 202) {
            navigate('/');
          }
        }
        verifyToken();
      }, []);
      

    return (
        <main className='p-8 bg-slate-300 border-slate-500 border-2 rounded-lg'>
        <form className='space-y-3'>
            <label>Prometheus Address <br /></label>
            <input
            type='text'
            name='cluster'
            placeholder='ex: http://localhost:9090'
            onChange={(e) => {setCluster(e.target.value)}}
            />
            <br />
            <Link
            className='border-slate-500 border-1 rounded-lg bg-slate-200'
            name='enterCluster'
            type='submit'
            to={'/Dashboard'}
            state={{promAddress: cluster}}
            >
                ENTER
            </Link>
        </form>
        <Link to="/dashboard">to dashboard</Link>
        </main>
    )
}