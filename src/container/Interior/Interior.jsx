import React from "react";
import { Footer2, Header, InteriorSlide } from "../../components";
import vid1 from '../../../src/pictures/vid1.mp4'
import vid2 from '../../../src/pictures/vid2.mp4'
import pic9 from "../../../src/pictures/img9.jpeg";
import pic15 from "../../../src/pictures/img15.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { LuBedDouble } from "react-icons/lu";
import { FaBath } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, EffectCoverflow, EffectCube } from "swiper/modules";
import { Link } from "react-router-dom";
const Interior = () => {
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
                  Interior Designs
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
                  Creative Solutions <br /> by Professional Designer
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
               <Link to='/InteriorPost1'>
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
      <section className="bg-[#f2f2f2]">
        <div className="py-12 sl:py-24">
          <div className=" grid md:grid-cols-2 lg:grid-cols-3 sl:grid-cols-4 gap-6 max-w-fit m-auto px-6 sl:px-0 ">
            <div className=" md:w-[280px] ">
              <h2 className=" text-4xl first-line:text-[#8A6201]">
                <span>Modern ideas</span>
                <br /> for home
              </h2>
              <p className=" text-[1rem] pt-8">
                Vestibulum augue tortor, consequat eu diam a, varius pulvinar
                ipsum. Vivamus posuere, mauris eu interdum molestie.
              </p>
              
              <div className=" pt-6">
              <Link to='/InteriorPost2'>
                  <button className=" border text-black py-3 px-8  flex  gap-4 border-black   place-items-center  hover:bg-[#222222] hover:text-white text-sm">
                  Read More
                  <AiOutlineArrowRight className=" "></AiOutlineArrowRight>
                </button>
              </Link>
              </div>
            </div>

            <div className="card-container md:w-[280px]  ">
              <div className="card md:w-[280px] h-[350px] relative">
                <div className="card-front  bg-white text-[#222222]  shadow-lg text-xl ">
                  <div className="  text-center max-w-[250px] m-auto">
                    <div className=" flex justify-center py-6">
                      <LuBedDouble className="  text-[5rem] text-[#222222]  " />
                    </div>
                    <h2 className=" text-[#222222] text-2xl ">Bedrooms</h2>
                    <p className="  pt-6 text-[1.2rem] text-[#222222]">
                      Vestibulum augue tortor, consequat eu diam a, varius
                      pulvinar ipsum.
                    </p>
                  </div>
                </div>
                <div className="card-back  ">
                  <div
                    style={{ backgroundImage: `url(${pic9})` }}
                    className="   bg-center h-full  "
                  >
                    <div className=" bg-black opacity-40"></div>
                  </div>
                  <div className="  flex justify-center">
                    <div className=" absolute top-0 text-center max-w-[250px]">
                      <div className=" flex justify-center py-6">
                        <LuBedDouble className="  text-[5rem] text-white  " />
                      </div>
                      <h2 className=" text-white text-2xl ">Bedrooms</h2>
                      <p className="  pt-6 text-[1.2rem] text-white">
                        Vestibulum augue tortor, consequat eu diam a, varius
                        pulvinar ipsum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container md:w-[280px]  ">
              <div className="card md:w-[280px] h-[350px] relative">
                <div className="card-front   bg-white text-[#222222] shadow-lg text-xl ">
                  <div className="  text-center max-w-[250px] m-auto">
                    <div className=" flex justify-center py-6">
                      <LuBedDouble className="  text-[5rem] text-[#222222]  " />
                    </div>
                    <h2 className=" text-[#222222] text-2xl ">Kitchens</h2>
                    <p className="  pt-6 text-[1.2rem] text-[#222222]">
                      Vestibulum augue tortor, consequat eu diam a, varius
                      pulvinar ipsum.
                    </p>
                  </div>
                </div>
                <div className="card-back  ">
                  <div
                    style={{ backgroundImage: `url(${pic9})` }}
                    className="   bg-center h-full  "
                  >
                    <div className=" bg-black opacity-40"></div>
                  </div>
                  <div className="  flex justify-center">
                    <div className=" absolute top-0 text-center max-w-[250px]">
                      <div className=" flex justify-center py-6">
                        <LuBedDouble className="  text-[5rem] text-white  " />
                      </div>
                      <h2 className=" text-white text-2xl ">Kitchens</h2>
                      <p className="  pt-6 text-[1.2rem] text-white">
                        Vestibulum augue tortor, consequat eu diam a, varius
                        pulvinar ipsum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container md:w-[280px]  ">
              <div className="card md:w-[280px] h-[350px] relative">
                <div className="card-front  bg-white text-[#222222] shadow-lg text-xl ">
                  <div className="  text-center max-w-[250px] m-auto">
                    <div className=" flex justify-center py-6">
                      <LuBedDouble className="  text-[5rem] text-[#222222]  " />
                    </div>
                    <h2 className=" text-[#222222] text-2xl ">Lighting</h2>
                    <p className="  pt-6 text-[1.2rem] text-[#222222]">
                      Vestibulum augue tortor, consequat eu diam a, varius
                      pulvinar ipsum.
                    </p>
                  </div>
                </div>
                <div className="card-back  ">
                  <div
                    style={{ backgroundImage: `url(${pic9})` }}
                    className="   bg-center h-full  "
                  >
                    <div className=" bg-black opacity-40"></div>
                  </div>
                  <div className="  flex justify-center">
                    <div className=" absolute top-0 text-center max-w-[250px]">
                      <div className=" flex justify-center py-6">
                        <LuBedDouble className="  text-[5rem] text-white  " />
                      </div>
                      <h2 className=" text-white text-2xl ">Lighting</h2>
                      <p className="  pt-6 text-[1.2rem] text-white">
                        Vestibulum augue tortor, consequat eu diam a, varius
                        pulvinar ipsum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container md:w-[280px]  ">
              <div className="card md:w-[280px] h-[350px] relative">
                <div className="card-front  bg-white text-[#222222] shadow-lg   text-xl ">
                  <div className="  text-center max-w-[250px] m-auto">
                    <div className=" flex justify-center py-6">
                      <LuBedDouble className="  text-[5rem] text-[#222222]  " />
                    </div>
                    <h2 className=" text-[#222222] text-2xl ">Windows</h2>
                    <p className="  pt-6 text-[1.2rem] text-[#222222]">
                      Vestibulum augue tortor, consequat eu diam a, varius
                      pulvinar ipsum.
                    </p>
                  </div>
                </div>
                <div className="card-back  ">
                  <div
                    style={{ backgroundImage: `url(${pic9})` }}
                    className="   bg-center h-full  "
                  >
                    <div className=" bg-black opacity-40"></div>
                  </div>
                  <div className="  flex justify-center">
                    <div className=" absolute top-0 text-center max-w-[250px]">
                      <div className=" flex justify-center py-6">
                        <LuBedDouble className="  text-[5rem] text-white  " />
                      </div>
                      <h2 className=" text-white text-2xl ">Windows</h2>
                      <p className="  pt-6 text-[1.2rem] text-white">
                        Vestibulum augue tortor, consequat eu diam a, varius
                        pulvinar ipsum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container md:w-[280px]  ">
              <div className="card md:w-[280px] h-[350px] relative">
                <div className="card-front   bg-white text-[#222222] shadow-lg   text-xl ">
                  <div className="  text-center max-w-[250px] m-auto">
                    <div className=" flex justify-center py-6">
                      <FaBath className="  text-[5rem] text-[#222222]  " />
                    </div>
                    <h2 className=" text-[#222222] text-2xl ">Bathrooms</h2>
                    <p className="  pt-6 text-[1.2rem] text-[#222222]">
                      Vestibulum augue tortor, consequat eu diam a, varius
                      pulvinar ipsum.
                    </p>
                  </div>
                </div>
                <div className="card-back  ">
                  <div
                    style={{ backgroundImage: `url(${pic9})` }}
                    className="   bg-center h-full  "
                  >
                    <div className=" bg-black opacity-40"></div>
                  </div>
                  <div className="  flex justify-center">
                    <div className=" absolute top-0 text-center max-w-[250px]">
                      <div className=" flex justify-center py-6">
                        <FaBath className="  text-[5rem] text-white  " />
                      </div>
                      <h2 className=" text-white text-2xl ">Bathrooms</h2>
                      <p className="  pt-6 text-[1.2rem] text-white">
                        Vestibulum augue tortor, consequat eu diam a, varius
                        pulvinar ipsum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container md:w-[280px]  ">
              <div className="card md:w-[280px] h-[350px] relative">
                <div className="card-front  bg-white text-[#222222] shadow-lg   text-xl ">
                  <div className="  text-center max-w-[250px] m-auto">
                    <div className=" flex justify-center py-6">
                      <LuBedDouble className="  text-[5rem] text-[#222222]  " />
                    </div>
                    <h2 className=" text-[#222222] text-2xl ">Decoration</h2>
                    <p className="  pt-6 text-[1.2rem] text-[#222222]">
                      Vestibulum augue tortor, consequat eu diam a, varius
                      pulvinar ipsum.
                    </p>
                  </div>
                </div>
                <div className="card-back  ">
                  <div
                    style={{ backgroundImage: `url(${pic9})` }}
                    className="   bg-center h-full  "
                  >
                    <div className=" bg-black opacity-40"></div>
                  </div>
                  <div className="  flex justify-center">
                    <div className=" absolute top-0 text-center max-w-[250px]">
                      <div className=" flex justify-center py-6">
                        <LuBedDouble className="  text-[5rem] text-white  " />
                      </div>
                      <h2 className=" text-white text-2xl ">Decoration</h2>
                      <p className="  pt-6 text-[1.2rem] text-white">
                        Vestibulum augue tortor, consequat eu diam a, varius
                        pulvinar ipsum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container md:w-[280px]  ">
              <div className="card md:w-[280px] h-[350px] relative">
                <div className="card-front   bg-white text-[#222222] shadow-lg   text-xl ">
                  <div className="  text-center max-w-[250px] m-auto">
                    <div className=" flex justify-center py-6">
                      <LuBedDouble className="  text-[5rem] text-[#222222]  " />
                    </div>
                    <h2 className=" text-[#222222] text-2xl ">Fireplaces</h2>
                    <p className="  pt-6 text-[1.2rem] text-[#222222]">
                      Vestibulum augue tortor, consequat eu diam a, varius
                      pulvinar ipsum.
                    </p>
                  </div>
                </div>
                <div className="card-back  ">
                  <div
                    style={{ backgroundImage: `url(${pic9})` }}
                    className="   bg-center h-full  "
                  >
                    <div className=" bg-black opacity-40"></div>
                  </div>
                  <div className="  flex justify-center">
                    <div className=" absolute top-0 text-center max-w-[250px]">
                      <div className=" flex justify-center py-6">
                        <LuBedDouble className="  text-[5rem] text-white  " />
                      </div>
                      <h2 className=" text-white text-2xl ">Fireplaces</h2>
                      <p className="  pt-6 text-[1.2rem] text-white">
                        Vestibulum augue tortor, consequat eu diam a, varius
                        pulvinar ipsum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
                <InteriorSlide video={vid2} text={'Lara Gold Store'} date={'13 march 2020'} />
              </SwiperSlide>
              <SwiperSlide>
                <InteriorSlide video={vid1} text={'Black And White Kitchen'}  date={'13 march 2020'}/>
              </SwiperSlide>
              <SwiperSlide>
                <InteriorSlide video={vid2} text={'Living Room'}  date={'13 march 2020'}/>
              </SwiperSlide>
              <SwiperSlide>
                <InteriorSlide video={vid1} text={'Closet'}  date={'13 march 2020'}/>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section className="bg-[#f2f2f2]">
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
      <section className="bg-[#f2f2f2]">
        <div
          style={{ backgroundImage: `url(${pic9})` }}
          className=" relative   min-h-[2850px] h-full sl:min-h-[800px] bg-cover bg-center "
        >
          <div
            className="  h-full "
            // className=" min-h-[2900px] md:min-h-[2600px]  lg:min-h-[2650px] sl:min-h-[800px] bg-cover bg-center relative"
          >
            <div className=" bg-black inset-0 absolute top-0 w-full opacity-40 h-full"></div>
          </div>

          <div className=" flex justify-center ">
            <div className="  absolute top-20 px-6 sl:px-0">
              <p className=" first-line:text-[#8A6201] text-3xl lg:leading-[3.8rem] md:text-4xl text-white font-semibold lg:text-5xl text-center md:font-bold">
                We create projects <br /> from visualization to finished
                interior
              </p>
              <p className="  md:max-w-[800px] sl:max-w-[1000px] m-auto text-center text-white pt-6">
                Sed non dapibus dolor, non rhoncus dui. Ut eleifend justo at
                ipsum aliquam, vel cursus tellus pulvinar. Nulla vel tempus
                diam. Nunc vulputate, quam sit amet commodo tincidunt, enim
                lorem scelerisque massa, vel ultricies purus ipsum eu mauris.
              </p>
            </div>
          </div>

          <div className=" flex justify-center">
            <div className="  absolute   pt-[25rem] md:pt-[22rem] pb-10  sl:pb-0  w-full ">
              <div className="  grid  sl:grid-cols-4 max-w-[1200px] m-auto gap-10 px-6 sl:px-0 sl:gap-6 ">
                <div className="sl:max-w-[300px]   relative   ">
                  <div className=" bg-white shadow-lg pb-[6rem] sl:min-h-[70vh]  px-8 sl:px-0 text-center ">
                    <div className=" pt-20 ">
                      <h2 className="  text-2xl pb-2 font-semibold">
                        Planning
                      </h2>
                      <div className=" flex justify-center">
                        <p className=" text-[#8A6201] text-2xl">$</p>
                        <p className=" text-[#8A6201] text-5xl">169</p>
                      </div>
                    </div>
                    <div className=" pt-16 sl:max-w-[200px] m-auto">
                      <ul className=" space-y-4 ">
                        <li className=" border-b pb-2 ">
                          Flat Project Planning
                        </li>
                        <li className=" border-b pb-2 ">Style Selection</li>
                        <li className=" border-b pb-2 ">3D-Visualization</li>
                        <li className=" border-b pb-2  ">Recommendations</li>
                      </ul>
                    </div>
                    <div className=" flex justify-center">
                      <div className=" w-full sl:w-fit pt-12 sl:pt-0 sl:absolute sl:bottom-[-10px] ">
                         <Link to='/Request'>
                         <button className="  shadow-lg py-3 w-full sl:px-7 hover:border hover:border-[#8A6201]  text-white hover:text-black bg-[#8A6201] hover:bg-[#f2f2f2]">
                          SEND REQUEST
                        </button>
                       </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sl:max-w-[300px]   relative">
                  <div className=" bg-white shadow-lg pb-[6rem] sl:min-h-[70vh]  px-8 sl:px-0  text-center">
                    <div className=" pt-20">
                      <h2 className=" text-2xl pb-2 font-semibold">
                        Single Project
                      </h2>
                      <div className=" flex justify-center">
                        <p className=" text-[#8A6201] text-2xl">$</p>
                        <p className=" text-[#8A6201] text-5xl">799</p>
                      </div>
                    </div>
                    <div className=" pt-16 sl:max-w-[200px] m-auto">
                      <ul className=" space-y-4 ">
                        <li className=" border-b pb-2 ">
                          Flat Project Planning
                        </li>
                        <li className=" border-b pb-2 ">Style Selection</li>
                        <li className=" border-b pb-2 ">3D-Visualization</li>
                        <li className=" border-b pb-2  ">Recommendations</li>
                      </ul>
                    </div>
                    <div className=" flex justify-center">
                      <div className=" w-full sl:w-fit pt-12 sl:pt-0 sl:absolute sl:bottom-[-10px] ">
                         <Link to='/Request'>
                         <button className="  shadow-lg py-3 w-full sl:px-7 hover:border hover:border-[#8A6201]  text-white hover:text-black bg-[#8A6201] hover:bg-[#f2f2f2]">
                          SEND REQUEST
                        </button>
                       </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sl:max-w-[300px]   relative ">
                  <div className="  bg-white  shadow-lg pb-[6rem] sl:min-h-[70vh]  px-8 sl:px-0  text-center">
                    <div className=" pt-20">
                      <h2 className=" text-2xl pb-2 font-semibold">
                        Smart Home
                      </h2>
                      <div className=" flex justify-center">
                        <p className=" text-[#8A6201] text-2xl">$</p>
                        <p className=" text-[#8A6201] text-5xl">2500</p>
                      </div>
                    </div>
                    <div className=" pt-16 sl:max-w-[200px] m-auto">
                      <ul className=" space-y-4 ">
                        <li className=" border-b pb-2 ">
                          Flat Project Planning
                        </li>
                        <li className=" border-b pb-2 ">Style Selection</li>
                        <li className=" border-b pb-2 ">3D-Visualization</li>
                        <li className=" border-b pb-2  ">Recommendations</li>
                      </ul>
                    </div>
                    <div className=" flex justify-center">
                      <div className=" w-full sl:w-fit pt-12 sl:pt-0 sl:absolute sl:bottom-[-10px] ">
                        <Link to='/Request'>
                         <button className="  shadow-lg py-3 w-full sl:px-7 hover:border hover:border-[#8A6201]  text-white hover:text-black bg-[#8A6201] hover:bg-[#f2f2f2]">
                          SEND REQUEST
                        </button>
                       </Link>
                      </div>
                    </div>
                  </div>
                  <div className=" bg-[#8A6201]  w-[200px] h-[200px]    absolute top-0 right-0  clip">
                  
                  </div>
                </div>

                <div className="sl:max-w-[300px]   relative">
                  <div className="  bg-white shadow-lg pb-[6rem] sl:min-h-[70vh]  px-8 sl:px-0  text-center ">
                    <div className=" pt-20">
                      <h2 className=" text-2xl pb-2 font-semibold">
                        Commercial
                      </h2>
                      <div className=" flex justify-center">
                        <p className=" text-[#8A6201] text-2xl">$</p>
                        <p className=" text-[#8A6201] text-5xl">1259</p>
                      </div>
                    </div>
                    <div className=" pt-16 sl:max-w-[200px] m-auto">
                      <ul className=" space-y-4 ">
                        <li className=" border-b pb-2 ">
                          Flat Project Planning
                        </li>
                        <li className=" border-b pb-2 ">Style Selection</li>
                        <li className=" border-b pb-2 ">3D-Visualization</li>
                        <li className=" border-b pb-2  ">Recommendations</li>
                      </ul>
                    </div>
                    <div className=" flex justify-center">
                      <div className=" w-full sl:w-fit pt-12 sl:pt-0 sl:absolute sl:bottom-[-10px] ">
                       <Link to='/Request'>
                         <button className="  shadow-lg py-3 w-full sl:px-7 hover:border hover:border-[#8A6201]  text-white hover:text-black bg-[#8A6201] hover:bg-[#f2f2f2]">
                          SEND REQUEST
                        </button>
                       </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f2f2f2]">
        <div className=" py-20">
          <div className=" text-center pt-20">
            <h2 className=" text-2xl  font-semibold md:text-4xl sl:text-5xl first-line:text-[#8A6201]">
              4 Easy Steps <br /> to Get Interior Design
            </h2>
          </div>
          <div className=" grid md:grid-cols-2 sl:grid-cols-4 max-w-fit m-auto gap-[4.5rem] py-8">
            <div className=" max-w-[300px] sl:max-w-[250px] text-center">
              <div className=" text-[6rem] leading-[6rem] md:leading-[8rem] md:text-[8rem] font-bold text-[#8A6201]">
                <h2>01</h2>
              </div>
              <div>
                <h3 className=" text-2xl py-2">Request Sending</h3>
                <p>
                  Mauris libero ex, ullamcorper in facilisis sagittis, gravida
                  in ipsum.
                </p>
              </div>
            </div>

            <div className=" max-w-[300px] sl:max-w-[250px] text-center">
              <div className=" text-[6rem] leading-[6rem] md:leading-[8rem] md:text-[8rem] font-bold text-[#8A6201]">
                <h2>02</h2>
              </div>
              <div>
                <h3 className=" text-2xl py-2">Project Planning</h3>
                <p>
                  Nulla lacinia, felis eget cursus aliquet, tellus mauris
                  gravida ligula.
                </p>
              </div>
            </div>

            <div className=" max-w-[300px] sl:max-w-[250px] text-center">
              <div className=" text-[6rem] leading-[6rem] md:leading-[8rem] md:text-[8rem] font-bold text-[#8A6201]">
                <h2>03</h2>
              </div>
              <div>
                <h3 className=" text-2xl py-2">Design Creating</h3>
                <p>Sed pulvinar urna sit amet felis condimentum dapibus.</p>
              </div>
            </div>

            <div className=" max-w-[300px] sl:max-w-[250px] text-center">
              <div className=" text-[6rem] leading-[6rem] md:leading-[8rem] md:text-[8rem] font-bold text-[#8A6201]">
                <h2>04</h2>
              </div>
              <div>
                <h3 className=" text-2xl py-2">Enjoying Work</h3>
                <p>
                  Duis non arcu ante. Quisque convallis, nulla sit amet
                  scelerisque sollicitudin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" ">
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

export default Interior;
