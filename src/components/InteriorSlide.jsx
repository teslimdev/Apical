import React from 'react'

const InteriorSlide = ({image}) => {
  return (
    <div className=' pt-10'>
      <div className=" flex  flex-col place-items-center text-center ">
            <img src={image} alt=""  className=" sl:w-[800px] sl:h-[500px]"/>
           <div className="  pt-6 ">
             <h3 className=' text-white lg:text-2xl'> mid-century modern kitchen</h3>
            <p className='  text-[#926F34] lg:text-xl'>13 march 2020</p>
           </div>
          </div>
          
    </div>
  )
}

export default InteriorSlide
