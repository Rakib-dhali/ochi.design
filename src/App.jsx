import React from 'react'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Features from './components/Features'

const App = () => {
  return (
    <div className='w-full h-screen'>
      <Hero />
      <Marquee />
      <About/>
      <Eyes/>
      <Features/>
    </div>
  )
}

export default App