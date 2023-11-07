import React from "react";
import { Link } from "react-router-dom";
import pic3 from "../../../src/pictures/img3.jpeg";
import pic5 from "../../../src/pictures/img5.jpeg";
import pic4 from "../../../src/pictures/img4.jpeg";
import pic2 from "../../../src/pictures/img2.jpeg";
import { Footer2,Header } from "../../components";

const Projects = () => {
  return (
    <div >
    <section>
      <Header/>
    </section>
      <div
        style={{ backgroundImage: `url(${pic3})` }}
        className=" min-h-[350px] md:min-h-[400px] lg:min-h-[500px] bg-cover bg-center"
      >
        <div className=" bg-black  absolute inset-0  h-[350px] md:h-[400px]  lg:h-[500px]     opacity-70">
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
       <section className="bg-[#f2f2f2]">
         <div className=" py-10  ">
        <div className=" pt-20 px-6 ">
        <div className="  grid  md:grid-cols-2  gap-6   sl:px-0  m-auto  ">
          <Link to="/ProjectPost2">
            <div className="relative   group transition-all ease-out duration-500">
              <div className=" ">
                <img
                  src={pic3}
                  alt=""
                  className=" w-full h-[300px] lg:h-[500px] "
                />
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

         <Link to="/ProjectPost1">
            <div className="relative   group transition-all ease-out duration-500">
              <div className=" ">
                <img
                  src={pic4}
                  alt=""
                  className=" w-full h-[300px] lg:h-[500px] "
                />
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
                <img
                  src={pic5}
                  alt=""
                  className=" w-full h-[300px] lg:h-[500px] "
                />
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
                <img
                  src={pic2}
                  alt=""
                  className=" w-full h-[300px] lg:h-[500px] "
                />
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
                <img
                  src={pic5}
                  alt=""
                  className=" w-full h-[300px] lg:h-[500px] "
                />
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
                <img
                  src={pic3}
                  alt=""
                  className=" w-full h-[300px] lg:h-[500px] "
                />
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
