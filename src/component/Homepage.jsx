import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Homepage() {
    const [auth, setAuth] = useState(true)

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
        <main className='fixed inset-0 flex flex-col bg-slate-300 border-slate-500 border-2 rounded-lg'>
        <nav className="bg-white p-4 flex space-x-4 rounded-lg my-2 justify-between">
            <Link to='/dashboard/demo'>DEMO</Link>
            <Link to='/login'>Login</Link>
        </nav>
        <div className="bg-white flex-grow flex-col flex items-center justify-center rounded-lg">
            <p>Welcome message here</p>
            <Link to='/dashboard'>DASHBOARD</Link>
        </div>
        </main>
    )
}