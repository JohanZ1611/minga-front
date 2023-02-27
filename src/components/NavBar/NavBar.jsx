import React from 'react'
import './navBar.css'
import {useState} from 'react'


export default function NavBar() {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <div className='cont-nav'>
        <div className={`nav_items ${isOpen && "open"}`}>
          <a href="#">Home</a>
          <a href="#">Read</a>
          <a href="#">Register</a>
          <a href="#">Login</a>
        </div>
        <div className={`nav_toggle ${isOpen && "open"}`} onClick={()=> setIsOpen(!isOpen)} >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <img src="/images/Logo-footer.png" alt="logo" className='img-nav-web' />
        <img src="/images/logo-mobile.svg" alt="logo" className='img-nav-mobile' />
    </div>
    
  )
}
