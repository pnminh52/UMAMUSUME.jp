import React from 'react';
import { useLocation } from 'react-router-dom';

const Title = () => {
  const location = useLocation();

  // Map route -> { text, color }
  const titleMap = {
    '/news': { text: 'News 新着情報', color: '#FF6CCE' },
    '/about': { text: 'About 私たちについて', color: '#0F5AFF' },
    '/contents/video': { text: 'Anime アニメ', color: '#FFA500' },
    '/contents/game': { text: 'Game ゲーム', color: '#00FF00' },
    '/contents/music': { text: 'Music 音楽', color: '#800080' },
    '/contents/comics': { text: 'Comics 漫画', color: '#FF4500' },
    '/contents/event': { text: 'Event イベント', color: '#1E90FF' },
    '/contents/topContents': { text: 'Contents トップ', color: '#44A9FF' },
    '/character': { text: 'Character キャラクター', color: '#FF1493' },
    '/special': { text: 'Special スペシャル', color: '#00CED1' },
    '/goods': { text: 'Goods グッズ', color: '#ADFF2F' },
  };

  // Nếu route không có trong map -> fallback
  const { text, color } = titleMap[location.pathname] || {
    text: 'Default タイトル',
    color: '#FF6CCE',
  };

  return (
    <div className='relative px-4 sm:px-10'>
      <div
        className='flex justify-center items-center w-55 h-10 transform -skew-x-15'
        style={{ backgroundColor: color }}
      >
        <p className='text-white text-2xl w-60 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          {text}
        </p>
      </div>
    </div>
  );
};

export default Title;
