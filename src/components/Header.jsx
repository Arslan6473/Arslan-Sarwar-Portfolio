import React from 'react'
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Link } from 'react-scroll';
import Reveal from './Reveal'

function Header() {
  const [text] = useTypewriter({
    words: ['Full Stack Developer', 'Works with !', 'JavaScript', 'React.js', 'TailwindCSS', 'Next.js', 'Node.js', 'Express.js', 'MongoDB',],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 70
  })
  return (
    <>
      <div id='header' className="isolate bg-[#1c1c1c] px-6 py-24 sm:py-32 lg:px-8 ">
        <div className='flex flex-col gap-7 justify-center items-center pt-15'>
          <Reveal>
          <h1 className='text-gray-300 font-bold text-5xl '>Hy I'm <span className='text-[#3fcf8e] font-bold text-5xl'>Arslan Sarwar</span></h1>
          </Reveal>
          <Reveal>
          <h3 className='text-5xl font-medium text-gray-300 text-center  '>
            <span>{text}</span>
            <span className='text-[#3fcf8e]'>{<Cursor />}</span>
          </h3>
          </Reveal>
          <Reveal>
          <div className='flex gap-x-3 items-center pt-2'>
            <IoLogoJavascript className='text-gray-300 text-3xl' />
            <FaReact className='text-gray-300 text-3xl' />
            <SiTailwindcss className='text-gray-300 text-3xl' />
            <RiNextjsFill className='text-gray-300 text-3xl' />
            <FaNodeJs className='text-gray-300 text-3xl' />
            <SiExpress className='text-gray-300 text-3xl' />
            <SiMongodb className='text-gray-300 text-3xl' />
          </div >
          </Reveal>
          <Reveal>
          <button class="cursor-pointer relative group overflow-hidden border-2 mt-1 px-8 rounded-md py-2 border-[#3fcf8e]">
            <Link to='contactme' spy={true}
              smooth={true}
              offset={45}
              duration={500}>
              <span class="font-bold text-white text-md relative z-10 group-hover:text-[#3fcf8e] duration-500">Contact Me</span>
            </Link>
            <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:-translate-x-full h-full"></span>
            <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-x-full h-full"></span>

            <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
            <span class="absolute delay-300 top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-y-full h-full"></span>
          </button>
          </Reveal>
        </div>

      </div>
    </>
  )
}

export default Header