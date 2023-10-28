import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cluster() {
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
    return (
        <>
        <form>
            <input
            type='text'
            name='cluster'
            placeholder='ENTER YOUR CLUSTER'
            />
            <br />
            <button>
                ENTER
            </button>
        </form>

        </>
    )
}