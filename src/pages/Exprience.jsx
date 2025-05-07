import React from 'react'

const packages = [
    {
      title: "Amazon Rainforest Expedition 7 days, 6 nights",
      price: "$799",
      image:
        "https://cdn.prod.website-files.com/670de0ed891c270ca4643299/671068ed4c0245409e1e5c3c_Trip%2009%20Cover-p-500.png",
    },
    {
      title: "Roma City Adventure 5 days, 4 nights",
      price: "$799",
      image:
        "https://cdn.prod.website-files.com/670de0ed891c270ca4643299/67106640be89304a2b446ab1_Trip%2007%20Cover-p-500.png",
    },
    {
      title: "Historic Mediterranean Voyage 5 days, 4 nights",
      price: "$1899",
      image:
        "https://cdn.prod.website-files.com/670de0ed891c270ca4643299/671065f227b3e30175427534_Trip%2006%20Cover-p-500.png",
    },
    {
      title: "Wildlife Safari Expedition",
      price: "$1899",
      image:
        "https://cdn.prod.website-files.com/670de0ed891c270ca4643299/6710666d6757aea0fab3e666_Trip%2008%20Cover-p-500.png",
    },
  ];

const Exprience = () => {
  return (
    <div>
      <section className="h-screen w-[99vw] flex flex-col overflow-hidden px-6 py-12">
      <div className="flex flex-col md:flex-row justify-evenly items-center mb-10">
        <div className="text-4xl md:text-7xl pl-10 mb-6 md:mb-0 m-[13px]">
          <h1>Must Experience Packages</h1>
        </div>
        <div className="max-w-xl text-center md:text-left">
          <p className="text-lg">
            Indulge in our carefully crafted packages to immerse you in the most
            captivating and transformative travel adventures.
          </p>
          <div className="pt-8 text-[16px] font-bold">
            <a href="/" className="underline hover:text-blue-500">See All Packages</a>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {packages.map((pkg, index) => (
          <a key={index} href="/" className="group">
            <div className="relative w-[300px] h-[450px] overflow-hidden rounded-2xl transform transition-transform duration-1000 group-hover:scale-110">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-[400px] object-cover rounded-2xl"
              />
              <div className="absolute top-[21rem] left-0 text-white mx-2 flex flex-col backdrop-blur-sm bg-black/30 p-2 rounded-b-2xl">
                <p className="text-sm">{pkg.title}</p>
                <h1 className="font-bold">{pkg.price}</h1>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
    </div>
  )
}

export default Exprience
