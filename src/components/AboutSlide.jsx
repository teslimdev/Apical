import React from "react";

const AboutSlide = ({ image }) => {
  return (
    <div className="  ">
      <img src={image} alt="" className=" w-full md:w-[300px] lg:w-[350px]" />
    </div>
  );
};

export default AboutSlide;
