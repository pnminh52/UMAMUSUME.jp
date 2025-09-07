import React from 'react'
import SideBarNavigationMobile from './../components/homepage/SideBarNavigationMobile';
import Contents from './../components/news/Contents';
import NewsFilter from './../components/news/NewsFilter';
import Title from './../components/news/Title';

const News = () => {
  return (
    <div className=''>
      <div className='block sm:hidden'>
      <SideBarNavigationMobile />
      </div>
     <div className='fixed top-30 px-4 space-y-8'>
        <Title />
        <NewsFilter />
     <Contents />
     </div>
    </div>
  )
}

export default News
