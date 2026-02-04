/* eslint-disable no-unused-vars */
import React from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Features from './components/Features';
import Review from './components/Review';
import Cards from './components/Cards';
import Ready from './components/Ready';
import Footer from './components/Footer';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full h-screen relative">
      <Hero />
      <Marquee />
      <About />
      <Eyes />
      <Features />
      <Review />
      <Cards />
      <Ready />
      <Footer />
    </div>
  );
};

export default App;
