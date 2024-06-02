"use client"

import React, { Component, ReactChild } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';



const Crousal = () => {
  const imageWidth = 2000;
  const imageHeight = 200;
  const crousalImages=[{image:"https://images.unsplash.com/photo-1506484381205-f7945653044d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"one"},
    {image:"https://images.unsplash.com/photo-1525904097878-94fb15835963?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"two"},
    {image:"https://images.unsplash.com/photo-1712357992723-8d458caebe69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG9yZ2FuaWMlMjBwcm9kdWN0fGVufDB8MHwwfHx8MA%3D%3D",name:"three"},
    {image:"https://csform.com/storage/posts/22/content/organic-food-photo-mockup-vegetables-vol2/images/organic-food-photo-mockup-vegetables-vol2-paper-bag-6.webp",name:"four"},]
  return (
    <div className='flex justify-center items-center'>
    <div className=' m-2 overflow-hidden h-50 md:w-11/12'>
      
       <Carousel autoPlay={true} infiniteLoop={true} interval={2000} width={window.innerWidth>800?"700px":""}  showThumbs={false}>
                <Image src={crousalImages[0].image} alt={crousalImages[0].name} fill={true} />
                <Image src={crousalImages[1].image} alt={crousalImages[1].name} fill={true} />
                <Image src={crousalImages[2].image} alt={crousalImages[2].name} width={imageWidth} height={imageHeight}/>
                </Carousel>
    </div>
    </div>
  )
}



export default Crousal

