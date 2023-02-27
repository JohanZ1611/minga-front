import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import './mainLayout.css'

export default function MainLayout() {
  return (
    <div className='cont-mainLayout'>
        <NavBar/>
        <div className='cont-info-main'></div>
        <Footer/>
    </div>
  )
}
