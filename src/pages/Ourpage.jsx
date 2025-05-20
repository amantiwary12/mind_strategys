import React from 'react';

const beliefs = [
  {
    title: 'Customer-Centric',
    description:
      "Being customer-centric is the compass that guides our travel services. We prioritize our customers' needs.",
  },
  {
    title: 'Sustainable Travel',
    description:
      'Committed to responsible and eco-conscious journeys, traveling the world with minimal footprints and pollution.',
  },
  {
    title: 'Authentic Experiences',
    description:
      "We deliver journeys that immerse you in unforgettable encounters with the world's diverse cultures & landscapes.",
  },
  {
    title: 'Quality Guides',
    description:
      'Every journey will be led by knowledgeable, passionate experts who enhance your travel experience.',
  },
];

const Ourpage = () => {
  return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Column */}
        <div className="flex-1 flex flex-col justify-center text-center lg:text-left px-4">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Our true <span className="italic block">beliefs</span> for your benefits
          </h1>
          <p className="mt-6 text-gray-700 text-base sm:text-lg">
            Our beliefs aren't just words; they are the foundation of every adventure we offer.
            With high commitment to sustainability, authenticity, and customer-centricity,
            we ensure that every trip you take with us is valuable.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-6 px-4">
          {beliefs.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 p-6 rounded-xl shadow-md bg-white transition hover:shadow-lg"
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-2">{item.title}</h2>
              <p className="text-sm sm:text-base text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ourpage;
