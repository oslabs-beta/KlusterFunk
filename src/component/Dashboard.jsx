import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
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
        <div>in dashboard</div>
        </>
    )
}