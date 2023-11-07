import React from 'react'
import vid1 from '../../src/pictures/vid1.mp4'
import  { useCallback, useRef } from "react";
import {GrNext, GrPrevious} from 'react-icons/gr'
import pic8 from "../../src/pictures/img8.jpeg";
import pic10 from "../../src/pictures/img10.jpeg";
import pic11 from "../../src/pictures/img11.jpeg";
import pic9 from "../../src/pictures/img9.jpeg";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import pic2 from "../../src/pictures/img2.jpeg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Pagination, A11y, Autoplay, } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import { Tabs, HomeSlide, Footer2,Header } from "../components";
const ProjectPost2 = () => {
    const tabs = [
      {
        id: 1,
        label: "Interior ",
        content: [
          "Archy was founded in 1936 in Chicago, USA. The company was established by Louis Skidmore and Nathaniel Owings, and later joined by John O. Merrill.",
          "SOM has been responsible for the design of many notable buildings worldwide, including the Sears Tower (now known as Willis Tower) in Chicago, which was the world's tallest building from 1973 to 1998. The company has also designed the John Hancock Center, One World Trade Center, and Burj Khalifa, which is currently the tallest building in the world.",
          "Throughout its history, SOM has been recognized for its innovative designs and commitment to sustainability. ",
        ],
      },
      {
        id: 2,
        label: "Spicifications",
        content: [
          "Second Tab Archy was founded in 1936 in Chicago, USA. The company was established by Louis Skidmore and Nathaniel Owings, and later joined by John O. Merrill.",
          "SOM has been responsible for the design of many notable buildings worldwide, including the Sears Tower (now known as Willis Tower) in Chicago, which was the world's tallest building from 1973 to 1998. The company has also designed the John Hancock Center, One World Trade Center, and Burj Khalifa, which is currently the tallest building in the world.",
          "Throughout its history, SOM has been recognized for its innovative designs and commitment to sustainability. ",
        ],
      },
      {
        id: 3,
        label: "Facility",
        content: [
          "Third Tab Archy was founded in 1936 in Chicago, USA. The company was established by Louis Skidmore and Nathaniel Owings, and later joined by John O. Merrill.",
          "SOM has been responsible for the design of many notable buildings worldwide, including the Sears Tower (now known as Willis Tower) in Chicago, which was the world's tallest building from 1973 to 1998. The company has also designed the John Hancock Center, One World Trade Center, and Burj Khalifa, which is currently the tallest building in the world.",
          "Throughout its history, SOM has been recognized for its innovative designs and commitment to sustainability. ",
        ],
      },
    ];
     

      const slideRef = useRef(null);

      const handlPrev = useCallback(() => {
        if (!slideRef.current) return;
        slideRef.current.swiper.slidePrev();
      }, []);

      const handlNext = useCallback(() => {
        if (!slideRef.current) return;
        slideRef.current.swiper.slideNext();
      }, []);
  return (
    <div>
    <section>
        <Header />
      </section>
      <section className=" one bg-[#f2f2f2]">
        <div
          style={{ backgroundImage: `url(${pic9})` }}
          className=" min-h-[500px] lg:min-h-[620px] bg-center"
        ></div>
      </section>

      <section className=" two bg-[#f2f2f2]">
        <div className=" pb-6 lg:pb-20">
          <div className=" max-w-[700px] lg:max-w-[1000px] 3xl:max-w-[2000px] sl:max-w-[1200px] lg:m-auto pt-[8%] lg:pt-[7%]  px-6  sl:px-0   ">
            <h2 className="  text-[2.5rem] leading-[3rem] md:text-[4rem] md:leading-[4rem] lg:text-[6rem] 3xl:leading-[10rem]  3xl:text-[9rem] lg:leading-[6rem] max-w-[900px] text-[#222222]  pb-6  font-bold">
              The Petronas Twin Towers
            </h2>
            <div className=" lg:max-w-[1150px] 3xl:max-w-[1700px] justify-between  items-end pb-8 lg:pb-12 lg:items-center">
              <h3 className="   lg:text-3xl  3xl:border-t-4 border-t pt-6 lg:font-[350] 3xl:text-5xl   text-xl ">
                "Designing spaces for the way we live today and tomorrow."
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className=" three bg-[#f2f2f2]">
        <div
          style={{ backgroundImage: `url(${pic9})` }}
          className=" min-h-[500px] bg-fixed  bg-center"
        ></div>
      </section>
      <section className=" four bg-[#f2f2f2]">
        <div className="m-auto lg:max-w-[1000px] px-6 sl:px-0 py-16 lg:py-32">
          <div className="container   lg:max-w-[800px] ">
            <Tabs tabs={tabs} />
          </div>
        </div>
      </section>
      <section className=" five bg-[#f2f2f2]">
        <div
          style={{ backgroundImage: `url(${pic9})` }}
          className=" min-h-[500px] bg-fixed  bg-center"
        ></div>
      </section>
      <section className=" six bg-[#f2f2f2]">
        <div className=" pb-6 lg:pb-20">
          <div className=" max-w-[700px] lg:max-w-[1000px] 3xl:max-w-[2000px] sl:max-w-[1200px] lg:m-auto pt-[8%] lg:pt-[7%]  px-6  sl:px-0   ">
            <h2 className="  text-[2.5rem] leading-[3rem] md:text-[4rem] md:leading-[4rem] lg:text-[6rem] 3xl:leading-[10rem]  3xl:text-[9rem] lg:leading-[6rem] max-w-[700px] text-[#222222]  pb-6  font-bold">
              Luxurious Facilities.
            </h2>
            <div className=" lg:max-w-[700px] 3xl:max-w-[1700px] justify-between  items-end pb-8 lg:pb-12 lg:items-center">
              <h3 className="     3xl:border-t-4 border-t pt-6 lg:font-[350]    text-[1rem] ">
                Hub Construction employs over 3 000 employees, the majority of
                whom are based on project sites. We embrace holistic development
                and support for employees with the aim of being a first-choice
                employer within our sectors.
              </h3>
              <h3 className="      pt-4 lg:font-[350]    text-[1rem] ">
                Hub Construction employs over 3 000 employees, the majority of
                whom are based on project sites. We embrace holistic development
                and support for employees with the aim of being a first-choice
                employer within our sectors.
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className=" seven bg-[#f2f2f2]">
        <div className=" max-w-[1200px] m-auto px-6 sl:px-0 py-10">
          <div className="  grid md:grid-cols-2 max-w-fit gap-10 place-items-center">
            <div className=" ">
              <img
                src={pic9}
                alt=""
                className=" w-full lg:w-[550px]  lg:h-[550px]"
              />
            </div>
            <div className=" lg:max-w-[420px]">
              <h1 className=" text-3xl md:text-4xl lg:text-[6rem] font-bold lg:leading-[5.5rem] border-b pb-2 lg:pb-5 ">
                Modern Design
              </h1>
              <p className=" pt-3 lg:pt-6">
                Through a unique combination of engineering, construction and
                design disciplines and expertise, Concor delivers world class
                infrastructure solutions to customers and stakeholders across a
                broad range of
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" eight bg-[#f2f2f2]">
        <div className=" py-10 sl:py-28">
          <div className="  md:max-w-[700px]  lg:max-w-[950px] sl:max-w-none flex justify-end">
            <img
              src={pic9}
              alt=""
              className=" shadow-lg w-full md:w-[500px] h-[300px] sl:w-[1100px] sl:h-[600px]"
            />
          </div>
          <div className=" max-w-[1200px] m-auto pt-10 sl:pt-28 px-6 sl:px-0">
            <p className=" max-w-[500px] text-[0.95rem]">
              Through a unique combination of engineering, construction and
              design disciplines and expertise, Concor delivers world class
              infrastructure solutions to customers and stakeholders across a
              broad range of
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="">
          <video controls className=" shadow-2xl w-full object-cover">
            <source src={vid1} type="video/mp4 "  className='  '/>
          </video>
        </div>
      </section>
      <section className="bg-[#f2f2f2] ">
        <div className=" py-16 lg:py-28">
          <div className=" max-w-[950px] lg:max-w-[1200px] 3xl:max-w-[2000px] sl:max-w-[1200px] lg:m-auto   px-6  sl:px-0  ">
            <div className=" flex flex-col-reverse md:flex-row  gap-4 md:max-w-[950px]  lg:max-w-[1200px] 3xl:max-w-[1700px]   md:justify-between md:items-start">
              <h2 className=" text-[2rem] md:max-w-[550px] lg:max-w-[800px] sl:max-w-[1000px] md:text-[3rem] lg:leading-[7rem] lg:pt-6 lg:text-[5rem] sl:text-[6rem] font-bold text-[#222222] 3xl:text-[8rem] ">
                Project Diversity
              </h2>
              <div className=" flex  place-self-end  md:place-self-start">
                <Link
                  to="/Projects"
                  className=" underline hover:no-underline lg:text-[1.4rem] 3xl:text-[2rem] flex "
                >
                  All Projects
                  <GoArrowUpRight className=" text-2xl"></GoArrowUpRight>
                </Link>
              </div>
            </div>
            <h3 className=" text-xl lg:text-[2rem] font-[350] py-3 lg:py-6 ">
              "Discover Our Passion for Creating Timeless and Innovative
              Designs"
            </h3>
          </div>
        </div>
      </section>
      <section className=" eight">
        <div className="  relative ">
          <Swiper
            modules={[Pagination, A11y, EffectFade, Autoplay]}
            effect="fade"
            loop={true}
            speed={1500}
            ref={slideRef}
            autoplay={{
              delay: 7000,
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
              <HomeSlide
                image={pic2}
                text={" Multi-Family Housing"}
              ></HomeSlide>
            </SwiperSlide>
            <SwiperSlide>
              <HomeSlide image={pic8} text={" The Light House"}></HomeSlide>
            </SwiperSlide>
            <SwiperSlide>
              <HomeSlide image={pic9} text={"Architectural Home"}></HomeSlide>
            </SwiperSlide>
            <SwiperSlide>
              <HomeSlide image={pic10} text={"Interior space"}></HomeSlide>
            </SwiperSlide>
            <SwiperSlide>
              <HomeSlide image={pic11} text={"Design Art"}></HomeSlide>
            </SwiperSlide>
            <SwiperSlide>
              <HomeSlide image={pic9} text={"Visualization"}></HomeSlide>
            </SwiperSlide>
            <div
              id="two"
              className="  absolute  right-[1rem] md:right-[4rem]  lg:right-[6rem] bottom-[30%] "
            >
              <div
                id="two"
                className="swiper-pagination  absolute flex flex-col gap-6    place-items-end       "
              ></div>
            </div>
          </Swiper>
          <div className=" lg:max-w-[950px] sl:max-w-[1200px] m-auto">
            <div className="  absolute   z-[1]  flex  gap-6    px-6   bottom-20">
              <div
                className="prev-arrow rounded-full  border  hover:bg-white py-2"
                onClick={handlPrev}
              >
                <GrPrevious className=" text-white  text-3xl   w-12  cursor-pointer  " />
              </div>
              <div
                className="next-arrow  text-white rounded-full  border  hover:bg-white py-2   "
                onClick={handlNext}
              >
                <GrNext className=" text-3xl  cursor-pointer  text-red-700    w-12    " />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" five bg-[#f2f2f2]">
        <div>
          <div className=" max-w-[950px] lg:max-w-[1200px] 3xl:max-w-[2000px] sl:max-w-[1200px] lg:m-auto pt-[5%] lg:pt-[7%]  px-6  sl:px-0  ">
            <div className=" flex flex-col-reverse md:flex-row  gap-8 md:max-w-[950px]  lg:max-w-[1200px] 3xl:max-w-[1700px]   md:justify-between md:items-start">
              <h2 className=" text-[2rem] md:max-w-[550px] lg:max-w-[800px] sl:max-w-[1000px] md:text-[3rem] lg:leading-[7rem] lg:text-[5rem] sl:text-[5.7rem] font-bold text-[#222222] 3xl:text-[8rem] ">
                Stay Connected
              </h2>
              <div className=" flex   place-self-end md:place-self-start">
                <Link
                  to="/Contacts"
                  className=" underline hover:no-underline lg:text-[1.4rem] 3xl:text-[2rem] flex "
                >
                  Contact Us
                  <GoArrowUpRight className=" text-2xl"></GoArrowUpRight>
                </Link>
              </div>
            </div>
            <h3 className=" text-xl lg:text-[2rem] font-[350] py-10 lg:py-16 ">
              "Stay connected with our team and never miss a design update,
              industry news, or special offer. Join our community of design
              enthusiasts.
            </h3>
          </div>
        </div>
      </section>

      <section className=" six">
        <div
          style={{ backgroundImage: `url(${pic9})` }}
          className=" min-h-[300px] md:min-h-[450px] bg-cover bg-center relative"
        >
          <div className=" px-6 pt-[10%] lg:pt-[7%] ">
            <div className="  text-center  ">
              <h2 className=" text-white text-4xl md:text-5xl lg:text-7xl">
                Have a project in mind?
              </h2>
              <p className=" text-white py-4 text-2xl font-semibold">
                Do not hesitate to say Hello
              </p>
              <div>
                <Link to="/Contacts">
                  <button className=" text-white border-2 py-3 px-16 rounded-full   text-2xl hover:bg-white hover:text-black">
                    Lets Talk
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer2/>
      </section>
    </div>
  );
}

export default ProjectPost2
