import React from 'react'
import { Link } from "react-router-dom";
import pic3 from '../../../src/pictures/img3.jpeg'
import { Projectslide } from '../../components';
import "swiper/css";
import pic2 from "../../../src/pictures/img2.jpeg";
import pic4 from "../../../src/pictures/img4.jpeg";
import pic5 from "../../../src/pictures/img5.jpeg";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Pagination, A11y, Autoplay, } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade,  EffectCoverflow } from "swiper/modules";
const Projects = () => {
  return (
    <div id="two">
      <div className=" pt-[20%] lg:pt-[10%] pb-16 lg:pb-28 px-6">
        <h1 className=" text-3xl md:text-4xl lg:text-7xl text-[#222222] sl:text-[5rem] 2xl:text-[6rem] font-bold text-center pb-10 lg:pb-16">
          Projects
        </h1>
        <div className="  grid  md:grid-cols-2    sl:px-0  m-auto gap-6 ">
          <Link to="/">
            <div>
              <Swiper
                modules={[
                  Pagination,
                  A11y,
                  EffectFade,
                  Autoplay,
                  EffectCoverflow,
                ]}
                effect="fade"
                loop={true}
                speed={1500}
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
                  <Projectslide image={pic3}></Projectslide>
                </SwiperSlide>
                <SwiperSlide>
                  <Projectslide image={pic2}></Projectslide>
                </SwiperSlide>
                <SwiperSlide>
                  <Projectslide image={pic4}></Projectslide>
                </SwiperSlide>
                <SwiperSlide>
                  <Projectslide image={pic5}></Projectslide>
                </SwiperSlide>
                <SwiperSlide>
                  <Projectslide image={pic2}></Projectslide>
                </SwiperSlide>
                <div className=" ">
                  <div className="swiper-pagination  flex gap-6  justify-center  pb-16 "></div>
                </div>
              </Swiper>
            </div>
          </Link>

          <Link to="/">
            <div>
              <Swiper
                modules={[
                  Pagination,
                  A11y,
                  EffectFade,
                  Autoplay,
                  EffectCoverflow,
                ]}
                effect="fade"
                loop={true}
                speed={1500}
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
                  <Projectslide image={pic2}></Projectslide>
                </SwiperSlide>
                <SwiperSlide>
                  <Projectslide image={pic3}></Projectslide>
                </SwiperSlide>
                <SwiperSlide>
                  <Projectslide image={pic4}></Projectslide>
                </SwiperSlide>
                <SwiperSlide>
                  <Projectslide image={pic5}></Projectslide>
                </SwiperSlide>
                <SwiperSlide>
                  <Projectslide image={pic4}></Projectslide>
                </SwiperSlide>
                <div className=" ">
                  <div className="swiper-pagination  flex gap-6  justify-center  pb-16 "></div>
                </div>
              </Swiper>
            </div>
          </Link>

          <Link to="/">
            <div>
              <Swiper
                modules={[
                  Pagination,
                  A11y,
                  EffectFade,
                  Autoplay,
                  EffectCoverflow,
                ]}
                effect="fade"
                loop={true}
                speed={1500}
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
                  <Projectslide image={pic4}></Projectslide>
                </SwiperSlide>
                <SwiperSlide>
                  <Projectslide image={pic2}></Projectslide>
                </SwiperSlide>
                <SwiperSlide>
                  <Projectslide image={pic3}></Projectslide>
                </SwiperSlide>
                <SwiperSlide>
                  <Projectslide image={pic5}></Projectslide>
                </SwiperSlide>
                <SwiperSlide>
                  <Projectslide image={pic2}></Projectslide>
                </SwiperSlide>
                <div className=" ">
                  <div className="swiper-pagination  flex gap-6  justify-center  pb-16 "></div>
                </div>
              </Swiper>
            </div>
          </Link>

          <Link to="/">
            <div>
              <Swiper
                modules={[
                  Pagination,
                  A11y,
                  EffectFade,
                  Autoplay,
                  EffectCoverflow,
                ]}
                effect="fade"
                loop={true}
                speed={1500}
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
                  <Projectslide image={pic5}></Projectslide>
                </SwiperSlide>
                <SwiperSlide>
                  <Projectslide image={pic2}></Projectslide>
                </SwiperSlide>
                <SwiperSlide>
                  <Projectslide image={pic4}></Projectslide>
                </SwiperSlide>
                <SwiperSlide>
                  <Projectslide image={pic5}></Projectslide>
                </SwiperSlide>
                <SwiperSlide>
                  <Projectslide image={pic3}></Projectslide>
                </SwiperSlide>
                <div className=" ">
                  <div className="swiper-pagination  flex gap-6  justify-center  pb-16 "></div>
                </div>
              </Swiper>
            </div>
          </Link>

          <Link to="/">
            <div>
              <Swiper
                modules={[
                  Pagination,
                  A11y,
                  EffectFade,
                  Autoplay,
                  EffectCoverflow,
                ]}
                effect="fade"
                loop={true}
                speed={1500}
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
                  <Projectslide image={pic3}></Projectslide>
                </SwiperSlide>
                <SwiperSlide>
                  <Projectslide image={pic4}></Projectslide>
                </SwiperSlide>
                <SwiperSlide>
                  <Projectslide image={pic2}></Projectslide>
                </SwiperSlide>
                <SwiperSlide>
                  <Projectslide image={pic5}></Projectslide>
                </SwiperSlide>
                <SwiperSlide>
                  <Projectslide image={pic4}></Projectslide>
                </SwiperSlide>
                <div className=" ">
                  <div className="swiper-pagination  flex gap-6  justify-center  pb-16 "></div>
                </div>
              </Swiper>
            </div>
          </Link>

          <Link to="/">
            <div>
              <Swiper
                modules={[
                  Pagination,
                  A11y,
                  EffectFade,
                  Autoplay,
                  EffectCoverflow,
                ]}
                effect="fade"
                loop={true}
                speed={1500}
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
                  <Projectslide image={pic3}></Projectslide>
                </SwiperSlide>
                <SwiperSlide>
                  <Projectslide image={pic5}></Projectslide>
                </SwiperSlide>
                <SwiperSlide>
                  <Projectslide image={pic4}></Projectslide>
                </SwiperSlide>
                <SwiperSlide>
                  <Projectslide image={pic2}></Projectslide>
                </SwiperSlide>
                <SwiperSlide>
                  <Projectslide image={pic4}></Projectslide>
                </SwiperSlide>
                <div className=" ">
                  <div className="swiper-pagination  flex gap-6  justify-center  pb-16 "></div>
                </div>
              </Swiper>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects
