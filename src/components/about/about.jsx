import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src="https://i.imgur.com/y7TTAWm.png" alt="About Image"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'> 
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>-1 Year Working</small>
            </article>

            <article className='about__card'> 
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>+1 Worldwide</small>
            </article>

            <article className='about__card'> 
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>+2 Completed Projects</small>
            </article>
          </div>
          <p>
          Luis F. Alegria: skilled in programming, web development, and networking. A passionate technologist who constantly seeks new challenges to expand his knowledge and contribute to innovative projects. A valuable addition to any team.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>      
    </section>
  )
}

export default About