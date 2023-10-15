import React from 'react'
import { useState } from "react";
import pic9 from "../../../src/pictures/img9.jpeg";
import { Link } from "react-router-dom";
import pic3 from "../../../src/pictures/img3.jpeg";
import pic5 from "../../../src/pictures/img5.jpeg";
import pic4 from "../../../src/pictures/img4.jpeg";
const NewsPost1 = () => {
 
    const [formData, setFormData] = useState({
      username: "",
      email: "",
      // Add more form fields as needed
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ formData, [name]: value });
    };
    

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form submitted:", formData);
    };
  
  return (
    <div className="">
      <section className="bg-[#f2f2f2]">
        <div className=" px-6">
          <div className=" text-center pt-28 pb-8">
            <button className=" border border-black text-[1.1rem] px-4  rounded-full">
              news
            </button>
            <h2 className=" lg:text-[6rem] pt-6 font-semibold text-[1.7rem] md:text-[3rem]">
              Architectural Heritage
            </h2>
          </div>
        </div>
      </section>
      <section className="bg-[#f2f2f2]">
        <div
          style={{ backgroundImage: `url(${pic9})` }}
          className=" min-h-[300px] md:min-h-[400px] lg:min-h-[500px] bg-center bg-fixed"
        ></div>
      </section>
      <section className="bg-[#f2f2f2]">
        <div className=" max-w-[800px] m-auto py-10 px-6 sl:px-0">
          <div>
            <div>
              <p className=" text-[1rem]  font-[300px] text-[#555555]">
                Modern architecture emphasizes sustainable design principles,
                including energy-efficient building materials, renewable energy
                sources, and green roofs. Architects also consider the
                environmental impact of the building’s construction and
                operation, ensuring a minimal carbon footprint.
              </p>
              <h2 className=" text-4xl py-8">Sustainable Design</h2>
              <p className=" text-[1rem]  font-[300px] pb-6 text-[#555555]">
                Modern architecture often features a minimalistic and clean
                design aesthetic, focusing on simplicity, functionality, and
                ample natural light. This approach enhances the building’s
                energy efficiency, reduces visual clutter, and creates a more
                visually appealing experience.
              </p>
            </div>
            <div>
              <img src={pic9} alt="" className=" w-[800px]" />
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-3xl py-8">Minimalistic Aesthetic</h2>
              <p className=" text-[1rem]  font-[300px] text-[#555555]">
                Modern architecture often features a minimalistic and clean
                design aesthetic, focusing on simplicity, functionality, and
                ample natural light. This approach enhances the building’s
                energy efficiency, reduces visual clutter, and creates a more
                visually appealing experience.
              </p>
              <h2 className="text-3xl py-8">
                Integration of Passive Design Strategies
              </h2>
              <p className=" text-[1rem]  pb-6 font-[300px] text-[#555555]">
                Passive design strategies focus on optimizing the building’s
                orientation, insulation, ventilation, and shading to reduce
                reliance on mechanical systems for heating, cooling, and
                lighting. Modern architecture incorporates passive design
                principles to enhance energy efficiency and occupant comfort.
              </p>
            </div>
            <div>
              <img src={pic9} alt="" className=" w-[800px]" />
            </div>
          </div>
          <div>
            <p className=" text-[1rem] font-[300px] pt-6 text-[#555555]">
              By incorporating these modern architectural principles, your
              architectural project can deliver a sustainable, functional, and
              aesthetically pleasing structure that enhances the occupant’s
              well-being and minimizes the building’s environmental impact.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#f2f2f2]">
        <div className=" max-w-[1200px] m-auto py-6 lg:py-12 px-6 sl:px-0">
          <h2 className="  pb-1 ">YOU MAY ALSO LIKE</h2>
          <div className="  border-t-2 w-16  border-black "></div>
          <div className="  grid  md:grid-cols-2 lg:grid-cols-3  gap-6   sl:px-0  m-auto  py-8 ">
            <Link to="/">
              <div className="relative ">
                <div className="  ">
                  <img
                    src={pic3}
                    alt=""
                    className=" w-full h-[300px] md:h-[350px]   lg:h-[400px]   "
                  />
                  <div className=" ">
                    <div className=" absolute  top-0  z-[1]  text-center   flex justify-center  bg-black w-full h-full  opacity-70 ">
                      <div className="   absolute top-[25%]  py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                        <h2 className=" text-2xl  text-white  pl-4 pt-6 pb-1 font-semibold">
                          Architectural Marvels
                        </h2>
                        <div className=" pt-8">
                          <button className=" text-white text-xl hover:bg-white hover:text-black px-3 py-1 rounded-full h border">
                            View Post
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/">
              <div className="relative ">
                <div className="  ">
                  <img
                    src={pic4}
                    alt=""
                    className=" w-full h-[300px] md:h-[350px]   lg:h-[400px]   "
                  />
                  <div className=" ">
                    <div className=" absolute  top-0  z-[1]  text-center   flex justify-center  bg-black w-full h-full  opacity-70 ">
                      <div className="   absolute top-[25%]  py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                        <h2 className=" text-2xl  text-white  pl-4 pt-6 pb-1 font-semibold">
                          Architectural Marvels
                        </h2>
                        <div className=" pt-8">
                          <button className=" text-white text-xl hover:bg-white hover:text-black px-3 py-1 rounded-full h border">
                            View Post
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/">
              <div className="relative ">
                <div className="  ">
                  <img
                    src={pic5}
                    alt=""
                    className=" w-full h-[300px] md:h-[350px]   lg:h-[400px]   "
                  />
                  <div className=" ">
                    <div className=" absolute  top-0  z-[1]  text-center   flex justify-center  bg-black w-full h-full  opacity-70 ">
                      <div className="   absolute top-[25%]  py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                        <h2 className=" text-2xl  text-white  pl-4 pt-6 pb-1 font-semibold">
                          Architectural Marvels
                        </h2>
                        <div className=" pt-8">
                          <button className=" text-white text-xl hover:bg-white hover:text-black px-3 py-1 rounded-full h border">
                            View Post
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[#f2f2f2]">
        <div className=" max-w-[800px] m-auto px-6 py-20  sl:px-0">
          <div className="border-[#222222] border  px-6 sl:px-0">
            <form
              onSubmit={handleSubmit}
              className=" max-w-[700px]  py-10  m-auto"
            >
              <h2 className=" pb-3">LEAVE A COMMENT</h2>
              <div className=" flex flex-col gap-2 ">
                <label htmlFor="" className=" text-sm ">
                  COMMENT *
                </label>

                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="7"
                  className=" w-full pl-3 pt-2"
                ></textarea>
              </div>
              <br />
              <div className=" flex flex-col md:flex-row  gap-6">
                <div className=" w-full flex flex-col gap-1">
                  <label htmlFor="">Name</label>

                  <input
                    type="text"
                    required
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className=" w-full py-1 pl-2"
                  />
                </div>
                <div className=" w-full flex flex-col gap-1">
                  <label htmlFor="">Email</label>
                  <input
                  required
                    type="emaill"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className=" w-full py-1 pl-2"
                  />
                </div>
              </div>
              <div className=" flex gap-1 md:gap-3 flex-row items-center pt-6">
                <input type="checkbox" className=" " />
                <label htmlFor="" className=" text-[0.7rem] ">
                  SAVE MY NAME, EMAIL, IN THIS BROWSER FOR THE NEXT TIME I
                  COMMENT.
                </label>
              </div>
              <div className=" pt-6">
                <button className=" border-2 px-6 py-1 rounded-full border-black">
                  Post Comment
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsPost1
