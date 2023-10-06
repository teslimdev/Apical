import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import pic1 from "../../src/pictures/img1.png";

export default function Header() {
  const [nav, setNav] = useState(false);

  const isOpen = () => {
    setNav(true);
    document.getElementById("navmain").classList.remove("items-center");
    document.getElementById("navmain").classList.remove("py-3");
  };
  const closeNav = () => {
    setNav(false);
    document.getElementById("navmain").classList.add("items-center");
    document.getElementById("navmain").classList.add("py-3");
  };

  return (
    <div className="  z-10 w-full">
      <nav className="    ">
        <div
          id="navmain"
          className="fixed w-full flex items-center bg-white  lg:gap-[10rem]  shadow-md justify-between   py-3  3xl:py-5 lg:justify-around  border-[#333333] z-10"
        >
          <div className=" pl-6  md:pl-8">
            <a href="/" className=" flex  items-center gap-4">
              <img src={pic1} alt="" className=" w-12 md:w-14 3xl:w-20" />
              <h1 className=" text-black text-[1.35rem] lg:text-3xl 3xl:text-5xl">
                APICAL DESIGNS
              </h1>
            </a>
          </div>
          <div className=" hidden md:block  pr-16 lg:pr-36">
            <ul className=" flex  gap-6 ">
              <Link to="/">
                <li className=" 3xl:text-4xl">
                  HOME
                </li>
              </Link>
              <Link to="/About">
                <li className=" 3xl:text-4xl ">
                  ABOUT
                </li>
              </Link>
              <Link to="/Projects">
                <li className=" 3xl:text-4xl ">
                  PROJECTS
                </li>
              </Link>
              <Link to="/News">
                <li className=" 3xl:text-4xl ">
                  NEWS
                </li>
              </Link>
              <Link to="/Contacts">
                <li className=" 3xl:text-4xl ">
                  CONTACTS
                </li>
              </Link>
            </ul>
          </div>
          <div className=" md:hidden pr-6">
            {!nav ? (
              <FaBars className=" text-black text-3xl " onClick={isOpen} />
            ) : (
              <div className=" bg-[#8A6201]  left-0 right-0 h-full bottom-0 w-full fixed">
                <div className=" text-end" onClick={closeNav}>
                  <FaTimes className=" absolute right-0" />
                </div>
                <div className=" fixed top-0 ">
                  <ul className=" text-black gap-6 px-10 space-y-8 pt-16 ">
                    <li className="">
                      <a href="/" className=" ">
                        HOME
                      </a>
                    </li>
                    <li>
                      <a href="/">NEWS</a>
                    </li>
                    <li>
                      <a href="/">ABOUT</a>
                    </li>
                    <li>
                      <a href="/">PROJECTS</a>
                    </li>
                    <li>
                      <a href="/">CONTACTS</a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className=" top-[4.5rem] right-0  w-[300px]  h-screen  bg-[#8A6201]   border-t-2 hidden ">
            <ul className=" text-white gap-6 px-10 space-y-8 pt-16 ">
              <li className="">
                <a href="/" className="">
                  HOME
                </a>
              </li>
              <li>
                <a href="/">NEWS</a>
              </li>
              <li>
                <a href="/">ABOUT</a>
              </li>
              <li>
                <a href="/">PROJECTS</a>
              </li>
              <li>
                <a href="/">CONTACTS</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
