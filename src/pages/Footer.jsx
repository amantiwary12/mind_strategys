import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10 mt-2">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Column 1 */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Company</h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Building journeys, not just destinations. Explore with us.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
            <li><a href="/home" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/trips" className="hover:text-white transition">Trips</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex flex-col sm:flex-row sm:gap-6 gap-2 text-gray-400 text-sm sm:text-base">
            <a href="#" className="hover:text-blue-400 transition">Facebook</a>
            <a href="#" className="hover:text-pink-400 transition">Instagram</a>
            <a href="#" className="hover:text-blue-300 transition">Twitter</a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-500 text-xs sm:text-sm mt-10">
        © 2025 Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
