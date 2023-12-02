import React from 'react'

const HomeSlider = ({vid}) => {
  
  return (
    <div  className=' py-10 '>
      <video
              autoPlay
              muted
              loop
              className=" shadow-2xl  h-[250px]  w-full  object-cover"
            >
              <source src={vid} type="video/mp4 " className="  " />
            </video>
     
      <p className=' pt-3 '>18 may, 2023 / insights</p>
      <h2 className=' pt-2 text-2xl'>Smart Cities Of Tomorrow</h2>
    </div>
  );
}

export default HomeSlider
