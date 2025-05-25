import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const First = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="min-h-screen w-full relative">
            {/* Navigation Bar */}
            <nav className="flex items-center justify-between px-6 py-4 w-full z-50 fixed top-0 left-0 bg-transparent">
                <h1 className="text-2xl text-white font-bold cursor-pointer" style={{ textShadow: '2px 2px 4px black' }}>
                    <Link to="/">Mind-strategy</Link>
                </h1>

                {/* Hamburger Icon for Mobile */}
                <button
                    className="lg:hidden text-3xl text-white z-50"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                {/* Navigation Links */}
                <ul
                    className={`flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-10 bg-black/70 lg:bg-transparent text-white text-lg absolute lg:static top-full left-0 w-full lg:w-auto px-6 py-4 lg:py-0 transition-all duration-300 ease-in-out ${menuOpen ? 'block' : 'hidden lg:flex'}`}
                    style={{ textShadow: '2px 2px 4px white' }}
                >
                    <li className="hover:bg-gray-900 px-4 py-2 rounded hover:text-white w-full lg:w-auto">
                        <Link to="/tips">Trip</Link>
                    </li>
                    <li className="hover:bg-gray-900 px-4 py-2 rounded hover:text-white w-full lg:w-auto">
                        <Link to="/aboute">Aboute</Link>
                    </li>
                    <li className="hover:bg-gray-900 px-4 py-2 rounded hover:text-white w-full lg:w-auto">
                        <Link to="/Gallery">Gallery</Link>
                    </li>
                    <li className="hover:bg-gray-900 px-4 py-2 rounded hover:text-white w-full lg:w-auto">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* Banner Image */}
            <div className="relative">
                <img
                    className="h-[100vh] w-full object-cover"
                    src="https://cdn.prod.website-files.com/6704980959c22352c2589f32/67049fbdebc8253b28f774e0_jjj.png"
                    alt="banner"
                />

                {/* Hero Text */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-4">
                    <div className="bg-white/50 backdrop-blur-md rounded-2xl w-fit mx-auto p-1 text-sm sm:text-base md:text-xl px-4 mb-4">
                        The Best Place to Start Your Adventure
                    </div>

                    <h1 className="text-xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-sans leading-tight transition-transform duration-[2000ms] hover:translate-y-[-10px]">
                        Embark on <i>Journey</i><br />
                        not <i>just</i> destinations<br />
                        with our <i>trips.</i>
                    </h1>
                </div>

                {/* CTA Section */}
                <div className="absolute bottom-10 w-full px-4 sm:px-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
                    <h2 className="text-base sm:text-lg md:text-xl text-center md:text-left">
                        Unlock the doors to diverse cultures, awe-inspiring landscapes,<br className="hidden sm:block" />
                        and thrilling adventures with us.
                    </h2>
                    <button className="border-white border-2 px-6 py-2 rounded-2xl hover:text-black hover:bg-white transition duration-500">
                        Explore now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default First;
