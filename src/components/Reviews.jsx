import React from 'react'

const Reviews = ({ image ,text ,name,subtext}) => {
  return (
    
      <div className=" py-14 ">
              <div className="    pb-16 text-center max-w-[300px]  px-6 m-auto ">
               <div className=" pb-4 flex justify-center ">
                 <img
                  src={image}
                  alt=""
                  className=" w-[150px] h-[150px] rounded-full    "
                />
               </div>
                <p>
                 {text}
                </p>
                <h3 className=" text-[1.1rem] pt-4 pb-2 ">{name}</h3>
                <p>{subtext}</p>
              </div>
            </div>
   
  )
}

export default Reviews
