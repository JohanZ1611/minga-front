import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import './mainLayout.css'

export default function MainLayout(props) {
  return (
    <div className='cont-mainLayout'>
        <NavBar/>
        {props.children}
        <Footer/>
    </div>
  )
}
