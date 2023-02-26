import React from 'react'
import './heroInfo2.css'

export default function HeroInfo() {
  return (
    <div className='hero-info'>
        <img src="/images/img1-info-hero.png" alt="she" className='img1-info'/>
        <img src="/images/img2-info-hero.png" alt="minga" className='img2-info'/>
        <div className='cont-info2-hero'>
            <h2 className='h2-info2-hero'>One Piece</h2>
            <p className='p1-info2-hero'>Manga</p>
            <p className='p2-info2-hero'>Monkey D. Luffy refuses to let anyone stand in his way to become King of the Pirates. He launches into the seas and will become a captain willing to never give up until he gets hold of the greatest treasure in history: the legendary One Piece.</p>
        </div>
    </div>
  )
}
