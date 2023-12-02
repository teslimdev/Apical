import React  from 'react'

const Slide = ({vid}) => {

 
  return (
    <div className=' '>
      <video
              autoPlay
              muted
              loop
              className=" shadow-2xl w-full h-[320px] md:h-[400px]   object-cover"
            >
              <source src={vid} type="video/mp4 " className="  " />
            </video>
      
  
    </div>
  );
}

export default Slide
