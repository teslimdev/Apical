import React, { useCallback, useRef ,useState,useEffect } from "react";
import { Link } from "react-router-dom";
import pic2 from "../../../src/pictures/img2.jpeg";
import pic3 from "../../../src/pictures/img3.jpeg";
import pic4 from "../../../src/pictures/img4.jpeg";
import pic12 from "../../../src/pictures/ridwan.png";
import pic5 from "../../../src/pictures/img5.jpeg";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { GoArrowUpRight } from "react-icons/go";
import { BiWorld } from "react-icons/bi";
import { GrLinkNext, GrLinkPrevious, GrNext, GrPrevious } from "react-icons/gr";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Pagination, A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, EffectCoverflow,EffectCards } from "swiper/modules";
import {
  HomeBanner,
  HomeSlide,
  Slide,
  Slider,
  Tabs,
  HomeSlider,
  Footer,
  Countdown1,
  Countdown2,
  Countdown3,
  Header
} from "../../components/";

const Home = () => {
    const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const section = document.getElementById('target-section');
      const sectionOffset = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (offset > sectionOffset - sectionHeight / 2) {
        setIsSectionVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const tabs = [
    {
      id: 1,
      label: "History",
      content: [
        "Archy was founded in 1936 in Chicago, USA. The company was established by Louis Skidmore and Nathaniel Owings, and later joined by John O. Merrill.",
        "SOM has been responsible for the design of many notable buildings worldwide, including the Sears Tower (now known as Willis Tower) in Chicago, which was the world's tallest building from 1973 to 1998. The company has also designed the John Hancock Center, One World Trade Center, and Burj Khalifa, which is currently the tallest building in the world.",
        "Throughout its history, SOM has been recognized for its innovative designs and commitment to sustainability. ",
      ],
    },
    {
      id: 2,
      label: "Desription",
      content: [
        "Second Tab Archy was founded in 1936 in Chicago, USA. The company was established by Louis Skidmore and Nathaniel Owings, and later joined by John O. Merrill.",
        "SOM has been responsible for the design of many notable buildings worldwide, including the Sears Tower (now known as Willis Tower) in Chicago, which was the world's tallest building from 1973 to 1998. The company has also designed the John Hancock Center, One World Trade Center, and Burj Khalifa, which is currently the tallest building in the world.",
        "Throughout its history, SOM has been recognized for its innovative designs and commitment to sustainability. ",
      ],
    },
    {
      id: 3,
      label: "Reviews",
      content: [
        "Third Tab Archy was founded in 1936 in Chicago, USA. The company was established by Louis Skidmore and Nathaniel Owings, and later joined by John O. Merrill.",
        "SOM has been responsible for the design of many notable buildings worldwide, including the Sears Tower (now known as Willis Tower) in Chicago, which was the world's tallest building from 1973 to 1998. The company has also designed the John Hancock Center, One World Trade Center, and Burj Khalifa, which is currently the tallest building in the world.",
        "Throughout its history, SOM has been recognized for its innovative designs and commitment to sustainability. ",
      ],
      image: pic3,
    },
  ];

  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

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
    <div id="hom" className=" ">
    <section>
      <Header/>
    </section>
      <section id=" home" className=" one">
        <div className=" relative  ">
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
              speed={1200}
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
                <HomeBanner
                  image={pic3}
                  header={"Architecture is our Passion, Design is Our Art."}
                  text={
                    "Architect offer design and planning for buildings, landscapes and interiors"
                  }
                ></HomeBanner>
              </SwiperSlide>

              <SwiperSlide>
                <HomeBanner
                  image={pic4}
                  header={"Designing Spaces, Creating Experiences."}
                  text={
                    "Many architect specialize in sustainable design,incorporating environmentally friendly features into buildings."
                  }
                ></HomeBanner>
              </SwiperSlide>

              <SwiperSlide>
                <HomeBanner
                  image={pic2}
                  header={"Transforming Ideas   Into  Structures."}
                  text={
                    "Architects can conducts site analysis and evaluation to determine the best location for a building or development project"
                  }
                ></HomeBanner>
              </SwiperSlide>
              <SwiperSlide>
                <HomeBanner
                  image={pic5}
                  header={"Building Your Vision, Creating Your Reality. "}
                  text={
                    "Architect can manage the construction process from start to finish, overseeing contractors and ensuring that the project stays on schedule."
                  }
                ></HomeBanner>
              </SwiperSlide>
              <div className=" ">
                <div className="swiper-pagination  flex gap-6  justify-center  pb-16 "></div>
              </div>
            </Swiper>
          </div>

          <div className="  hidden md:block absolute  top-[80%] md:top-[50%] md:right-[5%] lg:right-[10%] z-10">
            <div className="  flex  lg:items-end md:flex-col     gap-4 ">
              <AiFillInstagram className=" text-white text-2xl 3xl:text-5xl"></AiFillInstagram>
              <AiFillLinkedin className=" text-white text-2xl 3xl:text-5xl"></AiFillLinkedin>
              <BsPinterest className=" text-white text-2xl 3xl:text-5xl"></BsPinterest>
            </div>
          </div>
        </div>
      </section>

      <section className=" two bg-[#f2f2f2]">
        <div id="target-section">
          <div className="  lg:max-w-[1200px]  sl:max-w-[1200px] sl:m-auto pt-[8%] lg:pt-[7%]  px-6  sl:px-0   ">
            <h2 className="  text-[2.5rem] leading-[3rem] md:text-[4rem] md:leading-[4rem] lg:text-[6rem] 3xl:leading-[10rem]  3xl:text-[9rem] lg:leading-[6rem] max-w-[900px] text-[#222222]  pb-6 lg:pb-10 font-bold">
              We specialize in these fields.
            </h2>
            <div className=" flex  flex-col md:flex-row gap-3 lg:max-w-[1200px] 3xl:max-w-[1700px] justify-between  items-end pb-8 lg:pb-12 lg:items-center">
              <h3 className="  sl:text-3xl  lg:text-2xl md:max-w-[450px] 3xl:border-t-4 border-t pt-2 lg:font-[350] 3xl:text-5xl  3xl:max-w-[1100px] lg:max-w-[700px] sl:max-w-[800px]">
                The homepage of an architecture website serves as the first
                impression for visitors and should provide a compelling overview
                of the architecture firm and its offerings.
              </h3>
              <div className="  place-self-end ">
                <Link
                  to="/Services"
                  className=" underline hover:no-underline 3xl:text-[2rem] flex"
                >
                  All Services
                  <GoArrowUpRight className=" text-2xl"></GoArrowUpRight>
                </Link>
              </div>
            </div>
          </div>

          <div className="pb-8 lg:pb-20 max-w-[1100px] mx-auto">
            <ul className=" grid  md:grid-cols-2  lg:grid-cols-3 max-w-fit gap-x-32 gap-2 px-6  ">
              <Link to="/Architecture">
                <li className=" flex items-center 3xl:text-[2rem] text-[1.1rem] lg:text-[1.3rem] sl:text-[1.5rem] gap-2">
                  <AiOutlinePlus className=" text-[#8A6201]"></AiOutlinePlus>{" "}
                  <p className="text-[#8A6201] hover:border-b border-[#8A6201]">Architectural Design</p>
                </li>
              </Link>
              <Link to="/Interior">
                <li className=" flex items-center 3xl:text-[2rem] text-[1.1rem] lg:text-[1.3rem] sl:text-[1.5rem] gap-2">
                  <AiOutlinePlus className="text-[#8A6201]"></AiOutlinePlus>{" "}
                  <p className="text-[#8A6201] hover:border-b border-[#8A6201] ">Interior Design</p>
                </li>
              </Link>
               <Link to="/Exterior">
                <li className=" flex items-center 3xl:text-[2rem] text-[1.1rem] lg:text-[1.3rem] sl:text-[1.5rem] gap-2">
                  <AiOutlinePlus className="text-[#8A6201]"></AiOutlinePlus>{" "}
                  <p className="text-[#8A6201] hover:border-b border-[#8A6201]">Exterior Design</p>
                </li>
              </Link>
              <Link to="/Visualization">
                <li className=" flex items-center 3xl:text-[2rem] text-[1.1rem] lg:text-[1.3rem] sl:text-[1.5rem] gap-2">
                  <AiOutlinePlus className="text-[#8A6201]"></AiOutlinePlus>{" "}
                  <p className="text-[#8A6201] hover:border-b border-[#8A6201]">Visualization</p>
                </li>
              </Link>
              <Link to="/Construction">
                <li className=" flex items-center 3xl:text-[2rem] text-[1.1rem] lg:text-[1.3rem] sl:text-[1.5rem] gap-2">
                  <AiOutlinePlus className="text-[#8A6201]"></AiOutlinePlus>{" "}
                  <p className="text-[#8A6201] hover:border-b border-[#8A6201]">Building Construction</p>
                </li>
              </Link>
            </ul>
          </div>
          <div className=" max-w-[400px]  md:max-w-[700px] lg:max-w-[950px] px-6 md:px-0 sl:max-w-[1200px] 3xl:max-w-[2000px] m-auto pb-8 lg:pb-16">
            <ul className=" grid md:grid-cols-3  gap-10   ">
              <li className="  text-center md:text-start">
                {" "}
                <h2   className=" border-black border-b text-[5rem]  sl:text-[6rem]  3xl:text-[8rem]">
                  {isSectionVisible && <Countdown1 startCount={0} />}
                </h2>{" "}
                <p className=" 3xl:text-4xl text-xl pt-6">
                  Clients Around the World
                </p>
              </li>
              <li className=" text-center  md:text-start">
                {" "}
                <h2 className=" border-black border-b text-[5rem]  sl:text-[6rem]  3xl:text-[8rem]">
                   {isSectionVisible && <Countdown2 startCount={0} />}
                </h2>{" "}
                <p className=" 3xl:text-4xl text-xl pt-6">Projects Completed</p>
              </li>
              <li className=" text-center  md:text-start">
                <h2 className=" border-black border-b text-[5rem]  flex  justify-center md:justify-start  sl:text-[6rem]  3xl:text-[8rem]">
                  {isSectionVisible && <Countdown3 startCount={0} />}K
                </h2>{" "}
                <p className=" 3xl:text-4xl text-xl pt-6">Square Feet</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className=" three">
        <div
          style={{ backgroundImage: `url(${pic3})` }}
          className=" min-h-[40vh] md:min-h-[60vh] bg-center bg-no-repeat bg-cover shadow-2xl flex justify-center items-center [background-attachment:_fixed]"
        >
          <marquee
            className="uppercase flex gap-40 justify-between"
            behavior="scroll"
            direction=""
            scrollamount="10"
          >
            <span className=" text-5xl md:text-8xl [-webkit-text-stroke-color:#926F34] [-webkit-text-stroke-width:_2px] text-transparent mr-60">
              construction
            </span>
            <span className=" text-5xl md:text-8xl [-webkit-text-stroke-color:#926F34] [-webkit-text-stroke-width:_2px] text-transparent mr-60">
              interior design
            </span>
            <span className=" text-5xl md:text-8xl [-webkit-text-stroke-color:#926F34] [-webkit-text-stroke-width:_2px] text-transparent mr-60">
              mordern structures
            </span>
            <span className=" text-5xl md:text-8xl [-webkit-text-stroke-color:#926F34] [-webkit-text-stroke-width:_2px] text-transparent mr-60">
              thinking outside the box
            </span>
          </marquee>
        </div>
      </section>

      <section className=" four bg-[#f2f2f2]">
        <div>
          <div className=" max-w-[700px] lg:max-w-[1200px] 3xl:max-w-[2000px] sl:max-w-[1200px] lg:m-auto pt-[5%] lg:pt-[7%]  px-6  sl:px-0  ">
            <div className=" flex flex-col-reverse md:flex-row gap-3 lg:max-w-[1200px] 3xl:max-w-[1700px]   md:justify-between md:items-start">
              <h2 className=" text-[2rem] md:text-[3rem] lg:text-[4.5rem] sl:text-[6rem] font-bold text-[#222222] 3xl:text-[8rem]">
                "Discover Our Story"
              </h2>
              <div className=" flex   place-self-end md:place-self-start">
                <Link
                  to="/About"
                  className=" underline hover:no-underline 3xl:text-[2rem] flex"
                >
                  About Us
                  <GoArrowUpRight className=" text-2xl"></GoArrowUpRight>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:max-w-[1000px] 3xl:max-w-[2000px] sl:max-w-[1200px]  lg:m-auto py-8 lg:py-12    px-6  sl:px-0 ">
            <h2 className=" py-3 lg:py-8 text-xl lg:text-3xl">
              Designing the future, today - welcome to our architecture
            </h2>
            <div className=" flex justify-between flex-col lg:flex-row">
              <div className="  lg:max-w-[500px]">
                <Swiper
                  modules={[Pagination, A11y, EffectCoverflow, Autoplay,EffectCards]}
                  effect="cards"
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
                    <Slider image={pic2}></Slider>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Slider image={pic3}></Slider>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Slider image={pic4}></Slider>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Slider image={pic4}></Slider>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className=" pt-6 lg:pt-0">
                <div className=" lg:max-w-[400px] sl:max-w-[500px] ">
                  <Tabs tabs={tabs} />
                  <div>
                    <ul>
                      <li className=" flex justify-between border-b  border-black py-3 ">
                        <p>Architecture</p>
                        <p>95%</p>
                      </li>
                      <li className=" flex justify-between border-b  border-black py-3">
                        <p>Functional Spaces</p>
                        <p>85%</p>
                      </li>
                      <li className=" flex justify-between border-b  border-black py-3">
                        <p>Renovation</p>
                        <p>75%</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" five bg-[#f2f2f2]">
        <div id="home" className=" py-10">
          <div className="  px-6">
            <Swiper
              modules={[Pagination, A11y, EffectFade, Autoplay, Navigation]}
              effect="cube"
              loop={true}
              navigation={{
                clickable: true,
              }}
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
              speed={1500}
              autoplay={{
                delay: 4000,
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
              spaceBetween={20}
              scrollbar={{ draggable: true }}
              className=" md:max-w-full lg:max-w-full sl:max-w-[1350px] 2xl:max-w-[1450px] m-auto  "
            >
              <SwiperSlide>
                <Slide image={pic2}> </Slide>
              </SwiperSlide>
              <SwiperSlide>
                <Slide image={pic3}></Slide>
              </SwiperSlide>
              <SwiperSlide>
                <Slide image={pic4}></Slide>
              </SwiperSlide>
              <SwiperSlide>
                <Slide image={pic5}></Slide>
              </SwiperSlide>
              <SwiperSlide>
                <Slide image={pic3}></Slide>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <section className="six bg-[#f2f2f2] ">
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 sl:grid-cols-4  max-w-fit m-auto gap-8 px-6  py-10 ">
          <div className=" md:max-w-[320px]">
            <BiWorld className=" text-7xl text-[#222222] max-w-fit m-auto"></BiWorld>
            <div>
              <h3 className=" text-[1.3rem] py-3">
                Consultation and initial meeting
              </h3>
              <p className=" text-[0.9rem]">
                The architecture company meets with the client to discuss their
                needs, budget, and timeline. They may also visit the site to get
                a better understanding of the project.
              </p>
            </div>
          </div>
          <div className=" md:max-w-[320px]">
            <BiWorld className=" text-7xl text-[#222222]  max-w-fit m-auto"></BiWorld>
            <div>
              <h3 className=" text-[1.3rem] py-3">Concept design</h3>
              <p className=" text-[0.9rem]">
                Based on the client's requirements, the architecture company
                creates a concept design that outlines the overall vision for
                the project. This may include sketches, 3D models, or
                computer-generated renderings.
              </p>
            </div>
          </div>
          <div className=" md:max-w-[320px]">
            <BiWorld className=" text-7xl text-[#222222]  max-w-fit m-auto"></BiWorld>
            <div>
              <h3 className=" text-[1.3rem] py-3">Design development</h3>
              <p className=" text-[0.9rem]">
                Once the client approves the concept design, the architecture
                company begins to develop detailed drawings and plans. This may
                involve collaborating with engineers, contractors, and other
                specialists to ensure that the design is feasible.
              </p>
            </div>
          </div>
          <div className=" md:max-w-[320px]">
            <BiWorld className=" text-7xl text-[#222222]  max-w-fit m-auto "></BiWorld>
            <div>
              <h3 className=" text-[1.3rem] py-3">Permitting and approvals</h3>
              <p className=" text-[0.9rem]">
                Before construction can begin, the architecture company must
                obtain the necessary permits and approvals from local
                authorities. This may involve submitting plans and documents for
                review and responding to any questions or co
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" seven bg-[#f2f2f2]">
        <div>
          <div className=" max-w-[950px] lg:max-w-[1200px] 3xl:max-w-[2000px] sl:max-w-[1200px] lg:m-auto pt-[5%] lg:pt-[7%]  px-6  sl:px-0  ">
            <div className=" flex flex-col-reverse md:flex-row  gap-8 md:max-w-[950px]  lg:max-w-[1200px] 3xl:max-w-[1700px]   md:justify-between md:items-start">
              <h2 className=" text-[2rem] md:max-w-[550px] lg:max-w-[800px] sl:max-w-[1000px] md:text-[3rem] lg:leading-[7rem] lg:text-[4.5rem] sl:text-[5.7rem] font-bold text-[#222222] 3xl:text-[8rem] ">
                "Building a legacy, one project at a time"
              </h2>
              <div className=" flex   place-self-end md:place-self-end">
                <Link
                  to="/About"
                  className=" underline hover:no-underline 3xl:text-[2rem] flex "
                >
                  Latest Projects
                  <GoArrowUpRight className=" text-2xl"></GoArrowUpRight>
                </Link>
              </div>
            </div>
            <h3 className=" text-xl lg:text-[2rem] font-[350] py-10 lg:py-16">
              Whether you're an architect, designer, or simply someone with an
              interest in the built environment, our latest projects are sure to
              inspire and challenge you.
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
              <HomeSlide image={pic3} text={" The Light House"}></HomeSlide>
            </SwiperSlide>
            <SwiperSlide>
              <HomeSlide image={pic4} text={"Architectural Home"}></HomeSlide>
            </SwiperSlide>
            <SwiperSlide>
              <HomeSlide image={pic5} text={"Interior space"}></HomeSlide>
            </SwiperSlide>
            <SwiperSlide>
              <HomeSlide image={pic3} text={"Design Art"}></HomeSlide>
            </SwiperSlide>
            <SwiperSlide>
              <HomeSlide image={pic2} text={"Visualization"}></HomeSlide>
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
                className={`prev-arrow rounded-full  border  hover:bg-white py-2  ${
                  slideRef === "null" ? " text-white" : ""
                }`}
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

      <section className=" nine bg-[#f2f2f2]">
        <div>
          <div className=" max-w-[950px] lg:max-w-[1200px] 3xl:max-w-[2000px] sl:max-w-[1200px] lg:m-auto pt-[5%] lg:pt-[7%]  px-6  sl:px-0  ">
            <div className=" flex flex-col-reverse md:flex-row  gap-8 md:max-w-[950px]  lg:max-w-[1200px] 3xl:max-w-[1700px]   md:justify-between md:items-start">
              <h2 className=" text-[2rem] md:max-w-[550px] lg:max-w-[800px] sl:max-w-[1000px] md:text-[3rem] lg:leading-[7rem] lg:text-[5rem] sl:text-[5.7rem] font-bold text-[#222222] 3xl:text-[8rem] ">
                Latest News
              </h2>
              <div className=" flex   place-self-end">
                <Link
                  to="/News"
                  className=" underline hover:no-underline lg:text-[1.4rem] 3xl:text-[2rem] flex "
                >
                  Latest News
                  <GoArrowUpRight className=" text-2xl"></GoArrowUpRight>
                </Link>
              </div>
            </div>
            <h3 className=" text-xl lg:text-[2rem] font-[350] py-10 lg:py-16 ">
              "Our team is comprised of experienced architects, designers, and
              project managers who share a common goal of creating exceptional
              spaces.
            </h3>
          </div>
        </div>
      </section>

      <section className="ten bg-[#f2f2f2]  py-6">
        <div className="  ">
          <div className=" px-6  relative">
            <Swiper
              ref={sliderRef}
              modules={[Pagination, A11y, EffectFade, Autoplay, Navigation]}
              effect="cube"
              speed={1500}
              autoplay={{
                delay: 4000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
                waitForTransition: true,
              }}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                520: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              a11y={{
                prevSlide: "true",
                nextSlide: "true",
              }}
              slidesPerView={1}
              spaceBetween={20}
              scrollbar={{ draggable: true }}
              className=" w-full  2xl:max-w-[1200px]  m-auto  "
            >
              <SwiperSlide>
                <HomeSlider image={pic2}></HomeSlider>
              </SwiperSlide>
              <SwiperSlide>
                <HomeSlider image={pic2}></HomeSlider>
              </SwiperSlide>
              <SwiperSlide>
                <HomeSlider image={pic2}></HomeSlider>
              </SwiperSlide>
              <SwiperSlide>
                <HomeSlider image={pic2}></HomeSlider>
              </SwiperSlide>
              <SwiperSlide>
                <HomeSlider image={pic2}></HomeSlider>
              </SwiperSlide>
              <div
                id="one"
                className="  absolute left-[30%]   md:left-[40%]    border-8  "
              >
                <div className="swiper-pagination  flex gap-3 md:gap-6  cursor-pointer "></div>
              </div>
            </Swiper>
            <div className=" hidden 2xl:block">
              <div className=" flex sl:max-w-[1200px]   absolute   2xl:top-[40%] 2xl:right-[230px] 2xl:gap-[1280px]  m-auto">
                <div className="prev-arrow" onClick={handlePrev}>
                  <GrLinkPrevious className=" cursor-pointer text-2xl"></GrLinkPrevious>
                </div>
                <div className="next-arrow" onClick={handleNext}>
                  <GrLinkNext className="  cursor-pointer text-2xl"></GrLinkNext>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" eleven bg-[#f2f2f2]">
        <div>
          <div className=" max-w-[950px] lg:max-w-[1200px] 3xl:max-w-[2000px] sl:max-w-[1200px] lg:m-auto pt-[5%] lg:pt-[2%]  px-6  sl:px-0  ">
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

      <section className=" twelve bg-[#f2f2f2]">
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

      <section className=" thirteen">
        <div
          style={{ backgroundImage: `url(${pic3})` }}
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
        <Footer />
      </section>
    </div>
  );
};

export default Home;
