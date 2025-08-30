import React from "react";

const InstallTable = () => {
  return (
    <div className="bg-[#075EFF]">
      <div className="py-10">
      <div className="gap-4 flex flex-col sm:flex-row justify-center items-center text-white">
  <img
    className="w-30 h-full object-cover cursor-pointer"
    src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/318c72b906084535ac844584fbd00bf9/app_icon.png"
    alt=""
  />
  <p className="text-xl font-semibold">ダウンロードはこちら</p>
</div>

        <div className="hidden sm:block">
        <div className="flex gap-4 items-center justify-center py-8">
          <div className="relative cursor-pointer inline-block group">
            <img
              className="w-auto h-15 object-cover"
              src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/4abbec13d67c4638929e511fc195d580/badge_app.png"
              alt=""
            />
            <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-md"></div>
          </div>
          <div className="relative cursor-pointer inline-block group">
            <img
              className="w-auto h-15 object-cover"
              src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/63e4944b851a4dfa906ff5a2fe010313/badge_dmm.png"
              alt=""
            />

            <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-md"></div>
          </div>
          <div className="relative cursor-pointer inline-block group">
            <img
              className="w-auto h-15 object-cover"
              src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/10a41f2eaa8a4d15acba1cced15432c3/badge_google.png"
              alt=""
            />

            <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-md"></div>
          </div>
          <div className="relative cursor-pointer inline-block group">
            <img
              className="w-auto h-15 object-cover"
              src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/6a63049f85134af0acb04b0de5526aa7/badge_steam.png"
              alt=""
            />

            <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-md"></div>
          </div>
          <div className="relative cursor-pointer inline-block group">
            <img
              className="w-auto h-15 object-cover"
              src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/1e51127f02c44692842d4cd661ed3df2/badge_GooglePlayGamse.png"
              alt=""
            />

            <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-md"></div>
          </div>
        </div>
        </div>
        <div className="block sm:hidden">
           <div className="py-8 space-y-2">
           <div className="flex justify-center mx-auto gap-2">
            <img
              className="w-auto h-13 object-cover"
              src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/4abbec13d67c4638929e511fc195d580/badge_app.png"
              alt=""
            />
<img
              className="w-auto h-13 object-cover"
              src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/63e4944b851a4dfa906ff5a2fe010313/badge_dmm.png"
              alt=""
            />
            </div>
            <div className="flex justify-center mx-auto gap-2">
            <img
              className="w-auto h-13 object-cover"
              src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/10a41f2eaa8a4d15acba1cced15432c3/badge_google.png"
              alt=""
            />
             <img
              className="w-auto h-13 object-cover"
              src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/6a63049f85134af0acb04b0de5526aa7/badge_steam.png"
              alt=""
            />
            </div>
            <div className="flex justify-center mx-auto gap-2">
            <img
              className="w-auto h-13 object-cover"
              src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/1e51127f02c44692842d4cd661ed3df2/badge_GooglePlayGamse.png"
              alt=""
            />
            </div>
           </div>
        </div>
        <p className="sm:text-[10px] text-sm px-6 text-white flex justify-center mx-auto">
          ※AppleとAppleのロゴは、米国およびその他の国で登録されたApple
          Inc.の商標です。※Google Play および Google Play ロゴは、Google LLC
          の商標です。 ※©2025 Valve Corporation.
          Steam及びSteamロゴは、米国及びまたはその他の国のValve
          Corporationの商標及びまたは登録商標です。{" "}
        </p>
      </div>
    </div>
  );
};

export default InstallTable;
