import React from 'react'
import './navBar.css'
import {useState} from 'react'


export default function NavBar() {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <div className='cont-nav'>
        <div className={`nav_items ${isOpen && "open"}`}>
          <a href="#">Home</a>
          <a href="#">Upcoming Event</a>
          <a href="#">Past Event</a>
          <a href="#">Contact</a>
          <a href="#">Stats</a>
        </div>
        <div className={`nav_toggle ${isOpen && "open"}`} onClick={()=> setIsOpen(!isOpen)} >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <img src="/images/Logo.svg" alt="logo" className='img-nav-web' />
        <img src="/images/logo-mobile.svg" alt="logo" className='img-nav-mobile' />
    </div>
    
  )
}
