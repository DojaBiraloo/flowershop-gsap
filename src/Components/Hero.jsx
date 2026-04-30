import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Hero = () => {
    const artRef = useRef(null)
    const objectsRef = useRef(null)
    const sideRef = useRef(null)

   useGSAP(() => {
    const tl = gsap.timeline()

    tl.from(sideRef.current,{
    opacity:0,
    duration:1,
    ease: "power2.inOut"
}, )

tl.from(artRef.current, {
  opacity: 0,
  y: 200,
  duration: 1,
  ease: 'power2.inOut'
}, '-=0.2')
.from(objectsRef.current, {
  opacity: 0,
  y: 200,
  duration: 0.7,
  ease: 'power2.inOut'
}, '-=0.5') // starts halfway through ART animation


  }, [])

  return (
    <div className='relative font-bai  flex flex-col md:flex-row  items-center min-h-screen px-20'>
        <div ref={sideRef} className='absolute  md:mb-[40rem]   z-[1] md:ml-[16rem] '>
            <ul className='uppercase font-bold space-y-1 text-xl text-black/60 '>
                <li>intro</li>
                <li>about</li>
                <li>featured</li>
            </ul>
        </div>

        <div className='mx-auto relative pt-2 md:pt-20 text-6xl md:text-[23rem] leading-tight font-bold text-center '>
            <h1>
              <span ref={artRef} className='block'>ART</span>
              <span ref={objectsRef} className='block'>OBJECTS</span>
            </h1>
        </div>
      
    </div>
  )
}

export default Hero
