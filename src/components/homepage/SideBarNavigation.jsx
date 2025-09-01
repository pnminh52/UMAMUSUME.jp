import React from 'react'
import { useState, useEffect } from 'react';
const SideBarNavigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const svg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 108 112"
          className=" w-2 rotate-125"
          fill='white'
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M100.7 94.6c-2.4-2.1-7-3.9-4.4-7.8 18.8-27.1 10.9-70.4-22.4-81.6C67.5 2.9 60.7 1.8 54 1.8S40.4 3 34.1 5.2C.7 16.5-7.1 59.8 11.7 86.8c2.6 3.8-2 5.7-4.4 7.8-1.6 1.3-1.8 3.5-.5 5 2.8 3.2 5.7 6.4 8.6 9.5 1.4 1.7 3.6 1.2 5.1 0 7.1-4.7 14.1-9.4 21.2-14.1.8-.5 1.3-1.2 1.5-2.1.3-1.3 0-2.4-1.1-3.3-3.1-2.9-5.5-6.2-7.3-10.1-3.9-8.8-5-20.5-2-29.7 3.1-9.9 11.8-15.3 21.2-15.3s18.1 5.4 21.2 15.3c2.9 9.2 1.9 20.9-2 29.7-1.8 3.8-4.2 7.2-7.3 10.1-1 .9-1.4 2-1.1 3.3.2.9.7 1.6 1.5 2.1 7.1 4.7 14.1 9.4 21.2 14.1 1.5 1.2 3.7 1.6 5.1 0 2.9-3.2 5.7-6.3 8.6-9.5 1.4-1.5 1.1-3.7-.5-5"
            className="i1905613222__cls-1"
          ></path>
        </svg>
      );
      const svg2 =(
        <svg className='w-2.5 h-2.5' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
        <path d="M11 11H1V1h3V0H0v12h12V8h-1z"></path>
        <path d="M6 0v1h4.3L5.7 5.6l.7.7L11 1.7V6h1V0z"></path>
      </svg>
      )
   
        return (
 <div>
      <div className='hidden sm:block'>
     <div className='relative '>
      <img className='h-[98vh] object-cover' src="https://umamusume.jp/_nuxt/images/bg_blue-B32GXg9I.jpg" alt="" />
      <ul className="absolute left-8 top-34 space-y-3.5">
  {[
    { label: "News", icon: svg },
    { label: "About", icon: svg },
    { label: "Contents +", icon: svg },
    { label: "Character", icon: svg },
    { label: "Special", icon: svg },
    { label: "Goods", icon: svg },
    { 
        label: "WebStore", 
        icon: svg
      },
  ].map((item, index) => (
    <li
      key={index}
      className={`flex items-center text-xl w-35  gap-2 cursor-pointer font-bold italic text-white group `}
    >
      {item.icon && item.icon} {item.label}
      {item.label !== "WebStore" && item.label !== "Contents +" && (
            <span className="ml-auto flex opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 31.78 48.19"
              className="w-2.5 h-2.5 fill-[#94AEFF] "
            >
              <path d="m7.76 48.19-7.59-7.6 16.41-16.41L0 7.6 7.6 0l24.18 24.18z"></path>
            </svg>
            <svg           className="w-2.5 h-2.5 fill-[#fff] -ml-[4px]"
     data-v-7e1c1a78="" data-v-d56ccb73="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.78 48.19"  preserveAspectRatio="xMidYMid meet"><path d="m7.76 48.19-7.59-7.6 16.41-16.41L0 7.6 7.6 0l24.18 24.18z"></path></svg>
          </span>
        )
    }
     {item.label === "WebStore" && (
  <span className="ml-2 inline-block">
    {svg2}
  </span>
)}

    
    </li>
  ))}
</ul>
<p className='absolute left-4 text-[12px] text-white cursor-pointer bottom-42 rotate-90 space-y-5'>Official SNS</p>
<ul className="absolute left-8 bottom-6 space-y-2">
  {[
    { label: "https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/f0a9bf74eae84e1d82b9a2d5ae9e4195/icon_x.svg" },
    { label: "https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/41a0febba1b0427e8c3ab72fee56db21/icon_youtube.svg" },
    { label: "https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/8827e58ceba049a7ad5d2e089ea55abb/icon_tiktok.svg" },
    
  ].map((item, index) => (
    <li
      key={index}
      className={`flex items-center  gap-2 cursor-pointer font-bold italic bg-white p-1.5 rounded-full w-7 h-7` }
    >
       <img src={item.label} alt="" />
    </li>
  ))}
</ul>
    </div>
   </div>
   <div className='block sm:hidden'>
   <div
      className={`h-16 bg-[#0F5AFF] fixed w-full top-0 z-999 flex justify-between px-4 transition-all duration-300 ${
        isScrolled ? "items-center " : ""
      }`}
    >
      {/* Logo SVG */}
      <svg
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 510.24 110.71"
        className={`transition-all duration-300 ease-in-out ${
          isScrolled ? "w-35 h-35 translate-y-0" : "w-50 h-23 translate-y-2"
        }`}
        preserveAspectRatio="xMidYMid meet"
      >
        <path d="M48.14.37h-9.26V31.4c0 5.52-6.63 9.99-14.8 9.99s-14.8-4.47-14.8-9.99V.37H0V33.3c0 8.8 10.78 15.94 24.07 15.94S48.14 42.1 48.14 33.3zM288.54.37h-9.26V31.4c0 5.52-6.63 9.99-14.8 9.99s-14.8-4.47-14.8-9.99V.37h-9.27V33.3c0 8.8 10.78 15.94 24.07 15.94s24.07-7.14 24.07-15.94V.37ZM395.89.37h-9.26V31.4c0 5.52-6.63 9.99-14.8 9.99s-14.8-4.47-14.8-9.99V.37h-9.27V33.3c0 8.8 10.78 15.94 24.07 15.94S395.9 42.1 395.9 33.3V.37ZM337.06 23.96c-5.15-4.22-13.6-4.96-21.66-5.46-6.84-.41-10.26-1.9-10.26-4.44 0-1.75 1.07-3.17 3.2-4.27 5.52-2.73 14.38-1.85 20.21.9l7.65 3.48 3.92-7.5-4.28-2.05c-11.56-5.34-25.31-6.81-34.87-.25-7.01 4.46-8.45 15.52-1.89 20.57 4.34 3.56 12.51 4.24 19.75 4.44 8 .36 12 2.04 12 5.07 0 1.84-1.18 3.37-3.55 4.6-6.86 3.37-17.4 1.86-24.29-1.6l-4.72-2.36-3.6 8.01c7.2 3.67 15.01 6.3 23.14 6.15 6.99 0 12.71-1.5 17.15-4.49 7.82-4.78 9.1-15.27 2.11-20.79ZM97.75.42l-15.1 28.4L67.55.42H54.94v48.14h9.29V13.91l18.42 33.16 18.43-33.16v34.65h9.28V.42zM220.99.42l-15.1 28.4-15.1-28.4h-12.6v48.14h9.28V13.91l18.42 33.16 18.43-33.16v34.65h9.28V.42zM445.51.42l-15.1 28.4-15.1-28.4H402.7v48.14h9.28V13.91l18.43 33.16 18.42-33.16v34.65h9.28V.42zM147.52.43h-6.4l-25.6 48.13h10.5l6.34-11.9h23.93l6.34 11.9h10.5zm-11.47 29.28 8.27-15.56 8.27 15.56zM474.19 39.3V26.93l24.49.01v-6.96l-24.49.01V9.7h35.51V.42h-44.78v48.14l45.32.01v-9.28zM131.37 60.8c-15.34 0-27.78 11.17-27.78 24.96s12.44 24.96 27.78 24.96 27.78-11.17 27.78-24.96-12.44-24.96-27.78-24.96m0 40.87c-9.7 0-17.57-7.28-17.57-16.27s7.87-16.27 17.57-16.27 17.57 7.28 17.57 16.27-7.87 16.27-17.57 16.27M214.58 100.55V88.19h24.49v-6.96l-24.49.01V70.96h35.52v-9.29l-44.79.01v48.14h45.32v-9.28zM33.73 61.69H0v48.13h9.27V88.19h24.46c7.31-.01 13.24-5.94 13.24-13.26s-5.93-13.24-13.24-13.24m.3 19.55H9.27V70.96h24.46c2.85 0 5.16 2.31 5.16 5.16s-2.15 4.97-4.86 5.13ZM99.64 74.93c0-7.31-5.93-13.24-13.24-13.24H52.67v48.13h9.27V88.19H77.6l11.51 21.63h10.5L88.03 88.06c6.53-.81 11.59-6.37 11.59-13.13Zm-37.69 6.31V70.96h24.43c2.85 0 5.16 2.31 5.16 5.16s-2.15 4.97-4.86 5.13H61.95ZM357.67 61.69h-48.04v9.26h19.39l-.01 38.87h9.28V70.95h19.38zM283.79 101.45c-10.88 0-19.7-7.18-19.7-16.05s8.82-16.05 19.7-16.05c5.56 0 10.57 1.88 14.15 4.9l6.8-6.68c-5.54-3.99-12.87-6.44-20.95-6.44-17.2 0-31.15 11.02-31.15 24.62s13.95 24.62 31.15 24.62c8.08 0 15.42-2.45 20.95-6.44l-7.19-7.06c-3.55 2.83-8.41 4.58-13.77 4.58ZM198 61.62h-9.26v31.03c0 5.52-6.63 9.99-14.8 9.99-5.04 0-9.43-1.34-12.55-3.56l-3.8 7.14c4.29 2.64 10.03 4.26 16.35 4.26 13.29 0 24.07-7.14 24.07-15.94V61.61Z" />
      </svg>

      {/* Menu bên phải */}
      <div className="flex flex-col items-center justify-center">
        <svg
          fill="#fff"
          className="w-7 h-7"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 108 112"
          preserveAspectRatio="xMidYMid meet"
        >
          <path d="M100.7 94.6c-2.4-2.1-7-3.9-4.4-7.8 18.8-27.1 10.9-70.4-22.4-81.6C67.5 2.9 60.7 1.8 54 1.8S40.4 3 34.1 5.2C.7 16.5-7.1 59.8 11.7 86.8c2.6 3.8-2 5.7-4.4 7.8-1.6 1.3-1.8 3.5-.5 5 2.8 3.2 5.7 6.4 8.6 9.5 1.4 1.7 3.6 1.2 5.1 0 7.1-4.7 14.1-9.4 21.2-14.1.8-.5 1.3-1.2 1.5-2.1.3-1.3 0-2.4-1.1-3.3-3.1-2.9-5.5-6.2-7.3-10.1-3.9-8.8-5-20.5-2-29.7 3.1-9.9 11.8-15.3 21.2-15.3s18.1 5.4 21.2 15.3c2.9 9.2 1.9 20.9-2 29.7-1.8 3.8-4.2 7.2-7.3 10.1-1 .9-1.4 2-1.1 3.3.2.9.7 1.6 1.5 2.1 7.1 4.7 14.1 9.4 21.2 14.1 1.5 1.2 3.7 1.6 5.1 0 2.9-3.2 5.7-6.3 8.6-9.5 1.4-1.5 1.1-3.7-.5-5" />
        </svg>
        <p className="text-xs text-white italic">Menu</p>
      </div>
    </div>
   </div>
 </div>
  )
}

export default SideBarNavigation
