import React from 'react'
import Card1 from './../card/Card1';
import Card2And3 from './../card/Card2And3';
import Card4 from './../card/Card4';
import Card5 from '../card/Card5';
import Card6 from '../card/Card6';

const Table1 = () => {
  return (
    <div className='py-20'>
      {/* Hình bình hành */}
      <div className='hidden sm:block'>
      <div className='px-30 flex gap-20 items-center justify-center'>
    
      <div className='w-[50%] h-auto space-y-4 relative border-3 p-6 bg-[#FFEFF7] rounded-xl border-[#FF79D0] '>
      <div className='absolute -top-9 -left-3 flex justify-center items-center w-55 h-12 bg-[#FF79D0] transform -skew-x-15 '>
       
      
        <p className=' text-white text-2xl w-60 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          News 新着情報
        </p>
       
      </div>
       <div className='h-[80vh] overflow-y-auto pr-4 space-y-4'>
       <Card1 />
       <Card2And3 />
       <Card4 />
       
       </div>
       <div className='w-full flex justify-center '>
        <button className='bg-[#FF79D0] shadow-lg hover:scale-95 transition duration-300 ease-in-out text-lg italic border-2 border-pink-400  text-white font-semibold w-70 h-12 rounded-full cursor-pointer '>View more</button>
       </div>
      
      </div>
      <div className='w-[50%] flex flex-col gap-25'>
 

   <Card5 />
     <Card6 />
     
    
</div>

      </div>
      </div>
     <div className='block sm:hidden'>
         <div className='px-6 w-full  items-center justify-center'>
          
            <div className='w-full h-auto space-y-4 relative border-3 px-4 py-6 bg-[#FFEFF7] rounded-xl border-[#FF79D0] '>
            <div className='absolute -top-9 -left-3 flex justify-center items-center w-55 h-12 bg-[#FF79D0] transform -skew-x-15 '>
             
            
              <p className=' text-white text-2xl w-60 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                News 新着情報
              </p>
             
            </div>
            <div className="h-[80vh] overflow-y-auto hide-scrollbar  space-y-4 ">
  <Card1 />
  <Card2And3 />
  <Card4 />
</div>

             <div className='w-full flex justify-center '>
              <button className='bg-[#FF79D0] shadow-lg hover:scale-95 transition duration-300 ease-in-out text-lg italic border-2 border-pink-400  text-white font-semibold w-70 h-12 rounded-full cursor-pointer '>View more</button>
             </div>
            
            </div>
            <div className='w-full  py-20 gap-20'>
       
      
         <Card5 />
         </div>
           <Card6 />
           
          
    
      
            </div>
     </div>
      
    </div>
  )
}

export default Table1
