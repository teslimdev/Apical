import React from "react";
import pic9 from "../../../src/pictures/img9.jpeg";
import { Header, Footer2 } from "../../components";

const ConstructionPost = () => {
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
              Welcome to a realm where architectural brilliance meets construction mastery – the epitome of excellence in the world of design and construction. Our agency stands as a testament to innovation, precision, and a commitment to turning your architectural dreams into awe-inspiring realities.
            </p>
             <p className=" pt-8">
              At Apical Designs, we redefine the boundaries of architectural and construction excellence. With a rich legacy of delivering iconic projects that blend creativity with functionality, we have emerged as the go-to agency for those who demand nothing short of the best. Our team of seasoned architects, engineers, and construction experts is dedicated to transforming spaces into living works of art.
            </p>
          </div>
        </div>
      </section>
    <section className=" bg-[#f2f2f2]">
        <div className=" py-10 max-w-[1200px] m-auto px-6 sl:px-0">
          <div className=" grid md:grid-cols-2 lg:grid-cols-3  gap-6 ">
            <div className=" lg:max-w-[400px]   bg-white shadow-lg  px-6">
              <h2 className=" text-2xl text-[#8A6201]  font-semibold  text-center py-6">Innovative Design Thinking</h2>
              <p className=" pb-12 ">Our architects are visionaries, embracing cutting-edge design principles that go beyond aesthetics. We craft spaces that not only captivate the eye but also elevate the human experience within them</p>
            </div>
            <div  className=" lg:max-w-[400px]   bg-white shadow-lg  px-6">
              <h2  className=" text-2xl text-[#8A6201]  font-semibold  text-center py-6">Precision Engineering</h2>
              <p  className=" pb-12 "> Behind every breathtaking structure is a foundation built on precision engineering. Our construction experts ensure that every project is executed flawlessly, adhering to the highest standards of safety and durability</p>
            </div>
            <div  className=" lg:max-w-[400px]   bg-white shadow-lg  px-6">
              <h2  className=" text-2xl text-[#8A6201]  font-semibold  text-center py-6">Sustainability at Core</h2>
              <p  className=" pb-12 "> In an era where sustainability is paramount, we take pride in integrating eco-friendly practices into our designs. From energy-efficient buildings to eco-conscious materials, we strive to create spaces that harmonize with the environment</p>
            </div>
            <div  className=" lg:max-w-[400px]   bg-white shadow-lg  px-6">
              <h2  className=" text-2xl text-[#8A6201]  font-semibold  text-center py-6">Client-Centric Approach</h2>
              <p  className=" pb-12 ">Your dreams are our blueprints. We believe in a collaborative process that places you at the center of the design and construction journey. Our team listens attentively to your aspirations, ensuring that every detail is meticulously tailored to your vision</p>
            </div>
          </div>
          <div className=" pt-12 lg:pt-20">
            <p>"Explore our diverse portfolio, a showcase of projects that range from residential masterpieces to commercial landmarks. Each project is a testament to our unwavering commitment to excellence and our ability to seamlessly blend innovation with functionality"</p>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div>
           <div className="  text-center pb-5">
             <h2 className=" text-2xl">
              Client Reviews
            </h2>
            <p className=" max-w-[700px] m-auto">Don't just take our word for it. Hear what our satisfied clients have to say about their experience working with us. From concept to completion, we prioritize open communication and transparency, fostering a relationship of trust with every client</p>
           </div>
          <div className=" py-14">
              <div className=" max-w-[700px] m-auto bg-[#f2f2f2] px-12 py-10">
                 <h2 className=" text-xl  py-4 " >  Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
              
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At impedit officia nam minus aliquam, a alias sint blanditiis atque, vero eligendi optio modi dolorum ducimus sapiente facere quibusdam! Officia, dolorem?</p>
           <h3 className=" text-[1.1rem] py-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
           </h3>
            </div>
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
