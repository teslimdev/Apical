import React from 'react'

const Slider = ({image}) => {
  return (
    <div className="  ">
      <img
        src={image}
        alt=""
        className=" w-full lg:w-[500px] h-[350px]  md:h-[430px]  lg:h-[450px] "
      />
    </div>
  );
}

export default Slider
  