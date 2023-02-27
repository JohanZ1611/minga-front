import React from 'react'
import './hero.css'
import HeroInfo2 from '../HeroInfo2/HeroInfo2'
import HeroInfo1 from '../HeroInfo1/HeroInfo1'

export default function Hero() {
  return (
    <div className='hero'>
        <div className='cont-header'>
            <div className='info-header1'>
              <HeroInfo1/>
            </div>
        </div>
        <div className='cont-info'>
          <HeroInfo2/>
        </div>
    </div>
  )
}
