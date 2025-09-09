import React from 'react'

const Section4 = () => {
  return (
    <div className='block sm:hidden'>
      <div className='relative'>
        {/* Ảnh nền */}
        <img
          src="https://umamusume.jp/_nuxt/images/page5_kv-p84cGpRF.jpg"
          alt=""
          className="w-full h-auto"
        />

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
  <div className="w-[90vw] h-40 opacity-85 bg-white transform -skew-x-12"></div>

  <div className='px-4 py-1 bg-[#2A5DFA] text-white absolute -top-4'>
    <span className="text-[#fff]">「ウマ娘」</span>とは？
  </div>

  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85%]">
    <p className="text-xs text-[#2A5DFA] relative z-10">
      ウマ娘たちが苛烈なレースを繰り広げる国民的人気スポーツ・エンターテインメント。レース後にはファンと喜びを分かちあう 「ウイニングライブ」が開催され、レースに勝利したウマ娘には、センターに立つ権利が与えられる。ウマ娘たちの多くはトゥインクル・シリーズで活躍することを夢見ている。
    </p>
  </div>
</div>

      </div>
    </div>
  )
}

export default Section4
