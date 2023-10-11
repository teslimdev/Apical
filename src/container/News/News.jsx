import React from 'react'
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
          <div className=" bg-black  absolute inset-0  h-[350px] md:h-[400px]  lg:h-[500px]     opacity-70"></div>
        </div>
      </section>
      <section className="bg-[#f2f2f2]">
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] m-auto  gap-x-6 gap-y-12 py-20 px-6 sl:px-0 ">
          <div className=" shadow-lg">
            <div>
              <img src={pic9} alt="" className=" rounded-t-lg" />
            </div>
            <div className=" pl-6 py-6">
              <h2 className=" py-4 text-xl">Architectural Heritage</h2>
              <button className=" border border-black rounded-full py-1 px-3 hover:bg-[#222222] hover:text-white">
                Read More
              </button>
            </div>
          </div>

          <div className=" shadow-lg">
            <div>
              {" "}
              <img src={pic9} alt="" className="  rounded-t-lg" />
            </div>
            <div className=" pl-6 py-6">
              <h2 className=" py-4 text-xl">Architectural Heritage</h2>
              <button className=" border border-black rounded-full py-1 px-3 hover:bg-[#222222] hover:text-white">
                Read More
              </button>
            </div>
          </div>

          <div className=" shadow-lg">
            <div>
              {" "}
              <img src={pic9} alt="" className=" rounded-t-lg" />
            </div>
            <div className=" pl-6 py-6">
              <h2 className=" py-4 text-xl">Architectural Heritage</h2>
              <button className=" border border-black rounded-full py-1 px-3 hover:bg-[#222222] hover:text-white">
                Read More
              </button>
            </div>
          </div>
          <div className=" shadow-lg">
            <div>
              {" "}
              <img src={pic9} alt="" className=" rounded-t-lg" />
            </div>
            <div className=" pl-6 py-6">
              <h2 className=" py-4 text-xl">Architectural Heritage</h2>
              <button className=" border border-black rounded-full py-1 px-3 hover:bg-[#222222] hover:text-white">
                Read More
              </button>
            </div>
          </div>
          <div className=" shadow-lg">
            <div>
              {" "}
              <img src={pic9} alt="" className=" rounded-t-lg" />
            </div>
            <div className=" pl-6 py-6">
              <h2 className=" py-4 text-xl">Architectural Heritage</h2>
              <button className=" border border-black rounded-full py-1 px-3 hover:bg-[#222222] hover:text-white">
                Read More
              </button>
            </div>
          </div>
          <div className=" shadow-lg">
            <div>
              {" "}
              <img src={pic9} alt="" className=" rounded-t-lg" />
            </div>
            <div className=" pl-6 py-6">
              <h2 className=" py-4 text-xl">Architectural Heritage</h2>
              <button className=" border border-black rounded-full py-1 px-3 hover:bg-[#222222] hover:text-white">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f2f2f2]">
        <div className=" py-14 px-6 shadow-2xl">
          <div className="  bg-[#666666] w-full md:max-w-[500px] text-white m-auto text-center py-12  px-6 rounded-md">
            <div className=" flex justify-center ">
              <img src={pic7} alt="" className=" w-12" />
            </div>
            <h2 className=" py-2 text-2xl">Newsletter</h2>
            <p className=" py-2 pb-6 text-[1.1rem]">
              Stay up to date with our latest news and designs
            </p>
            <form className=" space-x-2 md:space-x-6">
              <input
                type="email"
                placeholder="Enter your email"
                className=" w-[60%] py-1 pl-2"
              />
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
