import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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

]

  return (
    <div className='m-3 bg-white h-40 '>
        <h1 className='font-bold text-xl m-2'>CATEGORIES</h1>
        <div className='flex md:gap-24 ml-8 justify-center items-center gap-3'>
            
           {categories.map(category => {
            return(<div className='flex flex-col justify-center items-center' key={category.id}>
                <img src={category.image} className='h-20'/>
                <p className='md:text-base text-sm'>{category.name}</p>
            </div>)
           })}
            
        </div>
    </div>
  )
}

export default Categories
