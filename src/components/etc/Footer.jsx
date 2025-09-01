import React from "react";

const Footer = () => {
  return (
    <div className="py-10">
        <div className="block sm:hidden">
        <div className="flex flex-wrap mx-auto justify-center  items-center gap-4 w-full sm:w-auto">
  <img
    className="h-12 w-auto object-cover shadow-sm cursor-pointer"
    src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/283dbe3bd10c4ef1af6ec464ed474bd5/banner_1.png"
    alt=""
  />
  <img
    className="h-12 w-auto object-cover shadow-sm cursor-pointer"
    src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/0c3995d0152e428fb00122e0f7f1321e/footer_cystore.png"
    alt=""
  />
  <img
    className="h-12 w-auto object-cover shadow-sm cursor-pointer"
    src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/3ba51e5dc1e9465a8c8f6f07bec9527f/banner_3.png"
    alt=""
  />
</div>

        </div>
    <div className="hidden sm:block">
<div className="flex justify-between items-center w-full px-8 flex-wrap gap-6">
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <p>Official SNS</p>
        <div className="flex items-center gap-4">
          <img className="h-8 w-auto object-cover"
            src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/f0a9bf74eae84e1d82b9a2d5ae9e4195/icon_x.svg"
            alt=""
          />
          <img className="h-8 w-auto object-cover" src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/41a0febba1b0427e8c3ab72fee56db21/icon_youtube.svg" alt="" />
          <img className="h-8 w-auto object-cover" src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/8827e58ceba049a7ad5d2e089ea55abb/icon_tiktok.svg" alt="" />
        </div>
      </div>
  
     <div className="hidden sm:block">
         <div className="flex items-center gap-4 w-full sm:w-auto">
                <img
                  className="h-15 w-auto object-cover shadow-xl cursor-pointer"
                  src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/283dbe3bd10c4ef1af6ec464ed474bd5/banner_1.png"
                  alt=""
                />
                <img
                  className="h-15 w-auto object-cover shadow-xl cursor-pointer"
                  src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/0c3995d0152e428fb00122e0f7f1321e/footer_cystore.png"
                  alt=""
                />
                <img
                  className="h-15 w-auto object-cover shadow-xl cursor-pointer"
                  src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/3ba51e5dc1e9465a8c8f6f07bec9527f/banner_3.png"
                  alt=""
                />
              </div>
     </div>
    </div>
    </div>
    <div className="block sm:hidden">
<div className="pt-5 space-y-4 ">

        <p className="flex justify-center mx-auto  ">Official SNS</p>
        <div className="flex justify-center mx-auto  items-center gap-4">
          <img className="h-8 w-auto object-cover"
            src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/f0a9bf74eae84e1d82b9a2d5ae9e4195/icon_x.svg"
            alt=""
          />
          <img className="h-8 w-auto object-cover" src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/41a0febba1b0427e8c3ab72fee56db21/icon_youtube.svg" alt="" />
          <img className="h-8 w-auto object-cover" src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/8827e58ceba049a7ad5d2e089ea55abb/icon_tiktok.svg" alt="" />
        </div>
    
  
     <div className="hidden sm:block">
         <div className="flex items-center gap-4 w-full sm:w-auto">
                <img
                  className="h-20 w-auto object-cover shadow-xl cursor-pointer"
                  src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/283dbe3bd10c4ef1af6ec464ed474bd5/banner_1.png"
                  alt=""
                />
                <img
                  className="h-20 w-auto object-cover shadow-xl cursor-pointer"
                  src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/0c3995d0152e428fb00122e0f7f1321e/footer_cystore.png"
                  alt=""
                />
                <img
                  className="h-20 w-auto object-cover shadow-xl cursor-pointer"
                  src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/3ba51e5dc1e9465a8c8f6f07bec9527f/banner_3.png"
                  alt=""
                />
              </div>
     </div>
</div>
    </div>
   <div className="py-8 hidden sm:block space-y-2">
   <div className="flex  flex-wrap justify-center mx-auto items-center gap-2 text-black text-xs">
  {[
    "推奨端末一覧",
    "このサイトについて",
    "プライバシーポリシー",
    "Cookie 設定",
    "利用規約・権利表記",
   
  ].map((item, index) => (
    <React.Fragment key={index}>
      <a
        href="#"
        className="hover:underline transition-colors duration-200"
      >
        {item}
      </a>
      {index !== 9 && <span className="mx-1">|</span>} 
    </React.Fragment>
  ))}
</div>
 <div className="flex flex-wrap justify-center mx-auto items-center gap-2 text-black text-xs">
  {[
   
    "ユーザーサポート",
    "二次創作ガイドライン",
    "牧場見学のルールとマナーに関するお知らせ",
    "情報の外部送信について",
    "English"
  ].map((item, index) => (
    <React.Fragment key={index}>
      <a
        href="#"
        className="hover:underline transition-colors duration-200"
      >
        {item}
      </a>
      {index !== 9 && <span className="mx-1">|</span>} {/* trừ item cuối */}
    </React.Fragment>
  ))}
</div>
   </div>
   <div className="block sm:hidden">
<div className="flex  w-full px-6 py-8">
<div className="w-1/2">
<ul className="text-sm">
    <li>推奨端末一覧</li>
    <li>このサイトについて</li>
    <li>プライバシーポリシー</li>
    <li>Cookie 設定</li>
    <li>利用規約・権利表記</li>
</ul></div>
<div className="w-1/2">
<ul className="text-sm">
    <li>ユーザーサポート</li>
    <li>二次創作ガイドライン</li>
    <li>牧場見学のルールとマナーに関するお知らせ</li>
    <li>情報の外部送信について</li>
    <li>English</li>
</ul></div>
</div>
   </div>

    <div className="flex  justify-between items-center w-full px-8">
        <svg className="  " width={110}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 199 46" class="nuxt-icon--fill" preserveAspectRatio="xMidYMid meet" data-v-bd222153="" data-v-7e1c1a78=""><path d="M188.978 19.888c-2.342 0-3.173.922-3.173 1.711 0 1.052 2.015 1.744 3.794 2.057 5.801.744 8.742 2.84 8.742 6.234 0 2.82-1.162 3.914-3.361 5.006-2.275 1.404-4.877 1.221-5.62 1.221-5.373 0-9.095-2.471-9.392-6.787h5.232c.135 2.04 2.25 2.589 4.326 2.589 2.298 0 3.709-.589 3.709-1.704 0-.987-1.498-1.738-4.11-2.061-5.59-.693-8.424-2.793-8.424-6.233 0-2.187 1.066-3.821 3.082-5.006 2.055-1.106 4.43-1.228 5.356-1.228 5.001 0 8.003 2.046 9.001 6.173h-5.48c-.305-1.09-.84-1.972-3.682-1.972m-25.346 7.655a5.404 5.404 0 0 0 5.182 3.865c1.564 0 3.116-.715 4.306-2.016h5.14c-1.618 4.232-5.489 6.713-9.684 6.713-5.674 0-10.289-4.567-10.289-10.183 0-5.614 4.615-10.183 10.289-10.183 5.677 0 10.191 4.57 10.295 10.183.01.544-.094 1.241-.148 1.621zm5.182-7.101c-2.209 0-4.177 1.356-5.009 3.409h10.024c-.839-2.053-2.639-3.409-5.015-3.409m-17.895 2.285c0-1.245-1.028-2.259-2.292-2.259-1.266 0-2.297 1.014-2.297 2.259v12.586h-5.093V22.727c0-1.245-1.024-2.259-2.282-2.259-1.266 0-2.296 1.014-2.296 2.259v12.586h-5.094V16.422l2.763.971c1.348-1.082 2.944-1.654 4.627-1.654 1.792 0 3.499.597 4.835 1.684 1.34-1.087 3.048-1.684 4.837-1.684 4.072 0 7.493 3.441 7.493 7.761v11.813h-5.201zm-27.059 11.62c-1.706 1.152-3.687 1.758-4.87 1.758-6.563 0-11.178-4.567-11.178-10.183 0-5.614 4.615-10.183 11.178-10.183 1.309 0 3.409.687 5.192 1.986l4.201-1.288v18.876h-4.523zm-5.442-13.944c-2.936 0-5.318 2.53-5.318 5.519 0 2.957 2.331 5.362 5.318 5.362 2.988 0 5.419-2.405 5.419-5.362 0-2.989-2.482-5.519-5.419-5.519M95.397 43.932c-4.442 0-8.472-2.372-9.827-7.166h5.628a5.233 5.233 0 0 0 4.199 2.13 5.127 5.127 0 0 0 5.055-4.114 10.27 10.27 0 0 1-5.055 1.323c-5.679 0-9.417-4.565-9.417-10.18 0-5.616 3.738-10.186 9.417-10.186 2.189 0 4.288.687 6.078 1.988l4.206-1.289v17.317c0 5.611-4.011 10.177-10.284 10.177m.091-23.389c-2.937 0-4.778 2.757-4.778 5.37 0 3.011 1.74 5.371 4.778 5.371 3.037 0 5.417-2.36 5.417-5.371 0-2.393-2.532-5.37-5.417-5.37M66.607 43.697l5.138-10.1-8.425-17.132h5.538l5.793 11.409 5.807-11.409h5.5L72.103 43.697zM49.741 31.67c2.645 0 5.015-1.908 7.109-4.25h4.989a13.262 13.262 0 0 1-12.425 8.694c-7.274 0-13.191-5.86-13.191-12.594 0-7.664 5.917-13.52 13.191-13.52 5.094 0 9.955 3.6 12.104 7.882h-5.982c-1.376-1.502-2.856-2.602-5.795-2.532-4.468.1-8.104 3.281-8.104 8.17 0 3.952 3.636 8.15 8.104 8.15M28.281 8.564c-3.517 1.672-8.052.424-10.328 1.156-1.962-.575-2.344 1.721-.193 2.599.952.977 3.538-.441 7.674 1.333.692.321 1.126.827.195.744a8.227 8.227 0 0 0-3.32.078c-1.881.506-2.032 1.095-1.75 1.707.561 1.749 4.627 1.252 8.294 4.238.87 1.521 1.043 1.158.875 1.391-.204 1.17-.753-.194-1.275-.487-2.195-.463-3.841-1.223-4.767-1.207-.7.11-.838.657.122 1.237 2.072.797 3.802 1.836 5.992 4.59 1.902 2.391 2.309 3.987 1.775 4.215-.045.226-.266-.607-2.667-2.484-1.791-1.4-2.798-1.718-3.494-1.91-.626-.14-1.298.073-.993.885.73 1.942.126 3.618-.066 4.179v.018a.693.693 0 0 1 .377.609c0 .371-.291.665.008.69-1.136.603-1.412 1.357-1.412 2.171 0 .898.339 2.004.893 2.342.458.014.892.205 1.205.538.714.628.964 1.593.057 2.251l-.052.062c-.036.04-.08.075-.12.113h.573l1.54 2.954-1.54 2.954H5.93l-2.377-2.954 2.377-2.954h-.323c-.017-.019-.039-.031-.056-.051a1.688 1.688 0 0 1-.057-2.249l.052-.062a1.71 1.71 0 0 1 1.216-.595c.556-.295.897-1.448.897-2.349a3.52 3.52 0 0 0-.749-2.169.698.698 0 0 1-.666-.692c0-.271.16-.499.388-.616v-.011c0-.388.772-2.702 3.659-5.32 3.851-3.348.675-7.524-2.487-4.971-.833.673-1.378 1.145-1.381 2.273-.033-.521.15-.41.15-.41l-1.307.478c-.312-.458-.166-.994.148-1.5v-.003l-.24-1.542s.756.85.764.857c.053-.062.576-.798 1.033-1.465.347-.508.014-.955-.602-1.241a15.843 15.843 0 0 0-1.433-.035l-.386 1.439-.559-1.228c-.244.31-.485.71-.72-.022l-.112 2.512-.962-2.155c-.456.224-.832.745-1.06.948 0 0-.611-2.849.279-3.138 1.884-.045 4.574-1.1 4.834-1.954v-.826c1.047-1.057 2.211-3.215 2.979-6.638 0 0 .088-.155.179-.149.088.008.14.069.151.171.01.891.006 2.304.006 2.304C10.7 8.138 13.447 2.658 20.789 4.83c8.104 2.403 11.703-1.359 13.347-3.53.253-.647 1.424-.19.651.204-1.19 2.189-2.221 5.023-6.506 7.06"></path></svg>
<img className="w-30 h-auto object-cover" src="https://parts.cygames.co.jp/assets/images/cygames_copyright_regular.svg" alt="" />
    </div>
  </div>
  
  );
};

export default Footer;
