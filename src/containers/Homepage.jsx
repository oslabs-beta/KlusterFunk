import { useState, useRef } from 'react';
import useAuthenticate from '../Hooks/useAuthenticate.jsx';
import Nav from '../component/Navbar.jsx';
import TeamInfo from '../component/TeamInfo.jsx';
import ReadMe from '../component/ReadMe.jsx';
import Links from '../component/Links.jsx';
import davidPic from '@/assets/davidpic.png';
import connorPic from '@/assets/connorpic.png';
import wilsonPic from '@/assets/wilsonpic.png';
import dominicPic from '@/assets/dominicpic.png';
import githubIcon from '@/assets/github-mark/github-mark.png';
import linkedinIcon from '@/assets/LinkedIn-Logos/LI-In-Bug.png';
import linkedinLogo from '@/assets/LinkedIn-Logos/LI-Logo.png';
import githubLogo from '@/assets/github-mark/GitHub_Logo.png';
import mediumLogo from '@/assets/medium-logo.png';
import logo from '@/assets/klusterfunklogo2.png';

const Homepage = () => {
  const [ user, setUser ] = useState('');
  const [ signout ] = useAuthenticate(setUser);
  const featuresRef = useRef(null);
  const aboutMeRef = useRef(null);

  // put both features section and about-me section into an object to easily pass it down to Navbar component as a prop
  const refs = {
    featuresRef: featuresRef,
    aboutMeRef: aboutMeRef,
  };

  const memberPics = {
    'David Tezza': davidPic,
    'Wilson Wu': wilsonPic,
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
        key={member}
      />
    );
  }
  const linkInfo = {
    github: [
      'For instructions on how to get started with KlusterFunk, visit our Github repo!',
      'https://github.com/oslabs-beta/KlusterFunk',
      githubLogo,
    ],
    medium: [
      'To read more about our Product, head over to our Medium article!',
      'https://medium.com/@connordonahue09/klusterfunk-564ec1c78e36',
      mediumLogo,
    ],
    linkedin: [
      'Connect with us on LinkedIn!',
      'https://www.linkedin.com',
      linkedinLogo,
    ],
  };
  const links = [];
  for (const link in linkInfo) {
    links.push(
      <Links
        logo={linkInfo[link][2]}
        text={linkInfo[link][0]}
        link={linkInfo[link][1]}
        key={link}
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
          <img className='w-2/4 pt-2' src={logo} />
          <ReadMe />
        </section>
        <section
          ref={aboutMeRef}
          id='about-me'
          className='bg-fuchsia-200 flex-col flex items-center justify-center rounded-lg'
        >
          <section
            className='flex flex-col items-center text-4xl py-2 px-2 text-black'
            id='links'
          >
            <span className='font-bold'>LINKS</span>
            <div className='space-y-2 text-xl' id='link info'>
              {links}
            </div>
          </section>
        </section>
        <section className='bg-fuchsia-200 flex-col flex items-center justify-center rounded-lg'>
          <div className='text-4xl text-black' to='#'>
            <span className='font-bold'>MEET THE TEAM</span>
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
