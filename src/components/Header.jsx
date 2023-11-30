import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import pic1 from "../../src/pictures/img1.png";
import pic7 from "../../src/pictures/img7.png";

export default function Header() {
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const navbarHeight = 60;
      if (scrollY > navbarHeight) {
        setBackgroundColor("white");
      } else {
        setBackgroundColor("transparent");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
    <div className="  z-[80] w-full ">
      <nav className="     ">
        <div
          id="navmain"
          style={{ backgroundColor }}
          className={`py-2 w-full  fixed   border-[#333333] z-10 ${
            backgroundColor === "transparent" ? " shadow-none " : " shadow-lg"
          } `}
        >
          <div className={` sl:max-w-[1200px] px-6 sl:px-0  m-auto   `}>
           <div  className={` flex justify-between    items-center ${backgroundColor === "transparent" ? " border-b border-white pb-3 "  : " border-none pb-0"} `}>
             <div
              className={`  ${
                backgroundColor === "transparent" ? "text-white" : "text-black"
              }`}
            >
              <a href="/"  className=" flex  items-center gap-2">
                <img
            
                  src={`${backgroundColor === "transparent" ? pic7 : pic1}`}
                  alt=""
                  className=" w-8 lg:w-12 3xl:w-20"
                />
                <h1  className={`text-[1rem] lg:text-3xl  3xl:text-5xl  ${
                    location.pathname === "/"
                      ? "  font-semibold  "
                      : " "
                  } ${backgroundColor === "transparent" ? " " : " hover:text-[#8A6201]"}`}>
                  APICAL DESIGNS
                </h1>
              </a>
            </div>
            <div className="   hidden lg:block  ">
              <ul
                className={` flex  2xl:gap-6  ${
                  backgroundColor === "transparent"
                    ? "text-white"
                    : "text-black"
                }`}
              >
                <Link
                  to="/Home2 "
                  className={` ${
                    location.pathname === "/Home2"
                      ? "text-[#8A6201] font-semibold"
                      : ""
                  }`}
                >
                  <li
                
                    className={`3xl:text-4xl   py-1 px-2 rounded  ${backgroundColor === "transparent" ? " hover:bg-white hover:text-[#222222]" : "hover:bg-[#222222] hover:text-white "}`}
                  >
                    HOME
                  </li>
                </Link>

                <Link
                  to="/About"
                  className={` ${
                    location.pathname === "/About"
                      ? "text-[#8A6201] font-semibold"
                      : ""
                  }`}
                >
                  <li   className={`3xl:text-4xl   py-1 px-2 rounded  ${backgroundColor === "transparent" ? " hover:bg-white hover:text-[#222222]" : "hover:bg-[#222222] hover:text-white "}`}>
                    ABOUT
                  </li>
                </Link>

                <Link
                  to="/Services "
                  className={` ${
                    location.pathname === "/Services"
                      ? "text-[#8A6201] font-semibold"
                      : ""
                  }`}
                >
                  <li   className={`3xl:text-4xl   py-1 px-2 rounded  ${backgroundColor === "transparent" ? " hover:bg-white hover:text-[#222222]" : "hover:bg-[#222222] hover:text-white "}`}>
                    SERVICES
                  </li>
                </Link>
                <Link
                  to="/Projects"
                  className={` ${
                    location.pathname === "/Projects"
                      ? "text-[#8A6201] font-semibold"
                      : ""
                  }`}
                >
                  <li   className={`3xl:text-4xl   py-1 px-2 rounded  ${backgroundColor === "transparent" ? " hover:bg-white hover:text-[#222222]" : "hover:bg-[#222222] hover:text-white "}`}>
                    PROJECTS
                  </li>
                </Link>
                <Link
                  to="/Products"
                  className={` ${
                    location.pathname === "/Products"
                      ? "text-[#8A6201] font-semibold"
                      : ""
                  }`}
                >
                  <li   className={`3xl:text-4xl   py-1 px-2 rounded  ${backgroundColor === "transparent" ? " hover:bg-white hover:text-[#222222]" : "hover:bg-[#222222] hover:text-white "}`}>
                    PRODUCTS
                  </li>
                </Link>
                <Link
                  to="/News"
                  className={` ${
                    location.pathname === "/News"
                      ? "text-[#8A6201] font-semibold"
                      : ""
                  }`}
                >
                  <li   className={`3xl:text-4xl   py-1 px-2 rounded  ${backgroundColor === "transparent" ? " hover:bg-white hover:text-[#222222]" : "hover:bg-[#222222] hover:text-white "}`}>
                    NEWS
                  </li>
                </Link>
                <Link
                  to="/Contacts"
                  className={` ${
                    location.pathname === "/Contacts"
                      ? "text-[#8A6201] font-semibold "
                      : ""
                  }`}
                >
                  <li   className={`3xl:text-4xl   py-1 px-2 rounded  ${backgroundColor === "transparent" ? " hover:bg-white hover:text-[#222222]" : "hover:bg-[#222222] hover:text-white "}`}>
                    CONTACTS
                  </li>
                </Link>
              </ul>
            </div>
            <div className=" lg:hidden">
              {!nav ? (
                <FaBars
              
                  className={`text-black text-2xl ${
                    backgroundColor === "transparent"
                      ? "text-white"
                      : "text-black"
                  }`}
                  onClick={isOpen}
                />
              ) : (
                <div  className=" bg-white   right-0 h-full bottom-0 w-full fixed">
                  <div className="  py-3  shadow-lg">
                    <div className=" flex items-center justify-between px-6">
                      <div className=" ">
                        <a href="/" className="flex items-center gap-2">
                          <img src={pic1}  alt="" className=" w-8" />
                          <h1  className={`text-black text-[1rem] lg:text-3xl 3xl:text-5xl   ${
                    location.pathname === "/"
                      ? "text-[#8A6201] font-semibold"
                      : ""
                  }`}>
                            APICAL DESIGNS
                          </h1>
                        </a>
                      </div>
                      <div   className=" text-end" onClick={closeNav}>
                        <FaTimes  className=" text-2xl " />
                      </div>
                    </div>
                  </div>
                  <div className="  pt-10 ">
                    <ul className=" text-black gap-6 px-6 space-y-8 ">
                      <div >
                        <a
                          href="/Home2"
                          className={`text-[#222222]  ${
                            location.pathname === "/Home2"
                              ? "text-[#8A6201] font-semibold"
                              : ""
                          }`}
                        >
                          {" "}
                          <li className="  border-b py-1 border-[#222222]">
                            HOME
                          </li>
                        </a>
                      </div>
                      <div>
                        <a
                          href="/About"
                          className={`text-[#222222] ${
                            location.pathname === "/About"
                              ? "text-[#8A6201] font-semibold"
                              : ""
                          }`}
                        >
                          {" "}
                          <li className="  border-b py-1 border-[#222222]">
                            ABOUT
                          </li>
                        </a>
                      </div>
                      <div>
                        <a
                          href="/Services"
                          className={`text-[#222222] ${
                            location.pathname === "/Services"
                              ? "text-[#8A6201] font-semibold"
                              : ""
                          }`}
                        >
                          <li className="  border-b py-1 border-[#222222]">
                            SERVICES
                          </li>
                        </a>
                      </div>
                      <div>
                        <a
                          href="/Projects"
                          className={`text-[#222222] ${
                            location.pathname === "/Projects"
                              ? "text-[#8A6201] font-semibold"
                              : ""
                          }`}
                        >
                          {" "}
                          <li className="  border-b py-1 border-[#222222]">
                            PROJECTS
                          </li>
                        </a>
                      </div>
                       <div>
                        <a
                          href="/Products"
                          className={`text-[#222222] ${
                            location.pathname === "/Products"
                              ? "text-[#8A6201] font-semibold"
                              : ""
                          }`}
                        >
                          {" "}
                          <li className="  border-b py-1 border-[#222222]">
                            PRODUCTS
                          </li>
                        </a>
                      </div>
                      <div>
                        <a
                          href="/News"
                          className={`text-[#222222] ${
                            location.pathname === "/News"
                              ? "text-[#8A6201] font-semibold"
                              : ""
                          }`}
                        >
                          {" "}
                          <li className="  border-b py-1 border-[#222222]">
                            NEWS
                          </li>
                        </a>
                      </div>
                      <div>
                        <a
                          href="/Contacts"
                          className={`text-[#222222] ${
                            location.pathname === "/Contacts"
                              ? "text-[#8A6201] font-semibold"
                              : ""
                          }`}
                        >
                          {" "}
                          <li className="  border-b py-1 border-[#222222]">
                            CONTACTS
                          </li>
                        </a>
                      </div>
                    </ul>
                  </div>
                </div>
              )}
            </div>
           </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

