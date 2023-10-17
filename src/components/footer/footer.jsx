import React from 'react'
import './footer.css'
import {FaLinkedin} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'

function footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Luis F. Alegria</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>


      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/luis-francisco-alegria-segura-ab2593260/" target="_blank"><FaLinkedin/></a>
        <a href="https://github.com/NCYT30/" target="_blank"><AiFillGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Luis F. Alegria. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer