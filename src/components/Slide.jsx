import React from 'react'

const Slide = ({image}) => {
  return (
    <div className=' '>
      <img
        src={image}
        alt=""
        className=" w-full     object-cover  h-[300px]  lg:h-[380px]"
      />
    </div>
  );
}

export default Slide
