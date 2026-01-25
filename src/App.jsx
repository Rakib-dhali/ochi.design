import React from 'react'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
const App = () => {
  return (
    <div className='w-full h-screen'>
      <Hero />
      <Marquee />
      <About/>
      <Eyes/>
    </div>
  )
}

export default App