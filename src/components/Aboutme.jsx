import React from 'react'
import mypic from '../assets/arslan.png'
import Reveal from './Reveal'

export default function Aboutme() {
  return (
    <section id='aboutme' className="relative isolate overflow-hidden bg-[#1c1c1c] px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10  opacity-20" />
      <div className="absolute sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
       
      <div className="mx-auto max-w-2xl mb-[10vh] text-center">
      <Reveal>
        <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">About Me</h2>
        </Reveal>
      </div>
     
    
        <figure className="mt-10">
        
          <blockquote className="text-center text-md leading-8 text-gray-300 sm:text-2xl sm:leading-9">
          <Reveal>
            <p>
              “My name is Muhammad Arslan Sarwar. I am a full stack developer. As a full stack web developer, I excel in building dynamic and responsive web applications. On the frontend, I leverage the power of React.js for creating interactive user interfaces, Tailwind CSS for crafting sleek and responsive designs, and Redux Toolkit for efficient state management. I also utilize React Router DOM for handling navigation within the application.
              For backend development, I rely on Node.js and Express.js to build robust server-side logic and APIs. My expertise extends to database management, where I work with MongoDB to ensure efficient data storage and retrieval. Additionally, I have experience with Next.js for server-side rendering and building powerful web applications.
              With a strong focus on both frontend and backend technologies, I strive to deliver high-quality, scalable solutions that meet the needs of modern web applications.”
            </p>
            </Reveal>
          </blockquote>
        
          <Reveal>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-[170px] w-[170px] rounded-full"
              src={mypic}
              alt="arslanSarwar"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-100">Arslan Sarwar </div>
          
              <div className="text-[#3fcf8e]">Full Stack Developer</div>
            </div>
          </figcaption>
          </Reveal>
        </figure>
      </div>
    </section>
  )
}