import React from "react";
import { Footer2, Header, InteriorSlide } from "../../components";
import pic9 from "../../../src/pictures/img9.jpeg";
import pic15 from "../../../src/pictures/img15.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, EffectCoverflow, EffectCube } from "swiper/modules";
import { Link } from "react-router-dom";
import vid1 from "../../../src/pictures/vid1.mp4";
import vid2 from "../../../src/pictures/vid2.mp4";
const Construction = () => {
  return (
    <div>
      <section>
        <Header />
      </section>
      <section>
        <div className=" relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
          <video
            autoPlay
            loop
            muted
            className=" shadow-2xl w-full h-[300px] md:h-[400px] lg:h-[500px]  object-cover"
          >
            <source src={vid1} type="video/mp4 " className="  " />
          </video>
          <div className="   absolute bg-black w-full h-full top-0 inset-0 opacity-50">
            <div className=" flex justify-center">
              <div className="  absolute top-[40%] sl:top-[30%] ">
                <h2 className=" text-white sl:text-[7rem] lg:text-[5rem] text-center text-[2.5rem] md:text-[4rem] font-bold">
                  {" "}
                  Building Construction
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f2f2f2]">
        <div className=" max-w-[1200px] m-auto py-20 px-6 sl:px-0">
          <div className=" grid lg:grid-cols-2  place-items-center  lg:place-items-start  gap-10 sl:gap-20">
            <div className=" lg:max-w-[650px] sl:max-w-[700px] ">
              <div className=" text-center lg:text-start">
                <h2 className=" text-[1.6rem] md:text-[2rem]  lg:text-[2.7rem] lg:leading-[3rem] font-bold first-line:text-[#8A6201]  text-[#222222]">
                  The Best <br /> Architectural and Construction Agency
                </h2>
                <p className=" py-6">
                  Cras vel cursus libero. Vestibulum porttitor nunc enim, quis
                  congue leo fringilla ut. Quisque in lacus lacus. Nunc
                  malesuada nisi at porta convallis. In posuere interdum erat,
                  et bibendum arcu. Etiam quis viverra diam.
                </p>
              </div>
              <div className=" grid grid-cols-3 max-w-fit gap-6 m-auto  ">
                <img
                  src={pic9}
                  alt=""
                  className="  w-full sl:w-[200px]  lg:h-[200px] sl:h-[250px] md:h-[250px]"
                />
                <img
                  src={pic9}
                  alt=""
                  className="  w-full sl:w-[200px] ] lg:h-[200px] sl:h-[250px] md:h-[250px]"
                />
                <img
                  src={pic9}
                  alt=""
                  className="  w-full sl:w-[200px]  lg:h-[200px] sl:h-[250px] md:h-[250px]"
                />
              </div>
              <div className=" pt-8 flex justify-center lg:justify-start">
                <Link to="/ConstructionPost">
                  <button className=" border text-black py-3 px-8  flex  gap-4 border-black   place-items-center  hover:bg-[#222222] hover:text-white text-sm">
                    Read More
                    <AiOutlineArrowRight className=" "></AiOutlineArrowRight>
                  </button>
                </Link>
              </div>
            </div>
            <div className=" md:max-w-[450px] sl:max-w-[500px]">
              <img
                src={pic9}
                alt=""
                className="  md:w-[450px] sl:w-[500px] md:h-[600px]"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#222222]">
        <div className=" py-14 pb-40">
          <div className=" relative">
            <div>
              <h2 className=" text-[3.8rem] md:text-[9rem] lg:text-[12rem] sl:text-[15rem] 2xl:text-[17rem] text-center uppercase text-transparent  opacity-20 [-webkit-text-stroke-color:white] [-webkit-text-stroke-width:_1px]">
                {" "}
                portfolio
              </h2>
            </div>
            <div className=" flex justify-center text-white">
              <div className=" top-10 absolute md:top-20 lg:top-32 sl:top-44 2xl:top-52  text-center  ">
                <h3 className=" text-xl md:text-2xl">our portfolio</h3>
                <h3 className=" md:text-3xl">Completed Projects</h3>
              </div>
            </div>
          </div>
          <div className=" px-6 sl:px-0">
            <Swiper
              modules={[
                Pagination,
                A11y,
                EffectFade,
                Autoplay,
                EffectCube,
                EffectCoverflow,
              ]}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                520: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
              effect=""
              loop={true}
              speed={1200}
              autoplay={{
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
                waitForTransition: true,
              }}
              a11y={{
                prevSlide: "true",
                nextSlide: "true",
              }}
              slidesPerView={1}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
              }}
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide>
                <InteriorSlide video={vid1} text={'Msquare Hotel'}  date={'13 march 2020'}  />
              </SwiperSlide>
              <SwiperSlide>
                <InteriorSlide video={vid2} text={'Msquare Hotel'}  date={'13 march 2020'}  />
              </SwiperSlide>
              <SwiperSlide>
                <InteriorSlide video={vid1} text={'Msquare Hotel'}  date={'13 march 2020'}  />
              </SwiperSlide>
              <SwiperSlide>
                <InteriorSlide video={vid2} text={'Msquare Hotel'}  date={'13 march 2020'}  />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className=" grid place-items-center lg:grid-cols-2 max-w-[1200px] m-auto px-6 sl:px-0 py-12 sl:py-20">
            <div className="">
              <h2 className=" first-line:text-[#8A6201] text-3xl md:text-4xl sl:text-5xl sl:leading-[3.5rem] font-bold text-center lg:text-start ">
                {" "}
                We follow the trends <br /> of world interior design and bring
                them to reality
              </h2>
              <p className=" max-w-[300px] text-center lg:text-start  sl:max-w-[400px] m-auto pt-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                hic quisquam minima voluptate quidem nesciunt?
              </p>
            </div>
            <div>
              <img src={pic15} alt="" className=" w-[400px]" />
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

export default Construction;
