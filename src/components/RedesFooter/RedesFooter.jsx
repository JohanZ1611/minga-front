import React from 'react'
import './redesFooter.css'

export default function RedesFooter() {
  return (
    <div className='cont-redes'>
      <div className='ancors-footer'>
        <a href="#" className='a-footer'>Home</a>
        <a href="#" className='a-footer'>Minga</a>
      </div>
      <img src="./images/logo-footer.png" alt="logo-footer" className='logo-footer' />
      <div className='cont-redes2'>
        <div className='img-redes'>
          <img src="./images/Facebook.png" alt="facebook" />
          <img src="./images/Twitter.png" alt="twitter" />
          <img src="./images/Vimeo.png" alt="vimeo" />
          <img src="./images/Youtube.png" alt="youtube" />
        </div>
        <button className='btn-footer'>
          Donate
          <img src="./images/Union.png" alt="union" />
        </button>
      </div>
    </div>
  )
}
