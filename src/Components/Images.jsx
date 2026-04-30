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
  const mainRef = useRef(null)

 useGSAP(() => {
  gsap.set([image1Ref.current, image2Ref.current], {
    clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
    willChange: 'clip-path'
  })

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: mainRef.current,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
      invalidateOnRefresh: true
    }
  })

  tl.to(image1Ref.current, {
    clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
    duration: 1,
    ease: 'power3.out'
  })

  tl.to(image2Ref.current, {
    clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
    duration: 1,
    ease: 'power3.out'
  }, '-=0.6')

  tl.from(text1Ref.current, {
    opacity: 0,
    y: 8,
    duration: 0.1,
    ease: 'none'
  }, '-=0.9')

  tl.from(text2Ref.current, {
    opacity: 0,
    y: 8,
    duration: 0.3,
    ease: 'power2.out'
  }, '-=0.5')

  const refresh = () => ScrollTrigger.refresh()

  image1Ref.current.addEventListener('load', refresh)
  image2Ref.current.addEventListener('load', refresh)

  return () => {
    image1Ref.current?.removeEventListener('load', refresh)
    image2Ref.current?.removeEventListener('load', refresh)
    tl.kill()
  }
}, [])

  return (
    <div ref={mainRef} className='mainDiv flex min-h-screen justify-around p-4'>
      
      {/* LEFT IMAGE */}
      <div className='w-1/4 h-150 mt-30 gap-4'>
        <h1 ref={text1Ref} className='text-xl'>GREEN</h1>

        <img
          ref={image1Ref}
          className='object-cover w-full h-full'
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