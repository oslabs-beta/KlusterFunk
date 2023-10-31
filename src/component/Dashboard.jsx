import { useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    // const query
    const [user, setUser] = useState('')
    const [auth, setAuth] = useState(false)

    const navigate = useNavigate()
    const time = Date.now()
    const iframeLink = 'http://localhost:3000/d-solo/b8619a0c-56ed-4f2c-9a99-815480c55442/new-dashboard?orgId=1&refresh=5s&from=1698703993263&panelId=1'
    const iframeLink1 = `http://localhost:3000/d-solo/e611d801-c4f2-4fa1-ac24-f6c2aef62993/test?orgId=1&refresh=5s&from=${time}&panelId=1`
    // 1698682670152
    // useLayoutEffect(() => {
    //     async function verifyToken() {
    //       const response = await fetch('/user/auth');
    //       if (response.status !== 202) {
    //         navigate('/');
    //       }
    //     }
    //     verifyToken();
    //   }, []);

      
    return (
      <main className='fixed inset-0 flex flex-col bg-slate-300 border-slate-500 border-2 rounded-lg'>
      <nav className="bg-white p-4 flex space-x-4 rounded-lg my-2 justify-between">
          <div>Cluster: </div>
          <div>Hello, {user}</div>
      </nav>
      <div className="bg-white flex-grow flex-col flex items-center justify-center rounded-lg">
      <iframe src={iframeLink} width="400" height="200"></iframe>
      <iframe src={iframeLink1} width="400" height="200"></iframe>
          <Link to='/dashboard'>DASHBOARD</Link>
      </div>
      </main>
    )
}