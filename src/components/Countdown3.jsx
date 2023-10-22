import React ,{ useState, useEffect}from 'react'

const Countdown3 = () => {
     const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 244) {
        setCount(count + 1 ) ;
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
