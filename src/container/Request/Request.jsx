import React from "react";
import pic9 from "../../../src/pictures/img9.jpeg";
import { Header,Footer2 } from "../../components";
const Request = () => {
  return (
    <div>
      <section>
        <Header/>
      </section>
      <section>
       <div className="  relative">
        <div
         style={{backgroundImage:`url(${pic9})`}}
         className=" bg-center bg-cover min-h-[50rem] relative bg-fixed"
        >
            <div className=" absolute bg-black top-0 inset-0 opacity-60"> </div>
        </div>
        <div className="     ">
             <div className=" w-full  absolute top-[17%] flex justify-center m-auto  px-6   ">
          <form action="" className=" border-white md:max-w-[600px] border-2 rounded-md px-6 py-8">
            <div>
              <label htmlFor="" className=" text-white">Name</label>
              <br />
             
              <div className=" pt-2">
                <input
                type="text"
                required
                placeholder="Enter Your Name"
                className="  text-[#222222]  py-1 placeholder:text-[#8A6201] pl-2 w-full  outline-white  "
              />
              </div>{" "}
              
            </div>
            <br />
            <div>
              <label htmlFor="" className=" text-white">Email</label>
              <br />
            
              <div className=" pt-2">
                <input
                type="email"
                required
                placeholder="Enter Your Email"
                className="  text-[#222222] border-0 py-1 placeholder:text-[#8A6201] w-full  pl-2  outline-white "
              />
              </div>
              
            </div>
            <br />
            <div>
                <label htmlFor="" className=" w-full text-white" >Select Plan</label>
            <br />
            
            <div className=" pt-2 ">
                <select 
                required
                placeholder=""
                name="" id="" className=" option-bg   w-full py-1 pl-2 outline-white  ">
                 <option value="" className="   text-white    bg-[#222222] ">Select field</option>
              <option value="" className="   text-white    bg-[#222222] ">Planning</option>
              <option value="" className=" text-white  bg-[#222222]">Single Project</option>
              <option value="" className="text-white  bg-[#222222] ">Smart Home</option>
              <option value="" className="text-white  bg-[#222222] ">Commercial</option>
            </select>
            </div>
            </div>
            <br />
            <div>
                <label htmlFor="" className=" text-white">Message</label> <br /> 
            <div className=" pt-2">
                <textarea
              className="  h-32 w-full resize-none border-b text-[#222222] py-1  rounded outline-white  pl-2  placeholder:text-[#8A6201]"
              name=""
              id=""
              required
              cols="60"
              rows="8"
              placeholder="message"
            ></textarea>
            </div> <br />
            </div> 
            
            <button className=" border border-white text-white hover:bg-white hover:text-black py-2 w-full md:w-fit md:px-7 rounded-md">Submit Request</button>
          </form>
        </div>
        </div>
       </div>
      </section>
      <section>
        <Footer2/>
      </section>
    </div>
  );
};

export default Request;
