import React from 'react'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Images from './Components/Images'
import About from './Components/About'
import Shooting from './Components/Shooting'
import Footer from './Components/Footer'

const App = () => {
  return (
   <div>
    <NavBar />
    <Hero />
    <Images />
    <About />
    <Shooting image="https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100&quot" name="
Dracaena Trifasciata" desc="Live the Beauty" />
    <Shooting image="https://images.unsplash.com/photo-1558603668-6570496b66f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=100" name="Cereus Penuvianus" desc="Live the Beauty" />
    <Shooting image="https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100" name="Calliope" desc="Live the Beauty" />
    <Shooting image="https://images.unsplash.com/photo-1611145367651-6303b46e4040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=100" name="Golden Pothos" desc="Living Room" />

    <Footer />
   
   </div>
  )
}

export default App
