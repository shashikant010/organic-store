import React, { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
const Header = () => {
  const [showOptions,setShowOptions]=useState(false)
  return (
    <>
    <div className='bg-emerald-200 h-14 w-full flex items-center md:justify-center min-w-max justify-between p-4'>
      <div className= {`md:hidden text-3xl `}  onClick={()=>setShowOptions((prev)=>!prev)}>{showOptions?<RxCross1 />:<GiHamburgerMenu />}</div>
      {showOptions && 
      <div className='absolute z-10 w-full h-full bg-white top-14  bg-opacity-80 left-0 p-4'>
        <div className='border-black border-2 h-10 w-28 rounded hover:bg-slate-400 font-bold p-1'>
          Login/signup
        </div>
        <ul className='opacity-100 z-50 font-bold mt-2 flex flex-col gap-2'>
          <li className='text-black'>Home</li>
          <li className='text-black'>Orders</li>
          <li className='text-black'>Profile</li>
          <li className='text-black'>Settings</li>
          
        </ul>
        </div>}
      <h1 className='font-bold m-4 text-2xl'>ORGANICO</h1>
      <div className="md:flex items-center justify-center p-1 hidden">
            <div className="rounded-lg bg-transparent p-5">
                <div className="flex">
                <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                 <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="pointer-events-none absolute w-5 fill-gray-500 transition"
                    >
          <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z" />
          </svg>
          </div>
            <input
                type="text"
                className="w-full max-w-[500px] min-w-[500px] bg-white pl-2 text-base font-semibold outline-0"
                placeholder="Search Items"
                id=""
            />
            <input
                type="button"
                defaultValue="Search"
                className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
            />
            </div>
  </div>
</div>

<div className=' bg-gray-50 rounded-full flex justify-center items-center h-11 w-11 hover:text-red-400'><CiHeart size="2em" /></div>

    </div>




    <div className='bg-emerald-200 h-14 w-full flex items-center justify-center md:hidden'>
      
    
      <div className="md:flex items-center justify-center p-1">
            <div className="rounded-lg bg-transparent p-5">
                <div className="flex">
                <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                 <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="pointer-events-none absolute w-5 fill-gray-500 transition"
                    >
          <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z" />
          </svg>
          </div>
            <input
                type="text"
                className=" max-w-[500px]  bg-white pl-2 text-base font-semibold outline-0"
                placeholder="Search Items"
                id=""
            />
            <input
                type="button"
                defaultValue="Search"
                className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
            />
            </div>
  </div>
</div>


    </div>
    
    </>
  )
}

export default Header
