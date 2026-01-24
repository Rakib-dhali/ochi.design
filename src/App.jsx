import React from 'react'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'

const App = () => {
  return (
    <div className='w-full h-screen'>
      <Hero />
      <Marquee />
      <About/>
    </div>
  )
}

export default App