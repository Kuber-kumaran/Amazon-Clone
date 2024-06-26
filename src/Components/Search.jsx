import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Search = () => {
  return (
    <div className='w-[100%]'>
      <div className="flex items-center h-10 bg-amazonClone-yellow rounded">
        <select className='p-2 bg-gray-300 text-black border text-xs xl:text-sm rounded'>
            <option>All</option>
            <option>Deals</option>
            <option>Amazon</option>
            <option>Fashion</option>
            <option>Computers</option>
            <option>Home</option>
            <option>Mobiles</option>
        </select>
        <input type="text" className='flex grow  px-2 items-center h-[100%] rounded-l text-black' />
        <button className='w-[45px]'>
            <MagnifyingGlassIcon className='h-[27px] m-auto stroke-slate-900'/>
        </button>
      </div>
    </div>
  )
}

export default Search
