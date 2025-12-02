import React from 'react'
import "./About.css"
import about_img from "../../assets/about_img.png"

const About = () => {
  return (
    <div className='about-container' id='about'>
      <div className='left-about'>
          <img src={about_img} alt="" />
      </div>

      <div className="right-about">
            <h1>About Pandas</h1>
            <p>Pandas Learning ek learning-based platform hai jo students aur developers ko web development, mobile development, AI, ML, cybersecurity jaise technologies ke resources aur information provide karta hai.

Humara goal hai technology ko easy, accessible aur practical banana, taaki users fast aur confidently apni tech skills improve kar saken.</p>
      </div>
    </div>
  )
}

export default About
