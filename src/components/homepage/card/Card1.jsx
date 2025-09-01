import React from "react";

const Card = ({ imgUrl, tag, date, title, showIcon  }) => (
  <div className="">
    <div className="relative bg-white hover:scale-97 cursor-pointer ease-in-out duration-300 transition p-2 shadow-lg rounded-lg">
    {/* Icon chỉ hiển thị ở 2 post đầu */}
    {showIcon && (
      <img
        src="https://umamusume.jp/_nuxt/images/icon_news-d6W4K9nE.png"
        alt="icon"
        className="absolute -top-3 -left-2 w-8 h-8 sm:w-11 sm:h-11 z-10"
      />
    )}

    {imgUrl && <img src={imgUrl} alt={title} className="w-full rounded-md" />}

    <div className="py-2 px-2 space-y-1">
      <div className="flex items-center justify-between w-full">
        <p
          className="px-5 h-5 rounded-full bg-[#B5D913] uppercase text-white flex justify-center items-center text-sm"
          style={{ letterSpacing: "0.2em" }}
        >
          {tag}
        </p>
        <p className="font-bold text-sm text-[#B5D913]">{date}</p>
      </div>
      <p className="text-xs sm:text-sm">{title}</p>
    </div>

    <div className="flex items-center gap-1 px-2 w-full justify-end">
      <p className="text-[#B5D913] text-xs sm:text-sm">詳細はコチラ</p>
      <div className="flex items-center">
        {[...Array(2)].map((_, i) => (
          <svg
            key={i}
            className={`${i === 0 ? "opacity-40" : "rotate-0 -ml-1"} w-[13px] h-[13px] sm:w-[15px] sm:h-[15px]`}
            fill="#B5D913"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 31.78 48.19"
            preserveAspectRatio="xMidYMid meet"
          >
            <path d="m7.76 48.19-7.59-7.6 16.41-16.41L0 7.6 7.6 0l24.18 24.18z" />
          </svg>
        ))}
      </div>
    </div>
  </div>
  </div>
);


const posts = [
  {
    id: 1,
    imgUrl: "https://prd-info-umamusume.akamaized.net/announce/2733/Thumbnail/announce_banner_3366.png?c=20250825121615",
    tag: "Game",
    date: "2025.09.01  12:00",
    title: "トゥインクルコレクション プリティーダービーガチャとSSR確定スタミナガチャ開催！",
  },
  {
    id: 2,
    imgUrl: "https://prd-info-umamusume.akamaized.net/announce/2739/Thumbnail/banner_60300023.png?c=20250825183926",
    tag: "Game",
    date: "2025.09.01  12:00",
    title: "一部育成ウマ娘に進化スキル追加！",
  },
  {
    id: 3,
    imgUrl: "https://prd-info-umamusume.akamaized.net/announce/2731/Thumbnail/announce_banner_3364.png?c=20250825121706",
    tag: "Game",
    date: "2025.08.29 12:00",
    title: "育成ウマ娘&サポートカード新登場！ピックアップガチャ開催！",
  },
  {
    id: 4,
    imgUrl: null,
    tag: "Event",
    date: "2025.08.28 18:00",
    title: "「トゥインクルコレクション プリティーダービー」開催！",
  },
  
];

const Card1 = () => {
  return (
    <div className="p-4 space-y-4">
      {posts.map((post, index) => (
        <Card key={post.id} {...post} showIcon={index < 2} />
      ))}
    </div>
  );
};



export default Card1;
