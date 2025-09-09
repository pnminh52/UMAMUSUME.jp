import React from "react";
import { useState, useEffect } from "react";
import SideBarNavigationMobile from './SideBarNavigationMobile';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const SideBarNavigation = () => {
  const navigate=useNavigate()
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
      fill="white"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M100.7 94.6c-2.4-2.1-7-3.9-4.4-7.8 18.8-27.1 10.9-70.4-22.4-81.6C67.5 2.9 60.7 1.8 54 1.8S40.4 3 34.1 5.2C.7 16.5-7.1 59.8 11.7 86.8c2.6 3.8-2 5.7-4.4 7.8-1.6 1.3-1.8 3.5-.5 5 2.8 3.2 5.7 6.4 8.6 9.5 1.4 1.7 3.6 1.2 5.1 0 7.1-4.7 14.1-9.4 21.2-14.1.8-.5 1.3-1.2 1.5-2.1.3-1.3 0-2.4-1.1-3.3-3.1-2.9-5.5-6.2-7.3-10.1-3.9-8.8-5-20.5-2-29.7 3.1-9.9 11.8-15.3 21.2-15.3s18.1 5.4 21.2 15.3c2.9 9.2 1.9 20.9-2 29.7-1.8 3.8-4.2 7.2-7.3 10.1-1 .9-1.4 2-1.1 3.3.2.9.7 1.6 1.5 2.1 7.1 4.7 14.1 9.4 21.2 14.1 1.5 1.2 3.7 1.6 5.1 0 2.9-3.2 5.7-6.3 8.6-9.5 1.4-1.5 1.1-3.7-.5-5"
        className="i1905613222__cls-1"
      ></path>
    </svg>
  );
  const svg2 = (
    <svg
      className="w-2.5 h-2.5"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
    >
      <path d="M11 11H1V1h3V0H0v12h12V8h-1z"></path>
      <path d="M6 0v1h4.3L5.7 5.6l.7.7L11 1.7V6h1V0z"></path>
    </svg>
  );

  return (
    <div>
      <div className="hidden sm:block">
        <div className="relative ">
          <img
            className="h-[98vh] object-cover"
            src="https://umamusume.jp/_nuxt/images/bg_blue-B32GXg9I.jpg"
            alt=""
          />
          <ul className="absolute left-8 top-34 space-y-3.5">
           
              <li onClick={()=>navigate("/news")} className={`flex items-center text-xl w-35  gap-2 cursor-pointer font-bold italic text-white group `}>{svg} News </li>
              <li onClick={()=>navigate("/")} className={`flex items-center text-xl w-35  gap-2 cursor-pointer font-bold italic text-white group `}>{svg} About</li>
              <li onClick={()=>navigate("/")} className={`flex items-center text-xl w-35  gap-2 cursor-pointer font-bold italic text-white group `}>{svg} Contents +</li>
              <li onClick={()=>navigate("/")} className={`flex items-center text-xl w-35  gap-2 cursor-pointer font-bold italic text-white group `}>{svg} Character</li>
              <li onClick={()=>navigate("/")} className={`flex items-center text-xl w-35  gap-2 cursor-pointer font-bold italic text-white group `}>{svg} Special</li>
              <li onClick={()=>navigate("/")} className={`flex items-center text-xl w-35  gap-2 cursor-pointer font-bold italic text-white group `}>{svg} Goods</li>
              <li onClick={()=>navigate("/")} className={`flex items-center text-xl w-35  gap-2 cursor-pointer font-bold italic text-white group `}>{svg} Webstore {svg2}</li>

          
          </ul>
          <p className="absolute left-4 text-[12px] text-white cursor-pointer bottom-40 rotate-90 space-y-5">
            Official SNS
          </p>
          <ul className="absolute left-8 bottom-6 space-y-2">
            {[
              {
                label:
                  "https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/f0a9bf74eae84e1d82b9a2d5ae9e4195/icon_x.svg",
              },
              {
                label:
                  "https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/41a0febba1b0427e8c3ab72fee56db21/icon_youtube.svg",
              },
              {
                label:
                  "https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/8827e58ceba049a7ad5d2e089ea55abb/icon_tiktok.svg",
              },
            ].map((item, index) => (
              <li
                key={index}
                className={`flex items-center  gap-2 cursor-pointer font-bold italic bg-white p-1.5 rounded-full w-7 h-7`}
              >
                <img src={item.label} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </div>
     {/* <SideBarNavigationMobile  isScrolled={isScrolled}/> */}
    </div>
  );
};

export default SideBarNavigation;
