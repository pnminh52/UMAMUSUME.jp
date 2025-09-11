import React, { useState } from "react";
import { Link } from "react-router-dom";
const Mobile = () => {
  const listVideo = [
    {
      id: 1,
      url: "https://umamusume.jp/_nuxt/videos/video-R_HMkF3G.mp4",
      tag: "Game",
    },
    {
      id: 2,
      url: "https://umamusume.jp/_nuxt/videos/video-l3WFpvDF.mp4",
      tag: "Anime",
    },
    {
      id: 3,
      url: "https://umamusume.jp/_nuxt/videos/video-9qgWlAHJ.mp4",
      tag: "Music",
    },
    {
      id: 4,
      url: "https://umamusume.jp/_nuxt/videos/video-6bN4yDqW.mp4",
      tag: "Comics",
    },
    {
      id: 5,
      url: "https://umamusume.jp/_nuxt/videos/video-KTlMQ9h0.mp4",
      tag: "Event",
    },
  ];
  const listTab=[
    {
      id:1,
      name:"Game",
      title:"ゲーム",
      img:"https://umamusume.jp/_nuxt/images/btn_bg_game-Lfw-f-nS.png",
      path:"http://localhost:5173/contents/game"
    },
    {
      id:2,
      name:"Anime",
      title:"アニメ",
      img:"https://umamusume.jp/_nuxt/images/btn_bg_anime-WGHoijTZ.png",
      path:"http://localhost:5173/contents/anime"

    },
    {
      id:3,
      name:"Music",
      title:"ミュージック",
      img:"https://umamusume.jp/_nuxt/images/btn_bg_music-gM12-FcB.png",
      path:"http://localhost:5173/contents/music"
    },
    {
      id:4,
      name:"Comics",
      title:"コミックス",
      img:"https://umamusume.jp/_nuxt/images/btn_bg_comics-lPGsueMW.png",
      path:"http://localhost:5173/contents/comics"
    },
    {
      id:5,
      name:"Event",
      title:"イベント",
      img:"https://umamusume.jp/_nuxt/images/btn_bg_event-0S_h7Olv.png",
      path:"http://localhost:5173/contents/event"
    }
  ]

  const [currentVideo, setCurrentVideo] = useState(listVideo[0]);

  const handleHover = (tabName) => {
    const video = listVideo.find((v) => v.tag === tabName);
    if (video) setCurrentVideo(video);
  };

  return (
    <div className="flex flex-col gap-2">
    
    <div className="w-full px-2">
  <div className="h-full flex justify-center items-center">
    <video
      key={currentVideo.id}
      autoPlay
      loop
      muted
      className="w-full aspect-square rounded-xl object-cover"
    >
      <source src={currentVideo.url} type="video/mp4" />
    </video>
  </div>
</div>




      <div className="grid grid-cols-2 gap-2 px-2">
        {listTab.map((tab) => (
        <div
        onMouseEnter={() => handleHover(tab.name)}
        className="relative shadow-lg bg-white text-[#4D4D4D] hover:text-white  hover:bg-[#878CA0] rounded-lg hover:scale-95 transition duration-300 ease-in-out cursor-pointer"
      >
      <Link to={tab.path}>
      <img
          className="w-full h-full rounded-xl"
          key={tab.id}
          src={tab.img}
          alt=""
        />
        <div className="absolute  flex flex-col justify-center bottom-4 left-4">
          <span className="italic text-2xl ">{tab.name}</span>
          <span className="text-sm">{tab.title}</span>
        </div></Link>
       
      </div>
      
        ))}
      </div>

      
    </div>
  );
};

export default Mobile;
