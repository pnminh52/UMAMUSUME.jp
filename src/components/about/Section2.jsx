import React from 'react'


const Section2 = () => {
  return (
    <div >
        <div className='hidden sm:block'>
        <div className="flex items-center">
      <div className="w-1/2 h-[100vh] overflow-hidden relative">
        <div className="scroll-vertical absolute top-0 left-0 w-full">
          <img 
            src="https://umamusume.jp/_nuxt/images/page3_img1-gWPtKPJy.jpg" 
            alt="scrolling"
            className="w-full"
          />
           <img 
            src="https://umamusume.jp/_nuxt/images/page3_img1-gWPtKPJy.jpg" 
            alt="scrolling"
            className="w-full"
          />
          <img 
            src="https://umamusume.jp/_nuxt/images/page3_img1-gWPtKPJy.jpg" 
            alt="scrolling duplicate"
            className="w-full"
          />
        </div>
      </div>
      <div className="w-1/2"></div>
    </div>
        </div>
    </div>
  )
}

export default Section2
