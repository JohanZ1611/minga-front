import React from 'react'
import './footer.css'
import SuscribFooter from '../SuscribFooter/SuscribFooter'
import RedesFooter from '../RedesFooter/RedesFooter'

export default function Footer() {
  return (
    <div>
      <footer>
        <img src="./images/img-footer.png" alt="img-footer" className='img-footer'/>
        <SuscribFooter/>
        <RedesFooter/>
      </footer>
    </div>
  )
}
