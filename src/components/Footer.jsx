import React from "react";
// import pic2 from "../../src/pictures/img2.jpeg"
import pic1 from "../../src/pictures/img7.png";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsPinterest, BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className="  bg-[#222222] bg-cover  pb-12">
      <div className=" flex  flex-col lg:flex-row max-w-[600px] px-6 lg:pl-8 md:max-w-[760px] lg:max-w-[1400px] 3xl:max-w-[2000px] m-auto  3xl:justify-between  lg:justify-around pt-16 pb-10">
        <div className=" max-w-[700px] lg:max-w-[470px] sl:max-w-[500px] 3xl:max-w-[700px] text-white  font-sans font-light">
          <a href="/" className=" flex items-center gap-4">
            <img src={pic1} alt="" className="  w-12 md:w-14 3xl:w-20" />
            <h1 className=" text-white text-2xl lg:text-3xl 3xl:text-5xl">
              APICAL DESIGNS
            </h1>
          </a>
          <p className=" pt-4 3xl:text-3xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            modi labore et sequi autem est voluptates vel dicta? Cumque, earum
            odio vero laboriosam hic accusantium? Temporibus in perferendis
            praesentium nemo.
          </p>
        </div>
        <div className=" grid   md:grid-cols-2 3xl:grid-cols-3  gap-10 pt-10 3xl:pt-20">
          <div className=" text-white">
            <h2 className=" pb-3 text-xl 3xl:text-3xl 3xl:pb-6">Contact Us</h2>
            <ul className="  space-y-2 ">
              <li className=" flex gap-3 items-center 3xl:text-2xl">
                <BsFillTelephoneFill></BsFillTelephoneFill>08096920127
              </li>
             <Link to='https://mail.google.com/mail/u/0/#search/Apicaldesign40%40gmail.com' >
               <li className=" flex gap-3 items-center 3xl:text-2xl">
                <CgMail></CgMail> <p>Apicaldesign40@gmail.com</p>
              </li>
             </Link>
              <li className=" flex gap-3 items-center 3xl:text-2xl">
                <FaLocationArrow></FaLocationArrow>{" "}
                <p>
                  No 16 Ayanbode Street Oke-ira <br /> Ogba, Lagos
                </p>
              </li>
            </ul>
          </div>
          <div className=" text-white">
            <h2 className=" pb-3 text-xl 3xl:text-3xl 3xl:pb-6">
              Our Services
            </h2>
            <ul className=" space-y-2 ">
              <Link to="/Architecture">
                <li className=" 3xl:text-2xl ">Architectural Design</li>
              </Link>
              <Link to="/Interior">
                {" "}
                <li className=" 3xl:text-2xl ">Interior Design</li>{" "}
              </Link>
               <Link to="/Exterior">
                {" "}
                <li className=" 3xl:text-2xl ">Exterior Design</li>{" "}
              </Link>
              <Link to="/Visualization">
                <li className=" 3xl:text-2xl ">Visualization</li>
              </Link>
              <Link to="/Construction">
                {" "}
                <li className=" 3xl:text-2xl ">Building Construction</li>
              </Link>
            </ul>
          </div>
          <div className=" text-white">
            <h2 className=" pb-3 text-xl 3xl:text-3xl 3xl:pb-6">Quick Links</h2>
            <ul className=" space-y-2">
              <li className=" 3xl:text-2xl">
                <a href="/">Privacy Policy</a>
              </li>
              <li className=" 3xl:text-2xl">
                <a href="/">Terms & Conditions</a>
              </li>
              <li className=" 3xl:text-2xl">
                <a href="/">Faqs</a>
              </li>
              <li className=" 3xl:text-2xl">
                <a href="/">Cookies</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row  pt-12 border-t  items-center md:justify-between max-w-[900px] md:px-8 lg:max-w-[1250px] 3xl:max-w-[2000px] m-auto px-6">
        <div>
          <p className=" text-white text-center text-[0.9rem] 3xl:text-3xl">
            © 2023 APICAL DESIGNS, ALL RIGHTS RESERVED
          </p>
        </div>
        <div className=" pt-6 md:pt-0   ">
          <ul className=" flex space-x-4">
            <li className=" ">
              <a href="https://www.instagram.com/apical_designs/?hl=en">
                <AiFillInstagram className="3xl:text-6xl  text-2xl md:text-4xl text-white"></AiFillInstagram>
              </a>
            </li>
            <li>
              <a href="/">
                <AiFillLinkedin className="  3xl:text-6xl text-2xl md:text-4xl text-white "></AiFillLinkedin>
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com/Apicaldesigns/">
                <BsPinterest className="3xl:text-6xl text-2xl md:text-4xl text-white"></BsPinterest>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
