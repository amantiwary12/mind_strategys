import React from 'react'

const Video = () => {
    return (
        <div>
            {/* Video Section */}
            <div className="h-screen flex justify-center items-center relative">
                <div className="relative w-[80%] h-[80%]">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover rounded-2xl"
                        src="https://cdn.prod.website-files.com/6704980959c22352c2589f32%2F670dceb8af2398714a095e3a_6981302-sd_960_540_25fps-transcode.mp4"
                    ></video>

                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center">
                        <h1 className="text-7xl font-bold italic text-white font-[PT Serif]">
                            Our Journey in Pictures
                        </h1>
                        <p className="text-lg text-white mt-4">
                            See what makes each experience with our trips exceptional.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Video

