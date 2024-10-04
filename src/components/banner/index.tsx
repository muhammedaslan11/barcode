import React from 'react';

const HeroVideo = () => {
  return (
    <div className="relative w-full h-[calc(100vh-120px)] overflow-hidden">
      <video autoPlay muted playsInline loop preload="none" className='object-cover h-full w-full' src="https://aslan.pockethost.io/api/files/xmfjzrnn6nsa9rs/bltatlvkrrqouuk/barcodebanner_gpxgPYqpVM.mp4"></video>
    </div>
  );
};

export default HeroVideo;