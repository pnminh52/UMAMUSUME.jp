import React from 'react'

const Banner = () => {
  return (
   <div>
   <div className='hidden sm:block'>
   <div className='relative'>
      <img className='h-[98vh] w-full object-cover' src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/1c24a997106247798328e4edd31a29dc/kv_pc.jpg?fm=webp" alt="" />
      <div className="absolute right-0 top-6 w-50 cursor-pointer group transition duration-300 ease-in-out ">
  <img
    src="https://umamusume.jp/_nuxt/images/kv_cygamesid_off-e0lDHPdS.png"
    alt=""
    className="w-full block group-hover:hidden"
  />
  <img
    src="https://umamusume.jp/_nuxt/images/kv_cygamesid_on-1kpbbryz.png"
    alt=""
    className="w-full hidden group-hover:block"
  />
</div>
<img className='absolute bottom-6 left-6 w-40 cursor-pointer' src="https://umamusume.jp/_nuxt/images/logo_umamusume-n9Ls3QRE.png" alt="" />

<p className='absolute -right-16 
  border border-white   text-white
  p-1 text-sm rounded-full cursor-pointer 
  top-1/2 rotate-90'>
  UMAMUSUME: PRETTY DERBY
</p>

    </div>
   </div>
    <div className='block sm:hidden'>
        <div className='relative'>
        <img className='' src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/e0ef671d93914b0da16bbd2b62463c56/kv_sp.jpg?fm=webp" alt="" />
        <p className='absolute -right-14
  border border-white   text-white
  p-1 text-xs rounded-full cursor-pointer 
  top-1/2 rotate-90'>
  UMAMUSUME: PRETTY DERBY
</p>
            <img className='absolute left-4 bottom-5 w-25 ' src="https://umamusume.jp/_nuxt/images/logo_umamusume-n9Ls3QRE.png" alt="" /><img className='absolute bottom-5 right-0 w-40  object-cover h-auto' src="https://umamusume.jp/_nuxt/images/kv_cygamesid_off-e0lDHPdS.png" alt="" />
        </div>

    </div>
   </div>
  )
}

export default Banner
