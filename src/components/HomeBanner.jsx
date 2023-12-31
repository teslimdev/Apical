import React from 'react'
const HomeBanner = ({image,header,text}) => {
   
  return (

         <div className=" relative min-h-screen">
         <video  autoPlay muted loop playsInline className=" shadow-2xl w-full h-screen  object-cover">
            <source src={image} type="video/mp4 "  className='  '/>
          </video>
          <div className="   absolute bg-black w-full h-full top-0 inset-0 opacity-50">
              <div className='  md:max-w-[750px] lg:max-w-[800px] 3xl:max-w-[1300px] sl:max-w[900px] m-auto   mt-[25%] lg:mt-[10%] px-6  md:px-10 lg:px-0'>
                      <h2   className=' text-white text-[2.7rem] md:text-[4rem] leading-[3.5rem] 3xl:leading-[9rem] 3xl:text-[6rem] md:leading-[4.5rem]  font-sans lg:text-[4.5rem]  font-extrabold  '>{header} </h2>
                      <p   className=' text-white text-[1.2rem] 3xl:text-[3rem] max-w-[450px] 3xl:max-w-[900px] lg:max-w-[550px]  pt-16  lg:pt-28 '>{text}</p>
                  </div>
          </div>
        
     </div>


  )
}

export default HomeBanner
