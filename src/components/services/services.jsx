import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

function services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
          <article className="service">
            <div className="service__head">
              <h3>UI/UX Design</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Intuitive, attractive UI design.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>UX analysis for product improvement.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Interactive prototype creation.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Responsive design for all devices.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Effective collaboration with dev teams.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Continuous design evaluation & improvement.</p>
              </li>
            </ul>
          </article>
          {/* END OF UX/UI */}

          <article className="service">
            <div className="service__head">
              <h3>Web Development</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Custom, responsive web design & development.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Integration of third-party services & tools.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>High-performance web app development.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>iOS & Android mobile app development.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>E-commerce design & development with secure payment integration.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Website speed & performance optimization.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Website migration to new platforms & technologies.</p>
              </li>
            </ul>
          </article>
          {/* END WEB DEVELOPMENT*/}

          <article className="service">
            <div className="service__head">
              <h3>Data Science</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Data analysis & visualization.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Predictive & ML model development.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Data extraction & transformation.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Exploratory data analysis.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Custom dashboards & reporting.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Big data analysis & strategy.</p>
              </li>
            </ul>
          </article>
          {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default services