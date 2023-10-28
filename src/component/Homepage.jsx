<<<<<<< HEAD
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Homepage() {
    const [auth, setAuth] = useState(true)


    return (
        <main className='fixed inset-0 flex flex-col bg-slate-300 border-slate-500 border-2 rounded-lg'>
        <nav className="bg-white p-4 flex space-x-4 rounded-lg my-2 justify-between">
            <Link to='/dashboard/demo'>DEMO</Link>
=======
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
>>>>>>> 0277970d55b4bf951c781adc67d2ee582bd1d827
            <Link to='/login'>Login</Link>
        </nav>
        <div className="bg-white flex-grow flex-col flex items-center justify-center rounded-lg">
            <p>Welcome message here</p>
            <Link to='/dashboard'>DASHBOARD</Link>
        </div>
        </main>
    )
}