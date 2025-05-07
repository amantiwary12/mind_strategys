import React, { useState } from 'react';
import './Galley.css';
import { Link } from 'react-router-dom';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const containerStyle = {
    width: '100%',
    height: '60vh',
};

const center = {
    lat: 26.7190272,
    lng: 88.4178944,
};

const Gallery = () => {
    const images = [
        'https://cdn.prod.website-files.com/6704980959c22352c2589f32/671611c78faccaa23be4282b_Culture%201-p-1080.jpg',
        'https://cdn.prod.website-files.com/6704980959c22352c2589f32/67161de2665b020f8029c889_Culture%203-p-1080.jpg',
        'https://cdn.prod.website-files.com/6704980959c22352c2589f32/67161d693da13cae64a53938_Culture%202-p-1080.jpg',
    ];

    const [ menuOpen, setMenuOpen ] = useState( false );

    return (
        <div className="w-full overflow-x-hidden">
            {/* Navbar */}
            <nav className="flex items-center justify-between px-4 py-3 w-full z-50 bg-white shadow-md fixed top-0 left-0">
                <h1 className="text-xl sm:text-2xl font-bold">
                    <Link to="/">Mind-strategy</Link>
                </h1>
                <button className="lg:hidden text-2xl" onClick={() => setMenuOpen( !menuOpen )}>
                    ☰
                </button>
                <ul
                    className={`lg:flex flex-col lg:flex-row gap-4 lg:gap-8 items-start lg:items-center absolute lg:static bg-white w-full lg:w-auto px-6 py-4 lg:py-0 top-[60px] left-0 shadow-md lg:shadow-none transition-all duration-300 ${menuOpen ? 'block' : 'hidden lg:flex'}`}
                >
                    {[ '/guid', '/aboute', '/Gallery', '/contact' ].map( ( path, i ) => (
                        <li key={i} className="hover:bg-gray-900 px-4 py-2 rounded hover:text-white w-full lg:w-auto">
                            <Link to={path}>{path.replace( '/', '' ) || 'Home'}</Link>
                        </li>
                    ) )}
                </ul>
            </nav>

            {/* Hero Section */}
            <div className="pt-24 pb-12 flex justify-center items-center relative">
                <img
                    className="w-full max-h-[70vh] object-cover"
                    src="https://cdn.prod.website-files.com/6704980959c22352c2589f32/671611365fd5cfb2ad589b20_BG%20Gallery-p-1600.png"
                    alt="Gallery Background"
                />
                <div className="absolute text-white text-3xl sm:text-6xl italic text-center">
                    <h1 className="flex gap-2 flex-wrap justify-center">
                        Visual <span className="font-serif">Gallery</span>
                    </h1>
                </div>
            </div>

            {/* Google Map */}
            <div className="w-full flex justify-center items-center py-8 px-4">
                <LoadScript googleMapsApiKey="AIzaSyAc5YcvUBhTJjkAVmcqM5_aSbgdpAXeC60">
                    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}></GoogleMap>
                </LoadScript>
            </div>

            {/* Image Slider Section */}
            <div className="py-12 px-4">
                <div className="flex justify-center items-center">
                    <h1 className="text-3xl sm:text-5xl font-semibold flex gap-2 text-center">
                        Journey in <span className="font-serif italic">Culture</span>
                    </h1>
                </div>
                <div className="w-full max-w-5xl mx-auto mt-8">
                    <Swiper
                        modules={[ Autoplay ]}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: true }}
                        className="mySwiper"
                    >
                        {images.map( ( url, index ) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={url}
                                    alt={`Slide ${index}`}
                                    className="w-full h-[50vh] object-cover rounded-lg"
                                />
                            </SwiperSlide>
                        ) )}
                    </Swiper>
                </div>
            </div>

            <div className='h-[100%] w-[99%] flex justify-center items-center absolute'>

                <div>
                    <video autoPlay loop muted src="https://cdn.prod.website-files.com/6704980959c22352c2589f32%2F67371c7f810150f196bbf64a_lv_0_20241115170203-transcode.mp4"></video>
                    
                </div>
            </div>
        </div>
    );
};

export default Gallery;