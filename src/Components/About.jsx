import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

const About = () => {
  const aboutRef = useRef(null)
  const textRef = useRef(null)
  const headingRef = useRef(null)

  useGSAP(() => {
    const split = new SplitText(textRef.current, {
      type: 'lines',
      linesClass: 'line'
    })

    const tl = gsap.timeline({
        scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    })
     tl.from(headingRef.current, {
        opacity:0,
        y: 80,
        duration: .5,
        ease: "power2.inOut",
    }, )

    tl.from(split.lines, {
      y: 80,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.12,
      
    }, '-=0.2') //Start 0.2 seconds BEFORE the previous animation ends
   

    return () => split.revert()


  }, [])

  return (
    <div ref={aboutRef} className='mx-auto p-7 md:p-20'>
      <h1 ref={headingRef} className='font-syncopate text-4xl ml-2 font-bold text-black/70'>
        ABOUT
      </h1>

      <p
        ref={textRef}
        className='w-full text-xl md:text-7xl pt-8 text-black/90'
      >
        Flirty Flowers is a blog about flowers and the floral designers who make
        them into art. Creativity and the art of ‘making’ require dialogue. The
        full purpose of the Flirty Flowers blog is to encourage and inspire. We
        value art, we value insight, and we value opinion.
      </p>
    </div>
  )
}

export default About