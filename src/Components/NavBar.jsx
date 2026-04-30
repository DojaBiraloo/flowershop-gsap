import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const NavBar = () => {
  const navRef = useRef(null);

  useGSAP(() =>{
    const tl = gsap.timeline();

    tl.from(navRef.current, {
      opacity:0,
      duration: .6,
      ease: "power2.inOut",
    })
  })
  return (
    <div ref={navRef}>
        <ul className='font-syncopate pt-6 md:pt-8  font-semibold text-black/65 uppercase flex items-center justify-evenly'>
            <li className='text-sm md:text-2xl'>Menu</li>
            <li className='text-md md:text-3xl max-w-[100px] md:max-w-full  leading-tight text-center '>flirty flowers</li>
            <li className='text-sm md:text-2xl'>Cart</li>
        </ul>
      
    </div>
  )
}

export default NavBar
