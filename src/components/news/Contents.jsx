import React from 'react'
import SideBarNavigation from './../homepage/SideBarNavigation';

const Contents = ({news}) => {
   
    
    return (
      <div>
        <div className='block sm:hidden'>
            <SideBarNavigation />
        </div>
        <div className='space-y-4'>
        { news.map(item => (
          
          <div className=" relative bg-white hover:scale-97 cursor-pointer ease-in-out duration-300 transition p-2 shadow-lg rounded-lg">
       
   
     
         {item.imgUrl && <img src={item.imgUrl} alt={item.title} className="w-full rounded-md" />}
     
         <div className="py-2 px-2 space-y-1">
           <div className="flex items-center justify-between w-full">
             <p
               className="px-5 h-5 rounded-full bg-[#B5D913] uppercase text-white flex justify-center items-center text-sm"
               style={{ letterSpacing: "0.2em" }}
             >
             GAME
             </p>
             <p className="font-bold text-sm text-[#B5D913]">{item.date}</p>
           </div>
           <p className="text-xs sm:text-sm">{item.title}</p>
         </div>
     
         <div className="flex items-center gap-1 px-2 w-full justify-end">
           <p className="text-[#B5D913] text-xs sm:text-sm">詳細はコチラ</p>
           <div className="flex items-center">
             {[...Array(2)].map((_, i) => (
               <svg
                 key={i}
                 className={`${i === 0 ? "opacity-40" : "rotate-0 -ml-1"} w-[13px] h-[13px] sm:w-[15px] sm:h-[15px]`}
                 fill="#B5D913"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 31.78 48.19"
                 preserveAspectRatio="xMidYMid meet"
               >
                 <path d="m7.76 48.19-7.59-7.6 16.41-16.41L0 7.6 7.6 0l24.18 24.18z" />
               </svg>
             ))}
           </div>
         </div>
       </div>
        
       ))}
        </div>
         
       
       
      </div>
    )
    
  
}

export default Contents
