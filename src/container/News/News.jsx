import React from 'react'
import { Link } from 'react-router-dom';
import pic9 from '../../../src/pictures/img9.jpeg'
import pic7 from "../../../src/pictures/img7.png";
const News = () => {
  return (
    <div className="   ">
      <section>
        <div
          style={{ backgroundImage: `url(${pic9})` }}
          className=" min-h-[350px] md:min-h-[400px] lg:min-h-[500px] bg-cover bg-center"
        >
          <div className=" bg-black  absolute inset-0  h-[350px] md:h-[400px]  lg:h-[500px]     opacity-70">
            <div className=" pt-[40%] md:pt-[20%] lg:pt-[15%] sl:pt-[10%] text-center">
              <h2 className=" text-white lg:text-[7rem] text-[3rem] md:text-[5rem] font-bold">
                {" "}
                Latest News
              </h2>
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
                  <div className=" h-full w-full  opacity-50  top-0 absolute z-10 bg-black">
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
                  <div className=" h-full w-full  opacity-50  top-0 absolute z-10 bg-black">
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
                  <div className=" h-full w-full  opacity-50  top-0 absolute z-10 bg-black">
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
                  <div className=" h-full w-full  opacity-50  top-0 absolute z-10 bg-black">
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
                  <div className=" h-full w-full  opacity-50  top-0 absolute z-10 bg-black">
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
                  <div className=" h-full w-full  opacity-50  top-0 absolute z-10 bg-black">
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
      <section className="bg-[#f2f2f2]">
        <div className=" py-14 px-6 ">
          <div className="  bg-[#666666] w-full md:max-w-[500px] text-white m-auto text-center py-12  px-6 rounded-md">
            <div className=" flex justify-center ">
              <img src={pic7} alt="" className=" w-12" />
            </div>
            <h2 className=" py-2 text-2xl">Newsletter</h2>
            <p className=" py-2 pb-6 text-[1.1rem]">
              Stay up to date with our latest news and designs
            </p>
            <form className="  flex md:gap-4 justify-center flex-col md:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className=" text-black w-full py-1 pl-2"
              />{" "}
              <br />
              <button className=" border py-1 px-3 rounded-full hover:bg-[#222222] hover:text-white  ">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default News
