import React, { useEffect } from 'react'
 import Aos from 'aos'
import 'aos/dist/aos.css'
const UseAos = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
  return Aos
    

}

export default UseAos;
