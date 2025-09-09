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
        className='border bg-white rounded-lg border-gray-400 w-full h-12 px-2'
      >
        <option value="">全て</option>
        <option value="Game">GAME</option>
        <option value="Media">MEDIA</option>
      </select>
    </div>
  )
}

export default NewsFilter
