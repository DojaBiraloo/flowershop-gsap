import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Shooting from './Shooting'


gsap.registerPlugin(ScrollTrigger)

const ShootingSection = () => {
  const containerRef = useRef(null)
  const horizontalRef = useRef(null)

 useGSAP(() => {
  const panels = gsap.utils.toArray('.shooting-panel')

  const scrollTween = gsap.to(horizontalRef.current, {
    x: () => -(horizontalRef.current.scrollWidth - window.innerWidth),
    ease: 'none',
    scrollTrigger: {
      trigger: containerRef.current,
      start: 'top top',
      end: () => `+=${horizontalRef.current.scrollWidth - window.innerWidth}`,
      scrub: 1.5,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    }
  })

  return () => {
    scrollTween.kill()
     scrollTween.scrollTrigger?.kill()
  }
}, [])

  return (
    <section ref={containerRef} className='overflow-hidden'>
      <div ref={horizontalRef} className='flex w-max  gap-0 bg-[#d53f41]'>
        <Shooting
          image="https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1345&q=100"
          name="Dracaena Trifasciata"
          desc="Live the Beauty"
        />

        <Shooting
          image="https://images.unsplash.com/photo-1558603668-6570496b66f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=100"
          name="Cereus Penuvianus"
          desc="Live the Beauty"
        />

        <Shooting
          image="https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=100"
          name="Calliope"
          desc="Live the Beauty"
        />

        <Shooting
          image="https://images.unsplash.com/photo-1611145367651-6303b46e4040?ixlib=rb-1.2.1&auto=format&fit=crop&w=2006&q=100"
          name="Golden Pothos"
          desc="Living Room"
        />
      </div>
    </section>
  )
}

export default ShootingSection