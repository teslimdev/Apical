import React from "react";
import { Header2 } from "../../components";
const Products = () => {
  return (
    <div>
      <section>
        <Header2 />
      </section>

      <div className=" flex justify-center">
        <div className="card-container w-[150px] absolute top-[40%]  ">
          <div className="card w-[150px] h-[150px] relative">
            <div className="card-front rounded-full bg-[#222222] text-white flex items-center justify-center text-xl ">
              Coming Soon
            </div>
            <div className="card-back rounded-full bg-[#8A6201] text-white flex items-center justify-center text-xl ">
              Coming Soon
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Products;
