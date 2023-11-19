import React , { useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import pic3 from "../../../src/pictures/img3.jpeg";
import { Footer, Header,Notification, } from "../../components";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import vid1 from '../../../src/pictures/vid1.mp4'

import { BsPinterest } from "react-icons/bs";

const Contacts = () => {
   const [isSuccess, setIsSuccess] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
    const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_inlr4va', 'template_7hcp4rl', form.current, 'oeczAqi6w0uttZPIh')
      .then((result) => {
       setIsSuccess(true);
          setShowNotification(true);
         e.target.reset();
      }, (error) => {
          console.log(error.text);
           setIsSuccess(false);
          setShowNotification(true);
      });
  };
   const closeNotification = () => {
    setShowNotification(false);
  };
  return (
    <div className="">
      <section>
        <Header />
      </section>
      <section>
        <div className=" relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
          <video
            autoPlay
            loop
            muted
            className=" shadow-2xl w-full h-[300px] md:h-[400px] lg:h-[500px]  object-cover"
          >
            <source src={vid1} type="video/mp4 " className="  " />
          </video>
          <div className="   absolute bg-black w-full h-full top-0 inset-0 opacity-50"></div>
        </div>
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
            <form action="data" ref={form} onSubmit={sendEmail}>
              <div>
                <input
                  type="text"
                  required
                  placeholder=" Name"
                   name="user_name"
                  className="  bg-transparent text-[#222222] border-0 py-1 placeholder:text-[#8A6201] pl-1 w-full border-b border-b-black outline-[#222222] "
                />
              </div>{" "}
              <br />
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  name="user_email"
                  required
                  className="  bg-transparent text-[#222222] border-0 py-1 placeholder:text-[#8A6201] w-full border-b pl-2 border-b-black outline-[#222222] "
                />
              </div>{" "}
              <br />
              <div>
                <textarea
                  name="message"
                  id=""
                  cols="60"
                  rows="8"
                  required
                  placeholder=" Your Message"
                  className="  h-32 w-full resize-none border-b text-[#222222] py-1 border-b-black rounded outline-[#222222]  pl-1 bg-transparent placeholder:text-[#8A6201]  "
                ></textarea>
              </div>{" "}
              <br />
              <div>
                <button 
                value="Send"
                className=" py-2 px-4 rounded-full  bg-[#222222] text-white hover:bg-[#333333]">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
         {showNotification && (
        <Notification
      
          message={isSuccess ? "Message sent successfully "  : "Message sending failed"}
          isSuccess={isSuccess}
          onClose={closeNotification}
        />
      )}
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Contacts;
