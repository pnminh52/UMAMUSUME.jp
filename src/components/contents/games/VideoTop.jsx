import React from "react";

const VideoTop = () => {
  const listLogo = [
    {
      id: 1,
      url: "https://umamusume.jp/_nuxt/images/logo_umamusume-n9Ls3QRE.png",
    },
    {
      id: 2,
      url: "https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/4abbec13d67c4638929e511fc195d580/badge_app.png",
    },
    {
      id: 3,
      url: "https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/10a41f2eaa8a4d15acba1cced15432c3/badge_google.png",
    },
    {
      id: 4,
      url: "https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/63e4944b851a4dfa906ff5a2fe010313/badge_dmm.png",
    },
    {
      id: 5,
      url: "https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/6a63049f85134af0acb04b0de5526aa7/badge_steam.png",
    },
    {
      id: 6,
      url: "https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/1e51127f02c44692842d4cd661ed3df2/badge_GooglePlayGamse.png",
    },
  ];
  return (
    <div className="w-full">
      <div className="relative hidden sm:block">
        <video autoPlay muted loop className="w-full h-auto">
          <source
            src="https://umamusume.jp/_nuxt/videos/video-R_HMkF3G.mp4#t=0.01"
            type="video/mp4"
          />
        </video>
        <div className="absolute bottom-4 right-4 flex gap-4">
          {listLogo.map((i) => (
            <div key={i.id} className="relative z-10">
              <img
                src={i.url}
                alt=""
                className="h-14 w-auto cursor-pointer hover:opacity-70 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="block sm:hidden">
      <div className="relative w-full">
  <video
    autoPlay
    muted
    loop
    className="w-full h-[30rem] object-cover"
  >
    <source
      src="https://umamusume.jp/_nuxt/videos/video-R_HMkF3G.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
  <img
    className="absolute bottom-4 right-4 h-14"
    src="https://umamusume.jp/_nuxt/images/logo_umamusume-n9Ls3QRE.png"
    alt=""
  />
</div>

       <div className="mt-8 space-y-1">
       <div className="flex items-center gap-2 justify-center">
          <img className="h-12"
            src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/4abbec13d67c4638929e511fc195d580/badge_app.png"
            alt=""
          />

          <img className="h-12"
            src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/10a41f2eaa8a4d15acba1cced15432c3/badge_google.png"
            alt=""
          />
        </div>
        <div className="flex items-center gap-2 justify-center">
          <img className="h-12"
            src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/63e4944b851a4dfa906ff5a2fe010313/badge_dmm.png"
            alt=""
          />

          <img className="h-12"
            src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/6a63049f85134af0acb04b0de5526aa7/badge_steam.png"
            alt=""
          />
        </div>
        <div className="flex items-center gap-2 justify-center">
<img className="h-12" src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/1e51127f02c44692842d4cd661ed3df2/badge_GooglePlayGamse.png" alt="" />
        </div>
       </div>
      </div>
    </div>
  );
};

export default VideoTop;
