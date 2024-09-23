import React from 'react';

const HeroVideo = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        muted
        autoPlay
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/medias/barcodebanner.mp4" type="video/mp4" />
        <source src="/medias/barcodebanner.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HeroVideo;
