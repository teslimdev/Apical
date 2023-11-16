import React from "react";
import { Header, Footer2 } from "../../components";
import pic9 from "../../../src/pictures/img9.jpeg";
import vid1 from "../../../src/pictures/vid1.mp4";
const IInteriorPost1 = () => {
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
          <div className="   absolute bg-black w-full h-full top-0 inset-0 opacity-50">
            <div className=" flex justify-center">
              <div className="  absolute top-[40%] sl:top-[30%] ">
                <h2 className=" text-white lg:text-[5rem] lg:leading-[5rem] px-3 sl:px-0  sl:leading-[6rem] sl:text-[6rem] text-center first-line:text-[#8A6201] text-[2rem] md:text-[3rem] font-bold">
                  {" "}
                  Creative Solutions <br /> by Professional Designer
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-[#f2f2f2]">
        <div className=" py-10 lg:py-14">
          <div className=" max-w-[1200px] m-auto px-6 sl:px-0">
            <h2 className=" md:hidden sl:text-[3rem] text-[1.2rem] pb-4 first-line:text-[2rem] leading-[2rem] sl:leading-[4rem]  sl:first-line:text-[4rem] first-line:text-[#8A6201]">
              Welcome to our architectural haven, where innovation meets
              expertise.
            </h2>
            <h2 className=" hidden md:block lg:first-line:text-[3rem] lg:leading-[3rem] lg:text-[2rem] sl:text-[3rem] text-[1.3rem] pb-4 first-line:text-[2.5rem] leading-[1.8rem] sl:leading-[4rem] text-center sl:first-line:text-[4rem] first-line:text-[#8A6201]">
              Welcome to our architectural haven, <br /> where innovation meets
              expertise
            </h2>
            <p className=" text-[1.01rem]">
              At Apical Designs, we pride ourselves on being at the forefront of
              cutting-edge design, delivering solutions that not only meet but
              exceed our clients' expectations.
            </p>
          </div>
        </div>
      </section>
      <section className=" bg-[#f2f2f2]">
        <div className=" pb-16">
          <div className=" max-w-[1200px] m-auto px-6 sl:px-0">
            <div>
              <h2 className=" text-2xl  ">Our Philosophy:</h2>
              <h3 className=" pt-3 pb-6">
                At the heart of our design philosophy lies the belief that
                architecture is more than just structures; it's a reflection of
                the way we live, work, and interact with the world around us.
                Our team of seasoned professionals brings together a wealth of
                experience, passion, and a keen eye for detail to craft spaces
                that are not only aesthetically pleasing but also functionally
                efficient.
              </h3>
            </div>
            <div className=" pb-6">
              <h2 className=" text-2xl  ">Creative Solutions:</h2>
              <h3 className=" py-3">
                Innovation is the cornerstone of our practice. We understand
                that every project is unique, presenting its own set of
                challenges and opportunities. Our team thrives on pushing the
                boundaries of conventional design, constantly seeking fresh
                perspectives to create bespoke solutions tailored to your
                specific needs.
              </h3>
              <h3 className=" ">
                From concept to completion, we approach each project with a
                commitment to excellence, incorporating the latest trends and
                technologies to ensure that your space is not just relevant
                today but stands the test of time.
              </h3>
            </div>
            <div>
              <h2 className=" text-2xl  ">Professional Designers:</h2>
              <h3 className=" py-3">
                Our designers are not just architects; they are visionaries with
                a deep understanding of the evolving architectural landscape.
                With a wealth of experience across various sectors, our
                professionals bring a holistic approach to each project.
                Collaborative by nature, our team works closely with clients,
                ensuring that your vision is not only realized but enhanced
                through our expertise.
              </h3>
              <h3 className="">
                We believe in the power of collaboration, and our designers are
                adept at seamlessly integrating your aspirations with their
                creative prowess. The result is a harmonious blend of
                functionality, aesthetics, and sustainability, creating spaces
                that inspire and endure.
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-[#f2f2f2]">
        <div className=" pb-12">
          <div className=" md:text-center px-6 md:px-0">
            <h2 className=" text-2xl lg:text-4xl text-[#222222]">
              Why Choose Apical Designs:
            </h2>
          </div>
          <div className="  grid md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] md:m-auto  gap-6  px-6 sl:px-0 pt-8">
            <div className="  lg:max-w-[400px]   bg-white shadow-lg  px-6 pt-6 pb-20 ">
              <h2 className=" text-2xl text-[#8A6201]  font-semibold  pb-3 text-center ">
                Innovative Thinking{" "}
              </h2>
              <p>
                We thrive on pushing boundaries and exploring new possibilities
                in design.
              </p>
            </div>
            <div className="  lg:max-w-[400px]   bg-white shadow-lg  px-6 pt-6 pb-20">
              <h2 className=" text-2xl pb-3 text-[#8A6201]  font-semibold  text-center">
                Collaborative Approach
              </h2>
              <p>
                {" "}
                Your vision is our inspiration. We work closely with you to
                bring your dreams to life.
              </p>
            </div>
            <div className="  lg:max-w-[400px]   bg-white shadow-lg  px-6 pt-6 pb-20">
              <h2 className=" text-2xl  text-[#8A6201]  font-semibold  text-center pb-3">
                Expertise Across Sectors{" "}
              </h2>
              <p>
                {" "}
                From residential to commercial, we have a diverse portfolio that
                showcases our versatility.
              </p>
            </div>
            <div className="  lg:max-w-[400px]   bg-white shadow-lg    px-6 pt-6 pb-20">
              <h2 className=" text-2xl pb-3 text-[#8A6201]  font-semibold  text-center">
                Sustainability Focus
              </h2>
              <p>
                We believe in responsible design, incorporating eco-friendly
                practices in every project.
              </p>
            </div>
            <div className="  lg:max-w-[400px]   bg-white shadow-lg  px-6 pt-6 pb-20">
              <h2 className=" text-2xl pb-3  text-[#8A6201]  font-semibold  text-center">
                Timeless Design
              </h2>
              <p>
                Our creations stand the test of time, marrying contemporary
                flair with enduring appeal.
              </p>
            </div>
          </div>
          <div className=" max-w-[1200px] m-auto  px-6 sl:px-0 md:py-6">
            <h3>
              Join us on a journey where creativity knows no bounds and
              professional excellence is the standard. Explore the potential of
              your space with "Creative Solutions by Professional Designers" at
              Apical Designs. Elevate your surroundings, elevate your lifestyle.
            </h3>
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

export default IInteriorPost1;
