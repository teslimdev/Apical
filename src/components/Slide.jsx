import React from 'react';

const Slide = ({ vid }) => {
  return (
    <div className=''>
      <video
        autoPlay
        muted
        loop
        className="swiper-video w-full h-[100vh] cursor-pointer object-cover"
      >
        <source src={vid} type="video/mp4" />
      </video>
    </div>
  );
};

export default Slide;

