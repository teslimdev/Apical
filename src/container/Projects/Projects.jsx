import React from 'react'
import { Link } from "react-router-dom";
import pic3 from '../../../src/pictures/img3.jpeg'
import pic5 from "../../../src/pictures/img5.jpeg";
import pic4 from "../../../src/pictures/img4.jpeg";
import pic2 from "../../../src/pictures/img2.jpeg";
const Projects = () => {
  return (
    <div id="two">
      <div className=" pt-[20%] lg:pt-[10%] pb-16 lg:pb-28 px-6">
        <h1 className=" text-3xl md:text-4xl lg:text-7xl text-[#222222] sl:text-[5rem] 2xl:text-[6rem] font-bold text-center pb-10 lg:pb-16">
          Projects
        </h1>
        <div className="  grid  md:grid-cols-2    sl:px-0  m-auto gap-6 ">
          <Link to="/">
            <div className="relative ">
              <div className="  ">
                <img
                  src={pic3}
                  alt=""
                  className=" w-full h-[250px] lg:h-[500px]"
                />
                <div className=" flex justify-center">
                  <div className=" absolute  top-[30%]  z-10]  text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/">
            <div className="relative ">
              <div className="  ">
                <img
                  src={pic4}
                  alt=""
                  className=" w-full h-[250px] lg:h-[500px]"
                />
                <div className=" flex justify-center">
                  <div className=" absolute  top-[30%]  z-10]  text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/">
            <div className="relative ">
              <div className="  ">
                <img
                  src={pic5}
                  alt=""
                  className=" w-full h-[250px] lg:h-[500px]"
                />
                <div className=" flex justify-center">
                  <div className=" absolute  top-[30%]  z-10]  text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/">
            <div className="relative ">
              <div className="  ">
                <img
                  src={pic2}
                  alt=""
                  className=" w-full h-[250px] lg:h-[500px]"
                />
                <div className=" flex justify-center">
                  <div className=" absolute  top-[30%]  z-10]  text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/">
            <div className="relative ">
              <div className="  ">
                <img
                  src={pic5}
                  alt=""
                  className=" w-full h-[250px] lg:h-[500px]"
                />
                <div className=" flex justify-center">
                  <div className=" absolute  top-[30%]  z-10]  text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          
          <Link to="/">
            <div className="relative ">
              <div className="  ">
                <img
                  src={pic3}
                  alt=""
                  className=" w-full h-[250px] lg:h-[500px]"
                />
                <div className=" flex justify-center">
                  <div className=" absolute  top-[30%]  z-10]  text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects
