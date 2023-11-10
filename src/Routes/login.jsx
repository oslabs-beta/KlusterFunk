import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Login(props) {
    const [auth, setAuth] = useState('login')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [infoMatch, setInfoMatch] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        (confirmPassword.length > 0 && password !== confirmPassword) ? setInfoMatch('passwords do not match') : setInfoMatch('')
    }, [confirmPassword])

    // login or signup requested
    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginEndpoint = `/user/${auth}`
        
        if (password === confirmPassword || auth === 'login') {
            const res = await fetch(loginEndpoint, {
                method: 'POST',
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (!res.ok) {
                throw new Error('failed to fetch at auth')
            }
            if (res.status === 201 || res.status === 202) {
                navigate('/dashboard')
            }
        } 

    }

    return (
        <main className='p-8 bg-slate-300 border-slate-500 border-2 rounded-lg'>
        <form className='space-y-3' onSubmit={handleSubmit} 
        onChange={(e) => {
            switch (e.target.name) {
                case 'username':
                    setUsername(e.target.value);
                case 'password':
                    setPassword(e.target.value);
                case 'confirmPassword':
                    setConfirmPassword(e.target.value);
            }
        }}>
            <input 
            className='bg-slate-100 rounded'
            type='username'
            name='username'
            placeholder='Username'
            autoComplete='off'
            />
            <br />
            <input
            className='bg-slate-100 rounded'
            type='password'
            name='password'
            placeholder='Password'
            />
            <br />
            {auth === 'signup' && (
            <>
            <input
            className='bg-slate-100 rounded'
            type='password'
            name='confirmPassword'
            placeholder='Confirm password'
            /> 
            <br />
            <dd className="text-rose-500 text-xs">{infoMatch}<br /></dd>
            </>
            )}
            {auth === 'login' && (
            <button 
            id='login' 
            className='border-slate-500 border-1 rounded-lg bg-slate-200' 
            type='submit'
            >
            Login
            </button>
            )}
            <button
            id='signup'
            className='border-slate-500 border-1 rounded-lg bg-slate-200'
            type={auth === 'login' ? 'button' : 'submit'}
            onClick={() => {setAuth('signup')}}
            >
            Signup
            </button>
        </form>
        {auth === 'signup' && (
        <a 
        id='backtologin' 
        href='#' 
        onClick={() => setAuth('login')}>
            Or sign in 
            <br /></a>
        )}
        </main>
    )
}