import React, { useState } from 'react'

const NewsFilter = ({ onFilter }) => {
  const [selectedTag, setSelectedTag] = useState("")
  const tags = [
    { value: "", label: "全て" },
    { value: "Game", label: "GAME" },
    { value: "Media", label: "MEDIA" }
  ]

  const handleFilter = (value) => {
    setSelectedTag(value)
    onFilter(value)
  }

  return (
    <div>
      {/* Mobile: dropdown */}
      <div className='block sm:hidden'>
        <select 
          value={selectedTag}
          onChange={(e) => handleFilter(e.target.value)} 
          className='border bg-white rounded-lg border-gray-400 w-full h-12 px-2'
        >
          {tags.map(tag => (
            <option key={tag.value} value={tag.value}>{tag.label}</option>
          ))}
        </select>
      </div>

      {/* Laptop: buttons */}
      <div className='hidden sm:flex gap-4'>
        {tags.map(tag => (
          <button
            key={tag.value}
            onClick={() => handleFilter(tag.value)}
            className={`w-70 cursor-pointer shadow-lg py-1 rounded-full font-semibold border transition ${
              selectedTag === tag.value 
                ? "bg-[#FF6CCE] text-white border-pink-400 border-3 " 
                : "bg-white text-gray-600 border-gray-400 hover:bg-gray-100"
            }`}
          >
            {tag.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default NewsFilter
