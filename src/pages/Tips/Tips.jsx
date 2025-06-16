import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Chatai from '../Chatai/Chatai';


const Tips = () => {

  const [ menuOpen, setMenuOpen ] = useState( false );


  const [ tours, setTours ] = useState( [] );

  // Mock API call
  useEffect( () => {



    const fetchTours = async () => {
      const data = [

        {
          "id": 1,
          "destination": "Manali, Himachal Pradesh",
          "duration": "5 Days / 4 Nights",
          "price": 14999,
          "packageType": "Adventure",
          image: 'https://cdn.prod.website-files.com/6704980959c22352c2589f32/6716efc40cd3dc560ef01ab9_Journey%202-p-500.png',
          "rating": 4.7,
          "includes": [ "Hotel,", "Sightseeing,", "Transport,", "Breakfast" ]
        },
        {
          "id": 2,
          "destination": "Goa",
          "duration": "4 Days / 3 Nights",
          "price": 12999,
          image: 'https://cdn.prod.website-files.com/670de0ed891c270ca4643299/6710649d3ff4a5f72390a7b3_Trip%2001%20Cover-p-500.png',
          "packageType": "Beach",
          "rating": 4.5,
          "includes": [ "Resort,", "Water Sports,", "Airport Pickup" ]
        },
        {
          "id": 3,
          "destination": "Kerala Backwaters",
          "duration": "6 Days / 5 Nights",
          "price": 17999,
          image: 'https://cdn.prod.website-files.com/670de0ed891c270ca4643299/67106535be89304a2b436fc8_Trip%2002%20Cover-p-500.png',
          "packageType": "Romantic",
          "rating": 4.8,
          "includes": [ "Houseboat,", "Meals,", "Local Tour,", "Hotel Stay" ]
        },
        {
          "id": 4,
          "destination": "Leh-Ladakh",
          "duration": "7 Days / 6 Nights",
          "price": 22999,
          "packageType": "Adventure",
          image: 'https://cdn.prod.website-files.com/670de0ed891c270ca4643299/671065a338dc662a34bb2a24_Trip%2003%20Cover-p-500.png',
          "rating": 4.9,
          "includes": [ "Bike Ride,", "Tent Stay,", "Guide,", "Meals" ]
        },
        {
          "id": 5,
          "destination": "Jaipur, Rajasthan",
          "duration": "3 Days / 2 Nights",
          "price": 9999,
          "packageType": "Cultural",
          image: 'https://cdn.prod.website-files.com/670de0ed891c270ca4643299/671065c6a336670f81df2fc2_Trip%2005%20Cover-p-500.png',
          "rating": 4.3,
          "includes": [ "Hotel,", "Sightseeing,", "Transport," ]
        }

        //   {
        //     id: 1,
        //     title: 'Explore Bali',
        //     description: 'Experience the tropical paradise of Bali.',
        //     image: 'https://cdn.prod.website-files.com/670de0ed891c270ca4643299/671065c6a336670f81df2fc2_Trip%2005%20Cover-p-500.png',
        //     price: '$1299'
        //   },
        //   {
        //     id: 2,
        //     title: 'Swiss Alps Adventure',
        //     description: 'Enjoy snow-capped peaks and luxury resorts.',
        //     image: 'https://cdn.prod.website-files.com/670de0ed891c270ca4643299/671065a338dc662a34bb2a24_Trip%2003%20Cover-p-500.png',
        //     price: '$1299'
        //   },
        //   {
        //     id: 3,
        //     title: 'Safari in Kenya',
        //     description: 'Witness the majestic wildlife in Kenya.',
        //     image: 'https://cdn.prod.website-files.com/670de0ed891c270ca4643299/67106535be89304a2b436fc8_Trip%2002%20Cover-p-500.png',
        //     price: '$999'
        //   },
        //   {
        //     id: 4,
        //     title: 'Discover Japan',
        //     description: 'From Tokyo to Kyoto, immerse in Japanese culture.',
        //     image: 'https://cdn.prod.website-files.com/670de0ed891c270ca4643299/6710649d3ff4a5f72390a7b3_Trip%2001%20Cover-p-500.png',
        //     price: '$1199'
        //   },
        //   {
        //     id: 5,
        //     title: 'Greek Islands Tour',
        //     description: 'Sail the blue waters and explore ancient ruins.',
        //     image: 'https://cdn.prod.website-files.com/6704980959c22352c2589f32/6716efc40cd3dc560ef01ab9_Journey%202-p-500.png',
        //     price: '$10'
        //   },
        //   {
        //     id: 6,
        //     title: 'Greek Islands Tour',
        //     description: 'Sail the blue waters and explore ancient ruins.',
        //     image: 'https://www.tncholidays.com/images/packages/15693975383.jpg',
        //     price: '$99'
        //   },
        //   {
        //     id: 7,
        //     title: 'Greek Islands Tour',
        //     description: 'Sail the blue waters and explore ancient ruins.',
        //     image: 'https://www.tncholidays.com/images/places/leh-ladakh.jpg',
        //     price: '$99'
        //   },
        //   {
        //     id: 8,
        //     title: 'Greek Islands Tour',
        //     description: 'Sail the blue waters and explore ancient ruins.',
        //     image: 'https://www.tncholidays.com/images/packages/1568103073s7.jpg',
        //     price: '$109'
        //   },
      ];

      setTours( data );
    };

    fetchTours();
  }, [] );

  return (
    <div className='bg-black'>
      <div>
        <nav className="flex items-center justify-between px-6 py-4 w-full z-50 absolute bg-white shadow-md">
          <div>
            <h1 className="text-2xl font-bold cursor-pointer " >
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
            className={`flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 transition-all duration-300 ease-in-out absolute lg:static bg-white top-[70px] left-0 w-full lg:w-auto px-6 py-4 lg:py-0 lg:px-0 shadow-lg lg:shadow-none ${menuOpen ? 'block' : 'hidden lg:flex'
              }`}
          >
            <li className="hover:bg-gray-900 px-4 py-2 rounded hover:text-white">
              <Link to="/guid">Guide</Link>
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
      </div>

      <div className="px-6 py-10 bg-gray-100 min-h-screen">

        <h1 className="text-7xl italic text-center mb-20 pt-20">Top Tour Packages available  </h1>

        <Chatai />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {tours.map( ( tour ) => (
            <div
              key={tour.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300" > <Link to="/">
                <img src={tour.image} alt={tour.title} className="w-full h-80 object-cover" />
                <div className="p-4">
                  
                  <h2 className="text-xl font-semibold mb-2">{tour.destination}</h2>
                  <p className="text-gray-600 mb-3 "><p>Added-</p>{ tour.includes}</p>
                  <p className="text-gray-600 mb-3 flex gap-2"><p>rating</p>{ tour.rating}</p>
                  <p className="text-gray-600 mb-3 gap-2">{ tour.duration}</p>
                  <span className="text-black font-bold">{tour.price}</span>
                </div>
              </Link>
            </div>
          ) )}
        </div>
      </div>
    </div>
  );
};

export default Tips;
