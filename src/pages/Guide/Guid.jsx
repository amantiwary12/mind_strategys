import { Link } from 'react-router-dom';
import React from 'react';
import { ChevronsRight } from 'lucide-react';

const Guid = () => {
  const homepage = () => {

  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 font-sans antialiased">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-md w-full">
        {/* Message indicating data will be available soon */}
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4 animate-pulse">
          Coming Soon!
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          We're working hard to bring you amazing content.
          <br />
          Soon, data will be available here. Thank you for your patience!
        </p>

        {/* Button to navigate to the homepage */}
        <Link to="/"> <button onClick={homepage} className='gap-2 inline-flex items-center px-10  py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105'>
          <h1>move to home page  </h1> <ChevronsRight />
        </button>
        </Link>

      </div>
    </div>
  );
};

export default Guid;

