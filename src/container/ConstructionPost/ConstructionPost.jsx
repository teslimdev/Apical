import React from "react";
import pic9 from "../../../src/pictures/img9.jpeg";
import ridwan from "../../../src/pictures/ridwan2.png";
import { Header, Footer2,Reviews } from "../../components";
import vid1 from "../../../src/pictures/vid1.mp4";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Pagination, A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, EffectCoverflow,EffectCards } from "swiper/modules";
import ridwam from '../../../src/pictures/ridwan2.png'
import { Link } from "react-router-dom";

const ConstructionPost = () => {
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
              <div className="  absolute top-[35%] sl:top-[30%] ">
                <h2 className=" text-white sl:text-[5.5rem] sl:leading-[5.5rem] lg:text-[4.5rem] lg:leading-[4.5rem] md:leading-[3.5rem] text-center text-[2rem] md:text-[3.5rem] font-bold">
                  {" "}
                  The Best Architectural and Construction Agency
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-[#f2f2f2]">
        <div>
          <div className=" max-w-[1200px] m-auto py-12 sl:py-20 px-6 sl:px-0">
            <h2 className=" sl:text-[5rem] lg:text-[4rem] lg:leading-[4rem] md:text-[3rem] text-[1.5rem] font-bold sl:leading-[5rem] border-b   sl:max-w-[900px] pb-4 lg:pb-8">
              "Elevate Your Dreams"
            </h2>
            <h3 className=" sl:text-[2rem] text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] py-2 sl:py-4">
              {" "}
              Unveiling the Pinnacle Architectural and Construction Experience:
            </h3>
            <p>
              Welcome to a realm where architectural brilliance meets
              construction mastery – the epitome of excellence in the world of
              design and construction. Our agency stands as a testament to
              innovation, precision, and a commitment to turning your
              architectural dreams into awe-inspiring realities.
            </p>
            <p className=" pt-8">
              At Apical Designs, we redefine the boundaries of architectural and
              construction excellence. With a rich legacy of delivering iconic
              projects that blend creativity with functionality, we have emerged
              as the go-to agency for those who demand nothing short of the
              best. Our team of seasoned architects, engineers, and construction
              experts is dedicated to transforming spaces into living works of
              art.
            </p>
          </div>
        </div>
      </section>
      <section className=" bg-[#f2f2f2]">
        <div className=" py-10 max-w-[1200px] m-auto px-6 sl:px-0">
          <div className=" grid md:grid-cols-2 lg:grid-cols-3  gap-6 ">
            <div className=" lg:max-w-[400px]  hover:transform hover:scale-[1.05] transition ease-out delay-200  duration-300   bg-white shadow-lg  px-6">
              <h2 className=" text-2xl text-[#8A6201]  font-semibold  text-center py-6">
                Innovative Design Thinking
              </h2>
              <p className=" pb-12 ">
                Our architects are visionaries, embracing cutting-edge design
                principles that go beyond aesthetics. We craft spaces that not
                only captivate the eye but also elevate the human experience
                within them
              </p>
            </div>
            <div className=" lg:max-w-[400px] hover:transform hover:scale-[1.05] transition ease-out delay-200  duration-300   bg-white shadow-lg  px-6">
              <h2 className=" text-2xl text-[#8A6201]  font-semibold  text-center py-6">
                Precision Engineering
              </h2>
              <p className=" pb-12 ">
                {" "}
                Behind every breathtaking structure is a foundation built on
                precision engineering. Our construction experts ensure that
                every project is executed flawlessly, adhering to the highest
                standards of safety and durability
              </p>
            </div>
            <div className=" lg:max-w-[400px]  hover:transform hover:scale-[1.05] transition ease-out delay-200  duration-300   bg-white shadow-lg  px-6">
              <h2 className=" text-2xl text-[#8A6201]  font-semibold  text-center py-6">
                Sustainability at Core
              </h2>
              <p className=" pb-12 ">
                {" "}
                In an era where sustainability is paramount, we take pride in
                integrating eco-friendly practices into our designs. From
                energy-efficient buildings to eco-conscious materials, we strive
                to create spaces that harmonize with the environment
              </p>
            </div>
            <div className=" lg:max-w-[400px]  hover:transform hover:scale-[1.05] transition ease-out delay-200  duration-300   bg-white shadow-lg  px-6">
              <h2 className=" text-2xl text-[#8A6201]  font-semibold  text-center py-6">
                Client-Centric Approach
              </h2>
              <p className=" pb-12 ">
                Your dreams are our blueprints. We believe in a collaborative
                process that places you at the center of the design and
                construction journey. Our team listens attentively to your
                aspirations, ensuring that every detail is meticulously tailored
                to your vision
              </p>
            </div>
          </div>
          <div className=" pt-12 lg:pt-20">
            <p>
              "Explore our diverse portfolio, a showcase of projects that range
              from residential masterpieces to commercial landmarks. Each
              project is a testament to our unwavering commitment to excellence
              and our ability to seamlessly blend innovation with functionality"
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className=" relative">
          <div
         style={{backgroundImage:`url(${pic9})`}}
         className=" min-h-[55rem] md:min-h-[55rem] sl:min-h-[58rem] bg-center bg-cover relative bg-fixed">
         <div className=" bg-black absolute top-0 h-full w-full opacity-50 inset-0"></div>
        </div>
        <div className=" flex justify-center " >
           <div className="  absolute  top-[7%]">
           <div className="">
              <div className="  text-center pb-5 text-white px-6 md:px-0">
              <h2 className=" text-2xl">Client Reviews</h2>
              <p className=" max-w-[700px] m-auto">
                Don't just take our word for it. Hear what our satisfied clients
                have to say about their experience working with us. From concept
                to completion, we prioritize open communication and
                transparency, fostering a relationship of trust with every
                client
              </p>
            </div>
          <div className=" md:pt-8 sl:pt-12 ">
             <div id="one" className=" max-w-[300px] md:max-w-[400px]  m-auto bg-[#f2f2f2] ">
                <Swiper
              modules={[
                Pagination,
                A11y,
                EffectFade,
                Autoplay,
                EffectCoverflow,
              ]}
              effect="cube"
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
                <Reviews image={ridwam} text={'     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi reiciendis quae vero excepturi sed, rerum voluptatibus molestiae tenetur! Dolore, possimus. Adipisci enim eveniet sed error iusto harum deserunt quas qui.'} name={'Lara Gold'} subtext={'Lorem ipsum dolor sit amet'}/>
              </SwiperSlide>
               <SwiperSlide>
                <Reviews image={ridwam} text={'     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi reiciendis quae vero excepturi sed, rerum voluptatibus molestiae tenetur! Dolore, possimus. Adipisci enim eveniet sed error iusto harum deserunt quas qui.'} name={'Lara Gold'} subtext={'Lorem ipsum dolor sit amet'}/>
              </SwiperSlide>
               <SwiperSlide>
                <Reviews image={ridwam} text={'     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi reiciendis quae vero excepturi sed, rerum voluptatibus molestiae tenetur! Dolore, possimus. Adipisci enim eveniet sed error iusto harum deserunt quas qui.'} name={'Lara Gold'} subtext={'Lorem ipsum dolor sit amet'}/>
              </SwiperSlide>
               <SwiperSlide>
                <Reviews image={ridwam} text={'     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi reiciendis quae vero excepturi sed, rerum voluptatibus molestiae tenetur! Dolore, possimus. Adipisci enim eveniet sed error iusto harum deserunt quas qui.'} name={'Lara Gold'} subtext={'Lorem ipsum dolor sit amet'}/>
              </SwiperSlide>
              <div className=" ">
                <div className="swiper-pagination  flex gap-6  justify-center  pb-16 "></div>
              </div>
            </Swiper>
           </div>
          </div>
           </div>
           </div>
          </div>
        </div>
      </section>
        <section>
          <div className=" py-10 max-w-[1200px] m-auto px-6 sl:px-0">
            <div>
              <h3 className=" py-2">Ready to embark on your architectural journey with the best in the industry? Reach out to us today to discuss your project, schedule a consultation, or simply learn more about how we can turn your dreams into reality.</h3>
            <h4 className=" py-2">Join us at Apical Designs – where architectural marvels and construction brilliance converge to create a world of timeless beauty and functionality. Elevate your dreams with us.</h4>
            <div className=" pt-6 text-center">
            <Link to='/Contacts'>
                <button className=" border  border-[#222222] py-2 px-7 rounded-full bg-[#222222] text-white hover:bg-[#f2f2f2] hover:text-[#222222] hover:transform hover:scale-[1.05] hover:transition ease-out duration-200 ">Contact Us</button>
            </Link>
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
      <section className="">
        <Footer2 />
      </section>
    </div>
  );
};

export default ConstructionPost;
