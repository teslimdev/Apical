import React from "react";
import { Footer2, Header } from "../../components";
import vid1 from "../../../src/pictures/vid1.mp4";
import vid2 from "../../../src/pictures/vid2.mp4";

const Visualization = () => {
  return (
    <div>
      <section>
        <Header />
      </section>
      <section>
        <div className=" relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
          <video
            autoPlay
            muted
            loop
            className=" shadow-2xl w-full h-[300px] md:h-[400px] lg:h-[500px]   object-cover"
          >
            <source src={vid1} type="video/mp4 " className="  " />
          </video>
          <div className="   absolute bg-black w-full h-full top-0 inset-0 opacity-50">
            <div className=" flex justify-center">
              <div className="  absolute top-[40%] sl:top-[30%] ">
                <h2 className=" text-white sl:text-[7rem] lg:text-[5rem] text-center text-[2.5rem] md:text-[4rem] font-bold">
                  {" "}
                  Visualization
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" relative">
          <div>
            <video
              autoPlay
              muted
              loop
              className=" shadow-2xl w-full h-[630px] md:h-[550px]  sl:h-[500px]  bg-fixed  object-cover"
            >
              <source src={vid2} type="video/mp4 " className="  " />
            </video>
            <div className="  absolute bg-black top-0 inset-0 opacity-50 h-full transition ease-out duration-300 delay-100"></div>
          </div>
          <div className=" flex justify-center">
            <div className=" max-w-[1200px] text-white m-auto absolute top-[8%] md:top-[10%] sl:top-10 px-6 sl:px-0">
              <div className=" max-w-[500px] border-b-2 pb-2 border-white">
                <h2 className=" text-3xl">
                  3D <br /> VISUALIZATION .
                </h2>
              </div>
              <h2 className=" text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] py-3">
                MIMAR IS A PROVIDER OF 3D ARCHITECTURAL VISUALIZATION AND
                RENDERING SERVICES IN PAKISTAN AND IS NOW EXPANDING TO THE
                GLOBAL MARKET.
              </h2>
              <h2 className=" text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] py-3">
                WE, AS AN ARCHITECTURAL VISUALIZATION COMPANY, ALWAYS TRY TO
                MAKE YOUR DREAM PROJECT COME TO LIFE WITH TRUE COLORS.
              </h2>
              <h2 className=" text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] py-3">
                OUR ARCHITECTURAL VISUALIZATION STUDIO SPECIALIZES IN A WIDE
                RANGE OF ARCHITECTURAL SUB-SERVICES. HERE’S A TASTE OF WHAT WE
                DO UNDER ARCHITECTURAL VISUALIZATION:
              </h2>
              <ol className=" list-decimal pl-11 pt-3">
                <li>RENDERS,</li>
                <li>CINEMATICS,</li>
                <li>3D ON PLAN,</li>
                <li>3D ON A CONSTRUCTION SITE,</li>
                <li>PROPERTY EXPLORER,</li>
                <li>TERRAIN MAPPING</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" relative">
          <div>
            <video
              autoPlay
              muted
              loop
              className=" shadow-2xl w-full h-[320px] md:h-[400px] lg:h-[500px]  object-cover"
            >
              <source src={vid1} type="video/mp4 " className="  " />
            </video>
            <div className=" absolute top-0 h-full bg-black inset-0 opacity-70"></div>
          </div>
          <div className=" flex justify-center ">
            <div className=" absolute top-[40%] md:top-[50%] text-center max-w-[500px] w-full px-6">
              <h2 className="  text-[1.6rem] md:text-3xl text-white hover:text-[#8A6201] hover:border-[#8A6201] border-b-2  m-auto  pb-2">
                RENDERS
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" relative ">
          <div>
            <video
              autoPlay
              muted
              loop
              className=" shadow-2xl w-full h-[320px] md:h-[400px] lg:h-[500px]  object-cover"
            >
              <source src={vid2} type="video/mp4 " className="  " />
            </video>
            <div className=" absolute top-0 h-full bg-black inset-0 opacity-70"></div>
          </div>
          <div className=" flex justify-center ">
            <div className=" absolute  top-[40%] md:top-[50%]  text-center max-w-[500px] w-full px-6">
              <h2 className="  text-[1.6rem] md:text-3xl text-white hover:text-[#8A6201] hover:border-[#8A6201] border-b-2  m-auto  pb-2">
                CINEMATICS
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" relative">
          <div>
            <video
              autoPlay
              muted
              loop
              className=" shadow-2xl w-full h-[320px] md:h-[400px] lg:h-[500px]  object-cover"
            >
              <source src={vid1} type="video/mp4 " className="  " />
            </video>
            <div className=" absolute top-0 h-full bg-black inset-0 opacity-70"></div>
          </div>
          <div className=" flex justify-center ">
            <div className=" absolute  top-[40%] md:top-[50%]  text-center max-w-[500px] w-full px-6">
              <h2 className="  text-[1.6rem] md:text-3xl text-white hover:text-[#8A6201] hover:border-[#8A6201] border-b-2  m-auto  pb-2">
                3D ON PLAN
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" relative">
          <div>
            <video
              autoPlay
              muted
              loop
              className=" shadow-2xl w-full h-[320px] md:h-[400px] lg:h-[500px]  object-cover"
            >
              <source src={vid2} type="video/mp4 " className="  " />
            </video>
            <div className=" absolute top-0 h-full bg-black inset-0 opacity-70"></div>
          </div>
          <div className=" flex justify-center ">
            <div className=" absolute  top-[40%] md:top-[50%]  text-center max-w-[500px] w-full px-6">
              <h2 className=" text-[1.6rem] md:text-3xl text-white hover:text-[#8A6201] hover:border-[#8A6201] border-b-2  m-auto  pb-2">
                3D ON CONSTRUCTION SITE
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" relative">
          <div>
            <video
              autoPlay
              muted
              loop
              className=" shadow-2xl w-full h-[320px] md:h-[400px] lg:h-[500px]  object-cover"
            >
              <source src={vid1} type="video/mp4 " className="  " />
            </video>
            <div className=" absolute top-0 h-full bg-black inset-0 opacity-70"></div>
          </div>
          <div className=" flex justify-center ">
            <div className=" absolute  top-[40%] md:top-[50%]  text-center max-w-[500px] w-full px-6">
              <h2 className="  text-[1.6rem] md:text-3xl text-white hover:text-[#8A6201] hover:border-[#8A6201] border-b-2  m-auto  pb-2">
                PROPERTY EXPLORER
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" relative">
          <div>
            <video
              autoPlay
              muted
              loop
              className=" shadow-2xl w-full h-[320px] md:h-[400px] lg:h-[500px]  object-cover"
            >
              <source src={vid2} type="video/mp4 " className="  " />
            </video>
            <div className=" absolute top-0 h-full bg-black inset-0 opacity-70"></div>
          </div>
          <div className=" flex justify-center  ">
            <div className=" absolute  top-[40%] md:top-[50%]  text-center max-w-[500px] w-full px-6 ">
              <h2 className=" text-[1.6rem] md:text-3xl text-white hover:text-[#8A6201] hover:border-[#8A6201] border-b-2  m-auto  pb-2">
                TERRAIN MAPPING
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className=" relative  ">
          <div className=" ">
           <video
            autoPlay
            muted
            loop
            className=" shadow-2xl w-full h-[300px] md:h-[400px]   object-cover"
          >
            <source src={vid2} type="video/mp4 " className="  " />
          </video>
            <div className=" bg-black  absolute inset-0  h-[300px] md:h-[400px]      opacity-50"></div>
          </div>
          <div className=" flex justify-center">
            <div className=" absolute top-10 md:top-20 lg:top-32">
              <div className=" text-center text-white">
                <h2 className=" text-2xl font-semibold   first-line:text-[#8A6201] sl:first-line:text-3xl">
                  Subscribe for Members <br /> to Receive Latest News and
                  Special Offers
                </h2>
              </div>
              <form
                action=""
                className=" flex flex-col gap-6 lg:gap-0   lg:flex-row items-center md:max-w-[700px] pt-6 px-6  md:px-0 "
              >
                <div className=" w-full">
                  <input
                    type="email"
                    placeholder=" Your Email..."
                    className=" py-3 w-full pl-4 shadow-lg text-[#222222] placeholder:text-[#8A6201]  border-none outline-none"
                  />
                </div>
                <div className=" w-full lg:w-fit">
                  <button className=" bg-[#222222] py-3 w-full  lg:w-fit lg:px-7 text-white   hover:bg-[#444444] shadow-lg  ">
                    SUBSCRIBE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
     

      <section>
        <Footer2 />
      </section>
    </div>
  );
};

export default Visualization;
