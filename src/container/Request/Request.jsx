import React from "react";
import pic9 from "../../../src/pictures/img9.jpeg";
import { Header,Footer2 } from "../../components";
import Select from 'react-select'
const Request = () => {
  const options = [
  { value: 'planning', label: 'Planning' },
  { value: 'singleProject', label: 'Single Project' },
  { value: 'smartHome', label: 'Smart Home' },
  { value: 'commercial', label: 'Commercial' },
];
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
            
           <div className="pt-2">
      <Select
        required
        options={options}
        placeholder="Select field"
        className="w-full text-[#8A6201] py-1 pl-2 custom-select "
        classNamePrefix="custom-select"
        styles={{
          control: (provided) => ({
            ...provided,
            backgroundColor: 'white',
            color: 'white',
            cursor:'pointer'
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#555555' : state.isFocused ? '#666666' : 'white',
            color: state.isSelected ? 'white' : '#222222',
            cursor:'pointer'
          }),
          placeholder: (provided) => ({
            ...provided,
            color: '#8A6201', 
          }),
          singleValue: (provided) => ({
            ...provided,
            color: '#8A6201', 
            
          }),
        }}
      />
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
            
            <button className=" border border-white text-white hover:bg-white hover:text-[#8A6201] py-2 w-full md:w-fit md:px-7 rounded-md">Submit Request</button>
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
