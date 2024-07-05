import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { TbBrandRedux } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiAppwrite } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import Reveal from './Reveal'

export default function Myskills() {
  return (
    <>

      <div id='myskills' className=' bg-[#1c1c1c]  mx-auto max-w-7xlpx-6 py-24 sm:py-32 sm:px-6 lg:px-8 '>
        <div className="mx-auto max-w-2xl text-center mb-[10vh]">
          <Reveal>

            <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">My Skills</h2>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-3  grid-cols-1 2xl:px-28 mt-15">
          <Reveal>
            <div className="flex flex-col items-center  lg:border-r-2  border-gray-300  overflow-hidden ">
              <div className="text-center flex flex-col gap-y-2 items-center pt-10">
                <FaHtml5 className='text-[5rem] text-[#3fcf8e]' />
                <div className='text-2xl font-bold text-gray-300 '>Front-End</div>
              </div>
              <div className="p-10 grid grid-cols-3 gap-1 ">
                <span className='p-1 rounded-md flex items-center justify-center text-md gap-1 bg-gray-300 ' ><FaHtml5 className='text-xl' /><span>HTML5</span> </span>
                <span className='p-1 rounded-md  flex items-center justify-center text-md gap-1 bg-gray-300 ' ><FaCss3Alt className='text-xl' /><span>CSS3</span> </span>
                <span className='p-1 rounded-md  flex items-center justify-center text-md gap-1 bg-gray-300 ' ><IoLogoJavascript className='text-xl' /><span>JavaScript</span> </span>
                <span className='p-1 rounded-md  flex items-center justify-center text-md gap-1 bg-gray-300 ' ><BiLogoTypescript className='text-xl' /><span>JavaScript</span> </span>
                <span className='p-1 rounded-md  flex items-center justify-center text-md gap-1 bg-gray-300 ' ><FaReact className='text-xl' /><span>React</span> </span>
                <span className='p-1 rounded-md flex items-center justify-center text-md gap-1 bg-gray-300 ' ><RiNextjsFill className='text-xl' /><span>Next</span> </span>
                <span className='p-1 rounded-md flex items-center justify-center text-md gap-1 bg-gray-300 ' ><TbBrandRedux className='text-xl' /><span>Redux</span> </span>
                <span className='p-1 rounded-md  flex items-center justify-center text-md gap-1 bg-gray-300 ' ><RiTailwindCssFill className='text-xl' /><span>TailwindCSS</span> </span>
                <span className='p-1 rounded-md flex items-center justify-center text-md gap-1 bg-gray-300 ' ><FaBootstrap className='text-xl' /><span>Bootstrap</span> </span>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-col items-center lg:border-r-2  border-gray-300  overflow-hidden ">
              <div className="text-center flex flex-col gap-y-2 items-center pt-10">
                <FaNodeJs className='text-[5rem] text-[#3fcf8e]' />
                <div className='text-2xl font-bold text-gray-300 '>Back-End</div>
              </div>
              <div className="p-10 grid grid-cols-3 gap-1">
                <span className='p-1 rounded-md flex items-center justify-center text-md gap-1 bg-gray-300 ' ><FaNodeJs className='text-xl' /><span>Node</span> </span>
                <span className='p-1 rounded-md  flex items-center justify-center text-md gap-1 bg-gray-300 ' ><SiExpress className='text-xl' /><span>Express</span> </span>
                <span className='p-1 rounded-md  flex items-center justify-center text-md gap-1 bg-gray-300 ' ><SiMongoose className='text-xl' /><span>Mongoose</span> </span>
                <span className='p-1 rounded-md  flex items-center justify-center text-md gap-1 bg-gray-300 ' ><DiMongodb className='text-xl' /><span>MongoDB</span> </span>
                <span className='p-1 rounded-md flex items-center justify-center text-md gap-1 bg-gray-300 ' ><SiAppwrite className='text-xl' /><span>Appwrite</span> </span>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-col items-center   overflow-hidden ">
              <div className="text-center flex flex-col gap-y-2 items-center pt-10">
                <FaTools className='text-[5rem] text-[#3fcf8e]' />
                <div className='text-2xl font-bold text-gray-300 '>Tools </div>
              </div>
              <div className="p-10 grid grid-cols-3 gap-1">
                <span className='p-1 rounded-md flex items-center justify-center text-md gap-2 bg-gray-300 ' ><FaGitAlt className='text-xl' /><span>Git</span> </span>
                <span className='p-1 rounded-md  flex items-center justify-center text-md gap-2 bg-gray-300 ' ><FaGithub className='text-xl' /><span>GitHub</span> </span>
                <span className='p-1 rounded-md  flex items-center justify-center text-md gap-2 bg-gray-300 ' ><VscVscode className='text-xl' /><span>VsCode</span> </span>
                <span className='p-1 rounded-md  flex items-center justify-center text-md gap-2 bg-gray-300 ' ><SiPostman className='text-xl' /><span>Postman</span> </span>

              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  )
}