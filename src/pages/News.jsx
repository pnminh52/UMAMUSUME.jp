// News.jsx
import React, { useState } from 'react'
import Contents from './../components/news/Contents';
import NewsFilter from './../components/news/NewsFilter';
import Title from './../components/news/Title';
import { useNews } from '../hooks/useNews';

const News = () => {
  const { news, loading, error } = useNews()
  const [filterTag, setFilterTag] = useState("")
  const [visibleCount, setVisibleCount] = useState(10)

  if (loading) return <p></p>
  if (error) return <p>{error}</p>

  const handleFilterChange = (tag) => {
    setFilterTag(tag)
    setVisibleCount(10) // reset lại số lượng hiển thị khi đổi filter
  }

  const filteredNews = filterTag 
    ? news.filter(item => item.tag === filterTag) 
    : news

  const visibleNews = filteredNews.slice(0, visibleCount)

  return (
    <div>
      <div className="bg-gray-100 px-4 space-y-8 py-8">
        <Title />
        <NewsFilter onFilter={handleFilterChange} />
        <Contents news={visibleNews} />

        {visibleCount < filteredNews.length && (
          <div className="w-full flex justify-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 10)}
              className="bg-[#73788C] border-3 border-gray-300 h-12 px-30 font-semibold italic text-xl text-white rounded-full"
            >
              More
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default News
