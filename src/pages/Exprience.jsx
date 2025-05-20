import React from 'react';

const packages = [
  {
    title: 'Amazon Rainforest Expedition 7 days, 6 nights',
    price: '$799',
    image:
      'https://cdn.prod.website-files.com/670de0ed891c270ca4643299/671068ed4c0245409e1e5c3c_Trip%2009%20Cover-p-500.png',
  },
  {
    title: 'Roma City Adventure 5 days, 4 nights',
    price: '$799',
    image:
      'https://cdn.prod.website-files.com/670de0ed891c270ca4643299/67106640be89304a2b446ab1_Trip%2007%20Cover-p-500.png',
  },
  {
    title: 'Historic Mediterranean Voyage 5 days, 4 nights',
    price: '$1899',
    image:
      'https://cdn.prod.website-files.com/670de0ed891c270ca4643299/671065f227b3e30175427534_Trip%2006%20Cover-p-500.png',
  },
  {
    title: 'Wildlife Safari Expedition',
    price: '$1899',
    image:
      'https://cdn.prod.website-files.com/670de0ed891c270ca4643299/6710666d6757aea0fab3e666_Trip%2008%20Cover-p-500.png',
  },
];

const Exprience = () => {
  return (
    <div className="w-full bg-white px-4 sm:px-6 md:px-10 py-12">
      <section className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <h1 className="text-3xl sm:text-5xl font-bold text-center md:text-left">
            Must Experience Packages
          </h1>
          <div className="max-w-xl text-center md:text-left">
            <p className="text-base sm:text-lg">
              Indulge in our carefully crafted packages to immerse you in the most
              captivating and transformative travel adventures.
            </p>
            <div className="pt-4 text-sm sm:text-base font-semibold">
              <a href="/" className="underline hover:text-blue-500">
                See All Packages
              </a>
            </div>
          </div>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center">
          {packages.map((pkg, index) => (
            <a key={index} href="/" className="group w-full max-w-[300px]">
              <div className="relative overflow-hidden rounded-2xl transform transition-transform duration-700 group-hover:scale-105">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-72 object-cover rounded-2xl"
                />
                <div className="absolute bottom-0 left-0 w-full text-white p-4 bg-black/40 backdrop-blur-md rounded-b-2xl">
                  <p className="text-sm truncate">{pkg.title}</p>
                  <h1 className="font-bold">{pkg.price}</h1>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Exprience;
