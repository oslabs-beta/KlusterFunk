import { Link, useLocation, useNavigate } from "react-router-dom"
import { Avatar, Dropdown, Navbar, Button } from "flowbite-react";
import useScroll from "../Hooks/useScroll.jsx"

const Nav = ({ promAddress, user, signout, refs }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const scroll = useScroll();

    return (
        <Navbar fluid rounded>
            <Navbar.Brand href='/'>
                <img src='src\assets\grape.png' className="mr-3 h-6 sm:h-9" />
            </Navbar.Brand>
            {location.pathname === '/dashboard' && (<div>Prometheus: {promAddress}</div>)}
            {user && (
                // <>
                // <div>Hello, {user}!</div>
                // <button type='button' onClick={() => { signout() }}>Signout</button>
                // </>
                <div className="flex md:order-2">
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                  }
                >
                  <Dropdown.Header>
                    <span className="block text-sm">Hello, {user}!</span>
                  </Dropdown.Header>
                  <Dropdown.Item onClick={() => navigate('/dashboard')} >Dashboard</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={() => signout()}>Sign out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
              </div>
            )}
            <Navbar.Collapse>
            {location.pathname === '/' && (
                <>
                {/* <Link to='#' onClick={() => {scroll(refs.featuresRef)}}>Features</Link>
                <Link to='#' onClick={() => {scroll(refs.aboutMeRef)}}>Contact us</Link> */}
                <Navbar.Link href="#" onClick={() => {scroll(refs.featuresRef)}}>About</Navbar.Link>
                <Navbar.Link href="#" onClick={() => {scroll(refs.aboutMeRef)}}>Contact</Navbar.Link>
                </>
            )}
            {!user && (<Button pill className='bg-fuchsia-950 hover:bg-fuchsia-800' onClick={() => navigate('/login')}>Login</Button>)}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Nav;