import React from "react";

const HoverCard = ({ title, color, image }) => {
  return (
    <div className="cursor-pointer group relative">
      {/* Title Label */}
      <div
        className={`absolute z-20 -top-9 -left-3 flex justify-center items-center h-12 transform -skew-x-15`}
        style={{ backgroundColor: color, width: "15rem" }}
      >
        <p className="text-white text-2xl w-65 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {title}
        </p>
      </div>

      {/* Card Wrapper */}
      <div
        className="w-full h-auto border-3 rounded-xl overflow-hidden relative"
        style={{ borderColor: color }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 z-10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block"
          style={{ backgroundColor: `${color}B3` }} // 70% opacity
        ></div>

        {/* Button */}
        <div className="absolute inset-0 z-20 flex justify-center items-center">
          <button
            className="text-white cursor-pointer italic bg-transparent
          transform group-hover:translate-x-0 translate-x-full opacity-0 group-hover:opacity-100 
          transition-all duration-500 text-2xl flex items-center hidden sm:flex"
          >
            View More
            <div className="flex items-center ml-2">
              <svg
                className="w-4 h-4 opacity-50"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 31.78 48.19"
                preserveAspectRatio="xMidYMid meet"
              >
                <path d="m7.76 48.19-7.59-7.6 16.41-16.41L0 7.6 7.6 0l24.18 24.18z"></path>
              </svg>
              <svg
                className="w-4 h-4 -ml-1"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 31.78 48.19"
                preserveAspectRatio="xMidYMid meet"
              >
                <path d="m7.76 48.19-7.59-7.6 16.41-16.41L0 7.6 7.6 0l24.18 24.18z"></path>
              </svg>
            </div>
          </button>
        </div>

        {/* Image */}
        <div className="transition-transform duration-300 ease-in-out transform group-hover:scale-110">
          <img
            className="rounded-lg transition-transform duration-300"
            src={image}
            alt={title}
          />
        </div>
      </div>
    </div>
  );
};

const Card8And9 = () => {
  return (
    <div className="relative">
      <div className="py-20 sm:py-15 gap-20 flex flex-col sm:flex-row items-center justify-center">
        <HoverCard
          title="Special スペシャル"
          color="#FF712F"
          image="https://umamusume.jp/_nuxt/images/img_special-al5A2Kph.jpg"
        />
        <HoverCard
          title="Goods グッズ"
          color="#FFC833"
          image="https://umamusume.jp/_nuxt/images/img_goods-lXA5DrVa.jpg"
        />
      </div>
    </div>
  );
};

export default Card8And9;
