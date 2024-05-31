import React from 'react'
import Crousal from './Crousal'
import Categories from './Categories'

const Hero = () => {
  return (
    <>
    <div className='h-full w-full flex justify-center items-center flex-col'>
        <Crousal/>
    </div>
    <Categories/>
    </>
  )
}

export default Hero
