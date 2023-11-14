import { useLocation, useNavigate } from 'react-router-dom';
import { Avatar, Dropdown, Navbar, Button } from 'flowbite-react';
import useScroll from '../Hooks/useScroll.jsx';
import useDarkMode from '../Hooks/useDarkMode.jsx';

const Nav = ({ promAddress, user, signout, refs, reset }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const scroll = useScroll();
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <Navbar className='sticky top-0 z-50 bg-fuchsia-600 rounded' fluid rounded>
      <Navbar.Brand href='/'>
        <img src='src\assets\grape.png' className='w-12' />
      </Navbar.Brand>
      {location.pathname === '/dashboard' && (
        <div>Prometheus: {promAddress}</div>
      )}
      {user && (
        // <>
        // <div>Hello, {user}!</div>
        // <button type='button' onClick={() => { signout() }}>Signout</button>
        // </>
        <div className='flex md:order-2'>
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt='User settings' rounded />}
          >
            <Dropdown.Header>
              <span className='block text-sm'>Hello, {user}!</span>
            </Dropdown.Header>
            <Dropdown.Item onClick={() => navigate('/dashboard')}>
              Dashboard
            </Dropdown.Item>
            <Dropdown.Item onClick={() => toggleDarkMode()}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </Dropdown.Item>
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
            <Navbar.Link
              href='#'
              onClick={() => {
                scroll(refs.featuresRef);
              }}
            >
              About
            </Navbar.Link>
            <Navbar.Link
              href='#'
              onClick={() => {
                scroll(refs.aboutMeRef);
              }}
            >
              Contact
            </Navbar.Link>
          </>
        )}
        {!user && (
          <Button
            pill
            className='bg-fuchsia-950 hover:bg-fuchsia-800'
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
        )}
        {location.pathname === '/dashboard' && (
          <div>Prometheus: {promAddress}</div>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
