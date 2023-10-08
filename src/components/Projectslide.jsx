 import React from 'react'
 
 const Projectslide = ({image}) => {
   return (
     <div>
       <div className="relative ">
         <div className="  ">
           <img src={image} alt="" className=" w-full h-[250px] lg:h-[500px]" />
           <div className=" flex justify-center">
             <div className=" absolute  top-[30%]  z-10]  text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
               <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                 The Petronas Twin Towers
               </h2>
               <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                 HIGH LINE
               </p>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 }
 
 export default Projectslide
 