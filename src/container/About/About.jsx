import React from "react";
import pic9 from "../../../src/pictures/img9.jpeg";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import pic12 from "../../../src/pictures/ridwan.png";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { GoArrowUpRight } from "react-icons/go";
import { BsPinterest } from "react-icons/bs";
import vid1 from "../../../src/pictures/vid1.mp4";
import pic2 from "../../../src/pictures/img2.jpeg";

import { AboutSlide, Footer, Header,UseAos } from "../../components";
const About = () => {
     const Aos = UseAos();
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
            className=" shadow-2xl w-full h-[300px] md:h-[400px] lg:h-[500px]  object-cover"
          >
            <source src={vid1} type="video/mp4 " className="  " />
          </video>
          <div className="   absolute bg-black w-full h-full top-0 inset-0 opacity-50"></div>
        </div>
      </section>
      <section className="bg-[#f2f2f2]">
        <div className="lg:max-w-[1200px] sl:px-0 m-auto px-6 py-10 lg:py-20 ">
          <div className=" flex flex-col md:flex-row gap-10  justify-between ">
            <div className="max-w-full lg:max-w-[700px]">
              <h2 data-aos="fade-down" className=" text-[2.5rem] md:text-[4rem] lg:text-[7rem] font-bold border-b">
                About Us
              </h2>
              <h3 className=" pt-3 text-xl  lg:text-3xl">
                "Discover Our Passion for Creating Timeless and Innovative
                Designs"
              </h3>
            </div>
            <div className=" md:max-w-[350px]">
              <Swiper
                modules={[Pagination, A11y, EffectCoverflow, Autoplay]}
                effect="coverflow"
                loop={true}
                speed={1000}
                centeredSlides={true}
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
                scrollbar={{ draggable: true }}
              >
                <SwiperSlide>
                  <AboutSlide image={pic2}></AboutSlide>
                </SwiperSlide>
                <SwiperSlide>
                  <AboutSlide image={pic2}></AboutSlide>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className=" text-[#333333] font-[350] pt-10">
            <p className=" py-3">
              Archy was founded in 1936 in Chicago, USA. The company was
              established by Louis Skidmore and Nathaniel Owings, and later
              joined by John O. Merrill.
            </p>
            <p className=" py-3">
              SOM has been responsible for the design of many notable buildings
              worldwide, including the Sears Tower (now known as Willis Tower)
              in Chicago, which was the world’s tallest building from 1973 to
              1998. The company has also designed the John Hancock Center, One
              World Trade Center, and Burj Khalifa, which is currently the
              tallest building in the world.
            </p>
            <p className=" py-3">
              Throughout its history, SOM has been recognized for its innovative
              designs and commitment to sustainability.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#f2f2f2]">
        <div className=" max-w-[1200px]  grid  md:grid-cols-2 2xl:grid-cols-3 m-auto gap-6 px-6 sl:px-0 py-6 lg:py-16">
          <div className=" flex flex-col gap-10">
            <div>
              <img
                src={pic2}
                alt=""
                className=" w-full 2xl:w-[400px] h-[250px]"
              />
            </div>
            <div className=" max-w-[350px] text-center m-auto   ">
              <h3 className=" text-[1.05rem]">Archy Founding</h3>
              <p className=" text-[0.85rem] sl:text-[1rem] 2xl:text-[0.85rem] py-3">
                The company is founded by John Smith, an experienced architect
                with a passion for sustainable design.
              </p>
              <p>1936</p>
            </div>
          </div>
          <div className=" flex flex-col 2xl:flex-col-reverse gap-10">
            <div>
              <img
                src={pic2}
                alt=""
                className=" w-full 2xl:w-[400px] h-[250px]"
              />
            </div>
            <div className=" max-w-[350px] text-center  m-auto">
              <h3 className=" text-[1.05rem]">Archy Founding</h3>
              <p className=" text-[0.85rem] sl:text-[1rem] 2xl:text-[0.85rem] py-3">
                The company is founded by John Smith, an experienced architect
                with a passion for sustainable design.
              </p>
              <p>1936</p>
            </div>
          </div>
          <div className=" flex flex-col gap-10">
            <div>
              <img
                src={pic2}
                alt=""
                className="  w-full 2xl:w-[400px] h-[250px]"
              />
            </div>
            <div className=" max-w-[350px] text-center m-auto   ">
              <h3 className=" text-[1.05rem]">Archy Founding</h3>
              <p className=" text-[0.85rem] sl:text-[1rem] 2xl:text-[0.85rem] py-3">
                The company is founded by John Smith, an experienced architect
                with a passion for sustainable design.
              </p>
              <p>1936</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f2f2f2]">
        <div className=" max-w-[1300px] m-auto px-6 sl:px-0 py-6 lg:py-10">
          <div className=" grid lg:grid-cols-2 gap-10 pt-16 lg:place-items-center ">
            <div className=" lg:max-w-[500px]  order-2">
              <p>
                We believe that good design should not only be aesthetically
                pleasing, but also functional and environmentally responsible.
                Our approach to architecture is rooted in a deep understanding
                of our clients’ needs and the context in which we are designing.
                We work closely with our clients throughout the entire design
                process to ensure that their vision is realized and that their
                space is both beautiful and practical
              </p>
            </div>
            <div className=" ">
              <img
                src={pic2}
                alt=""
                className=" w-full lg:w-[500px] h-[300px] md:h-[400px] lg:h-[600px]"
              />
            </div>
          </div>
          <div className=" grid lg:grid-cols-2 gap-10 pt-16  lg:place-items-center">
            <div className=" lg:max-w-[500px] order-2   ">
              <p>
                We believe that good design should not only be aesthetically
                pleasing, but also functional and environmentally responsible.
                Our approach to architecture is rooted in a deep understanding
                of our clients’ needs and the context in which we are designing.
                We work closely with our clients throughout the entire design
                process to ensure that their vision is realized and that their
                space is both beautiful and practical
              </p>
            </div>
            <div className=" lg:order-2 ">
              <img
                src={pic2}
                alt=""
                className=" w-full lg:w-[500px] h-[300px] md:h-[400px] lg:h-[600px]"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f2f2f2]">
        <div className=" max-w-[1200px] m-auto px-6 sl:px-0 py-6 lg:py-12">
          <div className=" max-w-[600px] lg:max-w-[900px]">
            <h2  className=" text-[3rem] lg:text-[7rem] font-bold text-[#222222]  lg:leading-[7rem] border-b pb-2 lg:pb-6">
              Showcase
            </h2>
            <p className=" text-xl lg:text-3xl pt-2 lg:pt-6">
              Bringing visions to reality
            </p>
          </div>
          <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
            <div>
              <img src={pic2} alt="" />
            </div>
            <div>
              {" "}
              <img src={pic2} alt="" />
            </div>
            <div>
              {" "}
              <img src={pic2} alt="" />
            </div>
            <div>
              {" "}
              <img src={pic2} alt="" />
            </div>
            <div>
              {" "}
              <img src={pic2} alt="" />
            </div>
            <div>
              {" "}
              <img src={pic2} alt="" />
            </div>
            <div>
              {" "}
              <img src={pic2} alt="" />
            </div>
            <div>
              {" "}
              <img src={pic2} alt="" />
            </div>
            <div>
              {" "}
              <img src={pic2} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="  bg-[#f2f2f2]">
        <div className=" ">
          <div className=" max-w-[950px] lg:max-w-[1200px] 3xl:max-w-[2000px] sl:max-w-[1200px] lg:m-auto pt-[5%]  lg:pt-[2%]  px-6  sl:px-0  ">
            <div className="   md:max-w-[950px]  lg:max-w-[1200px] 3xl:max-w-[1700px]   ">
              <h2 className=" text-[2rem] md:text-[3rem] lg:leading-[7rem] lg:text-[4.5rem] border-b-2 pb-8 sl:text-[6rem] font-bold text-[#222222] 3xl:text-[8rem] ">
                "Meet the man behind the designs"
              </h2>
            </div>
            <h3 className=" text-xl lg:text-[2rem] font-[350] py-3 lg:py-16">
              "Our team is comprised of experienced architects, designers, and
              project managers who share a common goal of creating exceptional
              spaces.
            </h3>
          </div>
          <div className="  2xl:max-w-[1200px]  m-auto px-6 2xl:px-0 sl:max-w-[1200px]  lg:max-w-[1000px]">
            <div className=" flex  flex-col md:flex-row  gap-6 md:gap-12 lg:gap-16">
              <img
                src={pic12}
                alt=""
                className=" w-full md:w-[350px] lg:w-[400px]  shadow-lg"
              />
              <div className=" sl:max-w-[600px] lg:max-w-[500px] md:max-w-[320px] pt-6 lg:pt-20">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima eaque architecto repudiandae sint nostrum ratione
                  placeat beatae necessitatibus ad numquam voluptatem ab, quidem
                  sed quasi cupiditate laudantium reiciendis hic ipsam!
                </p>
                <div className=" flex pt-10 gap-6">
                  <AiFillInstagram className=" text-4xl text-[#222222]" />
                  <AiFillLinkedin className=" text-4xl text-[#222222]" />
                  <BsPinterest className=" text-4xl text-[#222222]" />
                </div>
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
              <div className=" flex   place-self-end">
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
       <div className=" relative min-h-[300px] md:min-h-[400px] lg:min-h-[450px]">
          <video
            autoPlay
            muted
            className=" shadow-2xl w-full h-[300px] md:h-[400px] lg:h-[450px]  object-cover"
          >
            <source src={vid1} type="video/mp4 " className="  " />
          </video>
          <div className="   absolute bg-black w-full h-full top-0 inset-0 opacity-50">
             <div className=" px-6 pt-[10%] lg:pt-[7%] ">
              <div className="  text-center  ">
                <h2 className=" text-white text-4xl md:text-5xl lg:text-7xl">
                  Have a project in mind?
                </h2>
                <p className=" text-white py-4 text-2xl font-semibold">
                  Do not hesitate to say Hello
                </p>
                <div className=" pt-4">
                  <Link to="/Contacts">
                    <button className=" text-white border-2 py-2 lg:py-3 px-10 lg:px-16 rounded-full   text-2xl hover:bg-white hover:text-black">
                      Lets Talk
                    </button>
                  </Link>
                </div>
              </div>
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

export default About;
