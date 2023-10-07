import React from 'react'
import pic3  from '../../../src/pictures/img3.jpeg'
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

const Contacts = () => {
  return (
    <div className="">
      <section className=" one">
        <div
          style={{ backgroundImage: `url(${pic3})` }}
          className=" min-h-[400px] md:min-h-[500px] bg-cover bg-center"
        ></div>
      </section>
      <section className="two bg-[#f2f2f2] ">
        <div className=" flex flex-col lg:flex-row gap-10 lg:gap-0 max-w-[1250px] m-auto justify-between py-8 sl:py-16 px-6">
          <div className=" lg:max-w-[500px]">
            <h2 className=" text-2xl md:text-4xl lg:text-7xl font-bold 2xl:text-[6rem] text-[#222222] border-b-2 pb-3">
              Let's Talk
            </h2>
            <h3 className=" lg:text-2xl text-[1.25rem] py-2">
              Got a project on your mind? <br /> Let's discuss about the
              details.
            </h3>
            <h4 className=" text-[1.3rem] font-bold pt-2 lg:text-2xl text-[#222222]">
              Call Us Now:
            </h4>
            <h4 className=" text-[1.3rem] lg:text-2xl   pb-2 font-bold text-[#222222]">
              +234 8096 920 127
            </h4>
            <div className=" flex text-xl gap-3 pt-2">
              <a href="https://www.instagram.com/apical_designs/?hl=en">
                <AiFillInstagram className=" text-[#222222] text-2xl cursor-pointer" />
              </a>
              <AiFillLinkedin className=" text-[#222222]  text-2xl cursor-pointer" />
              <a href="https://www.pinterest.com/Apicaldesigns/">
                <BsPinterest className=" text-[#222222]  text-2xl cursor-pointer" />
              </a>
            </div>
          </div>

          <div>
            <form action="data">
              <div>
                <input
                  type="text"
                  required
                  placeholder=" Name"
                  className="  bg-transparent text-[#222222] border-0 placeholder:text-[#8A6201] pl-1 w-full border-b border-b-black outline-[#222222] "
                />
              </div>{" "}
              <br />
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="  bg-transparent text-[#222222] border-0 placeholder:text-[#8A6201] w-full border-b pl-2 border-b-black outline-[#222222] "
                />
              </div>{" "}
              <br />
              <div>
                <textarea
                  name=""
                  id=""
                  cols="60"
                  rows="8"
                  required
                  placeholder=" Your Message"
                  className="  h-32 w-full resize-none border-b text-[#222222] border-b-black rounded outline-[#222222]  pl-1 bg-transparent placeholder:text-[#8A6201]  "
                ></textarea>
              </div>{" "}
              <br />
              <div>
                <button className=" py-2 px-4 rounded-full  bg-[#222222] text-white hover:bg-[#333333]">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contacts
