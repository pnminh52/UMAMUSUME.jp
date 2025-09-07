import React, { useEffect, useState } from "react";
import BarScroll from './BarScroll';

const NavigationScroll = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <div
    //   className={`hidden sm:block fixed z-999 top-0 left-0 right-0   items-center   shadow-md transition-transform duration-300 ${
    //     show ? "translate-y-0" : "-translate-y-full"
    //   }`}
    // >
     <BarScroll />
    // </div>
  );
};

export default NavigationScroll;
