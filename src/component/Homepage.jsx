import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom"

export default function Homepage() {
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
        <main>
        <nav>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/login'>Login</Link>
        </nav>
        <Link to='/cluster'>enter your cluster</Link>
        </main>
    )
}