import React from 'react'



const beliefs = [
    {
      title: 'Customer-Centric',
      description:
        "Being customer-centric is the compass that guides our travel services. We prioritize our customers' needs.",
    },
    {
      title: 'Sustainable Travel',
      description:
        'Committed to responsible and eco-conscious journeys, traveling the world with minimal footprints and pollutions.',
    },
    {
      title: 'Authentic Experiences',
      description:
        "We deliver journeys that immerse you in unforgettable encounter with the world's diverse cultures & landscapes.",
    },
    {
      title: 'Quality Guides',
      description:
        'Every journey will be led by knowledgeable, passionate experts who enhance your travel experience.',
    },
  ];



const Ourpage = () => {
  return (
    <>
      <div>
         {/* Beliefs Section */}
      <div className="h-screen w-[99vw] flex flex-row justify-between px-4">
        <div className="flex flex-col justify-center items-center w-1/2 px-[100px] my-[100px] text-xl">
          <h1 className="text-6xl text-center">
            Our true
            <div className="italic">beliefs</div>
            for your benefits
          </h1>
          <p className="mt-6 text-center">
            Our beliefs aren't just words; they are the foundation of every
            adventure we offer. With high commitment to sustainability,
            authenticity, and customer-centricity, we ensure that every trip you
            take with us is valuable.
          </p>
        </div>

        <div className="w-1/2 flex flex-col justify-center my-[100px] px-10 gap-6">
          {beliefs.map((item, index) => (
            <div key={index} className="border-2 border-gray-300 p-6 rounded-xl shadow-md bg-white">
              <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              <p className="text-base text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
    
{/* Beliefs Section */}
<div className="h-screen w-screen flex flex-row justify-between px-4">
        <div className="flex flex-col justify-center items-center w-1/2 px-[100px] my-[100px] text-xl">
          <h1 className="text-6xl text-center">
            Our true
            <div className="italic">beliefs</div>
            for your benefits
          </h1>
          <p className="mt-6 text-center">
            Our beliefs aren't just words; they are the foundation of every
            adventure we offer. With high commitment to sustainability,
            authenticity, and customer-centricity, we ensure that every trip you
            take with us is valuable.
          </p>
        </div>

        <div className="w-1/2 flex flex-col justify-center my-[100px] px-10 gap-6">
          {beliefs.map((item, index) => (
            <div key={index} className="border-2 border-gray-300 p-6 rounded-xl shadow-md bg-white">
              <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              <p className="text-base text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}


          export default Ourpage