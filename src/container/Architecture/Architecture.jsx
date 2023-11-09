import React from "react";
import { Footer2, Header } from "../../components";
import pic9 from "../../../src/pictures/img9.jpeg";
import pic3 from "../../../src/pictures/img3.jpeg";
const Architecture = () => {
  return (
    <div>
      <section>
        <Header />
      </section>

      <section>
        <div
          style={{ backgroundImage: `url(${pic9})` }}
          className=" min-h-[350px] md:min-h-[400px] lg:min-h-[500px] bg-cover bg-center"
        >
          <div className=" bg-black  absolute inset-0  h-[350px] md:h-[400px]  lg:h-[500px]     opacity-70">
            <div className=" pt-[40%] md:pt-[20%] lg:pt-[15%] sl:pt-[10%] text-center">
              <h2 className=" text-white sl:text-[7rem] text-[3rem] md:text-[5rem] font-bold">
                {" "}
                Architectural Designs
              </h2>
            </div>
          </div>
        </div>
      </section>

        <section>
        <div className=" relative">
          <div
            style={{ backgroundImage: `url(${pic3})` }}
            className=" min-h-[40rem] md:min-h-screen bg-cover bg-center relative  bg-fixed"
          >
            <div className=" bg-white absolute inset-0  h-full top-0 opacity-40"></div>
          </div>
          <div className="  lg:max-w-[1200px] m-auto  px-6 sl:px-0">
            <div className=" text-center lg:text-start  absolute  text-black  top-[18%]">
              <div>
                <h3 className=" bg-black text-white max-w-fit  m-auto lg:m-0 py-2 px-6">
                  Architecture
                </h3>
                <h2 className=" max-w-[900px] text-[3rem] md:text-[4rem] leading-[3rem] md:leading-[4rem] lg:text-[5rem] lg:leading-[5rem] font-semibold lg:font-bold py-5">
                  Facade of the Parliament Building
                </h2>
              </div>
              <div>
                <p className=" font-bold flex items-center justify-center lg:justify-start gap-1 py-2">
                  area:{" "}
                  <p className=" flex font-normal">
                    1670 m <p className=" text-[0.8rem]">2</p>
                  </p>
                </p>
                <p className=" font-bold flex items-center justify-center lg:justify-start gap-1 py-2">
                  Completed Date: <p className=" font-normal">September 2018</p>
                </p>
                <p className=" font-bold flex items-center justify-center lg:justify-start gap-1 py-2">
                  Architect:{" "}
                  <p className=" font-normal"> Abdullah Ridwanullah</p>
                </p>
              </div>
              <div className=" pt-8">
                <button className=" border border-black py-2 px-7 hover:bg-black hover:text-white">
                  {" "}
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" relative">
          <div
            style={{ backgroundImage: `url(${pic9})` }}
            className=" min-h-[40rem] md:min-h-screen bg-cover bg-center relative  bg-fixed"
          >
            <div className=" bg-black absolute inset-0 top-0 opacity-40 "></div>
          </div>
          <div className="  lg:max-w-[1200px] flex justify-center lg:justify-end   m-auto ">
            <div className=" text-center lg:text-end  absolute  top-[20%] text-white  px-6 sl:px-0 ">
              <div className="   relative  ">
                <h3 className=" bg-white text-black    lg:absolute lg:right-0  m-auto   max-w-fit   text-[1.2rem]    py-2 px-6">
                  Construction
                </h3>
                <h2 className=" max-w-[900px] text-[3rem] md:text-[4rem] leading-[3rem] md:leading-[4rem] lg:text-[5rem] lg:leading-[5rem] font-semibold lg:font-bold lg:pt-10 py-5">
                  Berlin Sport Arena
                </h2>
              </div>
              <div>
                <p className=" font-bold flex items-center justify-center lg:justify-end  gap-1 py-2">
                  area:{" "}
                  <p className=" flex font-normal">
                    1670 m <p className=" text-[0.8rem]">2</p>
                  </p>
                </p>
                <p className=" font-bold flex items-center justify-center lg:justify-end  gap-1 py-2">
                  Completed Date: <p className=" font-normal">September 2018</p>
                </p>
                <p className=" font-bold flex items-center justify-center lg:justify-end  gap-1 py-2">
                  Architect:{" "}
                  <p className=" font-normal"> Abdullah Ridwanullah</p>
                </p>
              </div>
              <div className=" pt-8">
                <button className=" border border-white py-2 px-7 hover:bg-white hover:text-black">
                  {" "}
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


{/* <section>
  <div>
    <div
    style={{ backgroundImage: `url(${pic3})` }}
            className="  min-h-screen bg-cover bg-center relative bg-fixed"
    >
    <div className=" absolute bg-white top-0 inset-0 opacity-50"></div>
    <div>

    </div>
    </div>
  </div>
</section> */}

      <section>
        <div className=" relative">
          <div
            style={{ backgroundImage: `url(${pic3})` }}
            className="    min-h-[80rem] md:min-h-[60rem] lg:min-h-screen bg-cover bg-center relative bg-fixed"
          >
            <div className=" absolute  bg-white inset-0 top-0 opacity-40"></div>
          </div>
          <div className=" flex justify-center  ">
            <div className=" absolute  top-[5%] md:top-[10%] lg:top-[20%] ">
              <div className=" text-center px-6 sl:px-0">
                <h2 className=" text-[3rem] md:text-[4rem] leading-[3rem] md:leading-[4rem] lg:text-[5rem] font-bold lg:leading-[5rem ] pb-6">
                  15 years of experience
                </h2>
                <p className=" max-w-[500px] m-auto">
                  Aliquam erat volutpat. Fusce ac enim et diam laoreet efficitur
                  sit amet id leo. Aenean luctus fringilla lobortis. Maecenas
                  ornare eu justo nec iaculis. Quisque id nisl metus.
                </p>
              </div>
              <div className=" grid md:grid-cols-2 lg:grid-cols-4 max-w-fit m-auto gap-3 md:gap-12 sl:gap-24 pt-8">
                <div className=" max-w-[150px] md:max-w-[200px] text-center">
                  <h2 className=" max-w-[150px] md:max-w-[200px] min-h-[150px] md:min-h-[200px] flex items-center justify-center rounded-full text-[3rem] md:text-[4rem] bg-[#222222] text-white">
                    85%
                  </h2>
                  <h3 className=" text-xl pt-6">Interior Design</h3>
                </div>
                <div className=" max-w-[150px] md:max-w-[200px] text-center">
                  <h2 className=" max-w-[150px] md:max-w-[200px] min-h-[150px] md:min-h-[200px] flex items-center justify-center rounded-full text-[3rem] md:text-[4rem] bg-[#222222] text-white">
                    79%
                  </h2>
                  <h3 className=" text-xl pt-6">Architechture</h3>
                </div>
                <div className=" max-w-[150px] md:max-w-[200px] text-center">
                  <h2 className=" max-w-[150px] md:max-w-[200px] min-h-[150px] md:min-h-[200px] flex items-center justify-center rounded-full text-[3rem] md:text-[4rem] bg-[#222222] text-white">
                    68%
                  </h2>
                  <h3 className=" text-xl pt-6">Construction</h3>
                </div>
                <div className=" max-w-[150px] md:max-w-[200px] text-center ">
                  <h2 className=" max-w-[150px] md:max-w-[200px] min-h-[150px] md:min-h-[200px] flex items-center justify-center rounded-full text-[3rem] md:text-[4rem] bg-[#222222] text-white">
                    86%
                  </h2>
                  <h3 className=" text-xl pt-6">Projects Development</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

         <section>
        <div className=" relative">
          <div
            style={{ backgroundImage: `url(${pic3})` }}
            className=" min-h-[40rem] md:min-h-screen bg-cover bg-center relative  bg-fixed"
          >
            <div className=" bg-black absolute inset-0  h-full top-0 opacity-40"></div>
          </div>
          <div className="  lg:max-w-[1200px] m-auto  px-6 sl:px-0">
            <div className=" text-center lg:text-start  absolute  text-white  top-[18%]">
              <div>
                <h3 className=" bg-white text-black max-w-fit  m-auto lg:m-0 py-2 px-6">
                  Architecture
                </h3>
                <h2 className=" max-w-[900px] text-[3rem] md:text-[4rem] leading-[3rem] md:leading-[4rem] lg:text-[5rem] lg:leading-[5rem] font-semibold lg:font-bold py-5">
                  Facade of the Parliament Building
                </h2>
              </div>
              <div>
                <p className=" font-bold flex items-center justify-center lg:justify-start gap-1 py-2">
                  area:{" "}
                  <p className=" flex font-normal">
                    1670 m <p className=" text-[0.8rem]">2</p>
                  </p>
                </p>
                <p className=" font-bold flex items-center justify-center lg:justify-start gap-1 py-2">
                  Completed Date: <p className=" font-normal">September 2018</p>
                </p>
                <p className=" font-bold flex items-center justify-center lg:justify-start gap-1 py-2">
                  Architect:{" "}
                  <p className=" font-normal"> Abdullah Ridwanullah</p>
                </p>
              </div>
              <div className=" pt-8">
                <button className=" border border-white py-2 px-7 hover:bg-white hover:text-black">
                  {" "}
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
 <section>
        <div className=" relative">
          <div
            style={{ backgroundImage: `url(${pic9})` }}
            className=" min-h-[40rem] md:min-h-screen bg-cover bg-center relative  bg-fixed"
          >
            <div className=" bg-white absolute inset-0 top-0 opacity-40 "></div>
          </div>
          <div className="  lg:max-w-[1200px] flex justify-center lg:justify-end   m-auto ">
            <div className=" text-center lg:text-end  absolute  top-[20%] text-black  px-6 sl:px-0 ">
              <div className="   relative  ">
                <h3 className=" bg-black text-white    lg:absolute lg:right-0  m-auto   max-w-fit   text-[1.2rem]    py-2 px-6">
                  Construction
                </h3>
                <h2 className=" max-w-[900px] text-[3rem] md:text-[4rem] leading-[3rem] md:leading-[4rem] lg:text-[5rem] lg:leading-[5rem] font-semibold lg:font-bold lg:pt-10 py-5">
                  Berlin Sport Arena
                </h2>
              </div>
              <div>
                <p className=" font-bold flex items-center justify-center lg:justify-end  gap-1 py-2">
                  area:{" "}
                  <p className=" flex font-normal">
                    1670 m <p className=" text-[0.8rem]">2</p>
                  </p>
                </p>
                <p className=" font-bold flex items-center justify-center lg:justify-end  gap-1 py-2">
                  Completed Date: <p className=" font-normal">September 2018</p>
                </p>
                <p className=" font-bold flex items-center justify-center lg:justify-end  gap-1 py-2">
                  Architect:{" "}
                  <p className=" font-normal"> Abdullah Ridwanullah</p>
                </p>
              </div>
              <div className=" pt-8">
                <button className=" border border-black py-2 px-7 hover:bg-black hover:text-white">
                  {" "}
                  Read More
                </button>
              </div>
            </div>
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
                Subscribe for Members <br /> to Receive Latest News and Special Offers
              </h2>
            </div>
            <form action="" className=" flex flex-col gap-6 lg:gap-0   lg:flex-row items-center md:max-w-[700px] pt-6 px-6  md:px-0 ">
             <div className=" w-full">
               <input type="email" placeholder=" Your Email..."
              className=" py-3 w-full pl-4 shadow-lg text-[#222222] placeholder:text-[#8A6201]  border-none outline-none"
               />
             </div>
             <div className=" w-full lg:w-fit">
               <button className=" bg-[#222222] py-3 w-full  lg:w-fit lg:px-7 text-white   hover:bg-[#444444] shadow-lg  ">SUBSCRIBE</button>
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

export default Architecture;
