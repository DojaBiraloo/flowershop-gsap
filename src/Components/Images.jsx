import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Images = () => {
  const image1Ref = useRef(null)
  const image2Ref = useRef(null)
  const text1Ref = useRef(null)
  const text2Ref = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: image1Ref.current, // section trigger
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

 

    // First image
    tl.fromTo(
      image1Ref.current,
      {
        clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
      },
      {
        clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
        duration: 1,
        ease: 'power3.out'
      }
    )

    // Second image (slightly delayed / overlapping)
    tl.fromTo(
      image2Ref.current,
      {
        clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
      },
      {
        clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
        duration: 1,
        ease: 'power3.out'
      },
      '-=0.6' // overlap → starts before first finishes
    )

     .from(text1Ref.current, {
  opacity: 0,
  y: 8,
  duration: 0.1,
  ease: 'none'
}, '-=0.9')
     .from(text2Ref.current, {
  opacity: 0,
  y: 8,
  duration: 0.6,
  ease: 'none'
}, )

  }, [])

  return (
    <div className='mainDiv flex min-h-screen justify-around p-4'>
      
      {/* LEFT IMAGE */}
      <div className='w-1/4 h-150 mt-30 gap-4'>
        <h1 ref={text1Ref} className='text-xl'>GREEN</h1>

        <img
          ref={image1Ref}
          className='object-cover'
          src="https://images.unsplash.com/photo-1598838073192-05c942ede858"
          alt=""
        />
      </div>

      {/* RIGHT IMAGE */}
      <div className='relative w-1/2 h-screen'>
        <img
          ref={image2Ref}
          className='w-full h-full object-cover'
          src="https://images.unsplash.com/photo-1552248524-10d9a7e4841c"
          alt=""
        />

        <h1 ref={text2Ref} className='absolute bottom-4 rotate-[-90deg] origin-bottom-left text-2xl'>
          LILY
        </h1>
      </div>

    </div>
  )
}

export default Images