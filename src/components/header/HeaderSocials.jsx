import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/luis-francisco-alegria-segura-ab2593260/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/NCYT30/" target="_blank"><AiFillGithub/></a>
    </div>
  )
}

export default HeaderSocials