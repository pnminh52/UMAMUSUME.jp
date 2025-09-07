import React from 'react'

const NewsFilter = () => {
  return (
    <div>
        <select className='border-3 rounded-xl border-gray-300 w-full h-12 px-2'>
            <option value="News">News</option>
            <option value="Game">Game</option>
            <option value="Media">Media</option>

        </select>
    </div>
  )
}

export default NewsFilter