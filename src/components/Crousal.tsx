import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Crousal = () => {
  const crousalImages=["https://images.unsplash.com/photo-1506484381205-f7945653044d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1525904097878-94fb15835963?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1712357992723-8d458caebe69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG9yZ2FuaWMlMjBwcm9kdWN0fGVufDB8MHwwfHx8MA%3D%3D",
    "https://csform.com/storage/posts/22/content/organic-food-photo-mockup-vegetables-vol2/images/organic-food-photo-mockup-vegetables-vol2-paper-bag-6.webp",
    "https://i.pinimg.com/736x/80/1b/17/801b177a1cd064c1f118be62a944fa6e.jpg"]
  return (
    <div className='flex justify-center items-center'>
    <div className='md:h-96 m-2 overflow-hidden h-64 md:w-5/6'>
       <Carousel autoPlay={true} infiniteLoop={true} interval={2000} width={"80vw"}>
                <div>
                    <img src={crousalImages[0]} className='h-64 md:h-96'/>
                  
                </div>
                <div>
                    <img src={crousalImages[1]} className='h-64 md:h-96'/>
                  
                </div>
                <div>
                    <img src={crousalImages[2]} className='h-64 md:h-96'/>
                    
                </div>
            </Carousel>
    </div>
    </div>
  )
}

export default Crousal

