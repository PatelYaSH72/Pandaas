import React from 'react'
import Navbar from '../navbar/Navbar'
import Hero from '../hero/Hero'
import About from '../about/about'
import RosourcesAi from '../card/RosourcesAi'
import Techimg from '../techImg/Techimg'
import Contact from '../Contect/Contect'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <RosourcesAi/>
      <Techimg/>
      <Contact/>
    </div>
  )
}

export default Home
