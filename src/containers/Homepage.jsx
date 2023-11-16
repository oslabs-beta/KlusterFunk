import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import useAuthenticate from '../Hooks/useAuthenticate.jsx';
import Nav from '../component/Navbar.jsx';
import TeamInfo from '../component/TeamInfo.jsx';
import ReadMe from '../component/ReadMe.jsx';
import davidPic from '@/assets/davidpic.png';
import connorPic from '@/assets/connorpic.png';
// import wilsonPic from '@/assets/wilsonpic.png';
import dominicPic from '@/assets/dominicpic.png';
import githubIcon from '@/assets/github-mark/github-mark.png';
import linkedinIcon from '@/assets/LinkedIn-Logos/LI-In-Bug.png';
import linkedinLogo from '@/assets/LinkedIn-Logos/LI-Logo.png';
import githubLogo from '@/assets/github-mark/GitHub_Logo.png';
import mediumLogo from '@/assets/medium-logo.png';
import logo from '@/assets/klusterfunklogo2.png';

const Homepage = () => {
  const [user, setUser] = useState('');
  const [signout] = useAuthenticate(setUser);
  const featuresRef = useRef(null);
  const aboutMeRef = useRef(null);

  const refs = {
    featuresRef: featuresRef,
    aboutMeRef: aboutMeRef,
  };

  const memberPics = {
    'David Tezza': davidPic,
    'Wilson Wu': davidPic,
    'Connor Donahue': connorPic,
    'Dominic Kenny': dominicPic,
  };
  const teamInfo = [];
  for (const member in memberPics) {
    teamInfo.push(
      <TeamInfo
        member={member}
        pic={memberPics[member]}
        githubIcon={githubIcon}
        linkedinIcon={linkedinIcon}
      />
    );
  }

  return (
    <main className='h-screen w-fit flex flex-col bg-fuchsia-600 rounded-lg'>
      <Nav user={user} signout={signout} refs={refs} />
      <div className='space-y-4 p-2 max-h-screen overflow-y-auto'>
        <section
          ref={featuresRef}
          id='features'
          className='bg-fuchsia-200 flex-col flex items-center justify-center rounded-lg'
        >
          <img className='w-2/4' src={logo} />
          <ReadMe />
        </section>
        <section
          ref={aboutMeRef}
          id='about-me'
          className='bg-fuchsia-200 flex-col flex items-center justify-center rounded-lg'
        >
          <section
            className='flex flex-col items-center text-3xl border-b-4 px-2'
            id='links'
          >
            Links
            <div className='text-xl' id='link info'>
              <section>
                For instructions on how to get started with KlusterFunk, visit
                our Github repo!
                <a
                  className='flex flex-col items-center'
                  href='https://github.com/oslabs-beta/KlusterFunk'
                >
                  <img className='w-1/12' src={githubLogo} />
                </a>
              </section>
              <section>
                To read more about our Product, head over to our Medium article!
                <a
                  className='flex flex-col items-center'
                  href='https://www.google.com/'
                >
                  <img className='w-1/12' src={mediumLogo} />
                </a>
              </section>
              <section>
                Connect with us on LinkedIn!{' '}
                <a
                  className='flex flex-col items-center'
                  // href='https://www.linkedin.com'
                >
                  <img className='w-1/12' src={linkedinLogo} />
                </a>
              </section>
            </div>
          </section>
        </section>
        <section className='bg-fuchsia-200 flex-col flex items-center justify-center rounded-lg'>
          <div className='text-4xl text-black' to='#'>
            MEET THE TEAM
          </div>
          <div className='w-full py-2 px-4'>
            <section className='flex justify-center'>{teamInfo}</section>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Homepage;
