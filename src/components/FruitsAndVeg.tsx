"use client"

import React from 'react'
import Image from 'next/image'

const FruitsAndVeg = () => {
    const fruitsAndVeg = [{id:1,name:"Veggies",image:"https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_fresh-vegetables_480_250923.jpg?tr=w-1920,q=80"},{id:2,name:"fruits",image:"https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_fresh-fruits_480_250923.jpg?tr=w-1920,q=80"},{id:3,name:"exotic",image:"https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_cuts-&-exotics_480_250923.jpg?tr=w-1920,q=80"},{id:4,name:"herbs",image:"https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_herbs-&-seasoning_480_250923.jpg?tr=w-1920,q=80"}]
  return (
    <>
    
    <div className='m-3 bg-white h-44'>

    <style jsx>{
      ` h1{
           color:green;
         }
         p{
          color:purple
         }
         `
         }
       </style>
        <h1 className='font-bold text-xl m-2'>Fruits and veggies</h1>
        <div className='flex md:gap-24 ml-2 overflow-scroll items-center gap-3'>
            
           {fruitsAndVeg.map(item => {
            return(<div className='flex flex-col justify-center items-center' key={item.id}>
                <Image src={item.image} className='h-20' alt={item.name} width={90} height={40}/>
                <p className='md:text-base text-sm font-semibold'>{item.name}</p>
            </div>)
           })}
            
        </div>
    </div>
    </>
  )
}




export default FruitsAndVeg
