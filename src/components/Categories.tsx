import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from 'next/image'

interface category extends Document{
    id:number;
    name:string;
    image:string;
}

const Categories = () => {
    const categories=[
        {
        id:1,
        name:"Organic oil",
        image:"https://www.dailynatural.in/storage/app/public/category/2024-01-20-65aac13527f20.webp"
        },
        {   
        id:2,
            name:"breakfast",
            image:"https://www.dailynatural.in/storage/app/public/category/2024-01-20-65abff06e5adb.webp"
            },
            {
                id:3,
                name:"honey",
                image:"https://www.dailynatural.in/storage/app/public/category/2024-01-20-65abffd0b9d2c.webp"
                },
                {   
                        id:4,
                    name:"organic",
                    image:"https://www.dailynatural.in/storage/app/public/category/2024-01-20-65aac13527f20.webp"
                    },
                    ,
                    {   
                            id:5,
                        name:"organic",
                        image:"https://www.dailynatural.in/storage/app/public/category/2024-01-20-65aac13527f20.webp"
                        },
                        ,
                {   
                        id:6,
                    name:"organic",
                    image:"https://www.dailynatural.in/storage/app/public/category/2024-01-20-65aac13527f20.webp"
                    },

]

  return (
    <div className='m-3 bg-white h-40 '>
        <h1 className='font-bold text-xl m-2'>CATEGORIES</h1>
        <div className='flex md:gap-24 ml-2 items-center gap-3 overflow-scroll pb-2'>
            
           {categories.map(category => {
            return(<div className='flex flex-col justify-center items-center min-w-fit ' key={category?.id}>
                <Image src={category?.image || ""} alt={category?.name || ""} className='h-20' width={90} height={20}/>
                <p className='md:text-base text-sm font-semibold'>{category?.name}</p>
            </div>)
           })}
            
        </div>
    </div>
  )
}

export default Categories
