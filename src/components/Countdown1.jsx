import React ,{ useState, useEffect}from 'react'

const Countdown1 = () => {
      const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 64) {
        setCount(count + 1);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="">
       {count}
    </div>
  );
};
 

export default Countdown1




// import React, { useState, useEffect } from 'react';

// const Countdown1 = () => {
//   const [count, setCount] = useState(0);

//   const handleScroll = () => {
//     setCount(0);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (count < 64) {
//         setCount((prevCount) => prevCount + 1);
//       }
//     }, 50);

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       clearInterval(interval);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [count]);

//   return (
//     <div className="">
//       {count}
//     </div>
//   );
// };

// export default Countdown1;
