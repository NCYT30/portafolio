import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1_2.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3_1.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Streaming Platform',
    github: 'https://github.com/BrayanGalvez',
    demo: 'https://dribbble.com/brayangalvez/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Dashboard AI (Coming Soon)',
    github: 'https://github.com/BrayanGalvez',
    demo: 'https://dribbble.com/brayangalvez/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'E-commerce',
    github: 'https://github.com/BrayanGalvez',
    demo: 'https://dribbble.com/brayangalvez/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Coming Soon',
    github: 'https://github.com/BrayanGalvez',
    demo: 'https://dribbble.com/brayangalvez/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Coming Soon',
    github: 'https://github.com/BrayanGalvez',
    demo: 'https://dribbble.com/brayangalvez/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Coming Soon',
    github: 'https://github.com/BrayanGalvez',
    demo: 'https://dribbble.com/brayangalvez/'
  }
]
  

function portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target="_blank">Git Hub</a>
                    <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                  </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio