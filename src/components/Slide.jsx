import React from 'react';

const Slide = ({ vid, isModalVideo }) => {
  const videoClassName = isModalVideo
    ? "swiper-slide w-full h-full cursor-pointer"
    : "w-full h-[350px] object-cover cursor-pointer";

  return (
    <div className={videoClassName}>
      <video autoPlay muted loop className="w-full h-full object-cover">
        <source src={vid} type="video/mp4" />
      </video>
    </div>
  );
};

export default Slide;



