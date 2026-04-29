import React from 'react'

const NavBar = () => {
  return (
    <div>
        <ul className='font-syncopate pt-6 md:pt-8  font-semibold text-black/65 uppercase flex items-center justify-evenly'>
            <li className='text-sm md:text-2xl'>Menu</li>
            <li className='text-md md:text-3xl max-w-[100px] md:max-w-full  leading-tight text-center '>flirty flowers</li>
            <li className='text-sm md:text-2xl'>Cart</li>
        </ul>
      
    </div>
  )
}

export default NavBar
