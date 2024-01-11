import React, { useEffect } from 'react'

function Banner({gameBanner}) {
    useEffect(()=>{
        // console.log(gameBanner);
    })
  return (
    <div className='relative'>
        <div className='absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent'>
            <h2 className='text-[24px] text-white font-bold '>{gameBanner.name}</h2>
            <button className='bg-blue-500 text-white rounded-lg px-2 p-1 pop-out '>Get Now</button>
        </div>
        <img src={gameBanner.background_image} className=' w-full object-cover rounded-xl md:h-[320px]' alt="" />
    </div>
  )
}

export default Banner