import React from 'react';

const GameCards = ({ games }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {games.map((item) => (
        <div className="border border-[#A1A4BD] shadow-lg cursor-pointer transition duration-300 ease-in-out p-4 bg-white rounded-lg" key={item.id}>
          <img src={item.img} alt={item.title} className="w-full h-40 object-cover mb-2" />
         <div className='py-2'>
         <p className="font-semibold text-2xl flex  justify-center  ">{item.title}</p>
         <p className=" text-gray-600 flex justify-center">{item.des}</p>
         </div>
          <div className="flex items-center w-full">
  <div className="flex-grow h-[1.5px] bg-[#A1A4BD]"></div>
  <svg 
    className="w-3 h-3 mx-2" 
    fill="#A1A4BD" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 108 112" 
    preserveAspectRatio="xMidYMid meet"
  >
    <path d="M100.7 94.6c-2.4-2.1-7-3.9-4.4-7.8 18.8-27.1 10.9-70.4-22.4-81.6C67.5 2.9 60.7 1.8 54 1.8S40.4 3 34.1 5.2C.7 16.5-7.1 59.8 11.7 86.8c2.6 3.8-2 5.7-4.4 7.8-1.6 1.3-1.8 3.5-.5 5 2.8 3.2 5.7 6.4 8.6 9.5 1.4 1.7 3.6 1.2 5.1 0 7.1-4.7 14.1-9.4 21.2-14.1.8-.5 1.3-1.2 1.5-2.1.3-1.3 0-2.4-1.1-3.3-3.1-2.9-5.5-6.2-7.3-10.1-3.9-8.8-5-20.5-2-29.7 3.1-9.9 11.8-15.3 21.2-15.3s18.1 5.4 21.2 15.3c2.9 9.2 1.9 20.9-2 29.7-1.8 3.8-4.2 7.2-7.3 10.1-1 .9-1.4 2-1.1 3.3.2.9.7 1.6 1.5 2.1 7.1 4.7 14.1 9.4 21.2 14.1 1.5 1.2 3.7 1.6 5.1 0 2.9-3.2 5.7-6.3 8.6-9.5 1.4-1.5 1.1-3.7-.5-5"></path>
  </svg>
  <div className="flex-grow h-[1.5px] bg-[#A1A4BD]"></div>
</div>

        </div>
      ))}
    </div>
  );
};

export default GameCards;
