import React, { useEffect, useRef, useState } from 'react'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Images from './Components/Images'
import About from './Components/About'
import Shooting from './Components/Shooting'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll'
import ShootingSection from './Components/ShootingSection'

const App = () => {

  const[preloader, setPreloader] = useState(true);

  const [timer, setTimer]= useState(3);

  const id = useRef(null);
  const scrollRef = useRef(null);
  const locoScroll = useRef(null);

  const clear =() =>{
    window.clearInterval(id.current);
    setPreloader(false);
  }

  useEffect(() =>{
    id.current = window.setInterval(() =>{
      setTimer((prev) => prev -1)
    }, 1000)
    
    return () => clearInterval(id.current);
  }, [])

  useEffect(() =>{
    if(timer === 0){
      clear();  //timer 0 bhayesi interval clear garne
    }
  }, [timer])

  useEffect(() => {
    if (!preloader && scrollRef.current) {
      locoScroll.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
        class: 'is-revealed'
      });

      return () => {
        if (locoScroll.current) {
          locoScroll.current.destroy();
        }
      };
    }
  }, [preloader]);
  return (
   <>
    {preloader? (
      <div className='flex items-center justify-center flex-col bg-[#191919] text-[#dbd8d6] fixed top-0 right-0 bottom-0 left-0 z-[1]'>
      <h1 className='text-4xl uppercase font-bai font-bold '>Flirty Flowers</h1>
      <h2 className='text-xl uppercase font-bodoni italic mt-2.5'>Rio de Janeiro</h2>
    </div>
    ): (
      <div data-scroll-container ref={scrollRef}>
        <NavBar />
    <Hero />
    <Images />
    <About />
    <ShootingSection />
    <Footer />

      </div>
    )}
    
   
   </>
  )
}

export default App
