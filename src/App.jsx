import React from 'react'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Images from './Components/Images'
import About from './Components/About'

const App = () => {
  return (
   <div>
    <NavBar />
    <Hero />
    <Images />
    <About />
    <div className='min-h-screen bg-red-200'>

    </div>
   </div>
  )
}

export default App
