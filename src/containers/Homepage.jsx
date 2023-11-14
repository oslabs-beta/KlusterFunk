import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

import useAuthenticate from '../Hooks/useAuthenticate.jsx';
import Nav from '../component/Navbar.jsx';

const Homepage = () => {
  const [user, setUser] = useState('');
  const [signout] = useAuthenticate(setUser);
  const featuresRef = useRef(null);
  const aboutMeRef = useRef(null);

  const refs = {
    featuresRef: featuresRef,
    aboutMeRef: aboutMeRef,
  };

  return (
    <main className='h-screen w-fit flex flex-col bg-fuchsia-600 rounded-lg'>
      <Nav user={user} signout={signout} refs={refs} />
      <div className='space-y-4 p-2 max-h-screen overflow-y-auto'>
        <section
          ref={featuresRef}
          id='features'
          className='bg-fuchsia-200 flex-col flex items-center justify-center rounded-lg'
        >
          <img className='w-2/4' src='src/assets/klusterfunklogo2.png' />
          <p className='text-lg'>
            Klusterfunk is a web-based GUI for monitoring Kafka metrics
          </p>
        </section>
        <section
          ref={aboutMeRef}
          id='about-me'
          className='bg-fuchsia-200 flex-col flex items-center justify-center rounded-lg'
        >
          <div className='text-4xl text-slate-800' to='#'>
            MEET THE TEAM
          </div>
          <div className='w-full py-2 px-4'>
            <section className='flex justify-center'>
              <div className='flex flex-col justify-center mx-8 px-8'>
                <p className='text-lg'>David Tezza</p>
                <img src='src/assets/davidpic.png'></img>{' '}
                <div className='flex justify-center'>
                  <a className='mr-2' href='https://github.com/dtezz'>
                    <img
                      className='w-10'
                      src='src/assets/github-mark/github-mark.png'
                      href
                    />
                  </a>
                  <a
                    className='mt-1 ml-2'
                    href='https://www.linkedin.com/in/david-tezza/'
                  >
                    <img
                      className='w-10'
                      src='src/assets/LinkedIn-Logos/LI-In-Bug.png'
                    />
                  </a>
                </div>
              </div>
              <div className='flex flex-col justify-center mx-8 px-8'>
                <p className='text-lg'>Wilson Wu</p>
                <img src='src/assets/davidpic.png'></img>{' '}
                <div className='flex justify-center'>
                  <a className='mr-2' href='https://github.com/jwu8475'>
                    <img
                      className='w-10'
                      src='src/assets/github-mark/github-mark.png'
                      href
                    />
                  </a>
                  <a
                    className='mt-1 ml-2'
                    href='https://www.linkedin.com/in/wilson-wu-4a821719a/'
                  >
                    <img
                      className='w-10'
                      src='src/assets/LinkedIn-Logos/LI-In-Bug.png'
                    />
                  </a>
                </div>
              </div>
              <div className='flex flex-col justify-center mx-8 px-8'>
                <p className='text-lg'>Connor Donahue</p>
                <img src='src/assets/connorpic.png'></img>{' '}
                <div className='flex justify-center'>
                  <a className='mr-2' href='https://github.com/conniedonahue'>
                    <img
                      className='w-10'
                      src='src/assets/github-mark/github-mark.png'
                      href
                    />
                  </a>
                  <a
                    className='mt-1 ml-2'
                    href='https://www.linkedin.com/in/connordonahue09/'
                  >
                    <img
                      className='w-10'
                      src='src/assets/LinkedIn-Logos/LI-In-Bug.png'
                    />
                  </a>
                </div>
              </div>
              <div className='flex flex-col justify-center mx-8 px-8'>
                <p className='text-lg'>Dominic Kenny</p>
                <img src='src/assets/dominicpic.png'></img>{' '}
                <div className='flex justify-center'>
                  <a className='mr-2' href='https://github.com/dominicjkenny'>
                    <img
                      className='w-10'
                      src='src/assets/github-mark/github-mark.png'
                      href
                    />
                  </a>
                  <a
                    className='mt-1 ml-2'
                    href='https://www.linkedin.com/in/dominicjkenny/'
                  >
                    <img
                      className='w-10'
                      src='src/assets/LinkedIn-Logos/LI-In-Bug.png'
                    />
                  </a>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Homepage;
