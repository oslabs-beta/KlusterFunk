import { Link } from "react-router-dom"
import { useState, useRef } from "react"


import useAuthenticate from "../Hooks/useAuthenticate.jsx"
import Navbar from "../component/Navbar.jsx"

const Homepage = () => {
    const [user, setUser] = useState('');
    const [ signout ] = useAuthenticate(setUser);
    const featuresRef = useRef(null);
    const aboutMeRef = useRef(null);

    const refs = {
      featuresRef: featuresRef,
      aboutMeRef: aboutMeRef
    }

    // const scrollToSection = (sectionId) => {
    //   if (sectionId === 'features') {
    //     scrollToRef(featuresRef)
    //   } else if (sectionId === 'about-me') {
    //     scrollToRef(aboutMeRef)
    //   }
    // }

    // const scrollToRef = (ref) => {
    //   if (ref && ref.current) {
    //     ref.current.scrollIntoView({behavior: 'smooth'})
    //   }
    // }

    return (
        <main className='fixed inset-0 flex flex-col bg-slate-300 border-slate-500 border-2 rounded-lg'>
        <Navbar user={user} signout={signout} refs={refs}/>
        <div className='space-y-4 max-h-screen overflow-y-auto'>
            <section ref={featuresRef} id='features' className="bg-white flex-col flex items-center justify-center rounded-lg">
                <Link 
                to='/dashboard'
                
                >DASHBOARD</Link>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laborum enim, fuga, harum sed non unde vero suscipit aperiam, impedit a dolorem quis quasi eaque molestias dolores fugiat repellat ipsum?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nobis molestias quisquam officia ipsa. Eligendi facilis nobis tenetur eius corrupti debitis, voluptatibus sit impedit id exercitationem ipsam rerum veritatis reiciendis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eveniet ipsum libero commodi quos in molestiae provident iure natus facere, consectetur ipsa non delectus, officia quia eum ad excepturi dicta.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptas architecto id ut suscipit a, quam, ducimus quisquam aperiam, quod qui odio. Aliquid laborum inventore et quia similique aut harum?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quod nobis, esse animi enim accusantium ullam unde iste sapiente, dignissimos sed, ex earum! Necessitatibus quam voluptatum quasi porro magnam sint!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, minima temporibus voluptate doloremque veniam aspernatur tenetur sint totam, voluptatem dolore nulla asperiores inventore quam, accusamus assumenda fugit error provident aperiam.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti non nobis libero incidunt minima, cum pariatur animi odio obcaecati ducimus at nisi minus, vel commodi assumenda dolorem est rem possimus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laborum enim, fuga, harum sed non unde vero suscipit aperiam, impedit a dolorem quis quasi eaque molestias dolores fugiat repellat ipsum?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nobis molestias quisquam officia ipsa. Eligendi facilis nobis tenetur eius corrupti debitis, voluptatibus sit impedit id exercitationem ipsam rerum veritatis reiciendis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eveniet ipsum libero commodi quos in molestiae provident iure natus facere, consectetur ipsa non delectus, officia quia eum ad excepturi dicta.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptas architecto id ut suscipit a, quam, ducimus quisquam aperiam, quod qui odio. Aliquid laborum inventore et quia similique aut harum?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quod nobis, esse animi enim accusantium ullam unde iste sapiente, dignissimos sed, ex earum! Necessitatibus quam voluptatum quasi porro magnam sint!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, minima temporibus voluptate doloremque veniam aspernatur tenetur sint totam, voluptatem dolore nulla asperiores inventore quam, accusamus assumenda fugit error provident aperiam.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti non nobis libero incidunt minima, cum pariatur animi odio obcaecati ducimus at nisi minus, vel commodi assumenda dolorem est rem possimus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laborum enim, fuga, harum sed non unde vero suscipit aperiam, impedit a dolorem quis quasi eaque molestias dolores fugiat repellat ipsum?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nobis molestias quisquam officia ipsa. Eligendi facilis nobis tenetur eius corrupti debitis, voluptatibus sit impedit id exercitationem ipsam rerum veritatis reiciendis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eveniet ipsum libero commodi quos in molestiae provident iure natus facere, consectetur ipsa non delectus, officia quia eum ad excepturi dicta.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptas architecto id ut suscipit a, quam, ducimus quisquam aperiam, quod qui odio. Aliquid laborum inventore et quia similique aut harum?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quod nobis, esse animi enim accusantium ullam unde iste sapiente, dignissimos sed, ex earum! Necessitatibus quam voluptatum quasi porro magnam sint!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, minima temporibus voluptate doloremque veniam aspernatur tenetur sint totam, voluptatem dolore nulla asperiores inventore quam, accusamus assumenda fugit error provident aperiam.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti non nobis libero incidunt minima, cum pariatur animi odio obcaecati ducimus at nisi minus, vel commodi assumenda dolorem est rem possimus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laborum enim, fuga, harum sed non unde vero suscipit aperiam, impedit a dolorem quis quasi eaque molestias dolores fugiat repellat ipsum?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nobis molestias quisquam officia ipsa. Eligendi facilis nobis tenetur eius corrupti debitis, voluptatibus sit impedit id exercitationem ipsam rerum veritatis reiciendis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eveniet ipsum libero commodi quos in molestiae provident iure natus facere, consectetur ipsa non delectus, officia quia eum ad excepturi dicta.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptas architecto id ut suscipit a, quam, ducimus quisquam aperiam, quod qui odio. Aliquid laborum inventore et quia similique aut harum?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quod nobis, esse animi enim accusantium ullam unde iste sapiente, dignissimos sed, ex earum! Necessitatibus quam voluptatum quasi porro magnam sint!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, minima temporibus voluptate doloremque veniam aspernatur tenetur sint totam, voluptatem dolore nulla asperiores inventore quam, accusamus assumenda fugit error provident aperiam.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti non nobis libero incidunt minima, cum pariatur animi odio obcaecati ducimus at nisi minus, vel commodi assumenda dolorem est rem possimus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laborum enim, fuga, harum sed non unde vero suscipit aperiam, impedit a dolorem quis quasi eaque molestias dolores fugiat repellat ipsum?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nobis molestias quisquam officia ipsa. Eligendi facilis nobis tenetur eius corrupti debitis, voluptatibus sit impedit id exercitationem ipsam rerum veritatis reiciendis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eveniet ipsum libero commodi quos in molestiae provident iure natus facere, consectetur ipsa non delectus, officia quia eum ad excepturi dicta.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptas architecto id ut suscipit a, quam, ducimus quisquam aperiam, quod qui odio. Aliquid laborum inventore et quia similique aut harum?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quod nobis, esse animi enim accusantium ullam unde iste sapiente, dignissimos sed, ex earum! Necessitatibus quam voluptatum quasi porro magnam sint!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, minima temporibus voluptate doloremque veniam aspernatur tenetur sint totam, voluptatem dolore nulla asperiores inventore quam, accusamus assumenda fugit error provident aperiam.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti non nobis libero incidunt minima, cum pariatur animi odio obcaecati ducimus at nisi minus, vel commodi assumenda dolorem est rem possimus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laborum enim, fuga, harum sed non unde vero suscipit aperiam, impedit a dolorem quis quasi eaque molestias dolores fugiat repellat ipsum?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nobis molestias quisquam officia ipsa. Eligendi facilis nobis tenetur eius corrupti debitis, voluptatibus sit impedit id exercitationem ipsam rerum veritatis reiciendis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eveniet ipsum libero commodi quos in molestiae provident iure natus facere, consectetur ipsa non delectus, officia quia eum ad excepturi dicta.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptas architecto id ut suscipit a, quam, ducimus quisquam aperiam, quod qui odio. Aliquid laborum inventore et quia similique aut harum?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quod nobis, esse animi enim accusantium ullam unde iste sapiente, dignissimos sed, ex earum! Necessitatibus quam voluptatum quasi porro magnam sint!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, minima temporibus voluptate doloremque veniam aspernatur tenetur sint totam, voluptatem dolore nulla asperiores inventore quam, accusamus assumenda fugit error provident aperiam.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti non nobis libero incidunt minima, cum pariatur animi odio obcaecati ducimus at nisi minus, vel commodi assumenda dolorem est rem possimus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quod nobis, esse animi enim accusantium ullam unde iste sapiente, dignissimos sed, ex earum! Necessitatibus quam voluptatum quasi porro magnam sint!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, minima temporibus voluptate doloremque veniam aspernatur tenetur sint totam, voluptatem dolore nulla asperiores inventore quam, accusamus assumenda fugit error provident aperiam.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti non nobis libero incidunt minima, cum pariatur animi odio obcaecati ducimus at nisi minus, vel commodi assumenda dolorem est rem possimus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laborum enim, fuga, harum sed non unde vero suscipit aperiam, impedit a dolorem quis quasi eaque molestias dolores fugiat repellat ipsum?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nobis molestias quisquam officia ipsa. Eligendi facilis nobis tenetur eius corrupti debitis, voluptatibus sit impedit id exercitationem ipsam rerum veritatis reiciendis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eveniet ipsum libero commodi quos in molestiae provident iure natus facere, consectetur ipsa non delectus, officia quia eum ad excepturi dicta.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptas architecto id ut suscipit a, quam, ducimus quisquam aperiam, quod qui odio. Aliquid laborum inventore et quia similique aut harum?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quod nobis, esse animi enim accusantium ullam unde iste sapiente, dignissimos sed, ex earum! Necessitatibus quam voluptatum quasi porro magnam sint!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, minima temporibus voluptate doloremque veniam aspernatur tenetur sint totam, voluptatem dolore nulla asperiores inventore quam, accusamus assumenda fugit error provident aperiam.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti non nobis libero incidunt minima, cum pariatur animi odio obcaecati ducimus at nisi minus, vel commodi assumenda dolorem est rem possimus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laborum enim, fuga, harum sed non unde vero suscipit aperiam, impedit a dolorem quis quasi eaque molestias dolores fugiat repellat ipsum?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nobis molestias quisquam officia ipsa. Eligendi facilis nobis tenetur eius corrupti debitis, voluptatibus sit impedit id exercitationem ipsam rerum veritatis reiciendis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eveniet ipsum libero commodi quos in molestiae provident iure natus facere, consectetur ipsa non delectus, officia quia eum ad excepturi dicta.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptas architecto id ut suscipit a, quam, ducimus quisquam aperiam, quod qui odio. Aliquid laborum inventore et quia similique aut harum?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quod nobis, esse animi enim accusantium ullam unde iste sapiente, dignissimos sed, ex earum! Necessitatibus quam voluptatum quasi porro magnam sint!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, minima temporibus voluptate doloremque veniam aspernatur tenetur sint totam, voluptatem dolore nulla asperiores inventore quam, accusamus assumenda fugit error provident aperiam.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti non nobis libero incidunt minima, cum pariatur animi odio obcaecati ducimus at nisi minus, vel commodi assumenda dolorem est rem possimus!
            </section>
            <section ref={aboutMeRef} id='about-me'className="bg-white flex-col flex items-center justify-center rounded-lg">
                <Link to='#'>MEET THE TEAM</Link>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laborum enim, fuga, harum sed non unde vero suscipit aperiam, impedit a dolorem quis quasi eaque molestias dolores fugiat repellat ipsum?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nobis molestias quisquam officia ipsa. Eligendi facilis nobis tenetur eius corrupti debitis, voluptatibus sit impedit id exercitationem ipsam rerum veritatis reiciendis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eveniet ipsum libero commodi quos in molestiae provident iure natus facere, consectetur ipsa non delectus, officia quia eum ad excepturi dicta.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptas architecto id ut suscipit a, quam, ducimus quisquam aperiam, quod qui odio. Aliquid laborum inventore et quia similique aut harum?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quod nobis, esse animi enim accusantium ullam unde iste sapiente, dignissimos sed, ex earum! Necessitatibus quam voluptatum quasi porro magnam sint!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, minima temporibus voluptate doloremque veniam aspernatur tenetur sint totam, voluptatem dolore nulla asperiores inventore quam, accusamus assumenda fugit error provident aperiam.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti non nobis libero incidunt minima, cum pariatur animi odio obcaecati ducimus at nisi minus, vel commodi assumenda dolorem est rem possimus!
            </section>
        </div>
        </main>
    )
}

export default Homepage;