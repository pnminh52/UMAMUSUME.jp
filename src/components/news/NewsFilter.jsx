import React, { useState } from 'react'

const NewsFilter = ({ onFilter }) => {
  const [selectedTag, setSelectedTag] = useState("")

  const handleChange = (e) => {
    const value = e.target.value
    setSelectedTag(value)
    onFilter(value) 
    // truyền tag ra ngoài cho News.jsx xử lý
  }

  return (
    <div>
      <select 
        value={selectedTag}
        onChange={handleChange} 
        className='border rounded-xl border-gray-300 w-full h-12 px-2'
      >
        <option value="">All</option>
        <option value="News">News</option>
        <option value="Game">Game</option>
        <option value="Media">Media</option>
      </select>
    </div>
  )
}

export default NewsFilter
