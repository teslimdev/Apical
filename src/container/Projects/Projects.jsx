import React from "react";
import { Link } from "react-router-dom";
import vid1 from '../../../src/pictures/vid1.mp4'
import vid2 from '../../../src/pictures/vid2.mp4'
import { Footer2,Header } from "../../components";

const Projects = () => {
  return (
    <div >
    <section>
      <Header/>
    </section>
     <section>
        <div className=" relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
          <video
            autoPlay
            muted
            loop
            className=" shadow-2xl w-full h-[300px] md:h-[400px] lg:h-[500px]  object-cover"
          >
            <source src={vid1} type="video/mp4 " className="  " />
          </video>
          <div className="   absolute bg-black w-full h-full top-0 inset-0 opacity-50">
               <div className=" flex justify-center">
           <div className="    absolute  top-36 ">
            <h2 className=" text-white lg:text-[7rem] text-[3rem] md:text-[5rem] font-bold">
              {" "}
              Projects
            </h2>
          </div>
         </div>
          </div>
        </div>
      </section>
     
       <section className="bg-[#f2f2f2]">
         <div className=" py-10  ">
        <div className=" pt-10 px-6 ">
        <div className="  grid  md:grid-cols-2  gap-6   sl:px-0  m-auto  ">
          <Link to="/ProjectPost2">
            <div className="relative   group transition-all ease-out duration-500">
              <div className=" ">
                 <video
            autoPlay
            muted
            loop
            className=" shadow-2xl w-full h-[300px] lg:h-[500px]  object-cover"
          >
            <source src={vid1} type="video/mp4 " className="  " />
          </video>
               
                <div className=" flex justify-center ">
                
                  <div className=" absolute  top-[30%]     text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                  <div className=" absolute bg-black  group-hover:block  ease-out transition-all duration-500  top-0 text-white h-full hidden ">
                    <div className=" px-6 ">
                      <h2 className=" text-center pt-2 lg:pt-5 text-[1.3rem] lg:text-[1.6rem]"> The Petronas Twin Towers</h2>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae amet pariatur eveniet officia hic mollitia delectus soluta quo sapiente illo ipsa voluptates ducimus, sequi totam placeat, voluptatibus necessitatibus voluptatum. Autem vitae magnam illo iste totam eligendi quaerat tenetur nemo animi dignissimos culpa deserunt commodi, nam illum? Corrupti odio alias sit.</p>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8 hidden lg:block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti itaque excepturi commodi cum porro doloribus nostrum maiores esse suscipit illum! Assumenda itaque culpa in debitis fugit sunt omnis consequatur quod.</p>
                     <div className=" text-center pt-6  md:pt-2">
                       <button className=" text-white border rounded-md  py-1 px-6 hover:bg-white hover:text-black">Read More</button>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

         <Link to="/ProjectPost2">
            <div className="relative   group transition-all ease-out duration-500">
              <div className=" ">
                 <video
            autoPlay
            muted
            loop
            className=" shadow-2xl w-full h-[300px] lg:h-[500px]  object-cover"
          >
            <source src={vid2} type="video/mp4 " className="  " />
          </video>
                <div className=" flex justify-center ">
                
                  <div className=" absolute  top-[30%]     text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                  <div className=" absolute bg-black  group-hover:block  ease-out transition-all duration-500  top-0 text-white h-full hidden ">
                    <div className=" px-6 ">
                      <h2 className=" text-center pt-2 lg:pt-5 text-[1.3rem] lg:text-[1.6rem]"> The Petronas Twin Towers</h2>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae amet pariatur eveniet officia hic mollitia delectus soluta quo sapiente illo ipsa voluptates ducimus, sequi totam placeat, voluptatibus necessitatibus voluptatum. Autem vitae magnam illo iste totam eligendi quaerat tenetur nemo animi dignissimos culpa deserunt commodi, nam illum? Corrupti odio alias sit.</p>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8 hidden lg:block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti itaque excepturi commodi cum porro doloribus nostrum maiores esse suscipit illum! Assumenda itaque culpa in debitis fugit sunt omnis consequatur quod.</p>
                     <div className=" text-center pt-6  md:pt-2">
                       <button className=" text-white border rounded-md  py-1 px-6 hover:bg-white hover:text-black">Read More</button>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

         <Link to="/ProjectPost2">
            <div className="relative   group transition-all ease-out duration-500">
              <div className=" ">
                  <video
            autoPlay
            muted
            loop
            className=" shadow-2xl w-full h-[300px] lg:h-[500px]  object-cover"
          >
            <source src={vid2} type="video/mp4 " className="  " />
          </video>
                <div className=" flex justify-center ">
                
                  <div className=" absolute  top-[30%]     text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                  <div className=" absolute bg-black  group-hover:block  ease-out transition-all duration-500  top-0 text-white h-full hidden ">
                    <div className=" px-6 ">
                      <h2 className=" text-center pt-2 lg:pt-5 text-[1.3rem] lg:text-[1.6rem]"> The Petronas Twin Towers</h2>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae amet pariatur eveniet officia hic mollitia delectus soluta quo sapiente illo ipsa voluptates ducimus, sequi totam placeat, voluptatibus necessitatibus voluptatum. Autem vitae magnam illo iste totam eligendi quaerat tenetur nemo animi dignissimos culpa deserunt commodi, nam illum? Corrupti odio alias sit.</p>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8 hidden lg:block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti itaque excepturi commodi cum porro doloribus nostrum maiores esse suscipit illum! Assumenda itaque culpa in debitis fugit sunt omnis consequatur quod.</p>
                     <div className=" text-center pt-6  md:pt-2">
                       <button className=" text-white border rounded-md  py-1 px-6 hover:bg-white hover:text-black">Read More</button>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

         <Link to="/ProjectPost2">
            <div className="relative   group transition-all ease-out duration-500">
              <div className=" ">
                 <video
            autoPlay
            muted
            loop
            className=" shadow-2xl w-full h-[300px] lg:h-[500px]  object-cover"
          >
            <source src={vid1} type="video/mp4 " className="  " />
          </video>
                <div className=" flex justify-center ">
                
                  <div className=" absolute  top-[30%]     text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                  <div className=" absolute bg-black  group-hover:block  ease-out transition-all duration-500  top-0 text-white h-full hidden ">
                    <div className=" px-6 ">
                      <h2 className=" text-center pt-2 lg:pt-5 text-[1.3rem] lg:text-[1.6rem]"> The Petronas Twin Towers</h2>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae amet pariatur eveniet officia hic mollitia delectus soluta quo sapiente illo ipsa voluptates ducimus, sequi totam placeat, voluptatibus necessitatibus voluptatum. Autem vitae magnam illo iste totam eligendi quaerat tenetur nemo animi dignissimos culpa deserunt commodi, nam illum? Corrupti odio alias sit.</p>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8 hidden lg:block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti itaque excepturi commodi cum porro doloribus nostrum maiores esse suscipit illum! Assumenda itaque culpa in debitis fugit sunt omnis consequatur quod.</p>
                     <div className=" text-center  pt-6  md:pt-2">
                       <button className=" text-white border rounded-md  py-1 px-6 hover:bg-white hover:text-black">Read More</button>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

        <Link to="/ProjectPost2">
            <div className="relative   group transition-all ease-out duration-500">
              <div className=" ">
                  <video
            autoPlay
            muted
            loop
            className=" shadow-2xl w-full h-[300px] lg:h-[500px]  object-cover"
          >
            <source src={vid1} type="video/mp4 " className="  " />
          </video>
                <div className=" flex justify-center ">
                
                  <div className=" absolute  top-[30%]     text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                  <div className=" absolute bg-black  group-hover:block  ease-out transition-all duration-500  top-0 text-white h-full hidden ">
                    <div className=" px-6 ">
                      <h2 className=" text-center pt-2 lg:pt-5 text-[1.3rem] lg:text-[1.6rem]"> The Petronas Twin Towers</h2>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae amet pariatur eveniet officia hic mollitia delectus soluta quo sapiente illo ipsa voluptates ducimus, sequi totam placeat, voluptatibus necessitatibus voluptatum. Autem vitae magnam illo iste totam eligendi quaerat tenetur nemo animi dignissimos culpa deserunt commodi, nam illum? Corrupti odio alias sit.</p>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8 hidden lg:block " >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti itaque excepturi commodi cum porro doloribus nostrum maiores esse suscipit illum! Assumenda itaque culpa in debitis fugit sunt omnis consequatur quod.</p>
                     <div className=" text-center  pt-6  md:pt-2">
                       <button className=" text-white border rounded-md  py-1 px-6 hover:bg-white hover:text-black">Read More</button>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

         <Link to="/ProjectPost2">
            <div className="relative   group transition-all ease-out duration-500">
              <div className=" ">
                  <video
            autoPlay
            muted
            loop
            className=" shadow-2xl w-full h-[300px] lg:h-[500px]  object-cover"
          >
            <source src={vid2} type="video/mp4 " className="  " />
          </video>
                <div className=" flex justify-center ">
                
                  <div className=" absolute  top-[30%]     text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                  <div className=" absolute bg-black  group-hover:block  ease-out transition-all duration-500  top-0 text-white h-full hidden ">
                    <div className=" px-6 ">
                      <h2 className=" text-center pt-2 lg:pt-5 text-[1.3rem] lg:text-[1.6rem]"> The Petronas Twin Towers</h2>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae amet pariatur eveniet officia hic mollitia delectus soluta quo sapiente illo ipsa voluptates ducimus, sequi totam placeat, voluptatibus necessitatibus voluptatum. Autem vitae magnam illo iste totam eligendi quaerat tenetur nemo animi dignissimos culpa deserunt commodi, nam illum? Corrupti odio alias sit.</p>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8 hidden lg:block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti itaque excepturi commodi cum porro doloribus nostrum maiores esse suscipit illum! Assumenda itaque culpa in debitis fugit sunt omnis consequatur quod.</p>
                     <div className=" text-center pt-6  md:pt-2">
                       <button className=" text-white border rounded-md  py-1 px-6 hover:bg-white hover:text-black">Read More</button>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/ProjectPost2">
            <div className="relative   group transition-all ease-out duration-500">
              <div className=" ">
                  <video
            autoPlay
            muted
            loop
            className=" shadow-2xl w-full h-[300px] lg:h-[500px]  object-cover"
          >
            <source src={vid2} type="video/mp4 " className="  " />
          </video>
                <div className=" flex justify-center ">
                
                  <div className=" absolute  top-[30%]     text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                  <div className=" absolute bg-black  group-hover:block  ease-out transition-all duration-500  top-0 text-white h-full hidden ">
                    <div className=" px-6 ">
                      <h2 className=" text-center pt-2 lg:pt-5 text-[1.3rem] lg:text-[1.6rem]"> The Petronas Twin Towers</h2>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae amet pariatur eveniet officia hic mollitia delectus soluta quo sapiente illo ipsa voluptates ducimus, sequi totam placeat, voluptatibus necessitatibus voluptatum. Autem vitae magnam illo iste totam eligendi quaerat tenetur nemo animi dignissimos culpa deserunt commodi, nam illum? Corrupti odio alias sit.</p>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8 hidden lg:block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti itaque excepturi commodi cum porro doloribus nostrum maiores esse suscipit illum! Assumenda itaque culpa in debitis fugit sunt omnis consequatur quod.</p>
                     <div className=" text-center pt-6  md:pt-2">
                       <button className=" text-white border rounded-md  py-1 px-6 hover:bg-white hover:text-black">Read More</button>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/ProjectPost2">
            <div className="relative   group transition-all ease-out duration-500">
              <div className=" ">
                  <video
            autoPlay
            muted
            loop
            className=" shadow-2xl w-full h-[300px] lg:h-[500px]  object-cover"
          >
            <source src={vid1} type="video/mp4 " className="  " />
          </video>
                <div className=" flex justify-center ">
                
                  <div className=" absolute  top-[30%]     text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                  <div className=" absolute bg-black  group-hover:block  ease-out transition-all duration-500  top-0 text-white h-full hidden ">
                    <div className=" px-6 ">
                      <h2 className=" text-center pt-2 lg:pt-5 text-[1.3rem] lg:text-[1.6rem]"> The Petronas Twin Towers</h2>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae amet pariatur eveniet officia hic mollitia delectus soluta quo sapiente illo ipsa voluptates ducimus, sequi totam placeat, voluptatibus necessitatibus voluptatum. Autem vitae magnam illo iste totam eligendi quaerat tenetur nemo animi dignissimos culpa deserunt commodi, nam illum? Corrupti odio alias sit.</p>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8 hidden lg:block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti itaque excepturi commodi cum porro doloribus nostrum maiores esse suscipit illum! Assumenda itaque culpa in debitis fugit sunt omnis consequatur quod.</p>
                     <div className=" text-center pt-6  md:pt-2">
                       <button className=" text-white border rounded-md  py-1 px-6 hover:bg-white hover:text-black">Read More</button>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/ProjectPost2">
            <div className="relative   group transition-all ease-out duration-500">
              <div className=" ">
                  <video
            autoPlay
            muted
            loop
            className=" shadow-2xl w-full h-[300px] lg:h-[500px]  object-cover"
          >
            <source src={vid1} type="video/mp4 " className="  " />
          </video>
                <div className=" flex justify-center ">
                
                  <div className=" absolute  top-[30%]     text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                  <div className=" absolute bg-black  group-hover:block  ease-out transition-all duration-500  top-0 text-white h-full hidden ">
                    <div className=" px-6 ">
                      <h2 className=" text-center pt-2 lg:pt-5 text-[1.3rem] lg:text-[1.6rem]"> The Petronas Twin Towers</h2>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae amet pariatur eveniet officia hic mollitia delectus soluta quo sapiente illo ipsa voluptates ducimus, sequi totam placeat, voluptatibus necessitatibus voluptatum. Autem vitae magnam illo iste totam eligendi quaerat tenetur nemo animi dignissimos culpa deserunt commodi, nam illum? Corrupti odio alias sit.</p>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8 hidden lg:block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti itaque excepturi commodi cum porro doloribus nostrum maiores esse suscipit illum! Assumenda itaque culpa in debitis fugit sunt omnis consequatur quod.</p>
                     <div className=" text-center pt-6  md:pt-2">
                       <button className=" text-white border rounded-md  py-1 px-6 hover:bg-white hover:text-black">Read More</button>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/ProjectPost2">
            <div className="relative   group transition-all ease-out duration-500">
              <div className=" ">
                  <video
            autoPlay
            muted
            loop
            className=" shadow-2xl w-full h-[300px] lg:h-[500px]  object-cover"
          >
            <source src={vid2} type="video/mp4 " className="  " />
          </video>
                <div className=" flex justify-center ">
                
                  <div className=" absolute  top-[30%]     text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                  <div className=" absolute bg-black  group-hover:block  ease-out transition-all duration-500  top-0 text-white h-full hidden ">
                    <div className=" px-6 ">
                      <h2 className=" text-center pt-2 lg:pt-5 text-[1.3rem] lg:text-[1.6rem]"> The Petronas Twin Towers</h2>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae amet pariatur eveniet officia hic mollitia delectus soluta quo sapiente illo ipsa voluptates ducimus, sequi totam placeat, voluptatibus necessitatibus voluptatum. Autem vitae magnam illo iste totam eligendi quaerat tenetur nemo animi dignissimos culpa deserunt commodi, nam illum? Corrupti odio alias sit.</p>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8 hidden lg:block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti itaque excepturi commodi cum porro doloribus nostrum maiores esse suscipit illum! Assumenda itaque culpa in debitis fugit sunt omnis consequatur quod.</p>
                     <div className=" text-center pt-6  md:pt-2">
                       <button className=" text-white border rounded-md  py-1 px-6 hover:bg-white hover:text-black">Read More</button>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/ProjectPost2">
            <div className="relative   group transition-all ease-out duration-500">
              <div className=" ">
                  <video
            autoPlay
            muted
            loop
            className=" shadow-2xl w-full h-[300px] lg:h-[500px]  object-cover"
          >
            <source src={vid2} type="video/mp4 " className="  " />
          </video>
                <div className=" flex justify-center ">
                
                  <div className=" absolute  top-[30%]     text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                  <div className=" absolute bg-black  group-hover:block  ease-out transition-all duration-500  top-0 text-white h-full hidden ">
                    <div className=" px-6 ">
                      <h2 className=" text-center pt-2 lg:pt-5 text-[1.3rem] lg:text-[1.6rem]"> The Petronas Twin Towers</h2>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae amet pariatur eveniet officia hic mollitia delectus soluta quo sapiente illo ipsa voluptates ducimus, sequi totam placeat, voluptatibus necessitatibus voluptatum. Autem vitae magnam illo iste totam eligendi quaerat tenetur nemo animi dignissimos culpa deserunt commodi, nam illum? Corrupti odio alias sit.</p>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8 hidden lg:block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti itaque excepturi commodi cum porro doloribus nostrum maiores esse suscipit illum! Assumenda itaque culpa in debitis fugit sunt omnis consequatur quod.</p>
                     <div className=" text-center pt-6  md:pt-2">
                       <button className=" text-white border rounded-md  py-1 px-6 hover:bg-white hover:text-black">Read More</button>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/ProjectPost2">
            <div className="relative   group transition-all ease-out duration-500">
              <div className=" ">
                  <video
            autoPlay
            muted
            loop
            className=" shadow-2xl w-full h-[300px] lg:h-[500px]  object-cover"
          >
            <source src={vid1} type="video/mp4 " className="  " />
          </video>
                <div className=" flex justify-center ">
                
                  <div className=" absolute  top-[30%]     text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                  <div className=" absolute bg-black  group-hover:block  ease-out transition-all duration-500  top-0 text-white h-full hidden ">
                    <div className=" px-6 ">
                      <h2 className=" text-center pt-2 lg:pt-5 text-[1.3rem] lg:text-[1.6rem]"> The Petronas Twin Towers</h2>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae amet pariatur eveniet officia hic mollitia delectus soluta quo sapiente illo ipsa voluptates ducimus, sequi totam placeat, voluptatibus necessitatibus voluptatum. Autem vitae magnam illo iste totam eligendi quaerat tenetur nemo animi dignissimos culpa deserunt commodi, nam illum? Corrupti odio alias sit.</p>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8 hidden lg:block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti itaque excepturi commodi cum porro doloribus nostrum maiores esse suscipit illum! Assumenda itaque culpa in debitis fugit sunt omnis consequatur quod.</p>
                     <div className=" text-center pt-6  md:pt-2">
                       <button className=" text-white border rounded-md  py-1 px-6 hover:bg-white hover:text-black">Read More</button>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/ProjectPost2">
            <div className="relative   group transition-all ease-out duration-500">
              <div className=" ">
                  <video
            autoPlay
            muted
            loop
            className=" shadow-2xl w-full h-[300px] lg:h-[500px]  object-cover"
          >
            <source src={vid1} type="video/mp4 " className="  " />
          </video>
                <div className=" flex justify-center ">
                
                  <div className=" absolute  top-[30%]     text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                  <div className=" absolute bg-black  group-hover:block  ease-out transition-all duration-500  top-0 text-white h-full hidden ">
                    <div className=" px-6 ">
                      <h2 className=" text-center pt-2 lg:pt-5 text-[1.3rem] lg:text-[1.6rem]"> The Petronas Twin Towers</h2>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae amet pariatur eveniet officia hic mollitia delectus soluta quo sapiente illo ipsa voluptates ducimus, sequi totam placeat, voluptatibus necessitatibus voluptatum. Autem vitae magnam illo iste totam eligendi quaerat tenetur nemo animi dignissimos culpa deserunt commodi, nam illum? Corrupti odio alias sit.</p>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8 hidden lg:block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti itaque excepturi commodi cum porro doloribus nostrum maiores esse suscipit illum! Assumenda itaque culpa in debitis fugit sunt omnis consequatur quod.</p>
                     <div className=" text-center pt-6  md:pt-2">
                       <button className=" text-white border rounded-md  py-1 px-6 hover:bg-white hover:text-black">Read More</button>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/ProjectPost2">
            <div className="relative   group transition-all ease-out duration-500">
              <div className=" ">
                  <video
            autoPlay
            muted
            loop
            className=" shadow-2xl w-full h-[300px] lg:h-[500px]  object-cover"
          >
            <source src={vid2} type="video/mp4 " className="  " />
          </video>
                <div className=" flex justify-center ">
                
                  <div className=" absolute  top-[30%]     text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                  <div className=" absolute bg-black  group-hover:block  ease-out transition-all duration-500  top-0 text-white h-full hidden ">
                    <div className=" px-6 ">
                      <h2 className=" text-center pt-2 lg:pt-5 text-[1.3rem] lg:text-[1.6rem]"> The Petronas Twin Towers</h2>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae amet pariatur eveniet officia hic mollitia delectus soluta quo sapiente illo ipsa voluptates ducimus, sequi totam placeat, voluptatibus necessitatibus voluptatum. Autem vitae magnam illo iste totam eligendi quaerat tenetur nemo animi dignissimos culpa deserunt commodi, nam illum? Corrupti odio alias sit.</p>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8 hidden lg:block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti itaque excepturi commodi cum porro doloribus nostrum maiores esse suscipit illum! Assumenda itaque culpa in debitis fugit sunt omnis consequatur quod.</p>
                     <div className=" text-center pt-6  md:pt-2">
                       <button className=" text-white border rounded-md  py-1 px-6 hover:bg-white hover:text-black">Read More</button>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/ProjectPost2">
            <div className="relative   group transition-all ease-out duration-500">
              <div className=" ">
                  <video
            autoPlay
            muted
            loop
            className=" shadow-2xl w-full h-[300px] lg:h-[500px]  object-cover"
          >
            <source src={vid2} type="video/mp4 " className="  " />
          </video>
                <div className=" flex justify-center ">
                
                  <div className=" absolute  top-[30%]     text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                  <div className=" absolute bg-black  group-hover:block  ease-out transition-all duration-500  top-0 text-white h-full hidden ">
                    <div className=" px-6 ">
                      <h2 className=" text-center pt-2 lg:pt-5 text-[1.3rem] lg:text-[1.6rem]"> The Petronas Twin Towers</h2>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae amet pariatur eveniet officia hic mollitia delectus soluta quo sapiente illo ipsa voluptates ducimus, sequi totam placeat, voluptatibus necessitatibus voluptatum. Autem vitae magnam illo iste totam eligendi quaerat tenetur nemo animi dignissimos culpa deserunt commodi, nam illum? Corrupti odio alias sit.</p>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8 hidden lg:block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti itaque excepturi commodi cum porro doloribus nostrum maiores esse suscipit illum! Assumenda itaque culpa in debitis fugit sunt omnis consequatur quod.</p>
                     <div className=" text-center pt-6  md:pt-2">
                       <button className=" text-white border rounded-md  py-1 px-6 hover:bg-white hover:text-black">Read More</button>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/ProjectPost2">
            <div className="relative   group transition-all ease-out duration-500">
              <div className=" ">
                  <video
            autoPlay
            muted
            loop
            className=" shadow-2xl w-full h-[300px] lg:h-[500px]  object-cover"
          >
            <source src={vid1} type="video/mp4 " className="  " />
          </video>
                <div className=" flex justify-center ">
                
                  <div className=" absolute  top-[30%]     text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                  <div className=" absolute bg-black  group-hover:block  ease-out transition-all duration-500  top-0 text-white h-full hidden ">
                    <div className=" px-6 ">
                      <h2 className=" text-center pt-2 lg:pt-5 text-[1.3rem] lg:text-[1.6rem]"> The Petronas Twin Towers</h2>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae amet pariatur eveniet officia hic mollitia delectus soluta quo sapiente illo ipsa voluptates ducimus, sequi totam placeat, voluptatibus necessitatibus voluptatum. Autem vitae magnam illo iste totam eligendi quaerat tenetur nemo animi dignissimos culpa deserunt commodi, nam illum? Corrupti odio alias sit.</p>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8 hidden lg:block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti itaque excepturi commodi cum porro doloribus nostrum maiores esse suscipit illum! Assumenda itaque culpa in debitis fugit sunt omnis consequatur quod.</p>
                     <div className=" text-center pt-6  md:pt-2">
                       <button className=" text-white border rounded-md  py-1 px-6 hover:bg-white hover:text-black">Read More</button>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/ProjectPost2">
            <div className="relative   group transition-all ease-out duration-500">
              <div className=" ">
                  <video
            autoPlay
            muted
            loop
            className=" shadow-2xl w-full h-[300px] lg:h-[500px]  object-cover"
          >
            <source src={vid1} type="video/mp4 " className="  " />
          </video>
                <div className=" flex justify-center ">
                
                  <div className=" absolute  top-[30%]     text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                  <div className=" absolute bg-black  group-hover:block  ease-out transition-all duration-500  top-0 text-white h-full hidden ">
                    <div className=" px-6 ">
                      <h2 className=" text-center pt-2 lg:pt-5 text-[1.3rem] lg:text-[1.6rem]"> The Petronas Twin Towers</h2>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae amet pariatur eveniet officia hic mollitia delectus soluta quo sapiente illo ipsa voluptates ducimus, sequi totam placeat, voluptatibus necessitatibus voluptatum. Autem vitae magnam illo iste totam eligendi quaerat tenetur nemo animi dignissimos culpa deserunt commodi, nam illum? Corrupti odio alias sit.</p>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8 hidden lg:block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti itaque excepturi commodi cum porro doloribus nostrum maiores esse suscipit illum! Assumenda itaque culpa in debitis fugit sunt omnis consequatur quod.</p>
                     <div className=" text-center pt-6  md:pt-2">
                       <button className=" text-white border rounded-md  py-1 px-6 hover:bg-white hover:text-black">Read More</button>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/ProjectPost2">
            <div className="relative   group transition-all ease-out duration-500">
              <div className=" ">
                  <video
            autoPlay
            muted
            loop
            className=" shadow-2xl w-full h-[300px] lg:h-[500px]  object-cover"
          >
            <source src={vid2} type="video/mp4 " className="  " />
          </video>
                <div className=" flex justify-center ">
                
                  <div className=" absolute  top-[30%]     text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                  <div className=" absolute bg-black  group-hover:block  ease-out transition-all duration-500  top-0 text-white h-full hidden ">
                    <div className=" px-6 ">
                      <h2 className=" text-center pt-2 lg:pt-5 text-[1.3rem] lg:text-[1.6rem]"> The Petronas Twin Towers</h2>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae amet pariatur eveniet officia hic mollitia delectus soluta quo sapiente illo ipsa voluptates ducimus, sequi totam placeat, voluptatibus necessitatibus voluptatum. Autem vitae magnam illo iste totam eligendi quaerat tenetur nemo animi dignissimos culpa deserunt commodi, nam illum? Corrupti odio alias sit.</p>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8 hidden lg:block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti itaque excepturi commodi cum porro doloribus nostrum maiores esse suscipit illum! Assumenda itaque culpa in debitis fugit sunt omnis consequatur quod.</p>
                     <div className=" text-center pt-6  md:pt-2">
                       <button className=" text-white border rounded-md  py-1 px-6 hover:bg-white hover:text-black">Read More</button>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/ProjectPost2">
            <div className="relative   group transition-all ease-out duration-500">
              <div className=" ">
                  <video
            autoPlay
            muted
            loop
            className=" shadow-2xl w-full h-[300px] lg:h-[500px]  object-cover"
          >
            <source src={vid2} type="video/mp4 " className="  " />
          </video>
                <div className=" flex justify-center ">
                
                  <div className=" absolute  top-[30%]     text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                  <div className=" absolute bg-black  group-hover:block  ease-out transition-all duration-500  top-0 text-white h-full hidden ">
                    <div className=" px-6 ">
                      <h2 className=" text-center pt-2 lg:pt-5 text-[1.3rem] lg:text-[1.6rem]"> The Petronas Twin Towers</h2>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae amet pariatur eveniet officia hic mollitia delectus soluta quo sapiente illo ipsa voluptates ducimus, sequi totam placeat, voluptatibus necessitatibus voluptatum. Autem vitae magnam illo iste totam eligendi quaerat tenetur nemo animi dignissimos culpa deserunt commodi, nam illum? Corrupti odio alias sit.</p>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8 hidden lg:block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti itaque excepturi commodi cum porro doloribus nostrum maiores esse suscipit illum! Assumenda itaque culpa in debitis fugit sunt omnis consequatur quod.</p>
                     <div className=" text-center pt-6  md:pt-2">
                       <button className=" text-white border rounded-md  py-1 px-6 hover:bg-white hover:text-black">Read More</button>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/ProjectPost2">
            <div className="relative   group transition-all ease-out duration-500">
              <div className=" ">
                  <video
            autoPlay
            muted
            loop
            className=" shadow-2xl w-full h-[300px] lg:h-[500px]  object-cover"
          >
            <source src={vid1} type="video/mp4 " className="  " />
          </video>
                <div className=" flex justify-center ">
                
                  <div className=" absolute  top-[30%]     text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                  <div className=" absolute bg-black  group-hover:block  ease-out transition-all duration-500  top-0 text-white h-full hidden ">
                    <div className=" px-6 ">
                      <h2 className=" text-center pt-2 lg:pt-5 text-[1.3rem] lg:text-[1.6rem]"> The Petronas Twin Towers</h2>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae amet pariatur eveniet officia hic mollitia delectus soluta quo sapiente illo ipsa voluptates ducimus, sequi totam placeat, voluptatibus necessitatibus voluptatum. Autem vitae magnam illo iste totam eligendi quaerat tenetur nemo animi dignissimos culpa deserunt commodi, nam illum? Corrupti odio alias sit.</p>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8 hidden lg:block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti itaque excepturi commodi cum porro doloribus nostrum maiores esse suscipit illum! Assumenda itaque culpa in debitis fugit sunt omnis consequatur quod.</p>
                     <div className=" text-center pt-6  md:pt-2">
                       <button className=" text-white border rounded-md  py-1 px-6 hover:bg-white hover:text-black">Read More</button>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/ProjectPost2">
            <div className="relative   group transition-all ease-out duration-500">
              <div className=" ">
                  <video
            autoPlay
            muted
            loop
            className=" shadow-2xl w-full h-[300px] lg:h-[500px]  object-cover"
          >
            <source src={vid1} type="video/mp4 " className="  " />
          </video>
                <div className=" flex justify-center ">
                
                  <div className=" absolute  top-[30%]     text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                  <div className=" absolute bg-black  group-hover:block  ease-out transition-all duration-500  top-0 text-white h-full hidden ">
                    <div className=" px-6 ">
                      <h2 className=" text-center pt-2 lg:pt-5 text-[1.3rem] lg:text-[1.6rem]"> The Petronas Twin Towers</h2>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae amet pariatur eveniet officia hic mollitia delectus soluta quo sapiente illo ipsa voluptates ducimus, sequi totam placeat, voluptatibus necessitatibus voluptatum. Autem vitae magnam illo iste totam eligendi quaerat tenetur nemo animi dignissimos culpa deserunt commodi, nam illum? Corrupti odio alias sit.</p>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8 hidden lg:block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti itaque excepturi commodi cum porro doloribus nostrum maiores esse suscipit illum! Assumenda itaque culpa in debitis fugit sunt omnis consequatur quod.</p>
                     <div className=" text-center pt-6  md:pt-2">
                       <button className=" text-white border rounded-md  py-1 px-6 hover:bg-white hover:text-black">Read More</button>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/ProjectPost2">
            <div className="relative   group transition-all ease-out duration-500">
              <div className=" ">
                  <video
            autoPlay
            muted
            loop
            className=" shadow-2xl w-full h-[300px] lg:h-[500px]  object-cover"
          >
            <source src={vid2} type="video/mp4 " className="  " />
          </video>
                <div className=" flex justify-center ">
                
                  <div className=" absolute  top-[30%]     text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                  <div className=" absolute bg-black  group-hover:block  ease-out transition-all duration-500  top-0 text-white h-full hidden ">
                    <div className=" px-6 ">
                      <h2 className=" text-center pt-2 lg:pt-5 text-[1.3rem] lg:text-[1.6rem]"> The Petronas Twin Towers</h2>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae amet pariatur eveniet officia hic mollitia delectus soluta quo sapiente illo ipsa voluptates ducimus, sequi totam placeat, voluptatibus necessitatibus voluptatum. Autem vitae magnam illo iste totam eligendi quaerat tenetur nemo animi dignissimos culpa deserunt commodi, nam illum? Corrupti odio alias sit.</p>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8 hidden lg:block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti itaque excepturi commodi cum porro doloribus nostrum maiores esse suscipit illum! Assumenda itaque culpa in debitis fugit sunt omnis consequatur quod.</p>
                     <div className=" text-center pt-6  md:pt-2">
                       <button className=" text-white border rounded-md  py-1 px-6 hover:bg-white hover:text-black">Read More</button>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/ProjectPost2">
            <div className="relative   group transition-all ease-out duration-500">
              <div className=" ">
                  <video
            autoPlay
            muted
            loop
            className=" shadow-2xl w-full h-[300px] lg:h-[500px]  object-cover"
          >
            <source src={vid2} type="video/mp4 " className="  " />
          </video>
                <div className=" flex justify-center ">
                
                  <div className=" absolute  top-[30%]     text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                  <div className=" absolute bg-black  group-hover:block  ease-out transition-all duration-500  top-0 text-white h-full hidden ">
                    <div className=" px-6 ">
                      <h2 className=" text-center pt-2 lg:pt-5 text-[1.3rem] lg:text-[1.6rem]"> The Petronas Twin Towers</h2>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae amet pariatur eveniet officia hic mollitia delectus soluta quo sapiente illo ipsa voluptates ducimus, sequi totam placeat, voluptatibus necessitatibus voluptatum. Autem vitae magnam illo iste totam eligendi quaerat tenetur nemo animi dignissimos culpa deserunt commodi, nam illum? Corrupti odio alias sit.</p>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8 hidden lg:block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti itaque excepturi commodi cum porro doloribus nostrum maiores esse suscipit illum! Assumenda itaque culpa in debitis fugit sunt omnis consequatur quod.</p>
                     <div className=" text-center pt-6  md:pt-2">
                       <button className=" text-white border rounded-md  py-1 px-6 hover:bg-white hover:text-black">Read More</button>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/ProjectPost2">
            <div className="relative   group transition-all ease-out duration-500">
              <div className=" ">
                  <video
            autoPlay
            muted
            loop
            className=" shadow-2xl w-full h-[300px] lg:h-[500px]  object-cover"
          >
            <source src={vid1} type="video/mp4 " className="  " />
          </video>
                <div className=" flex justify-center ">
                
                  <div className=" absolute  top-[30%]     text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                  <div className=" absolute bg-black  group-hover:block  ease-out transition-all duration-500  top-0 text-white h-full hidden ">
                    <div className=" px-6 ">
                      <h2 className=" text-center pt-2 lg:pt-5 text-[1.3rem] lg:text-[1.6rem]"> The Petronas Twin Towers</h2>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae amet pariatur eveniet officia hic mollitia delectus soluta quo sapiente illo ipsa voluptates ducimus, sequi totam placeat, voluptatibus necessitatibus voluptatum. Autem vitae magnam illo iste totam eligendi quaerat tenetur nemo animi dignissimos culpa deserunt commodi, nam illum? Corrupti odio alias sit.</p>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8 hidden lg:block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti itaque excepturi commodi cum porro doloribus nostrum maiores esse suscipit illum! Assumenda itaque culpa in debitis fugit sunt omnis consequatur quod.</p>
                     <div className=" text-center pt-6  md:pt-2">
                       <button className=" text-white border rounded-md  py-1 px-6 hover:bg-white hover:text-black">Read More</button>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/ProjectPost2">
            <div className="relative   group transition-all ease-out duration-500">
              <div className=" ">
                  <video
            autoPlay
            muted
            loop
            className=" shadow-2xl w-full h-[300px] lg:h-[500px]  object-cover"
          >
            <source src={vid1} type="video/mp4 " className="  " />
          </video>
                <div className=" flex justify-center ">
                
                  <div className=" absolute  top-[30%]     text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                  <div className=" absolute bg-black  group-hover:block  ease-out transition-all duration-500  top-0 text-white h-full hidden ">
                    <div className=" px-6 ">
                      <h2 className=" text-center pt-2 lg:pt-5 text-[1.3rem] lg:text-[1.6rem]"> The Petronas Twin Towers</h2>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae amet pariatur eveniet officia hic mollitia delectus soluta quo sapiente illo ipsa voluptates ducimus, sequi totam placeat, voluptatibus necessitatibus voluptatum. Autem vitae magnam illo iste totam eligendi quaerat tenetur nemo animi dignissimos culpa deserunt commodi, nam illum? Corrupti odio alias sit.</p>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8 hidden lg:block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti itaque excepturi commodi cum porro doloribus nostrum maiores esse suscipit illum! Assumenda itaque culpa in debitis fugit sunt omnis consequatur quod.</p>
                     <div className=" text-center pt-6  md:pt-2">
                       <button className=" text-white border rounded-md  py-1 px-6 hover:bg-white hover:text-black">Read More</button>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/ProjectPost2">
            <div className="relative   group transition-all ease-out duration-500">
              <div className=" ">
                  <video
            autoPlay
            muted
            loop
            className=" shadow-2xl w-full h-[300px] lg:h-[500px]  object-cover"
          >
            <source src={vid2} type="video/mp4 " className="  " />
          </video>
                <div className=" flex justify-center ">
                
                  <div className=" absolute  top-[30%]     text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                  <div className=" absolute bg-black  group-hover:block  ease-out transition-all duration-500  top-0 text-white h-full hidden ">
                    <div className=" px-6 ">
                      <h2 className=" text-center pt-2 lg:pt-5 text-[1.3rem] lg:text-[1.6rem]"> The Petronas Twin Towers</h2>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae amet pariatur eveniet officia hic mollitia delectus soluta quo sapiente illo ipsa voluptates ducimus, sequi totam placeat, voluptatibus necessitatibus voluptatum. Autem vitae magnam illo iste totam eligendi quaerat tenetur nemo animi dignissimos culpa deserunt commodi, nam illum? Corrupti odio alias sit.</p>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8 hidden lg:block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti itaque excepturi commodi cum porro doloribus nostrum maiores esse suscipit illum! Assumenda itaque culpa in debitis fugit sunt omnis consequatur quod.</p>
                     <div className=" text-center pt-6  md:pt-2">
                       <button className=" text-white border rounded-md  py-1 px-6 hover:bg-white hover:text-black">Read More</button>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/ProjectPost2">
            <div className="relative   group transition-all ease-out duration-500">
              <div className=" ">
                  <video
            autoPlay
            muted
            loop
            className=" shadow-2xl w-full h-[300px] lg:h-[500px]  object-cover"
          >
            <source src={vid2} type="video/mp4 " className="  " />
          </video>
                <div className=" flex justify-center ">
                
                  <div className=" absolute  top-[30%]     text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                  <div className=" absolute bg-black  group-hover:block  ease-out transition-all duration-500  top-0 text-white h-full hidden ">
                    <div className=" px-6 ">
                      <h2 className=" text-center pt-2 lg:pt-5 text-[1.3rem] lg:text-[1.6rem]"> The Petronas Twin Towers</h2>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae amet pariatur eveniet officia hic mollitia delectus soluta quo sapiente illo ipsa voluptates ducimus, sequi totam placeat, voluptatibus necessitatibus voluptatum. Autem vitae magnam illo iste totam eligendi quaerat tenetur nemo animi dignissimos culpa deserunt commodi, nam illum? Corrupti odio alias sit.</p>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8 hidden lg:block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti itaque excepturi commodi cum porro doloribus nostrum maiores esse suscipit illum! Assumenda itaque culpa in debitis fugit sunt omnis consequatur quod.</p>
                     <div className=" text-center pt-6  md:pt-2">
                       <button className=" text-white border rounded-md  py-1 px-6 hover:bg-white hover:text-black">Read More</button>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/ProjectPost2">
            <div className="relative   group transition-all ease-out duration-500">
              <div className=" ">
                  <video
            autoPlay
            muted
            loop
            className=" shadow-2xl w-full h-[300px] lg:h-[500px]  object-cover"
          >
            <source src={vid1} type="video/mp4 " className="  " />
          </video>
                <div className=" flex justify-center ">
                
                  <div className=" absolute  top-[30%]     text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                  <div className=" absolute bg-black  group-hover:block  ease-out transition-all duration-500  top-0 text-white h-full hidden ">
                    <div className=" px-6 ">
                      <h2 className=" text-center pt-2 lg:pt-5 text-[1.3rem] lg:text-[1.6rem]"> The Petronas Twin Towers</h2>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae amet pariatur eveniet officia hic mollitia delectus soluta quo sapiente illo ipsa voluptates ducimus, sequi totam placeat, voluptatibus necessitatibus voluptatum. Autem vitae magnam illo iste totam eligendi quaerat tenetur nemo animi dignissimos culpa deserunt commodi, nam illum? Corrupti odio alias sit.</p>
                      <p className=" text-[0.7rem]  lg:text-[1rem] py-2 md:py-1 lg:py-8 hidden lg:block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti itaque excepturi commodi cum porro doloribus nostrum maiores esse suscipit illum! Assumenda itaque culpa in debitis fugit sunt omnis consequatur quod.</p>
                     <div className=" text-center pt-6  md:pt-2">
                       <button className=" text-white border rounded-md  py-1 px-6 hover:bg-white hover:text-black">Read More</button>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
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

export default Projects;
