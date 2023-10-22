import React ,{ useState, useEffect}from 'react'

const Countdown1 = ({ startCount }) => {
      const [count, setCount] = useState(startCount);

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
