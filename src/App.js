import {
  Header,
  Footer,
  Footer2,
  Header2,
  ProjectPost2,
  Error,
  Pop,
} from "./components";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  News,
  Projects,
  Contacts,
  Services,
  Home2,
  NewsPost1,
  Construction,
  Visualization,
  Interior,
  Architecture,
  Exterior,
  Products,
  Faq,
  Request,
  Post1,
  InteriorPost2,
  ConstructionPost,

} from "./container";
import { React,  useState, useEffect } from "react";
import { FaWhatsappSquare } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaMessage } from "react-icons/fa6";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
function App() {
    const [socialIconsVisible, setSocialIconsVisible] = useState(false);

  useEffect(() => {
    const handleIconClick = (event) => {
      event.stopPropagation();
      setSocialIconsVisible(!socialIconsVisible);
    };

    const handleCloseIcons = () => {
      setSocialIconsVisible(false);
    };

    document
      .getElementById("messageIcon")
      .addEventListener("click", handleIconClick);
    document.addEventListener("click", handleCloseIcons);

    return () => {
      document
        .getElementById("messageIcon")
        .removeEventListener("click", handleIconClick);
      document.removeEventListener("click", handleCloseIcons);
    };
  }, [socialIconsVisible]);
  return (
    <div className="App">
    <div  className="  fixed top-44 z-10 w-full">
       <Pop/>
    </div>
      <div>
        <Routes>
          <Route path="/Footer2" element={<Footer2 />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/" element={<Home />} />
          <Route path="/Home2" element={<Home2 />} />
          <Route path="/News" element={<News />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/NewsPost1" element={<NewsPost1 />} />
          <Route path="/Architecture" element={<Architecture />} />
          <Route path="/Visualization" element={<Visualization />} />
          <Route path="/Interior" element={<Interior />} />
          <Route path="/Construction" element={<Construction />} />
          <Route path="/Exterior" element={<Exterior />} />
          <Route path="/Products" element={<Products />} />
          <Route path="Header2" element={<Header2 />} />
          <Route path="Header" element={<Header />} />
          <Route path="/ProjectPost2" element={<ProjectPost2 />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="*" element={<Error />} />
          <Route path="/Request" element={<Request />} />
          <Route path="/Post1" element={<Post1 />} />
          <Route path="/InteriorPost2" element={<InteriorPost2 />} />
          <Route path="/ConstructionPost" element={<ConstructionPost />} />
        </Routes>
      </div>
          <div className="popup-container">
        <div className="message-icon" id="messageIcon">
         <FaMessage/>
        </div>
        <div
          className={`social-icons ${socialIconsVisible ? "flex" : "hidden"}`}
          id="socialIcons"
        >
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/abdullah-teslim">
              <AiFillLinkedin className=" icon"/>
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.instagram.com/apical_designs/?hl=en">
              <AiFillInstagram  className=" icon"/>
            </a>
          </div>
          <div className="social-icon">
            <a href="https://wa.link/96p296">
              <FaWhatsappSquare  className=" icon"/>
            </a>
          </div>
          <div className="social-icon">
            <a href="https://twitter.com/abdullah_teslim">
              <RiTwitterXFill  className=" icon"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
