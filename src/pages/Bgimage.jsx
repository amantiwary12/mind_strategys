import React from 'react';

const Bgimage = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div>
        <img
          className="w-full h-auto object-cover"
          src="https://cdn.prod.website-files.com/6704980959c22352c2589f32/6705ec44c68e650e67f2b029_Newsletter%20iage.png"
          alt="Newsletter Background"
        />
      </div>

      {/* Form Overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center px-4 py-12">
        <div className="text-center text-white max-w-screen-lg">
          <h1 className="font-[Merriweather] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Ready to embark
            <div>on a new journey?</div>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white max-w-3xl mx-auto">
            Don't let your dream getaway remain a dream any longer. Take action now and let us
            craft your next unforgettable adventure. Join us in turning your travel fantasies into
            unforgettable realities.
          </p>
        </div>

        {/* Form Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md w-full max-w-2xl mt-10">
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col w-full">
                <label htmlFor="name" className="text-black mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="border border-gray-300 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="flex flex-col w-full">
                <label htmlFor="phone" className="text-black mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Your Phone"
                  className="border border-gray-300 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-black mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white w-full rounded-full p-3 font-semibold hover:bg-gray-800 transition-all"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Bgimage;
