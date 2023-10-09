import React from 'react'
import { useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import pic3 from "../../../src/pictures/img3.jpeg";
import { Link } from "react-router-dom";
import { BiMinus, BiPlus } from "react-icons/bi";
import pic12 from "../../../src/pictures/ridwan.png";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { GoArrowUpRight } from "react-icons/go";
import { BsPinterest } from "react-icons/bs";
const Services = () => {
    const [isAnswerOpen, setIsAnswerOpen] = useState(false);

    const isOpen = () => {
      setIsAnswerOpen(true);
    };

    const isClose = () => {
      setIsAnswerOpen(false);
    };

    const [isLock, setIsLock] = useState(false);
    const isTry = () => {
      setIsLock(true);
    };

    const isTime = () => {
      setIsLock(false);
    };
    const [isMind, setIsMind] = useState(false);
    const isApp = () => {
      setIsMind(true);
    };
    const isAlt = () => {
      setIsMind(false);
    };
    const [isNice, setIsNice] = useState(false);
    const isOK = () => {
      setIsNice(true);
    };
    const isNotOk = () => {
      setIsNice(false);
    };
    const [isBit, setIsBit] = useState(false);
    const isAt = () => {
      setIsBit(true);
    };
    const isOn = () => {
      setIsBit(false);
    };

    const [isCoat, setIsCoat] = useState(false);
    const isFine = () => {
      setIsCoat(true);
    };
    const isNotFine = () => {
      setIsCoat(false);
    };
  
  return (
    <div>
      <section className=" one">
        <div
          style={{ backgroundImage: `url(${pic3})` }}
          className=" min-h-[500px] bg-cover bg-center"
        ></div>
      </section>

      <section className=" two bg-[#f2f2f2]">
        <div className="  max-w-[1200px] lg:m-auto px-6 sl:px-0 py-10">
          <div className=" grid sl:grid-cols-2  ">
            <div className="  max-w-[300px] lg:max-w-[500px]">
              <h1 className=" text-3xl md:text-6xl lg:text-[5rem] sl:text-[7rem] sl:leading-[7rem] font-bold border-b pb-6 md:pb-12 sl:pb-8">
                Our Services
              </h1>
            </div>

            <div>
              <div className=" pt-10 lg:pt-6 sl:pt-0">
                <ul className=" grid  md:grid-cols-2   gap-2 2xl:gap-x-28  lg:pt-8 ">
                  <li className=" flex items-center 3xl:text-[2rem] text-[1.1rem]  gap-2">
                    <AiOutlinePlus className=""></AiOutlinePlus>{" "}
                    <p>Feasibility Studies</p>
                  </li>
                  <li className=" flex items-center 3xl:text-[2rem] text-[1.1rem] gap-2">
                    <AiOutlinePlus></AiOutlinePlus> <p>Feasibility Studies</p>
                  </li>
                  <li className=" flex items-center 3xl:text-[2rem] text-[1.1rem] gap-2">
                    <AiOutlinePlus></AiOutlinePlus> <p>Feasibility Studies</p>
                  </li>
                  <li className=" flex items-center 3xl:text-[2rem] text-[1.1rem] gap-2">
                    <AiOutlinePlus></AiOutlinePlus> <p>Feasibility Studies</p>
                  </li>
                  <li className=" flex items-center 3xl:text-[2rem] text-[1.1rem] gap-2 pt-10 md:pt-0">
                    <AiOutlinePlus></AiOutlinePlus> <p>Feasibility Studies</p>
                  </li>
                  <li className=" flex items-center 3xl:text-[2rem] text-[1.1rem] gap-2">
                    <AiOutlinePlus></AiOutlinePlus> <p>Feasibility Studies</p>
                  </li>
                  <li className=" flex items-center 3xl:text-[2rem] text-[1.1rem] gap-2">
                    <AiOutlinePlus></AiOutlinePlus> <p>Feasibility Studies</p>
                  </li>
                  <li className=" flex items-center 3xl:text-[2rem] text-[1.1rem] gap-2">
                    <AiOutlinePlus></AiOutlinePlus> <p>Feasibility Studies</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" three bg-[#f2f2f2]">
        <div className=" max-w-[1200px] m-auto px-6 sl:px-0 pb-10">
          <div className=" pt-8">
            <h2 className=" text-[1.1rem] md:text-xl sl:text-[2rem] border-b pb-2 md:pb-4">
              Collaborative, innovative, and sustainable architectural design
              solutions for a better world.
            </h2>
          </div>

          <div className="   grid lg:grid-cols-2  gap-10 pt-16">
            <div>
              <img
                src={pic3}
                alt=""
                className=" w-full lg:w-[500px] h-[300px] md:h-[400px] lg:h-[600px]"
              />
            </div>
            <div className="  lg:max-w-[500px]">
              <ul>
                {!isAnswerOpen ? (
                  <li className=" pt-3  border-b border-black pb-3">
                    <div
                      className=" flex justify-between items-center cursor-pointer"
                      onClick={isOpen}
                    >
                      <h1 className="  text-xl    font-[350]">
                        What events do you have coming up?
                      </h1>
                      <BiPlus className=" cursor-pointer text-2xl" />
                    </div>
                    <div className="hidden">
                      <li>
                        <p className=" text-[1rem]  font-[350] pt-8">
                          Later this month, we’re bringing teachable:u to life
                          with three live workshops—more details to come!
                        </p>
                      </li>
                    </div>
                  </li>
                ) : (
                  <li className=" pt-3  border-b border-black pb-3">
                    <div
                      className=" flex justify-between items-center  gap-6 cursor-pointer"
                      onClick={isClose}
                    >
                      <h1 className="  text-xl  font-[350]">
                        What events do you have coming up?
                      </h1>
                      <BiMinus className=" cursor-pointer text-2xl" />
                    </div>
                    <div className="">
                      <li>
                        <p className=" text-[1rem]  font-[350] pt-8">
                          Later this month, we’re bringing teachable:u to life
                          with three live workshops—more details to come!
                        </p>
                      </li>
                    </div>
                  </li>
                )}

                {!isLock ? (
                  <li className=" pt-3  border-b border-black pb-3">
                    <div
                      className=" flex justify-between items-center cursor-pointer"
                      onClick={isTry}
                    >
                      <h1 className="  text-xl   font-[350]">
                        What events do you have coming up?
                      </h1>
                      <BiPlus className=" cursor-pointer text-2xl" />
                    </div>
                    <div className="hidden">
                      <li>
                        <p className=" text-[1rem] font-[350] pt-8">
                          Later this month, we’re bringing teachable:u to life
                          with three live workshops—more details to come!
                        </p>
                      </li>
                    </div>
                  </li>
                ) : (
                  <li className=" pt-3  border-b border-black pb-3">
                    <div
                      className=" flex justify-between items-center cursor-pointer"
                      onClick={isTime}
                    >
                      <h1 className="  text-xl   font-[350]">
                        What events do you have coming up?
                      </h1>
                      <BiMinus className=" cursor-pointer text-2xl" />
                    </div>
                    <div className="">
                      <li>
                        <p className=" text-[1rem]  font-[350] pt-8">
                          Later this month, we’re bringing teachable:u to life
                          with three live workshops—more details to come!
                        </p>
                      </li>
                    </div>
                  </li>
                )}

                {!isMind ? (
                  <li className=" pt-3  border-b border-black pb-3">
                    <div
                      className=" flex justify-between items-center cursor-pointer"
                      onClick={isApp}
                    >
                      <h1 className="  text-xl  font-[350]">
                        What events do you have coming up?
                      </h1>
                      <BiPlus className=" cursor-pointer text-2xl" />
                    </div>
                    <div className="hidden">
                      <li>
                        <p className=" text-[1rem]  font-[350] pt-8">
                          Later this month, we’re bringing teachable:u to life
                          with three live workshops—more details to come!
                        </p>
                      </li>
                    </div>
                  </li>
                ) : (
                  <li className=" pt-3  border-b border-black pb-3">
                    <div
                      className=" flex justify-between items-center cursor-pointer"
                      onClick={isAlt}
                    >
                      <h1 className="  text-xl  font-[350]">
                        What events do you have coming up?
                      </h1>
                      <BiMinus className=" cursor-pointer text-2xl" />
                    </div>
                    <div className="">
                      <li>
                        <p className=" text-[1rem]  font-[350] pt-8">
                          Later this month, we’re bringing teachable:u to life
                          with three live workshops—more details to come!
                        </p>
                      </li>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className=" grid lg:grid-cols-2 gap-10 pt-16">
            <div className=" lg:max-w-[500px]">
              <ul>
                {!isNice ? (
                  <li className=" pt-3  border-b border-black pb-3">
                    <div
                      className=" flex justify-between items-center cursor-pointer"
                      onClick={isOK}
                    >
                      <h1 className="  text-xl  font-[350]">
                        What events do you have coming up?
                      </h1>
                      <BiPlus className=" cursor-pointer text-2xl" />
                    </div>
                    <div className="hidden">
                      <li>
                        <p className=" text-[1rem] font-[350] pt-8">
                          Later this month, we’re bringing teachable:u to life
                          with three live workshops—more details to come!
                        </p>
                      </li>
                    </div>
                  </li>
                ) : (
                  <li className=" pt-3  border-b border-black pb-3">
                    <div
                      className=" flex justify-between items-center cursor-pointer"
                      onClick={isNotOk}
                    >
                      <h1 className="  text-xl   font-[350]">
                        What events do you have coming up?
                      </h1>
                      <BiMinus className=" cursor-pointer text-2xl" />
                    </div>
                    <div className="">
                      <li>
                        <p className=" text-[1rem]    font-[350] pt-8">
                          Later this month, we’re bringing teachable:u to life
                          with three live workshops—more details to come!
                        </p>
                      </li>
                    </div>
                  </li>
                )}

                {!isBit ? (
                  <li className=" pt-3  border-b border-black pb-3">
                    <div
                      className=" flex justify-between items-center cursor-pointer"
                      onClick={isAt}
                    >
                      <h1 className="  text-xl   font-[350]">
                        What events do you have coming up?
                      </h1>
                      <BiPlus className=" cursor-pointer text-2xl" />
                    </div>
                    <div className="hidden">
                      <li>
                        <p className=" text-[1rem]  font-[350] pt-8">
                          Later this month, we’re bringing teachable:u to life
                          with three live workshops—more details to come!
                        </p>
                      </li>
                    </div>
                  </li>
                ) : (
                  <li className=" pt-3  border-b border-black pb-3">
                    <div
                      className=" flex justify-between items-center cursor-pointer"
                      onClick={isOn}
                    >
                      <h1 className="  text-xl  font-[350]">
                        What events do you have coming up?
                      </h1>
                      <BiMinus className=" cursor-pointer text-2xl" />
                    </div>
                    <div className="">
                      <li>
                        <p className=" text-[1rem]  font-[350] pt-8">
                          Later this month, we’re bringing teachable:u to life
                          with three live workshops—more details to come!
                        </p>
                      </li>
                    </div>
                  </li>
                )}

                {!isCoat ? (
                  <li className=" pt-3 border-b border-black pb-3">
                    <div
                      className=" flex justify-between items-center cursor-pointer"
                      onClick={isFine}
                    >
                      <h1 className="  text-xl font-[350]">
                        What events do you have coming up?
                      </h1>
                      <BiPlus className=" cursor-pointer text-2xl" />
                    </div>
                    <div className="hidden">
                      <li>
                        <p className=" text-[1rem]  font-[350] pt-8">
                          Later this month, we’re bringing teachable:u to life
                          with three live workshops—more details to come!
                        </p>
                      </li>
                    </div>
                  </li>
                ) : (
                  <li className=" pt-3 border-b border-black pb-3">
                    <div
                      className=" flex justify-between items-center cursor-pointer"
                      onClick={isNotFine}
                    >
                      <h1 className="  text-xl   font-[350]">
                        What events do you have coming up?
                      </h1>
                      <BiMinus className=" cursor-pointer text-2xl" />
                    </div>
                    <div className="">
                      <li>
                        <p className=" text-[1rem]  font-[350] pt-8">
                          Later this month, we’re bringing teachable:u to life
                          with three live workshops—more details to come!
                        </p>
                      </li>
                    </div>
                  </li>
                )}
              </ul>
            </div>
            <div>
              <img
                src={pic3}
                alt=""
                className=" w-full lg:w-[500px] h-[300px] md:h-[400px] lg:h-[600px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className=" four bg-[#f2f2f2]">
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
    </div>
  );
}

export default Services
