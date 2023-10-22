import React ,{ useState, useEffect}from 'react'

const Countdown2 = ({ startCount }) => {
     const [count, setCount] = useState(startCount);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 124) {
        setCount(count + 1);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="">
       {count}
    </div>
  );
};
 

export default Countdown2
