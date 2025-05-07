import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const First = () => {

    const [ menuOpen, setMenuOpen ] = useState( false );



    return (
        <div>
            <div className=" h-[100vh] w-[99vw]">
                <div className="absolute">
                    <nav className="flex items-center justify-between px-6 py-4 w-full z-50 absolute  ">
                        <div>
                            <h1 className="text-2xl  text-white  font-bold cursor-pointer" style={{ textShadow: '2px 2px 4px black' }}>
                                
                                <Link to="/">Mind-strategy</Link>
                            </h1>
                        </div>

                        {/* Hamburger button (visible on mobile) */}
                        <button
                            className="lg:hidden text-3xl"
                            onClick={() => setMenuOpen( !menuOpen )}
                        >
                            ☰
                        </button>

                        {/* Nav links */}
                        <ul
                            className={`flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 transition-all duration-300 ease-in-out absolute lg:static  top-[70px] left-0 w-full lg:w-auto px-6 py-4 lg:py-0 lg:px-0 shadow-lg lg:shadow-none ${menuOpen ? 'block' : 'hidden lg:flex'
                                }`} style={{ textShadow: '2px 2px 4px white     ' }}
                        >
                            <li className="hover:bg-gray-900 px-4 py-2 rounded hover:text-white">
                                <Link to="/tips">Trip</Link>
                            </li>
                            <li className="hover:bg-gray-900 px-4 py-2 rounded hover:text-white">
                                <Link to="/aboute">Aboute</Link>
                            </li>
                            <li className="hover:bg-gray-900 px-4 py-2 rounded hover:text-white">
                                <Link to="/Gallery">Gallery</Link>
                            </li>
                            <li className="hover:bg-gray-900 px-4 py-2 rounded hover:text-white">
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="relative h-fit">
                        <img
                            className="z-1 h-[100vh] w-[99vw]"
                            src="https://cdn.prod.website-files.com/6704980959c22352c2589f32/67049fbdebc8253b28f774e0_jjj.png"
                            alt="banner"
                        />
                    </div>
                </div>

                <span className=" flex flex-col relative top-[12rem]">
                    <div className="justify-center m-auto text-center">
                        <div className="bg-white/50 backdrop-blur-md rounded-2xl w-fit p-1 m-auto text-xl px-4">
                            The Best Place to Start Your Adventure
                        </div>
                        <h1 className="text-8xl text-white font-sans transform translate-y-10 hover:translate-y-0 transition-transform duration-[2000ms]">
                            Embark on <i> Journey </i><br />
                            not<i>just</i> destinations <br />
                            with our<i>trips.</i>
                        </h1>
                    </div>

                    <div className="flex justify-between text-white p-20">
                        <h2>
                            Unlock the doors to diverse cultures, awe-inspiring landscapes,<br />
                            and thrilling adventures with us.
                        </h2>
                        <button className="border-white border-2 px-8 flex items-center rounded-2xl hover:text-black hover:bg-white transition duration-[1000ms]">
                            Explore now
                        </button>
                    </div>
                </span>
            </div>
        </div>
    )
}

export default First
