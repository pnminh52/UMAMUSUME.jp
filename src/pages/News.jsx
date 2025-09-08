// News.jsx
import React, { useState } from 'react'
import SideBarNavigationMobile from './../components/homepage/SideBarNavigationMobile';
import Contents from './../components/news/Contents';
import NewsFilter from './../components/news/NewsFilter';
import Title from './../components/news/Title';
import { useNews } from '../hooks/useNews';

const News = () => {
  const { news, loading, error } = useNews()
  const [filterTag, setFilterTag] = useState("")

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  const filteredNews = filterTag 
    ? news.filter(item => item.tag === filterTag) 
    : news

  return (
    <div>
      <div className="block sm:hidden">
        <SideBarNavigationMobile />
      </div>
      <div className=" px-4 space-y-8 py-8">
        <Title />
        <NewsFilter onFilter={setFilterTag} />
        <Contents news={filteredNews} />
      </div>
  </div>
  )
}

export default News
