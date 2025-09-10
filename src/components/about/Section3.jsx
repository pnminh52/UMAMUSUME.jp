import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Section3 = () => {
  const images = [
    {
      id: 1,
      img: "https://umamusume.jp/_nuxt/images/page4_chara3-WFJ50X_A.png"
    }, {
      id: 2,
      img: "https://umamusume.jp/_nuxt/images/page4_chara1-RulVfH6j.png"
    },
    {
      id: 3,
      img: "https://umamusume.jp/_nuxt/images/page4_chara4-AmZQQkMP.png"
    }, {
      id: 4,
      img: "https://umamusume.jp/_nuxt/images/page4_chara2-Ah09_owb.png"
    }
  ]
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div>
      <div className='hidden sm:block'>
        <div className='bg-[#FF6ECB] h-screen relative '>
        <div className="absolute  rotate-180 top-0 left-0 w-0 h-0  
                          border-l-[600px] border-l-transparent 
                          border-b-[200px] border-b-[#FFEE48]">

          </div> <div className="absolute   bottom-0 right-0 w-0 h-0 
                          border-l-[600px] border-l-transparent 
                          border-b-[200px] border-b-[#FFEE48]">

          </div>
           <div className="absolute top-1/2 -translate-y-1/2  right-20 space-y-4">
                      <div className="flex items-center">
                        <div className="relative inline-block z-40">
                          <p className="text-xl text-[#FF6ECB] font-semibold bg-white px-4 py-1">
                            <span className="text-2xl">「ウマ娘」</span>とは？
                          </p>
                        </div>
                      </div>
          
                      <p className="text-lg w-90 text-white">
                        別世界の名前と魂を受け継いで、“尻尾と耳”そして“超人的な走力”を持つ。教育機関である「トレセン学園」に集い、“自身の夢”と“レース”に向けて仲間たちと日々切磋琢磨している。
                      </p>
          
                      <p className="text-lg text-white underline italic">
                        <Link to={"/character"}>Character </Link>
                      </p>
                    </div>
          <div className="w-100 h-6 bg-gray-200 transform -rotate-20 opacity-55 right-60 top-40 absolute  skew-x-38"></div>
          <div className="w-90 h-6 bg-gray-200 transform -rotate-20 opacity-55 bottom-40 right-140 absolute skew-x-38"></div>
          <div className="w-90 h-6 bg-gray-200 transform -rotate-20 opacity-55 bottom-80 left-0 absolute skew-x-38"></div>
          <p className='text-[180px] absolute bottom-80 font-bold -left-4 text-white italic'>UMA</p>
          <p className='text-[180px] z-20 absolute bottom-0 font-bold -right-0 text-white italic'>MUSUME</p>

          <div className="relative overflow-hidden w-full h-[900px] ">
            {images.map((item, index) => (
             <img
             key={item.id}
             src={item.img}
             alt=""
             className={`absolute top-0 -left-30 h-[1000px] object-contain z-30 transition-opacity duration-[2000ms] ease-in-out ${
               index === currentIndex ? "opacity-100" : "opacity-0"
             }`}
           />
           
           
            ))}
          </div>


        </div>
      </div>
      <div className='block sm:hidden'>
        <div className=' z-23  relative bg-[#FF6ECB]'>
          <div className="w-50 h-6 bg-gray-200 transform -rotate-30 opacity-55 right-0 top-40 absolute skew-x-38"></div>
          <div className="w-50 h-6 bg-gray-200 transform -rotate-30 opacity-55 bottom-0 right-0 absolute skew-x-38"></div>

          <div className="absolute  rotate-180 top-0 left-0 w-0 h-0 
                          border-l-[200px] border-l-transparent 
                          border-b-[100px] border-b-[#FFEE48]">

          </div>
          <div className="absolute top-12 left-8 space-y-4">
            <div className="flex items-center">
              <div className="relative inline-block">
                <p className="text-sm text-[#FF6ECB] font-semibold bg-white px-4 py-1">
                  <span className="text-lg">「ウマ娘」</span>とは？
                </p>
              </div>
            </div>

            <p className="text-sm w-3/4 text-white">
              別世界の名前と魂を受け継いで、“尻尾と耳”そして“超人的な走力”を持つ。教育機関である「トレセン学園」に集い、“自身の夢”と“レース”に向けて仲間たちと日々切磋琢磨している。
            </p>

            <p className="text-sm text-white underline italic">
              <Link to={"/character"}>Character </Link>
            </p>
          </div>

          <div className='h-40'></div>

          <div className="w-50 h-6 bg-gray-200 transform -rotate-30 opacity-55 -left-30 bottom-40 absolute skew-x-38"></div>



          <p className='text-[80px] absolute bottom-80 font-bold -left-4 text-white italic'>UMA</p>
          <p className='text-[80px] z-20 absolute bottom-0 font-bold -right-0 text-white italic'>MUSUME</p>
          <div className="relative overflow-hidden w-full h-[610px] ">
            {images.map((item, index) => (
              <img
                key={item.id}
                src={item.img}
                alt=""
                className={`absolute top-20 inset-0 w-full h-[590px] object-cover scale-[1] z-30 transition-opacity duration-[2000ms] ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
              />
            ))}
          </div>


        </div>
      </div>
    </div>
  )
}

export default Section3
