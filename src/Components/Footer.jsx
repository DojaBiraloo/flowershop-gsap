import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  const footerRef = useRef(null)
  const headingRef = useRef(null)
  const rioRef = useRef(null)
  const janeiroRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    })

    tl.from(headingRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: 'power2.out'
    })

    tl.from(rioRef.current, {
      opacity: 0,
      y: 120,
      duration: 0.7,
      ease: 'power3.out',
      force3D: true
    }, '-=0.2')

    tl.from(janeiroRef.current, {
      opacity: 0,
      y: 120,
      duration: 0.7,
      ease: 'power3.out',
      force3D: true
    }, '-=0.45')
  }, [])

  return (
    <div
      ref={footerRef}
      className='min-h-screen flex flex-col justify-center items-center md:p-8 overflow-hidden'
    >
      <h3
        ref={headingRef}
        className='font-syncopate text-3xl font-bold text-black/70'
      >
        MADE IN
      </h3>

      <h1 className='font-bodoni font-bold text-[100px] md:text-[250px] uppercase md:pt-8 w-[400px] md:w-1/2 text-center leading-tight'>
        <span ref={rioRef} className='block will-change-transform'>
          Rio de
        </span>
        <span ref={janeiroRef} className='block will-change-transform'>
           Janeiro
        </span>
      </h1>
    </div>
  )
}

export default Footer