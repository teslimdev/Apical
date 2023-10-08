import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
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
const location = useLocation();
  return (
    <div className="  z-10 w-full">
      <nav className="    ">
        <div
          id="navmain"
          className="  bg-white  shadow-lg py-2 w-full  fixed    border-[#333333] z-10"
        >
          <div className=" flex sl:max-w-[1200px] px-6 sl:px-0 items-center m-auto justify-between">
            <div className="  ">
              <a href="/" className=" flex  items-center gap-2">
                <img src={pic1} alt="" className=" w-8 md:w-12 3xl:w-20" />
                <h1 className=" text-black text-[1rem] lg:text-3xl 3xl:text-5xl">
                  APICAL DESIGNS
                </h1>
              </a>
            </div>
            <div className=" hidden md:block  ">
              <ul className=" flex  2xl:gap-6 ">
                <Link
                  to="/ "
                  className={`text-[#222222] ${
                    location.pathname === "/" ? "text-[#8A6201]" : ""
                  }`}
                >
                  <li
                    className={`3xl:text-4xl  hover:bg-[#222222] py-1 px-2 rounded hover:text-white`}
                  >
                    HOME
                  </li>
                </Link>

                <Link
                  to="/About"
                  className={`text-[#222222] ${
                    location.pathname === "/About" ? "text-[#8A6201]" : ""
                  }`}
                >
                  <li className=" hover:bg-[#222222] py-1 px-2 rounded hover:text-white 3xl:text-4xl ">
                    ABOUT
                  </li>
                </Link>
                <Link
                  to="/Services "
                  className={`text-[#222222] ${
                    location.pathname === "/Services" ? "text-[#8A6201]" : ""
                  }`}
                >
                  <li className="  hover:bg-[#222222] py-1 px-2 rounded hover:text-white 3xl:text-4xl ">
                    SERVICES
                  </li>
                </Link>
                <Link
                  to="/Projects"
                  className={`text-[#222222] ${
                    location.pathname === "/Projects" ? "text-[#8A6201]" : ""
                  }`}
                >
                  <li className=" hover:bg-[#222222] py-1 px-2 rounded hover:text-white 3xl:text-4xl ">
                    PROJECTS
                  </li>
                </Link>
                <Link
                  to="/News"
                  className={`text-[#222222] ${
                    location.pathname === "/News" ? "text-[#8A6201]" : ""
                  }`}
                >
                  <li className=" hover:bg-[#222222] py-1 px-2 rounded hover:text-white 3xl:text-4xl ">
                    NEWS
                  </li>
                </Link>
                <Link
                  to="/Contacts"
                  className={`text-[#222222] ${
                    location.pathname === "/Contacts" ? "text-[#8A6201]" : ""
                  }`}
                >
                  <li className=" hover:bg-[#222222] py-1 px-2 rounded hover:text-white 3xl:text-4xl ">
                    CONTACTS
                  </li>
                </Link>
              </ul>
            </div>
            <div className=" md:hidden">
              {!nav ? (
                <FaBars className=" text-black text-2xl " onClick={isOpen} />
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
                        <a href="/About">ABOUT</a>
                      </li>
                      <li>
                        <a href="/Services">SERVICES</a>
                      </li>
                      <li>
                        <a href="/Projects">PROJECTS</a>
                      </li>
                      <li>
                        <a href="/News">NEWS</a>
                      </li>
                      <li>
                        <a href="/Contacts">CONTACTS</a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
