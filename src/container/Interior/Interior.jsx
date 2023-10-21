import React from 'react'
import {Footer} from '../../components'
import pic9 from "../../../src/pictures/img9.jpeg";
const Interior = () => {
  return (
    <div>
     <section>
        <div
        style={{ backgroundImage: `url(${pic9})` }}
        className=" min-h-[350px] md:min-h-[400px] lg:min-h-[500px] bg-cover bg-center"
      >
        <div className=" bg-black  absolute inset-0  h-[350px] md:h-[400px]  lg:h-[500px]     opacity-70">
          <div className=" pt-[40%] md:pt-[20%] lg:pt-[15%] sl:pt-[10%] text-center">
            <h2 className=" text-white lg:text-[7rem] text-[3rem] md:text-[5rem] font-bold">
              {" "}
              Interior Designs 
            </h2>
          </div>
        </div>
      </div>
      </section>

      <section>
        <Footer/>
      </section>
    </div>
  )
}

export default Interior
