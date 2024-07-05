import React from 'react'
import coinworld from '../assets/coinworld.png'
import tourist from '../assets/tourist.png'
import blog from '../assets/blog.png'
import music from '../assets/music.png'
import ecommerce from '../assets/ecommerce.png'
import pharmacy from '../assets/pharmacy.png'
import rapid from '../assets/rapid.png'
import farmers from '../assets/farmers.png'
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { TbBrandRedux } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiAppwrite } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import Reveal from './Reveal'


function Myprojects() {
  return (
    <div id='myprojects' className=' bg-[#1c1c1c]  mx-auto max-w-7xlpx-6 py-24 sm:py-32 sm:px-6 lg:px-8 '>
      <div className="mx-auto max-w-2xl text-center mb-[10vh]">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">My Projects</h2>
        </Reveal>
      </div>
      <div className="grid lg:grid-cols-3 gap-y-9 gap-x-3 w-full justify-items-center items-center grid-cols-1 2xl:px-28 mt-15 mx-auto">
        <Reveal>
          <div className="w-96  bg-[#242424] shadow-lg p-3 flex flex-col gap-1 rounded-2xl">
            <img
              src={coinworld}
              className="object-cover w-full rounded-2xl bg-gray-50"
              alt=""
            />

            <div className=' text-gray-300'>
              <p className='text-justify p-1 pt-3  text-md h-40'>Coin World is a crypto web application where users can see the prices of crypto coins. I have built this application using React,
                Tailwind CSS, and an API for fetching coin data.</p>
            </div>
            <div className="grid grid-cols-3 text-gray-300 gap-1 h-28 ">
              <span className='flex items-center justify-center gap-1' ><FaHtml5 className='text-sm' /><span>HTML5</span> </span>
              <span className='flex items-center justify-center gap-1' ><FaCss3Alt className='text-sm' /><span>CSS3</span> </span>
              <span className=' flex items-center justify-center gap-1 ' ><IoLogoJavascript className='text-sm' /><span>JavaScript</span> </span>
              <span className=' flex items-center justify-center gap-1' ><FaReact className='text-sm' /><span>React</span> </span>
              <span className=' flex items-center justify-center gap-1' ><RiTailwindCssFill className='text-sm' /><span>TailwindCSS</span> </span>
            </div>
            <div className='flex justify-around'>
              <a href="https://github.com/Arslan6473/Coin-World" target="_blank" rel="noopener noreferrer">
                <button class="cursor-pointer relative group overflow-hidden border-2 mt-1 px-8 rounded-md py-2 border-[#3fcf8e]">
                  <span class="font-bold text-white text-md relative z-10 group-hover:text-[#3fcf8e] duration-500">Code</span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:-translate-x-full h-full"></span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-x-full h-full"></span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                  <span class="absolute delay-300 top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-y-full h-full"></span>
                </button>
              </a>
              <a href="https://coin-world.vercel.app/" target="_blank" rel="noopener noreferrer">
                <button class="cursor-pointer relative group overflow-hidden border-2 mt-1 px-8 rounded-md py-2 border-[#3fcf8e]">
                  <span class="font-bold text-white text-md relative z-10 group-hover:text-[#3fcf8e] duration-500">Live Demo</span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:-translate-x-full h-full"></span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-x-full h-full"></span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                  <span class="absolute delay-300 top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-y-full h-full"></span>
                </button>
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="w-96 bg-[#242424] shadow-lg p-3 flex flex-col gap-1 rounded-2xl">
            <img
              src={tourist}
              className="object-cover w-full rounded-2xl  bg-gray-50"
              alt=""
            />

            <div className=' text-gray-300 '>
              <p className='text-justify pt-3 p-1 text-md h-40'>Tourist Advisor is a web application where users can search for a specific city's restaurants, hotels, attractions, and weather.
                I have built this application using React, Tailwind CSS, and some API for infecting weather and place data.</p>
            </div>
            <div className=" grid grid-cols-3 text-gray-300 gap-1 h-28 ">
              <span className='flex items-center justify-center gap-1' ><FaHtml5 className='text-sm' /><span>HTML5</span> </span>
              <span className='flex items-center justify-center gap-1' ><FaCss3Alt className='text-sm' /><span>CSS3</span> </span>
              <span className=' flex items-center justify-center gap-1 ' ><IoLogoJavascript className='text-sm' /><span>JavaScript</span> </span>
              <span className=' flex items-center justify-center gap-1' ><FaReact className='text-sm' /><span>React</span> </span>
              <span className=' flex items-center justify-center gap-1' ><RiTailwindCssFill className='text-sm' /><span>TailwindCSS</span> </span>
            </div>
            <div className='flex justify-around'>
              <a href="https://github.com/Arslan6473/Tourist-Advisor" target="_blank" rel="noopener noreferrer">
                <button class="cursor-pointer relative group overflow-hidden border-2 mt-1 px-8 rounded-md py-2 border-[#3fcf8e]">
                  <span class="font-bold text-white text-md relative z-10 group-hover:text-[#3fcf8e] duration-500">Code</span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:-translate-x-full h-full"></span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-x-full h-full"></span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                  <span class="absolute delay-300 top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-y-full h-full"></span>
                </button>
              </a>
              <a href="https://tourist-advisor.vercel.app/" target="_blank" rel="noopener noreferrer">
                <button class="cursor-pointer relative group overflow-hidden border-2 mt-1 px-8 rounded-md py-2 border-[#3fcf8e]">
                  <span class="font-bold text-white text-md relative z-10 group-hover:text-[#3fcf8e] duration-500">Live Demo</span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:-translate-x-full h-full"></span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-x-full h-full"></span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                  <span class="absolute delay-300 top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-y-full h-full"></span>
                </button>
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="w-96 bg-[#242424] shadow-lg p-3 flex flex-col gap-1 rounded-2xl">
            <img
              src={blog}
              className="object-cover  w-full rounded-2xl bg-gray-50"
              alt=""
            />

            <div className=' text-gray-300 '>
              <p className='text-justify text-md h-40 pt-3 p-1'>Blog Web application where users can see the posts of different users. Unauthorized user can not see the
                post you need to sign up or sign in. Authorized person can also create posts and edit and delete their posts. I have created
                this web app using React, Tailwind CSS, and Appwrite.</p>
            </div>
            <div className="grid grid-cols-3 text-gray-300 gap-1 h-28 ">
              <span className='flex items-center justify-center gap-1' ><FaHtml5 className='text-sm' /><span>HTML5</span> </span>
              <span className='flex items-center justify-center gap-1' ><FaCss3Alt className='text-sm' /><span>CSS3</span> </span>
              <span className=' flex items-center justify-center gap-1 ' ><IoLogoJavascript className='text-sm' /><span>JavaScript</span> </span>
              <span className=' flex items-center justify-center gap-1' ><FaReact className='text-sm' /><span>React</span> </span>
              <span className=' flex items-center justify-center gap-1' ><RiTailwindCssFill className='text-sm' /><span>TailwindCSS</span> </span>

              <span className='flex items-center justify-center text-md gap-1 ' ><TbBrandRedux className='text-sm' /><span>Redux</span> </span>
              <span className=' flex items-center justify-center text-md gap-1 ' ><SiAppwrite className='text-sm' /><span>Appwrite</span> </span>
            </div>
            <div className='flex justify-around'>
              <a href="https://github.com/Arslan6473/Blog-Webapp" target="_blank" rel="noopener noreferrer">
                <button class="cursor-pointer relative group overflow-hidden border-2 mt-1 px-8 rounded-md py-2 border-[#3fcf8e]">
                  <span class="font-bold text-white text-md relative z-10 group-hover:text-[#3fcf8e] duration-500">Code</span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:-translate-x-full h-full"></span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-x-full h-full"></span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                  <span class="absolute delay-300 top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-y-full h-full"></span>
                </button>
              </a>
              <a href="https://blog-webapp-liart.vercel.app/" target="_blank" rel="noopener noreferrer">
                <button class="cursor-pointer relative group overflow-hidden border-2 mt-1 px-8 rounded-md py-2 border-[#3fcf8e]">
                  <span class="font-bold text-white text-md relative z-10 group-hover:text-[#3fcf8e] duration-500">Live Demo</span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:-translate-x-full h-full"></span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-x-full h-full"></span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                  <span class="absolute delay-300 top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-y-full h-full"></span>
                </button>
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="w-96 bg-[#242424] shadow-lg p-3 flex flex-col gap-1 rounded-2xl">
            <img
              src={music}
              className="object-cover  w-full rounded-2xl bg-gray-50"
              alt=""
            />

            <div className=' text-gray-300 '>
              <p className='text-justify text-md h-40 pt-3 p-1'>Music Academy is a next app consist of three pages home , all courses and contact us .I have developed this app using ui library aceternity ui and used modern animation in this app. I have created
                this web app using Next, Tailwind CSS, Aceternity Ui.</p>
            </div>
            <div className="grid grid-cols-3 text-gray-300 gap-1 h-28 ">
              <span className='flex items-center justify-center gap-1' ><FaHtml5 className='text-sm' /><span>HTML5</span> </span>
              <span className='flex items-center justify-center gap-1' ><FaCss3Alt className='text-sm' /><span>CSS3</span> </span>
              <span className=' flex items-center justify-center gap-1 ' ><BiLogoTypescript className='text-sm' /><span>TypeScript</span> </span>
              <span className=' flex items-center justify-center gap-1' ><RiTailwindCssFill className='text-sm' /><span>TailwindCSS</span> </span>
              <span className=' flex items-center justify-center gap-1' ><RiNextjsFill className='text-sm' /><span>Next</span> </span>

            </div>
            <div className='flex justify-around'>
              <a href="https://github.com/Arslan6473/Music-Academy-Ui" target="_blank" rel="noopener noreferrer">
                <button class="cursor-pointer relative group overflow-hidden border-2 mt-1 px-8 rounded-md py-2 border-[#3fcf8e]">
                  <span class="font-bold text-white text-md relative z-10 group-hover:text-[#3fcf8e] duration-500">Code</span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:-translate-x-full h-full"></span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-x-full h-full"></span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                  <span class="absolute delay-300 top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-y-full h-full"></span>
                </button>
              </a>
              <a href="https://music-academy-ui-beta.vercel.app/" target="_blank" rel="noopener noreferrer">
                <button class="cursor-pointer relative group overflow-hidden border-2 mt-1 px-8 rounded-md py-2 border-[#3fcf8e]">
                  <span class="font-bold text-white text-md relative z-10 group-hover:text-[#3fcf8e] duration-500">Live Demo</span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:-translate-x-full h-full"></span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-x-full h-full"></span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                  <span class="absolute delay-300 top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-y-full h-full"></span>
                </button>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="w-96 bg-[#242424] shadow-lg p-3 flex flex-col gap-1 rounded-2xl">
            <img
              src={ecommerce}
              className="object-cover w-full rounded-2xl  bg-gray-50"
              alt=""
            />

            <div className=' text-gray-300 '>
              <p className='text-justify text-md h-40 p-1 pt-3'>A MERN stack application with admin panel .I have created this application according to the real ecommerce application where
                user can buy products and placed order .I have also created admin panel where admin can see the orders and also edit and
                add new products.</p>
            </div>
            <div className=" grid grid-cols-3 text-gray-300 gap-1 h-28 ">
              <span className='flex items-center justify-center gap-1' ><FaHtml5 className='text-sm' /><span>HTML5</span> </span>
              <span className='flex items-center justify-center gap-1' ><FaCss3Alt className='text-sm' /><span>CSS3</span> </span>
              <span className=' flex items-center justify-center gap-1 ' ><IoLogoJavascript className='text-sm' /><span>JavaScript</span> </span>
              <span className=' flex items-center justify-center gap-1' ><FaReact className='text-sm' /><span>React</span> </span>
              <span className=' flex items-center justify-center gap-1' ><RiTailwindCssFill className='text-sm' /><span>TailwindCSS</span> </span>
              <span className='flex items-center justify-center text-md gap-1 ' ><TbBrandRedux className='text-sm' /><span>Redux</span> </span>
              <span className=' flex items-center justify-center text-md gap-1 ' ><FaNodeJs className='text-xl' /><span>Node</span> </span>
              <span className='flex items-center justify-center text-md gap-1 ' ><SiExpress className='text-xl' /><span>Express</span> </span>
              <span className='flex items-center justify-center text-md gap-1 ' ><SiMongoose className='text-xl' /><span>Mongoose</span> </span>
              <span className=' flex items-center justify-center text-md gap-1 ' ><DiMongodb className='text-xl' /><span>MongoDB</span> </span>
            </div>
            <div className='flex justify-around'>
              <a href="https://github.com/Arslan6473/Ecommerce-Mern" target="_blank" rel="noopener noreferrer">
                <button class="cursor-pointer relative group overflow-hidden border-2 mt-1 px-8 rounded-md py-2 border-[#3fcf8e]">
                  <span class="font-bold text-white text-md relative z-10 group-hover:text-[#3fcf8e] duration-500">Code</span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:-translate-x-full h-full"></span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-x-full h-full"></span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                  <span class="absolute delay-300 top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-y-full h-full"></span>
                </button>
              </a>
              {/* <a href="https://github.com/Arslan6473" target="_blank" rel="noopener noreferrer">
            <button class="cursor-pointer relative group overflow-hidden border-2 mt-1 px-8 rounded-md py-2 border-[#3fcf8e]">
              <span class="font-bold text-white text-md relative z-10 group-hover:text-[#3fcf8e] duration-500">Live Demo</span>
              <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:-translate-x-full h-full"></span>
              <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-x-full h-full"></span>
              <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
              <span class="absolute delay-300 top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-y-full h-full"></span>
            </button>
            </a> */}
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="w-96 bg-[#242424] shadow-lg p-3 flex flex-col gap-1 rounded-2xl">
            <img
              src={pharmacy}
              className="object-cover h-42 w-full rounded-2xl bg-gray-50"
              alt=""
            />

            <div className=' text-gray-300 '>
              <p className='text-justify text-md p-1 h-40 pt-3'>A MERN stack application with admin panel .I have created this application according to the real pharmacy billing application where
                user can create bills .I have also created admin panel where admin can see the bills history and also edit and
                add new items.</p>
            </div>
            <div className="grid grid-cols-3 text-gray-300 gap-1 h-28 ">
              <span className='flex items-center justify-center gap-1' ><FaHtml5 className='text-sm' /><span>HTML5</span> </span>
              <span className='flex items-center justify-center gap-1' ><FaCss3Alt className='text-sm' /><span>CSS3</span> </span>
              <span className=' flex items-center justify-center gap-1 ' ><IoLogoJavascript className='text-sm' /><span>JavaScript</span> </span>
              <span className=' flex items-center justify-center gap-1' ><FaReact className='text-sm' /><span>React</span> </span>
              <span className=' flex items-center justify-center gap-1' ><RiTailwindCssFill className='text-sm' /><span>TailwindCSS</span> </span>
              <span className='flex items-center justify-center text-md gap-1 ' ><TbBrandRedux className='text-sm' /><span>Redux</span> </span>
              <span className=' flex items-center justify-center text-md gap-1 ' ><FaNodeJs className='text-xl' /><span>Node</span> </span>
              <span className='flex items-center justify-center text-md gap-1 ' ><SiExpress className='text-xl' /><span>Express</span> </span>
              <span className='flex items-center justify-center text-md gap-1 ' ><SiMongoose className='text-xl' /><span>Mongoose</span> </span>
              <span className=' flex items-center justify-center text-md gap-1 ' ><DiMongodb className='text-xl' /><span>MongoDB</span> </span>


            </div>
            <div className='flex justify-around'>
              <a href="https://github.com/Arslan6473/Pharmacy-Management-Mern" target="_blank" rel="noopener noreferrer">
                <button class="cursor-pointer relative group overflow-hidden border-2 mt-1 px-8 rounded-md py-2 border-[#3fcf8e]">
                  <span class="font-bold text-white text-md relative z-10 group-hover:text-[#3fcf8e] duration-500">Code</span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:-translate-x-full h-full"></span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-x-full h-full"></span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                  <span class="absolute delay-300 top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-y-full h-full"></span>
                </button>
              </a>
              {/* <a href="https://github.com/Arslan6473" target="_blank" rel="noopener noreferrer">
            <button class="cursor-pointer relative group overflow-hidden border-2 mt-1 px-8 rounded-md py-2 border-[#3fcf8e]">
              <span class="font-bold text-white text-md relative z-10 group-hover:text-[#3fcf8e] duration-500">Live Demo</span>
              <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:-translate-x-full h-full"></span>
              <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-x-full h-full"></span>
              <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
              <span class="absolute delay-300 top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-y-full h-full"></span>
            </button>
            </a> */}
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="w-96 bg-[#242424] shadow-lg p-3 flex flex-col gap-1 rounded-2xl">
            <img
              src={farmers}
              className="object-cover h-42 w-full rounded-2xl bg-gray-50"
              alt=""
            />

            <div className=' text-gray-300 '>
              <p className='text-justify text-md p-1 h-40 pt-3'>A Mern stack application . In this application, users can see the list of popular crops,  diseases and pests. Users can buy pesticides according to their crops, pests, and diseases. List of pesticides where users can search
                pesticides. Users can also see the weather forecast. </p>
            </div>
            <div className="grid grid-cols-3 text-gray-300 gap-1 h-28 ">
              <span className='flex items-center justify-center gap-1' ><FaHtml5 className='text-sm' /><span>HTML5</span> </span>
              <span className='flex items-center justify-center gap-1' ><FaCss3Alt className='text-sm' /><span>CSS3</span> </span>
              <span className=' flex items-center justify-center gap-1 ' ><IoLogoJavascript className='text-sm' /><span>JavaScript</span> </span>
              <span className=' flex items-center justify-center gap-1' ><FaReact className='text-sm' /><span>React</span> </span>
              <span className=' flex items-center justify-center gap-1' ><RiTailwindCssFill className='text-sm' /><span>TailwindCSS</span> </span>
              <span className='flex items-center justify-center text-md gap-1 ' ><TbBrandRedux className='text-sm' /><span>Redux</span> </span>
              <span className=' flex items-center justify-center text-md gap-1 ' ><FaNodeJs className='text-xl' /><span>Node</span> </span>
              <span className='flex items-center justify-center text-md gap-1 ' ><SiExpress className='text-xl' /><span>Express</span> </span>
              <span className='flex items-center justify-center text-md gap-1 ' ><SiMongoose className='text-xl' /><span>Mongoose</span> </span>
              <span className=' flex items-center justify-center text-md gap-1 ' ><DiMongodb className='text-xl' /><span>MongoDB</span> </span>


            </div>
            <div className='flex justify-around'>
              <a href="https://github.com/Arslan6473/farmers-care" target="_blank" rel="noopener noreferrer">
                <button class="cursor-pointer relative group overflow-hidden border-2 mt-1 px-8 rounded-md py-2 border-[#3fcf8e]">
                  <span class="font-bold text-white text-md relative z-10 group-hover:text-[#3fcf8e] duration-500">Code</span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:-translate-x-full h-full"></span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-x-full h-full"></span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                  <span class="absolute delay-300 top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-y-full h-full"></span>
                </button>
              </a>
              {/* <a href="https://github.com/Arslan6473" target="_blank" rel="noopener noreferrer">
            <button class="cursor-pointer relative group overflow-hidden border-2 mt-1 px-8 rounded-md py-2 border-[#3fcf8e]">
              <span class="font-bold text-white text-md relative z-10 group-hover:text-[#3fcf8e] duration-500">Live Demo</span>
              <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:-translate-x-full h-full"></span>
              <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-x-full h-full"></span>
              <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
              <span class="absolute delay-300 top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-y-full h-full"></span>
            </button>
            </a> */}
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="w-96 bg-[#242424] shadow-lg p-3 flex flex-col gap-1 rounded-2xl">
            <img
              src={rapid}
              className="object-cover h-42 w-full rounded-2xl bg-gray-50"
              alt=""
            />

            <div className=' text-gray-300 '>
              <p className='text-justify text-md p-1 h-40 pt-3'>Rapid Message is a Next.js application that allows users to send messages to each other. Each user has a unique username, 
ensuring clear and distinct communication. 
</p>
            </div>
            <div className="grid grid-cols-3 text-gray-300 gap-1 h-28 ">
              <span className='flex items-center justify-center gap-1' ><FaHtml5 className='text-sm' /><span>HTML5</span> </span>
              <span className='flex items-center justify-center gap-1' ><FaCss3Alt className='text-sm' /><span>CSS3</span> </span>
              <span className=' flex items-center justify-center gap-1 ' ><BiLogoTypescript className='text-sm' /><span>TypeScript</span> </span>
              <span className=' flex items-center justify-center gap-1' ><RiNextjsFill className='text-sm' /><span>Next</span> </span>
              <span className=' flex items-center justify-center gap-1' ><RiTailwindCssFill className='text-sm' /><span>TailwindCSS</span> </span>
              <span className=' flex items-center justify-center text-md gap-1 ' ><FaNodeJs className='text-xl' /><span>Node</span> </span>
              <span className='flex items-center justify-center text-md gap-1 ' ><SiMongoose className='text-xl' /><span>Mongoose</span> </span>
              <span className=' flex items-center justify-center text-md gap-1 ' ><DiMongodb className='text-xl' /><span>MongoDB</span> </span>


            </div>
            <div className='flex justify-around'>
              <a href="https://github.com/Arslan6473/rapid-message" target="_blank" rel="noopener noreferrer">
                <button class="cursor-pointer relative group overflow-hidden border-2 mt-1 px-8 rounded-md py-2 border-[#3fcf8e]">
                  <span class="font-bold text-white text-md relative z-10 group-hover:text-[#3fcf8e] duration-500">Code</span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:-translate-x-full h-full"></span>
                  <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-x-full h-full"></span>
                  <span class="absolute top-0 left-0 w-full bg-[#1f2e27] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                  <span class="absolute delay-300 top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-y-full h-full"></span>
                </button>
              </a>
              <a href="https://rapid-message-omega.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button class="cursor-pointer relative group overflow-hidden border-2 mt-1 px-8 rounded-md py-2 border-[#3fcf8e]">
              <span class="font-bold text-white text-md relative z-10 group-hover:text-[#3fcf8e] duration-500">Live Demo</span>
              <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:-translate-x-full h-full"></span>
              <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-x-full h-full"></span>
              <span class="absolute top-0 left-0 w-full bg-[#3fcf8e] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
              <span class="absolute delay-300 top-0 left-0 w-full bg-[#3fcf8e] duration-500 group-hover:translate-y-full h-full"></span>
            </button>
            </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default Myprojects