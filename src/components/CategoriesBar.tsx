import React, { useState } from 'react'
import { BiSolidCategory } from "react-icons/bi";

const CategoriesBar = () => {
    const [showCategories,setShowCategories] = useState(false)
    let categoriesTimeOut:any;
  return (
    <>
    <div className='h-12 w-full bg-sky-950 md:flex items-center gap-12 hidden '>
        <div className='flex justify-center items-center gap-0 ml-10' >
            <div className='ml-2 text-white text-2xl'><BiSolidCategory /></div><button className='text-white m-2 text-xl' onMouseEnter={()=>setShowCategories(true)} onMouseLeave={()=>{categoriesTimeOut=setTimeout(()=>{setShowCategories(false)},500)}}>Categories &or;</button>
        </div>
        <ul className='md:flex gap-10 hidden'>
            <li>Home</li>
            <li>Brands</li>
            <li>Offers</li>
            <li>Vendors</li>
        </ul>
    </div>
    {showCategories && <div onMouseEnter={()=>{ 
        clearTimeout(categoriesTimeOut)
        setShowCategories(true)}} onMouseLeave={()=>{categoriesTimeOut=setTimeout(()=>{setShowCategories(false)},500)}} className='ml-10 w-32 p-2 z-10 absolute bg-white'>
        categories</div>}
    </>
  )
}

export default CategoriesBar
