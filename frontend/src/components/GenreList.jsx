import React from 'react'
import { useEffect } from 'react';
import GlobalAPI from '../Services/GlobalAPI';
import { useState } from 'react';
function GenreList({genereId,selectedGenresName}) {
    const [genreList,setGenreList]=useState([]);
    const [activeIndex,setActiveIndex]=useState(0);
    useEffect(()=>{
        getGenreList();
    },[])

    const getGenreList =()=>{
        GlobalAPI.getGenreList.then((resp)=>{
            // console.log(resp.data.results)
            setGenreList(resp.data.results);
        })
    }
  return (
    <div>
        <h2 className='text-[30px] '>Genre</h2>
        {genreList.map((item,index)=>(
            <div onClick={()=>{setActiveIndex(index);genereId(item.id);
            selectedGenresName(item.name)}}
            
            className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-500 font-bold group rounded-lg} ${activeIndex===index?'bg-gray-300 text-black rounded-lg ':null}`}>
                <img src={item.image_background} className='w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out' alt="" />
                <h3 className='group-hover:
                font-bold transition-all ease-out duration-300'>{item.name}</h3>
            </div>
        ))}
    </div>
  )
}

export default GenreList