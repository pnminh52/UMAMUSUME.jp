import React from 'react'

const Card1 = () => {
  return (
    <div>
      <div className='bg-white hover:scale-95 cursor-pointer ease-in-out duration-300 transition  p-4 shadow-lg rounded-lg'>
            <img src="https://prd-info-umamusume.akamaized.net/announce/2731/Thumbnail/announce_banner_3364.png?c=20250825121706" alt="" />
          <div className='py-2 px-2 space-y-2'>
          <div className='flex gap-3 '>
           <p className='w-30 h-5.5 rounded-full bg-[#B5D913] uppercase text-white flex justify-center items-center text-sm' style={{ letterSpacing: '0.2em' }}>Game</p>
           <p className='font-bold text-[#B5D913]'>2025.08.29 12:00</p>
           </div>
           <p className='text-sm'>育成ウマ娘&サポートカード新登場！ピックアップガチャ開催！</p>
          </div>
          <div className='flex items-center gap-2 px-2 w-full cursor-pointer justify-end'>
            <p className='text-[#B5D913] text-sm'> 詳細はコチラ </p>
           <div className='flex items-center'>
           <svg className=' opacity-40' width={15} height={15} fill='#B5D913' data-v-7e1c1a78="" data-v-d56ccb73="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.78 48.19" class="nuxt-icon--fill" preserveAspectRatio="xMidYMid meet"><path d="m7.76 48.19-7.59-7.6 16.41-16.41L0 7.6 7.6 0l24.18 24.18z"></path></svg>
           <svg className='rotate-0 -ml-1.5' width={15} height={15} fill='#B5D913' data-v-7e1c1a78="" data-v-d56ccb73="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.78 48.19" class="nuxt-icon--fill" preserveAspectRatio="xMidYMid meet"><path d="m7.76 48.19-7.59-7.6 16.41-16.41L0 7.6 7.6 0l24.18 24.18z"></path></svg>
           </div>

          </div>

            </div>
    </div>
  )
}

export default Card1
