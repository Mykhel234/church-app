import React from 'react'
import About from './About'
import Articles from './Articles'
import Closing from './Closing'
import Footer from './Footer'
// import Hero from './Hero'
// import Hero1 from './Hero1'
import Hero2 from './Hero2'

import Services from './Services'
import Support from './Support'
import Testimonials from './Testimonials'
import Works from './Works'

const Home = () => {
  return (
    <>
      <Hero2/>
      
      <About/>
      <Works/>
      <Services/>
      <Articles/>
      <Support/>
      <Closing/>
      
      <Testimonials/>
      
      <Footer/>
    </>
  )
}

export default Home