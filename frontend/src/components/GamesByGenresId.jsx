import React, { useEffect } from 'react'

function GamesByGenresId({gameList}) {
    useEffect(()=>{
        console.log("GameList",gameList);
    },[])
  return (
    <div>
      <h2 className='font-bold text-[30px] text-white mt-5'>Popular Games</h2>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {gameList.map((item)=>(
        <div className=' bg-[#76a8f75e] p-3 pb-10 rounded-lg hover:scale-110 transition-all ease-in-out duration-300 curson-pointer'>
            <img src={item.background_image} className='w-full h-[80%] rounded-xl object-cover'/>
            <h2 className='text-[20px] text-white font-bold'>{item.name}<span className='p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700'>{item.metacritic}</span></h2>
            <h2 className='text-white'>⭐{item.rating}💬{item.reviews_count}🔥{item.suggestions_count}</h2>

        </div>
    ))}</div>
    </div>
  )
}

export default GamesByGenresId