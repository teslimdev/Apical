import React from "react";
import classNames from "classnames";

const Notification = ({ message, isSuccess, onClose }) => {
  return (
   <div className="   ">
    <div className=" flex justify-center ">
       <div
      className={classNames("fixed top-[40%]       py-6 px-10 rounded-lg shadow-lg", {
        "bg-white text-[#222222]": isSuccess ,
        "bg-[#444444] text-white": !isSuccess,
      })}
    >
     <div className=" text-[1.2rem]">
       {message}
   
     </div>
      <br />
     <div className="  text-center">
       <button className="  border border-[#222222] py-2 px-8 rounded-full hover:bg-[#222222]  hover:text-white " onClick={onClose}>
        Close
      </button>
     </div>
    </div>
    </div>
   </div>
  );
};

export default Notification;
