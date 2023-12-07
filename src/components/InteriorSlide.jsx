import React from 'react'

const InteriorSlide = ({video,text ,date}) => {
  return (
    <div className=' pt-10'>
      <div className=" flex  flex-col place-items-center text-center ">
           <video
            autoPlay
            muted
            loop
            className=" shadow-2xl w-full  sl:w-[800px] sl:h-[500px]  object-cover"
          >
            <source src={video} type="video/mp4 " className="  " />
          </video>
            
           <div className="  pt-6 ">
             <h3 className=' text-white lg:text-2xl'> {text}</h3>
            <p className='  text-[#926F34] lg:text-xl'>{date}</p>
           </div>
          </div>
          
    </div>
  )
}

export default InteriorSlide
