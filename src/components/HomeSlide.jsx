import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight} from 'react-icons/ai'
const HomeSlide = ({image,text}) => {
  return (
    <div className=" relative min-h-[320px] md:h-[500px] lg:min-h-[600px]">
    <video  autoPlay muted loop playsInline className=" shadow-2xl w-full h-[400px] md:h-[500px] lg:h-[600px]  object-cover">
            <source src={image} type="video/mp4 "  className='  '/>
          </video>
      <div className="  bg-black  absolute inset-0    h-full     opacity-60">
        <div className=" lg:max-w-[950px] sl:max-w-[1200px] m-auto px-6 lg:px-0 pt-[10%] lg:pt-[7%]">
          <h2 className=" text-white text-5xl sl:text-[5rem] sl:leading-[5rem] sl:max-w-[500px]">
            {text}
          </h2>
          <div className=" pt-6 lg:pt-12 w-fit">
            <Link to="/Projects">
              <button className=" border text-white py-2 px-8 rounded-full flex items-center gap-4  hover:bg-white hover:text-black text-xl">
                View Projects
                <AiOutlineArrowRight className=" "></AiOutlineArrowRight>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSlide
