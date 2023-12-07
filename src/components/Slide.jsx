import React from 'react';

const Slide = ({ vid, isModalVideo }) => {
  const videoClassName = isModalVideo
    ? "w-full h-full object-cover cursor-pointer"
    : "w-full h-[350px] object-cover cursor-pointer";

  return (
    <div className=''>
      <video
        autoPlay
        muted
        loop
        className={videoClassName}
      >
        <source src={vid} type="video/mp4" />
      </video>
    </div>
  );
};

export default Slide;



