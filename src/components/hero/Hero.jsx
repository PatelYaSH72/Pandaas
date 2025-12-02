import React from 'react'
import "./Hero.css"
import hero_img from "../../assets/hero_image.png"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero-container' id='hero'>
      <div className='left-container'>
        <div >
            <p>LEARN. CODE. DISCOVER.</p>
            <h1>Unlock Your Potential <br /> With Pandas</h1>
            <button><a href='#Services'>EXPLORE COURSES</a></button>
        </div>
      </div>

      <div className='right-continer'>
            <img src={hero_img} alt="" />
      </div>
    </div>
  )
}

export default Hero
