import React from 'react'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Features from './components/Features'
import Review from './components/Review'
import Cards from './components/Cards'

const App = () => {
  return (
    <div className='w-full h-screen'>
      <Hero />
      <Marquee />
      <About/>
      <Eyes/>
      <Features/>
      <Review/>
      <Cards />
    </div>
  )
}

export default App