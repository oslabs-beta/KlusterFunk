import { Link } from "react-router-dom"
import { useState } from "react"

export default function Login() {
    const [auth, setAuth] = useState('login')
    function handleSubmit() {

    }
    return (
        <main>
        <form onSubmit={handleSubmit}>
            <input 
            className='username'
            type='text'
            name='username'
            placeholder='Username'
            autoComplete='off'
            />
            <br />
            <input 
            type='password'
            name='password'
            placeholder='Password'
            />
            <br />
            <button 
            id='login' 
            className='primary' 
            type='submit'
            >
            Login
            </button>
            <button
            id='signup'
            className='primary'
            type='button'
            onClick={() => {setAuth('signup')}}
            >
            Signup
            </button>
        </form>
        <Link to='/'>back to homepage</Link>
        </main>
    )
}