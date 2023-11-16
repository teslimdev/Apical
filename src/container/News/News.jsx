import React from "react";
import { Link } from "react-router-dom";
import pic9 from "../../../src/pictures/img9.jpeg";
import { Footer2, Header } from "../../components";
import vid1 from '../../../src/pictures/vid1.mp4'
const News = () => {
  return (
    <div className="   ">
      <section>
        <Header />
      </section>

      <section>
        <div className=" relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
          <video
            autoPlay
            muted
            className=" shadow-2xl w-full h-[300px] md:h-[400px] lg:h-[500px]  object-cover"
          >
            <source src={vid1} type="video/mp4 " className="  " />
          </video>
          <div className="   absolute bg-black w-full h-full top-0 inset-0 opacity-50">
               <div className=" flex justify-center">
           <div className="    absolute  top-32 ">
            <h2 className=" text-white lg:text-[7rem] text-[3.5rem] md:text-[5rem] font-bold">
              {" "}
              News
            </h2>
          </div>
         </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f2f2f2]">
        <div className="py-20 ">
          <div className=" grid md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] m-auto   gap-x-6 gap-y-12 px-6 sl:px-0 ">
            <Link to="/NewsPost1">
              <div className=" shadow-lg  ">
                <div className=" relative">
                  <div className="">
                    <img src={pic9} alt="" className=" rounded-t-lg" />
                  </div>
                  <div className=" h-full w-full  opacity-50  top-0 absolute z-[1] bg-black">
                    {" "}
                  </div>
                </div>
                <div className=" pl-6 py-6">
                  <h2 className=" py-4 text-xl">Architectural Heritage</h2>
                  <button className=" border border-black rounded-full py-1 px-3 hover:bg-[#222222] hover:text-white">
                    Read More
                  </button>
                </div>
              </div>
            </Link>

            <Link to="/NewsPost1">
              <div className=" shadow-lg  ">
                <div className=" relative">
                  <div className="">
                    <img src={pic9} alt="" className=" rounded-t-lg" />
                  </div>
                  <div className=" h-full w-full  opacity-50  top-0 absolute z-[1] bg-black">
                    {" "}
                  </div>
                </div>
                <div className=" pl-6 py-6">
                  <h2 className=" py-4 text-xl">Architectural Heritage</h2>
                  <button className=" border border-black rounded-full py-1 px-3 hover:bg-[#222222] hover:text-white">
                    Read More
                  </button>
                </div>
              </div>
            </Link>

            <Link to="/NewsPost1">
              <div className=" shadow-lg  ">
                <div className=" relative">
                  <div className="">
                    <img src={pic9} alt="" className=" rounded-t-lg" />
                  </div>
                  <div className=" h-full w-full  opacity-50  top-0 absolute z-[1] bg-black">
                    {" "}
                  </div>
                </div>
                <div className=" pl-6 py-6">
                  <h2 className=" py-4 text-xl">Architectural Heritage</h2>
                  <button className=" border border-black rounded-full py-1 px-3 hover:bg-[#222222] hover:text-white">
                    Read More
                  </button>
                </div>
              </div>
            </Link>

            <Link to="/NewsPost1">
              <div className=" shadow-lg  ">
                <div className=" relative">
                  <div className="">
                    <img src={pic9} alt="" className=" rounded-t-lg" />
                  </div>
                  <div className=" h-full w-full  opacity-50  top-0 absolute z-[1] bg-black">
                    {" "}
                  </div>
                </div>
                <div className=" pl-6 py-6">
                  <h2 className=" py-4 text-xl">Architectural Heritage</h2>
                  <button className=" border border-black rounded-full py-1 px-3 hover:bg-[#222222] hover:text-white">
                    Read More
                  </button>
                </div>
              </div>
            </Link>

            <Link to="/NewsPost1">
              <div className=" shadow-lg  ">
                <div className=" relative">
                  <div className="">
                    <img src={pic9} alt="" className=" rounded-t-lg" />
                  </div>
                  <div className=" h-full w-full  opacity-50  top-0 absolute z-1 bg-black">
                    {" "}
                  </div>
                </div>
                <div className=" pl-6 py-6">
                  <h2 className=" py-4 text-xl">Architectural Heritage</h2>
                  <button className=" border border-black rounded-full py-1 px-3 hover:bg-[#222222] hover:text-white">
                    Read More
                  </button>
                </div>
              </div>
            </Link>

            <Link to="/NewsPost1">
              <div className=" shadow-lg  ">
                <div className=" relative">
                  <div className="">
                    <img src={pic9} alt="" className=" rounded-t-lg" />
                  </div>
                  <div className=" h-full w-full  opacity-50  top-0 absolute z-[1] bg-black">
                    {" "}
                  </div>
                </div>
                <div className=" pl-6 py-6">
                  <h2 className=" py-4 text-xl">Architectural Heritage</h2>
                  <button className=" border border-black rounded-full py-1 px-3 hover:bg-[#222222] hover:text-white">
                    Read More
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="">
        <div className=" relative">
          <div
            style={{ backgroundImage: `url(${pic9})` }}
            className=" min-h-[320px] md:min-h-[400px]   bg-cover bg-center relative bg-fixed"
          >
            <div className=" bg-black  absolute inset-0  h-[320px] md:h-[400px]      opacity-50"></div>
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

export default News;
