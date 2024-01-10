import React from "react";
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Link } from "react-router-dom";
import vid2 from '../../src/pictures/vid2.mp4'
const Error = () => {
  return (
    <div>
    
     
      <section>
        <div className=" relative">
          <div
            
            className=" bg-cover bg-center  h-screen"
          >
           <video
            autoPlay
            loop
            muted
            className=" shadow-2xl w-full  h-full object-cover"
          >
            <source src={vid2} type="video/mp4 " className="  " />
          </video>
            <div className=" absolute bg-black inset-0 top-0 opacity-70 h-full"></div>
          </div>
        <div className=" flex justify-center  ">
              <div className="  absolute  top-[30%] md:top-[25%]  text-white text-center  px-6">
           <h2 className=" text-[4rem] leading-[4rem] md:leading-[8rem] md:text-[8rem] sl:text-[13rem] sl:leading-[13rem]  tracking-[1rem] text-[#8A6201]">4<span className=" text-white">0</span>4</h2>
           <h3 className=" text-2xl md:text-3xl lg:text-4xl py-3">There Is Nothing Here...</h3>
           <h4 className=" text-[0.9rem] py-3">maybe the page you are looking for is not found or never existed</h4>
          
               <div className=" pt-6">
                 <Link to="/">
                    <button className=" border border-white py-2 px-7 hover:bg-white hover:text-black rounded-full">
                  <div className=" flex items-center gap-3 ">
                      Back To Home 
                    <AiOutlineArrowRight className=" text-2xl"/>
                  </div>
                </button>
                 </Link>
                
               </div>
            
          </div>
        </div>
        </div>
      </section>
    
    </div>
  );
};

export default Error;
