import React from 'react'
import { Header2 } from '../../components'
const Products = () => {
  return (
    <div>
    <section>
      <Header2/>
    </section>
     <div className='  flex  justify-center '>
      <div  className='   absolute top-[40%]  '>
     <ul class="panels  ">
            <li className='   w-[150px]   cursor-pointer '>
                <div  className='front bg-[#222222]    w-[150px]  text-white text-xl h-[150px] rounded-full text-center flex flex-col justify-center'>  Coming Soon</div>
                <div  className='back bg-[#8A6201]   w-[150px] text-white text-xl h-[150px] rounded-full text-center flex flex-col justify-center'>  Coming Soon</div>
            </li>
            </ul>
     </div>
     </div>
     
    </div>
  )
}

export default Products
