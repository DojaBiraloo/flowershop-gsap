import React from 'react'

const Images = () => {
  return (
    <div className='flex min-h-screen justify-around p-4'>
        <div className=' w-1/4 h-150 mt-30 gap-4'>
            <h1 className='text-xl'>GREEN</h1>
            <img className='object-cover' src="https://images.unsplash.com/photo-1598838073192-05c942ede858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100" alt="" />
        </div>
<div className='relative  w-1/2 h-screen'>
  
  <img
    className='w-full h-full object-cover'
    src="https://images.unsplash.com/photo-1552248524-10d9a7e4841c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=881&q=100"
    alt=""
  />

  <h1 className='absolute bottom-4  rotate-[-90deg] origin-bottom-left text-2xl'>
    LILY
  </h1>

</div>
       
    </div>
  )
}

export default Images
