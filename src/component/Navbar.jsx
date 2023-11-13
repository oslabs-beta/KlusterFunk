import { Link, useLocation } from "react-router-dom"

import useScroll from "../Hooks/useScroll.jsx"

const Navbar = ({ promAddress, user, signout, refs }) => {

    const location = useLocation();
    const scroll = useScroll();

    return (
        <nav className="bg-white p-4 flex space-x-4 rounded-lg my-2 justify-between">
            <Link to='/' preventScrollReset={true}>Home</Link>
            {location.pathname === '/' && (
                <>
                <Link to='#' onClick={() => {scroll(refs.featuresRef)}}>Features</Link>
                <Link to='#' onClick={() => {scroll(refs.aboutMeRef)}}>Team</Link>
                </>
            )}
            <Link to='http://google.com'>Blog</Link>
            {location.pathname === '/dashboard' && (<div>Prometheus: {promAddress}</div>)}
            {!user && (<Link to='/login'>Login</Link>)}
            {user && (
                <>
                <div>Hello, {user}!</div>
                <button type='button' onClick={() => { signout() }}>Signout</button>
                </>
            )}
        </nav>
    )
}

export default Navbar;