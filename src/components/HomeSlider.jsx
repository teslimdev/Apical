import React from 'react'

const HomeSlider = ({image}) => {
  
  return (
    <div  className=' py-10 '>
      <img
        src={image}
        alt=""
        className="  h-[250px]  w-full "
      />
      <p className=' pt-3 '>18 may, 2023 / insights</p>
      <h2 className=' pt-2 text-2xl'>Smart Cities Of Tomorrow</h2>
    </div>
  );
}

export default HomeSlider
