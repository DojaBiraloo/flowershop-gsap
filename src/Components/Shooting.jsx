import React from 'react'


const Shooting = (props) => {
  return (
    <div className='shooting-panel bg-[#d53f41] min-h-screen w-screen flex-shrink-0 flex justify-center items-start pt-30'>
      <div className='relative'>
        <img
          className='md:h-[600px] md:w-[1000px] h-[300px] w-[400px] object-cover'
          src={props.image}
          alt=""
        />

        <div className='absolute md:bottom-12 md:-left-45 text-white'>
          <h1 className='font-bold font-bai text-5xl md:text-8xl'>
            {props.name}
          </h1>
          <p className='text-4xl md:text-8xl font-bodoni font-semibold'>
            {props.desc}
          </p>
          <p className='text-xl md:text-3xl font-bai'>
            Shooting / Adv.Campaing
          </p>
        </div>
      </div>
    </div>
  )
}



export default Shooting
