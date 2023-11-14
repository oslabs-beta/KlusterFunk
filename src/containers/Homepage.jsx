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
    <main className='flex flex-col bg-fuchsia-700 border-2 rounded-lg'>
      <Nav user={user} signout={signout} refs={refs} />
      <div className='space-y-4 max-h-screen overflow-y-auto'>
        <section
          ref={featuresRef}
          id='features'
          className='bg-fuchsia-200 flex-col flex items-center justify-center rounded-lg'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          laborum enim, fuga, harum sed non unde vero suscipit aperiam, impedit
          a dolorem quis quasi eaque molestias dolores fugiat repellat ipsum?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nobis
          molestias quisquam officia ipsa. Eligendi facilis nobis tenetur eius
          corrupti debitis, voluptatibus sit impedit id exercitationem ipsam
          rerum veritatis reiciendis! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Autem eveniet ipsum libero commodi quos in molestiae
          provident iure natus facere, consectetur ipsa non delectus, officia
          quia eum ad excepturi dicta. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptate voluptas architecto id ut suscipit a,
          quam, ducimus quisquam aperiam, quod qui odio. Aliquid laborum
          inventore et quia similique aut harum? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Totam quod nobis, esse animi enim
          accusantium ullam unde iste sapiente, dignissimos sed, ex earum!
          Necessitatibus quam voluptatum quasi porro magnam sint! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Rerum, minima temporibus
          voluptate doloremque veniam aspernatur tenetur sint totam, voluptatem
          dolore nulla asperiores inventore quam, accusamus assumenda fugit
          error provident aperiam. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Deleniti non nobis libero incidunt minima, cum
          pariatur animi odio obcaecati ducimus at nisi minus, vel commodi
          assumenda dolorem est rem possimus! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolore laborum enim, fuga, harum sed non
          unde vero suscipit aperiam, impedit a dolorem quis quasi eaque
          molestias dolores fugiat repellat ipsum? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Eos nobis molestias quisquam officia
          ipsa. Eligendi facilis nobis tenetur eius corrupti debitis,
          voluptatibus sit impedit id exercitationem ipsam rerum veritatis
          reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Autem eveniet ipsum libero commodi quos in molestiae provident iure
          natus facere, consectetur ipsa non delectus, officia quia eum ad
          excepturi dicta. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Voluptate voluptas architecto id ut suscipit a, quam, ducimus
          quisquam aperiam, quod qui odio. Aliquid laborum inventore et quia
          similique aut harum? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Totam quod nobis, esse animi enim accusantium ullam
          unde iste sapiente, dignissimos sed, ex earum! Necessitatibus quam
          voluptatum quasi porro magnam sint! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Rerum, minima temporibus voluptate
          doloremque veniam aspernatur tenetur sint totam, voluptatem dolore
          nulla asperiores inventore quam, accusamus assumenda fugit error
          provident aperiam. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Deleniti non nobis libero incidunt minima, cum pariatur animi
          odio obcaecati ducimus at nisi minus, vel commodi assumenda dolorem
          est rem possimus! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolore laborum enim, fuga, harum sed non unde vero suscipit
          aperiam, impedit a dolorem quis quasi eaque molestias dolores fugiat
          repellat ipsum? Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Eos nobis molestias quisquam officia ipsa. Eligendi facilis
          nobis tenetur eius corrupti debitis, voluptatibus sit impedit id
          exercitationem ipsam rerum veritatis reiciendis! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Autem eveniet ipsum libero commodi
          quos in molestiae provident iure natus facere, consectetur ipsa non
          delectus, officia quia eum ad excepturi dicta. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Voluptate voluptas architecto id ut
          suscipit a, quam, ducimus quisquam aperiam, quod qui odio. Aliquid
          laborum inventore et quia similique aut harum? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Totam quod nobis, esse animi enim
          accusantium ullam unde iste sapiente, dignissimos sed, ex earum!
          Necessitatibus quam voluptatum quasi porro magnam sint! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Rerum, minima temporibus
          voluptate doloremque veniam aspernatur tenetur sint totam, voluptatem
          dolore nulla asperiores inventore quam, accusamus assumenda fugit
          error provident aperiam. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Deleniti non nobis libero incidunt minima, cum
          pariatur animi odio obcaecati ducimus at nisi minus, vel commodi
          assumenda dolorem est rem possimus!
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
                <img src='src/assets/davidpic.png'></img>{' '}
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
                    href='https://www.linkedin.com/in/connordonahueaudio/'
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
