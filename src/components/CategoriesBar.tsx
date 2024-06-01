import React, { useState } from 'react'
import { BiSolidCategory } from "react-icons/bi";

const CategoriesBar = () => {
    const [showCategories,setShowCategories] = useState(false)
    let categoriesTimeOut:any;
  return (
    <>
    {showCategories && <div className='h-full w-full z-10 bg-gray-600 bg-opacity-40 absolute'></div>}
    <div className='h-12 w-full bg-sky-950 md:flex items-center gap-12 hidden '>
        <div className='flex justify-center items-center gap-0 ml-10 z-30' >
            <div className='ml-2 text-white text-2xl '><BiSolidCategory /></div><button className='text-white m-2 text-xl'
             onClick={()=>{showCategories?setShowCategories(false):setShowCategories(true)}}
             >Categories &or;</button>
        </div>
        <ul className='md:flex gap-10 hidden'>
            <li>Home</li>
            <li>Brands</li>
            <li>Offers</li>
            <li>Vendors</li>
        </ul>
    </div>
    {showCategories && <div className='ml-10 w-96 text-xl p-2 z-30 absolute bg-white'>
        <div>Category One </div>
        <div>Category two</div>
        <div>Category three </div>
        <div>Category four</div>
        <div>Category five</div>
        </div>}
    </>
  )
}

export default CategoriesBar
