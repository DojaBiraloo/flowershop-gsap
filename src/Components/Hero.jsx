import React from 'react'

const Hero = () => {
  return (
    <div className='relative font-bai  flex flex-col md:flex-row  items-center min-h-screen px-20'>
        <div className='absolute  md:mb-[40rem]   z-[1] md:ml-[16rem] '>
            <ul className='uppercase font-bold space-y-1 text-xl text-black/60 '>
                <li>intro</li>
                <li>about</li>
                <li>featured</li>
            </ul>
        </div>

        <div className='mx-auto relative pt-2 md:pt-20 text-6xl md:text-[23rem] leading-tight font-bold text-center '>
            <h1>ART OBJECTS</h1>
        </div>
      
    </div>
  )
}

export default Hero
