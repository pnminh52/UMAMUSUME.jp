import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";

const Slider = () => {
  const swiperRef = useRef(null);

  const slides = [
    { id: 1, imageUrl: "https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/76f4af89766a4b7aa30c8af70113b6cd/slider_cinderella-gray_comics-20_s_B.jpg?fm=webp" },
    { id: 2, imageUrl: "https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/fc94332bd87648fa8eaa9cb66f466bbd/slider_star-blossom_comics-4.jpg?fm=webp" },
    { id: 3, imageUrl: "https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/6eee3403642547db88b0d2dc21cd8efa/slider_golshi-chan_comics-5.jpg?fm=webp" },
    { id: 4, imageUrl: "https://img.youtube.com/vi/sGrNw69DPwc/maxresdefault.jpg" },
    { id: 5, imageUrl: "https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/cef0da24b80640669199e21c3a402e29/slider_tnf-autumn.jpg?fm=webp" },
  ];

  return (
    <div className="w-full relative flex items-center gap-2 sm:px-8 px-0 ">
         <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-white w-9 h-9 hidden sm:block  hover:scale-80 cursor-pointer transition"
        >
         <svg className="w-9 h-9 rotate-180" fill="#4D4D4D" data-v-7e1c1a78="" data-v-5f5eb4fe="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.78 48.19"  preserveAspectRatio="xMidYMid meet"><path d="m7.76 48.19-7.59-7.6 16.41-16.41L0 7.6 7.6 0l24.18 24.18z"></path></svg>
        </button>
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={10}
        breakpoints={{
          0: { slidesPerView: 1.5 },
          768: { slidesPerView: 4 },
        }}
      >
        {slides.map((slide) => (
      <SwiperSlide key={slide.id} className="cursor-pointer relative group overflow-hidden">
      <div className="w-full h-full transition-transform duration-300 ease-in-out transform group-hover:scale-110">
        <img
          src={slide.imageUrl}
          alt={`Slide ${slide.id}`}
          className="w-full h-full object-cover mt-3 sm:mt-0"
        />
      </div>
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block"></div>
  <div className="absolute inset-0 flex justify-center items-center">
    <button className="text-white cursor-pointer italic  bg-transparent
      transform group-hover:translate-x-0 translate-x-full opacity-0 group-hover:opacity-100 
      transition-all duration-500 text-xl flex items-center hidden sm:flex">
      View More
      <div className="flex items-center ml-2">
        <svg className="w-4 h-4 opacity-50" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.78 48.19" preserveAspectRatio="xMidYMid meet">
          <path d="m7.76 48.19-7.59-7.6 16.41-16.41L0 7.6 7.6 0l24.18 24.18z"></path>
        </svg>
        <svg className="w-4 h-4 -ml-1.5" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.78 48.19" preserveAspectRatio="xMidYMid meet">
          <path d="m7.76 48.19-7.59-7.6 16.41-16.41L0 7.6 7.6 0l24.18 24.18z"></path>
        </svg>
      </div>
    </button>
  </div>
  

    </SwiperSlide>
    
     
      
       
        ))}
      </Swiper>

      {/* Custom Navigation */}
       
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-white hidden sm:block w-9 h-9  hover:scale-80 cursor-pointer transition"
        >
         <svg className="w-9 h-9 " fill="#4D4D4D" data-v-7e1c1a78="" data-v-5f5eb4fe="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.78 48.19"  preserveAspectRatio="xMidYMid meet"><path d="m7.76 48.19-7.59-7.6 16.41-16.41L0 7.6 7.6 0l24.18 24.18z"></path></svg>
         </button>
    </div>
  );
};

export default Slider;
