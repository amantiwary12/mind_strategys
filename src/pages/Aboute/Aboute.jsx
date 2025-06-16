import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Aboute.css'
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import Footer from '../Footer';
import Chatai from '../Chatai/Chatai';


const Aboute = () => {
  const [ menuOpen, setMenuOpen ] = useState( false );

  return (
    <div className='border overflow-x-auto object-cover' >


      <div className='md:h-full h-[20vh]'>
        <div>
          <nav className="flex items-center justify-between px-6 py-4 w-full z-50 absolute ">
            <div>
              <h1 className="text-2xl text-white font-bold cursor-pointer " style={{ textShadow: '2px 2px 4px black' }}>
                <Link to="/">Mind-strategy</Link>
              </h1>
            </div>

            {/* Hamburger button (visible on mobile) */}
            <button
              className="lg:hidden  text-3xl "
              onClick={() => setMenuOpen( !menuOpen )}
            >
              ☰
            </button>

            {/* Nav links */}
            <ul
              className={`flex flex-col lg:flex-row lg:items-center  gap-6 lg:gap-10 transition-all  bg-black/70 lg:bg-transparent md:text-black text-white  text-lg duration-300 ease-in-out absolute lg:static top-[70px] left-0 w-full lg:w-auto px-6 py-4 lg:py-0 lg:px-0  lg:shadow-none ${menuOpen ? 'block' : 'hidden lg:flex'
                }`}
            >
              <li className="hover:bg-gray-900 px-4 py-2 rounded hover:text-white">
                <Link to="/guid">Guide</Link>
              </li>
              <li className="hover:bg-gray-900 px-4 py-2 rounded hover:text-white">
                <Link to="/tips">Trip</Link>
              </li>
              <li className="hover:bg-gray-900 px-4 py-2 rounded hover:text-white">
                <Link to="/Gallery">Gallery</Link>
              </li>
              <li className="hover:bg-gray-900 px-4 py-2 rounded hover:text-white">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className=' justify-center items-center  text-white m-auto flex h-[80vh] w-[99vw]' >
          <div className=' absolute top-28'>
            <img src="https://cdn.prod.website-files.com/6704980959c22352c2589f32/6706066e1f9aff637ed4475a_header%20about-p-1600.png" alt="" srcset="" />
          </div>
          <div className='relative md:text-7xl text-white top-[-200px] md:top-[0px] '>
            <h1 className=' flex md:gap-5 gap-2  '>About
              <div className='font-merriweather'> Company
              </div> </h1>
          </div>
        </div>
      </div>

      <div className='md:h-[100vh] h-[100vh]  '>
        <div>
          <div className="grid md:grid-flow-col auto-cols-fr gap-2 p-4 overflow-x-auto">
            <div className=" md:p-4 rounded shadow min-w-[200px]">
              <div className='grid grid-flow-row auto-row-fr gap-4 p-4 overflow-x-auto'>
                <div className=' rounded-2xl justify-center items-center flex flex-col  h-[40vh] gap-10'>

                  <video autoPlay muted loop className='rounded-2xl h-[40vh] ' src="https://cdn.pixabay.com/video/2021/03/28/69163-530629837_large.mp4"></video>


                </div>

                <div className='justify-center items-center flex flex-col'>
                  <img className='rounded-2xl h-[40vh]' src="https://img.freepik.com/premium-photo/buildings-against-sky_1048944-8963688.jpg" alt="" />

                </div>
              </div>
            </div>


            {/* div part 2 */}
            <div className=" p-6 font-serif justify-center flex items-center flex-col align-middle m-auto">
              <div className='justify-center flex items-center flex-col gap-10'>
                <h1 className=' flex flex-col text-4xl md:text-8xl '>Crafting
                  travel <div>
                    experiences
                  </div>
                </h1>
                <p className='md:w-[35rem] w-[20rem]'>
                  We are passionate about crafting extraordinary travel experiences that leave a lasting impact. With years of expertise, we have honed the art of live curating unique journeys that blend adventure, culture, and sustainability. Our mission is to connect travelers with the world's wonders while preserving its beauty for generations to come.
                </p>
              </div>

              <div className='md:pt-20 pt-5'>
                <div className='bg-black rounded-2xl  text-white flex '>


                  <Link to='/' className='flex flex-row hover:bg-white hover:text-black rounded-2xl transition duration-[2000ms]'> <button className='  p-2'>  Explore now   </button>
                    <IoIosArrowRoundForward className='justify-center flex items-center m-auto size-10 ' /> </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='md:h-[100vh] h-[100vh] justify-center flex items-center flex-col ' >

        <div className='relative  justify-center flex rounded'>
          <video autoPlay loop muted className='rounded-3xl h-[80vh]' src="https://cdn.prod.website-files.com/6704980959c22352c2589f32%2F671607bfdca693ca91fc2fa5_2941521-hd_1280_720_24fps-transcode.mp4"></video>

        </div>

        <div className='absolute justify-between flex flex-col  md:gap-[25rem] gap-36 m-auto w-[400px] md:w-[60vw] '>
          <h1 className='flex text-sm md:justify-end justify-end md:text-xl md:font-bold md:gap-2'>
            <IoLocationOutline className='md:text-3xl' /> Location Mountain Strait, Any State</h1>
          <h1 className='md:text-6xl text-white flex flex-row gap-3'>Our
            <div className='font-serif italic'>

              journey
            </div>
            in videos</h1>
        </div>






      </div>






      <Chatai />

      {/*  */}
      <Footer />

    </div>
  )
}

export default Aboute