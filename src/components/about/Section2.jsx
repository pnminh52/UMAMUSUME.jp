import React from "react";
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <div>
      <div className="hidden sm:block">
        <div className="flex items-center">
          <div className="w-1/2 h-[100vh] overflow-hidden relative">
            <div className="scroll-vertical absolute top-0 left-0 w-full">
              <img
                src="https://umamusume.jp/_nuxt/images/page3_img1-gWPtKPJy.jpg"
                alt="scrolling"
                className="w-full"
              />
              <img
                src="https://umamusume.jp/_nuxt/images/page3_img1-gWPtKPJy.jpg"
                alt="scrolling"
                className="w-full"
              />
              <img
                src="https://umamusume.jp/_nuxt/images/page3_img1-gWPtKPJy.jpg"
                alt="scrolling duplicate"
                className="w-full"
              />
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
      <div className="block sm:hidden relative">
        <div className="w-full h-40 bg-black absolute -left-20 -top-30 -rotate-20"></div>
        <div className="w-full pt-[25vh] flex flex-col gap-4 items-center justify-center">
          <svg
            className="w-60"
            data-v-7e1c1a78=""
            data-v-ef45875d=""
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 510.24 99.94"
            preserveAspectRatio="xMidYMid meet"
          >
            <path d="M48.14.37h-9.26V31.4c0 5.52-6.63 9.99-14.8 9.99s-14.8-4.47-14.8-9.99V.37H0V33.3c0 8.8 10.78 15.94 24.07 15.94S48.14 42.1 48.14 33.3zM288.54.37h-9.26V31.4c0 5.52-6.63 9.99-14.8 9.99s-14.8-4.47-14.8-9.99V.37h-9.27V33.3c0 8.8 10.78 15.94 24.07 15.94s24.07-7.14 24.07-15.94V.37ZM395.89.37h-9.26V31.4c0 5.52-6.63 9.99-14.8 9.99s-14.8-4.47-14.8-9.99V.37h-9.27V33.3c0 8.8 10.78 15.94 24.07 15.94S395.9 42.1 395.9 33.3V.37ZM337.06 23.96c-5.15-4.22-13.6-4.96-21.66-5.46-6.84-.41-10.26-1.9-10.26-4.44 0-1.75 1.07-3.17 3.2-4.27 5.52-2.73 14.38-1.85 20.21.9l7.65 3.48 3.92-7.5-4.28-2.05c-11.56-5.34-25.31-6.81-34.87-.25-7.01 4.46-8.45 15.52-1.89 20.57 4.34 3.56 12.51 4.24 19.75 4.44 8 .36 12 2.04 12 5.07 0 1.84-1.18 3.37-3.55 4.6-6.86 3.37-17.4 1.86-24.29-1.6l-4.72-2.36-3.6 8.01c7.2 3.67 15.01 6.3 23.14 6.15 6.99 0 12.71-1.5 17.15-4.49 7.82-4.78 9.1-15.27 2.11-20.79ZM97.75.42l-15.1 28.4L67.55.42H54.94v48.14h9.29V13.91l18.42 33.16 18.43-33.16v34.65h9.28V.42zM220.99.42l-15.1 28.4-15.1-28.4h-12.6v48.14h9.28V13.91l18.42 33.16 18.43-33.16v34.65h9.28V.42zM445.51.42l-15.1 28.4-15.1-28.4H402.7v48.14h9.28V13.91l18.43 33.16 18.42-33.16v34.65h9.28V.42zM147.52.43h-6.4l-25.6 48.13h10.5l6.34-11.9h23.93l6.34 11.9h10.5zm-11.47 29.28 8.27-15.56 8.27 15.56zM474.19 39.3V26.93l24.49.01v-6.96l-24.49.01V9.7h35.51V.42h-44.78v48.14l45.32.01v-9.28zM219.34 62.32c-11.56 0-20.94 8.42-20.94 18.81s9.37 18.81 20.94 18.81 20.94-8.42 20.94-18.81-9.37-18.81-20.94-18.81m0 30.81c-7.31 0-13.24-5.49-13.24-12.26s5.93-12.26 13.24-12.26 13.24 5.49 13.24 12.26-5.93 12.26-13.24 12.26M282.06 92.29v-9.32h18.46v-5.24h-18.46v-7.75h26.77v-7l-33.76.01v36.28l34.16.01v-7zM145.75 62.99h-25.42v36.28h6.99V82.96h18.44c5.51-.01 9.98-4.48 9.98-9.99s-4.47-9.98-9.98-9.98Zm.22 14.74h-18.66v-7.75h18.44c2.15 0 3.89 1.74 3.89 3.89s-1.62 3.75-3.66 3.86ZM195.42 72.97c0-5.51-4.47-9.98-9.98-9.98h-25.42v36.28h6.99V82.96h11.81l8.68 16.31h7.92l-8.73-16.4c4.92-.61 8.74-4.8 8.74-9.89Zm-28.41 4.76v-7.75h18.41c2.15 0 3.89 1.74 3.89 3.89s-1.62 3.75-3.66 3.86zM389.92 62.99h-36.21v6.99h14.61l-.01 29.29h7V69.98h14.61zM334.22 92.96c-8.2 0-14.85-5.42-14.85-12.1s6.65-12.1 14.85-12.1c4.19 0 7.97 1.42 10.67 3.69l5.13-5.04c-4.17-3.01-9.7-4.85-15.79-4.85-12.97 0-23.48 8.31-23.48 18.56s10.51 18.56 23.48 18.56c6.09 0 11.62-1.85 15.79-4.85l-5.42-5.32c-2.68 2.13-6.34 3.45-10.38 3.45M269.56 62.94h-6.98v23.39c0 4.16-4.99 7.53-11.16 7.53-3.8 0-7.11-1.01-9.46-2.68l-2.87 5.39c3.24 1.99 7.56 3.21 12.32 3.21 10.02 0 18.14-5.38 18.14-12.01V62.95Z"></path>
          </svg>
          <div className="relative flex items-center">
            <p className="text-sm text-white bg-black font-semibold px-4 py-1">
              <span className="text-lg">「 ウマ娘 プロジェクト 」</span> とは？
            </p>
          </div>
          <p className="px-10">かつて名勝負、伝説のレース、偉大な記録を生んだ競走馬の名前と魂を受け継いだ「ウマ娘」たちが織り成すクロスメディアコンテンツ！</p>
       <p className="text-sm underline italic"><Link to={"/contents"}>Contents Top </Link></p>
        </div>
        <div className="relative w-full h-[200px] overflow-hidden">
  <img
    className="relative z-21"
    src="https://umamusume.jp/_nuxt/images/image-xMmmnqUh.jpg"
    alt=""
  />
  <div className="w-full opacity-70 h-15 z-22 bg-[#CCCCCC] absolute -right-20 -bottom-0 -rotate-25"></div>
</div>
      </div>
    </div>
  );
};

export default Section2;
