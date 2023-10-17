import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

function header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Luis F. Alegria</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src="https://i.imgur.com/yldXLxv.png" alt="me" />
        </div>

        <a href="#contact"  className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header