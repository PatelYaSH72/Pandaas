import React, { useState } from 'react'
import "./navbar.css"
import logo_img from "../../assets/logo-img.png"
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [isHovering4, setIsHovering4] = useState(false);
  const [hide, setHide] = useState(true)

  return (
    <div className='nav-container'>
      <div className="nav-logo">
        
          <img src={logo_img} alt="" />
          <p>Pandas</p>
       
        
      </div>
       
      <span className='khide' onClick={()=>setHide(!hide)}><IoIosMenu size={30}/></span>

      <div className={`nav-txt ${hide? "ehide":""}`}>
        <div className='inr-nav'>
          <a  onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)} onClick={()=>setHide(!hide)} href="#hero">
              Home <hr className={`${isHovering? "onhovering":"clshovring"}`}/>
          </a>
          <a  onMouseEnter={() => setIsHovering2(true)}
              onMouseLeave={() => setIsHovering2(false)} onClick={()=>setHide(!hide)} href="#about">About <hr className={`${isHovering2? "onhovering":"clshovring"}`}/></a>
          <a onMouseEnter={() => setIsHovering3(true)}
              onMouseLeave={() => setIsHovering3(false)} onClick={()=>setHide(!hide)} href="#Services">Services <hr className={`${isHovering3? "onhovering":"clshovring"}`}/></a>
          <a  onMouseEnter={() => setIsHovering4(true)}
              onMouseLeave={() => setIsHovering4(false)} onClick={()=>setHide(!hide)} href="#contact"> Contact <hr className={`${isHovering4? "onhovering":"clshovring"}`}/></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
