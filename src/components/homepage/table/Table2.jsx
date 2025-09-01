import React from 'react'
import Card7 from './../card/Card7';
import Card8And9 from './../card/Card8And9';

const Table2 = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='px-6 sm:px-30 relative'>
      <div className=''>
        <Card7 />
        <Card8And9 />
      </div>
      <button 
        onClick={scrollToTop}
        className='hidden cursor-pointer sm:block absolute right-4 bottom-4'
      >
        <img 
          className='w-13 cursor-pointer' 
          src="https://umamusume.jp/_nuxt/images/pagetop-7vzjlXEg.png" 
          alt="Scroll to top" 
        />
      </button>
    </div>
  )
}

export default Table2;
