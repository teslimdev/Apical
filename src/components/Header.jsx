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
                  to="/Home2 "
                  className={`text-[#222222] ${
                    location.pathname === "/Home2"
                      ? "text-[#8A6201] font-semibold"
                      : ""
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
                    location.pathname === "/About"
                      ? "text-[#8A6201] font-semibold"
                      : ""
                  }`}
                >
                  <li className=" hover:bg-[#222222] py-1 px-2 rounded hover:text-white 3xl:text-4xl ">
                    ABOUT
                  </li>
                </Link>
                <Link
                  to="/Services "
                  className={`text-[#222222] ${
                    location.pathname === "/Services"
                      ? "text-[#8A6201] font-semibold"
                      : ""
                  }`}
                >
                  <li className="  hover:bg-[#222222] py-1 px-2 rounded hover:text-white 3xl:text-4xl ">
                    SERVICES
                  </li>
                </Link>
                <Link
                  to="/Projects"
                  className={`text-[#222222] ${
                    location.pathname === "/Projects"
                      ? "text-[#8A6201] font-semibold"
                      : ""
                  }`}
                >
                  <li className=" hover:bg-[#222222] py-1 px-2 rounded hover:text-white 3xl:text-4xl ">
                    PROJECTS
                  </li>
                </Link>
                <Link
                  to="/News"
                  className={`text-[#222222] ${
                    location.pathname === "/News"
                      ? "text-[#8A6201] font-semibold"
                      : ""
                  }`}
                >
                  <li className=" hover:bg-[#222222] py-1 px-2 rounded hover:text-white 3xl:text-4xl ">
                    NEWS
                  </li>
                </Link>
                <Link
                  to="/Contacts"
                  className={`text-[#222222] ${
                    location.pathname === "/Contacts"
                      ? "text-[#8A6201] font-semibold "
                      : ""
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
                <div className=" bg-white   right-0 h-full bottom-0 w-full fixed">
                  <div className="  py-3  shadow-lg">
                    <div className=" flex items-center justify-between px-6">
                      <div className=" ">
                        <a href="/" className="flex items-center gap-2">
                          <img src={pic1} alt="" className=" w-8" />
                          <h1 className=" text-black text-[1rem] lg:text-3xl 3xl:text-5xl">
                            APICAL DESIGNS
                          </h1>
                        </a>
                      </div>
                      <div className=" text-end" onClick={closeNav}>
                        <FaTimes className=" text-2xl " />
                      </div>
                    </div>
                  </div>
                  <div className="  pt-10 ">
                    <ul className=" text-black gap-6 px-6 space-y-8 ">
                      <li className="  border-b py-1 border-[#222222]">
                        <a
                          href="/Home2"
                          className={`text-[#222222] ${
                            location.pathname === "/Home2"
                              ? "text-[#8A6201] font-semibold"
                              : ""
                          }`}
                        >
                          HOME
                        </a>
                      </li>
                      <li className="  border-b py-1 border-[#222222]">
                        <a
                          href="/About"
                          className={`text-[#222222] ${
                            location.pathname === "/About"
                              ? "text-[#8A6201] font-semibold"
                              : ""
                          }`}
                        >
                          ABOUT
                        </a>
                      </li>
                      <li className="  border-b py-1 border-[#222222]">
                        <a
                          href="/Services"
                          className={`text-[#222222] ${
                            location.pathname === "/Services"
                              ? "text-[#8A6201] font-semibold"
                              : ""
                          }`}
                        >
                          SERVICES
                        </a>
                      </li>
                      <li className="  border-b py-1 border-[#222222]">
                        <a
                          href="/Projects"
                          className={`text-[#222222] ${
                            location.pathname === "/Projects"
                              ? "text-[#8A6201] font-semibold"
                              : ""
                          }`}
                        >
                          PROJECTS
                        </a>
                      </li>
                      <li className="  border-b py-1 border-[#222222]">
                        <a
                          href="/News"
                          className={`text-[#222222] ${
                            location.pathname === "/News"
                              ? "text-[#8A6201] font-semibold"
                              : ""
                          }`}
                        >
                          NEWS
                        </a>
                      </li>
                      <li className="  border-b py-1 border-[#222222]">
                        <a
                          href="/Contacts"
                          className={`text-[#222222] ${
                            location.pathname === "/Contacts"
                              ? "text-[#8A6201] font-semibold"
                              : ""
                          }`}
                        >
                          CONTACTS
                        </a>
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
