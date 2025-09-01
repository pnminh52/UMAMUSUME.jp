


import React from 'react';

const Card6 = () => {
  return (
    <div className='cursor-pointer group relative '>
          <div className='absolute -top-7 z-100 -left-3 flex justify-center items-center w-65 h-10 bg-[#4CAEFF] transform -skew-x-15'>
          <p className='text-white text-2xl w-65 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          Contents コンテンツ
          </p>
        </div>
       <div className='w-full h-auto border-3 border-[#4CAEFF] rounded-xl  overflow-hidden'>
       <div className="absolute inset-0 bg-[#4CAEFF]/70 z-10 rounded-xl opacity-0 group-hover:opacity-100 group-hover:rounded-xl transition-opacity duration-300 hidden sm:block"></div>
       <div className="absolute inset-0 z-11 flex justify-center items-center">
    <button className="text-white cursor-pointer italic  bg-transparent
      transform group-hover:translate-x-0 translate-x-full opacity-0 group-hover:opacity-100 
      transition-all duration-500 text-2xl flex items-center hidden sm:flex">
      View More
      <div className="flex items-center ml-2">
        <svg className="w-4 h-4 opacity-50" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.78 48.19" preserveAspectRatio="xMidYMid meet">
          <path d="m7.76 48.19-7.59-7.6 16.41-16.41L0 7.6 7.6 0l24.18 24.18z"></path>
        </svg>
        <svg className="w-4 h-4 -ml-1" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.78 48.19" preserveAspectRatio="xMidYMid meet">
          <path d="m7.76 48.19-7.59-7.6 16.41-16.41L0 7.6 7.6 0l24.18 24.18z"></path>
        </svg>
      </div>
    </button>
  </div>
      

        <div className='transition-transform duration-300 ease-in-out transform group-hover:scale-110'>
          <img 
            className='rounded-lg transition-transform duration-300' 
            src="https://umamusume.jp/_nuxt/images/img_contents-XnXMJqLw.jpg"            alt="" 
          />

        </div>
      </div>
    </div>
  );
}

export default Card6;

