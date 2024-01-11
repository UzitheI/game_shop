import React, { useEffect } from 'react'

function TrendingGames({gameList}) {
    useEffect(()=>{
        // console.log(gameList);
    })
  return (
    <div className='mt-5 hidden md:block'>
    <h2 className='font-bold text-[30px] text-white'>Trending Games</h2>

    <div className='hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-3'>
        {gameList.map((item,index)=>index<4&&(
            <div className=''>
                <img src={item.background_image} alt="" className='h-[270px] rounded-t-lg object-cover pop-out hover:opacity-50 cursor-pointer' />
                <h2 className='text-white text-[20px] font-bold bg-[#76a8f75e] rounded-b-lg p-2 '>{item.name}</h2>
            </div>
        ))}
    </div>
    </div>
  )
}

export default TrendingGames