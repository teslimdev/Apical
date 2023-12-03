import React, { useState, useEffect } from 'react';

const Pop = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const handleClose = () => {
    setPopupVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  useEffect(() => {
    
    const popupDelay = setTimeout(() => {
      setPopupVisible(true);
    }, 10000); 

   
    return () => clearTimeout(popupDelay);
  }, []);

  if (!isPopupVisible || isFormSubmitted) {
    return null;
  }

  return (
    <>
      {isPopupVisible && (
        <section>
          <div   className=" px-6 md:px-0">
            <div className="max-w-[500px] m-auto shadow-2xl bg-white rounded-md text-[#222222] py-3">
              <div className="flex justify-end pr-6">
                <button onClick={handleClose} className="text-2xl">
                  x
                </button>
              </div>
              <div className="text-center py-8 md:py-14">
                <h2 className=' pb-6 text-xl'>Subscribe to our newsletter</h2>
                <form
                  action=""
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6 px-6"
                >
                  <input
                    type="email"
                    required
                    placeholder="Input email"
                    className="w-full py-2 pl-3 text-black border border-[#222222] rounded-md outline-[#222222]"
                  />
                  <div className="w-full">
                    <button className="border w-full hover:bg-[#222222] hover:text-white text-xl border-[#222222] px-7 py-2 rounded-md">
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

