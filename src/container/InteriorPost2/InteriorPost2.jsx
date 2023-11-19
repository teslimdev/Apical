import React from "react";
import { Header, Footer2 } from "../../components";
import pic9 from "../../../src/pictures/img9.jpeg";
import vid1 from "../../../src/pictures/vid1.mp4";
const InteriorPost2 = () => {
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
           loop
            className=" shadow-2xl w-full h-[300px] md:h-[400px] lg:h-[500px]  object-cover"
          >
            <source src={vid1} type="video/mp4 " className="  " />
          </video>
          <div className="   absolute bg-black w-full h-full top-0 inset-0 opacity-50">
            <div className=" flex justify-center">
              <div className="  absolute top-[40%] sl:top-[30%] ">
                <h2 className=" text-white sl:text-[6rem] lg:text-[5rem] text-center text-[2.5rem] md:text-[4rem] font-bold">
                  {" "}
                  <span>Modern ideas </span>
                  for home
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
              "Embracing Modernity"
            </h2>
            <h3 className=" sl:text-[2rem] text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] py-2 sl:py-4">
              {" "}
              Innovative Home Design Ideas for Contemporary Living:
            </h3>
            <p>
              In the fast-paced world of today, our homes are not just spaces to
              live; they are reflections of our lifestyles and personal tastes.
              Modern architecture has evolved to meet the demands of the 21st
              century, blending functionality with aesthetics to create homes
              that are both practical and visually stunning. Explore these
              cutting-edge ideas that redefine the concept of modern living
            </p>
          </div>
        </div>
      </section>
      <section className=" bg-[#f2f2f2]">
        <div className=" py-10 max-w-[1200px] m-auto px-6 sl:px-0">
          <div className=" grid md:grid-cols-2 lg:grid-cols-3  gap-6 ">
            <div className=" lg:max-w-[400px] hover:transform hover:scale-[1.05] transition ease-out delay-200  duration-300   bg-white shadow-lg  px-6">
              <h2 className=" text-2xl text-[#8A6201]  font-semibold  text-center py-6">
                Open-Concept Living <br /> Spaces
              </h2>
              <p className=" pb-12 ">
                Break down the traditional barriers between rooms to create an
                open, fluid living space. Modern homes often feature
                interconnected living, dining, and kitchen areas, promoting a
                sense of spaciousness and fostering a communal atmosphere for
                families and guests.
              </p>
            </div>
            <div className=" lg:max-w-[400px] hover:transform hover:scale-[1.05] transition ease-out delay-200  duration-300   bg-white shadow-lg  px-6">
              <h2 className=" text-2xl text-[#8A6201]  font-semibold  text-center py-6">
                Smart Home Integration
              </h2>
              <p className=" pb-12 ">
                Seamlessly integrate technology into your home with smart home
                solutions. From automated lighting and climate control to
                advanced security systems, these innovations not only enhance
                convenience but also contribute to energy efficiency and
                sustainability.
              </p>
            </div>
            <div className=" lg:max-w-[400px] hover:transform hover:scale-[1.05] transition ease-out delay-200  duration-300   bg-white shadow-lg  px-6">
              <h2 className=" text-2xl text-[#8A6201]  font-semibold  text-center py-6">
                Sustainable Design
              </h2>
              <p className=" pb-12 ">
                Embrace eco-friendly practices by incorporating sustainable
                materials and energy-efficient technologies into your home. From
                recycled building materials to solar panels and green roofs,
                modern architecture is leaning towards environmentally conscious
                designs
              </p>
            </div>
            <div className=" lg:max-w-[400px] hover:transform hover:scale-[1.05] transition ease-out delay-200  duration-300   bg-white shadow-lg  px-6">
              <h2 className=" text-2xl text-[#8A6201]  font-semibold  text-center py-6">
                Flexible Furniture and Multi- <br /> Functional Spaces
              </h2>
              <p className=" pb-12 ">
                Optimize space utilization with adaptable furniture and
                multi-functional areas. Transform a home office into a guest
                bedroom, or convert a living room into a home theater with
                retractable furniture and innovative storage solutions
              </p>
            </div>
            <div className=" lg:max-w-[400px] hover:transform hover:scale-[1.05] transition ease-out delay-200  duration-300    bg-white shadow-lg  px-6">
              <h2 className=" text-2xl text-[#8A6201]  font-semibold  text-center py-6">
                Biophilic Design
              </h2>
              <p className=" pb-12 ">
                Connect with nature within the confines of your home through
                biophilic design. Incorporate natural elements such as indoor
                plants, living walls, and large windows to create a harmonious
                balance between the indoor and outdoor environments, promoting
                well-being and tranquility
              </p>
            </div>
            <div className=" lg:max-w-[400px] hover:transform hover:scale-[1.05] transition ease-out delay-200  duration-300   bg-white shadow-lg  px-6">
              <h2 className=" text-2xl text-[#8A6201]  font-semibold  text-center py-6">
                Minimalistic Aesthetics
              </h2>
              <p className=" pb-12 ">
                Less is more in modern home design. Adopt minimalist aesthetics
                with clean lines, neutral color palettes, and simple yet
                sophisticated furnishings. Streamline your living space to
                create an uncluttered and serene environment.
              </p>
            </div>
            <div className=" lg:max-w-[400px]  hover:transform hover:scale-[1.05] transition ease-out delay-200  duration-300   bg-white shadow-lg  px-6">
              <h2 className=" text-2xl text-[#8A6201]  font-semibold  text-center py-6">
                Architectural Lighting
              </h2>
              <p className=" pb-12 ">
                Illuminate your space creatively with architectural lighting
                designs. Use statement lighting fixtures, recessed lighting, and
                LED strips to highlight architectural features and create
                ambiance. Lighting can significantly influence the mood and
                functionality of a space
              </p>
            </div>
            <div className=" lg:max-w-[400px] hover:transform hover:scale-[1.05] transition ease-out delay-200  duration-300   bg-white shadow-lg  px-6">
              <h2 className=" text-2xl text-[#8A6201]  font-semibold  text-center py-6">
                Floating Staircases and <br /> Glass Railings
              </h2>
              <p className=" pb-12 ">
                Make a bold statement with modern staircase designs. Floating
                staircases and glass railings add a touch of elegance and
                modernity, creating a visually striking focal point in your home
              </p>
            </div>
            <div className=" lg:max-w-[400px] hover:transform hover:scale-[1.05] transition ease-out delay-200  duration-300   bg-white shadow-lg  px-6">
              <h2 className=" text-2xl text-[#8A6201]  font-semibold  text-center py-6">
                Artistic Wall Treatments
              </h2>
              <p className=" pb-12 ">
                Move beyond traditional paint and wallpaper with artistic wall
                treatments. Experiment with textured finishes, geometric
                patterns, and accent walls to add depth and personality to your
                living spaces.
              </p>
            </div>
            <div className=" lg:max-w-[400px] hover:transform hover:scale-[1.05] transition ease-out delay-200  duration-300   bg-white shadow-lg  px-6">
              <h2 className=" text-2xl text-[#8A6201]  font-semibold  text-center py-6">
                Outdoor Living Spaces
              </h2>
              <p className=" pb-12 ">
                Extend your living space outdoors with thoughtfully designed
                outdoor areas. Modern homes often feature well-planned patios,
                decks, and rooftop gardens, seamlessly blending the indoor and
                outdoor experience.
              </p>
            </div>
          </div>
          <div className=" pt-12 lg:pt-20">
            <p>
              "Modern home design is a dynamic canvas, constantly evolving to
              meet the needs and desires of contemporary living. These
              innovative ideas not only showcase the latest trends in
              architecture but also provide practical solutions for creating
              homes that are functional, sustainable, and aesthetically
              pleasing. Embrace the future of living with these modern design
              concepts that redefine the way we experience our homes."
            </p>
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

export default InteriorPost2;
