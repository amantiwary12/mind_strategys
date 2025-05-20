import React from 'react';

const Video = () => {
  return (
    <div className="w-full bg-black">
      {/* Video Section */}
      <div className="min-h-screen flex justify-center items-center px-4 py-8 sm:px-6 md:px-10 relative">
        <div className="relative w-full max-w-6xl h-[60vh] sm:h-[70vh] md:h-[80vh] rounded-2xl overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            src="https://cdn.prod.website-files.com/6704980959c22352c2589f32%2F670dceb8af2398714a095e3a_6981302-sd_960_540_25fps-transcode.mp4"
          ></video>

          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center bg-black/40 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold italic text-white font-[PT Serif] leading-tight">
              Our Journey in Pictures
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white mt-4 max-w-xl">
              See what makes each experience with our trips exceptional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
