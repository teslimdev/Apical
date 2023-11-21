import React, { useState } from 'react';
import pic9 from '../../src/pictures/img9.jpeg'
const Pop = () => {
  const [isPopupVisible, setPopupVisible] = useState(true);
   const [isFormSubmitted, setFormSubmitted] = useState(false);
  const handleClose = () => {
    setPopupVisible(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    setFormSubmitted(true);
  };
  if (!isPopupVisible || isFormSubmitted) {
    return null;
  }


  return (
    <>
     {isPopupVisible && (
      <section>
        <div className=" px-6 md:px-0">
          <div className="max-w-[500px] m-auto bg-[#8A6201] text-white py-3  ">
            <div className=" flex justify-end pr-6">
              <button
              onClick={handleClose}
               className=" text-2xl ">x</button>
            </div>
            <div className="  text-center py-8  md:py-16">
              <h2>subscribe to our news letter</h2>
              <form action=""  onSubmit={handleSubmit} className=" flex flex-col gap-6  px-6">
                <input
                  type="email"
                  required
                  placeholder="input email"
                  className=" w-full py-1 pl-3  text-black border-white rounded-md outline-white"
                />
                <div className=" w-full">
                  <button className=" border w-full   border-white px-7 py-2 rounded-md">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
        )}
    </>
  );
};

export default Pop;
