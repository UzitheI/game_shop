import React from 'react'

function SearchList({results}) {
  return (
    <div className='w-full bg-white text-black flex flex-col shadow-md rounded-lg mt-2 max-h-[100px] overflow-y-scroll  '>
      {
        results.map((result,id)=>{
          return <div className='cursor-pointer hover:bg-gray-400' key={id}>{result.name}</div>
        })

      }
      
    </div>
  )
}

export default SearchList