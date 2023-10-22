import React ,{ useState, useEffect}from 'react'

const Countdown3 = ({ startCount }) => {
     const [count, setCount] = useState(startCount);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 244) {
        setCount(count + 1);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="">
       {count}
    </div>
  );
};
 

export default Countdown3
