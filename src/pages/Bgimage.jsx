import React from 'react'

const Bgimage = () => {
    return (
        <div>

            <div className="w-[99vw] relative">
                {/* Background Image */}
                <div>
                    <img
                        className="w-screen h-full"
                        src="https://cdn.prod.website-files.com/6704980959c22352c2589f32/6705ec44c68e650e67f2b029_Newsletter%20iage.png"
                        alt="Newsletter Background"
                    />
                </div>

                {/* Form Overlay */}
                <div className="absolute top-[6rem] w-full">
                    <div className="flex flex-col justify-center items-center text-center">
                        <h1 className="font-[Merriweather] text-[4.75rem] px-[27rem] leading-tight">
                            Ready to embark
                            <div className="mt-[-45px]">on a new journey?</div>
                        </h1>
                        <p className="leading-[1.3] px-[27rem] text-center mt-4">
                            Don't let your dream getaway remain a dream any longer. Take action now and let us craft your next unforgettable adventure. Join us in turning your travel fantasies into unforgettable realities.
                        </p>
                    </div>

                    {/* Form Box */}
                    <div className="max-w-[50rem] mx-auto bg-white rounded-3xl p-10 shadow-md relative top-[5rem]">
                        <form className="space-y-6">
                            <div className="flex gap-6">
                                <div className="flex flex-col w-full">
                                    <label htmlFor="name" className="text-black mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Your Name"
                                        className="border border-gray-300 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-black"
                                    />
                                </div>

                                <div className="flex flex-col w-full">
                                    <label htmlFor="phone" className="text-black mb-2">Phone Number</label>
                                    <input
                                        type="number"
                                        id="phone"
                                        placeholder="Your Phone"
                                        className="border border-gray-300 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-black"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-black mb-2">Email</label>
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
        </div>
    )
}

export default Bgimage
