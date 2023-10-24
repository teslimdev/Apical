import React from "react";
import { Footer } from "../../components";
import pic9 from "../../../src/pictures/img9.jpeg";
import { AiOutlineArrowRight} from 'react-icons/ai'
const Interior = () => {
  return (
    <div>
      <section>
        <div
          style={{ backgroundImage: `url(${pic9})` }}
          className=" min-h-[350px] md:min-h-[400px] lg:min-h-[500px] bg-cover bg-center"
        >
          <div className=" bg-black  absolute inset-0  h-[350px] md:h-[400px]  lg:h-[500px]     opacity-70">
            <div className=" pt-[40%] md:pt-[20%] lg:pt-[15%] sl:pt-[10%] text-center">
              <h2 className=" text-white lg:text-[7rem] text-[3rem] md:text-[5rem] font-bold">
                {" "}
                Interior Designs
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f2f2f2]">
       <div className=" max-w-[1200px] m-auto py-20 px-6 sl:px-0">
         <div className=" grid lg:grid-cols-2  place-items-center  sl:place-items-start  gap-10 sl:gap-20">
          <div className=" lg:max-w-[650px] ">
            <div className=" text-center lg:text-start">
              <h2 className=" text-[1.6rem] md:text-[2rem]  lg:text-[2.7rem] lg:leading-[3rem] font-bold first-line:text-[#8A6201]  text-[#222222]">Creative Solutions <br/> by Professional Designers</h2>
              <p className=" py-6">
                Cras vel cursus libero. Vestibulum porttitor nunc enim, quis
                congue leo fringilla ut. Quisque in lacus lacus. Nunc malesuada
                nisi at porta convallis. In posuere interdum erat, et bibendum
                arcu. Etiam quis viverra diam.
              </p>
            </div>
            <div className=" grid grid-cols-3 max-w-fit gap-6 m-auto  ">
              <img src={pic9} alt="" className="  w-full sl:w-[180px]  lg:h-[200px] sl:h-[250px] md:h-[250px]" />
               <img src={pic9} alt="" className="  w-full sl:w-[180px] ] lg:h-[200px] sl:h-[250px] md:h-[250px]" />
                <img src={pic9} alt=""   className="  w-full sl:w-[180px]  lg:h-[200px] sl:h-[250px] md:h-[250px]"/>
            </div>
            <div className=" pt-8 flex justify-center lg:justify-start">
             <button className=" border text-black py-3 px-8  flex  gap-4 border-black   place-items-center  hover:bg-[#222222] hover:text-white text-sm">
                Read More
                <AiOutlineArrowRight className=" "></AiOutlineArrowRight>
              </button>
            </div>
          </div>
          <div className=" md:max-w-[450px]">
            <img src={pic9} alt=""  className="  md:w-[450px] md:h-[600px]"/>
          </div>
        </div>
       </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Interior;
