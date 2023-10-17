import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Nostalhit Music Group',
    review: 'Working with Brayan Galvez was a great experience for our team at Nostalhit Music Group. His UX-UI expertise and ability to understand our vision, helped us design a one-of-a-kind streaming platform that we are excited to launch in the coming months. Brayans dedication and commitment to the project, combined with his communication skills, made the process seamless and enjoyable. We highly recommend his services to anyone looking to bring their ideas to life.',
    
  },
  {
    avatar: AVTR2,
    name: 'Name2',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, animi rerum. Expedita suscipit dolore ex eligendi fugit doloremque autem, numquam accusantium sunt rerum nesciunt velit aperiam modi illo aspernatur commodi?',
    
  },
  {
    avatar: AVTR3,
    name: 'Name3',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, animi rerum. Expedita suscipit dolore ex eligendi fugit doloremque autem, numquam accusantium sunt rerum nesciunt velit aperiam modi illo aspernatur commodi?',
    
  },
  {
    avatar: AVTR4,
    name: 'N',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, animi rerum. Expedita suscipit dolore ex eligendi fugit doloremque autem, numquam accusantium sunt rerum nesciunt velit aperiam modi illo aspernatur commodi?',
    
  }
]

function testimonials() {
  return(
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

     <Swiper className="container testimonials__container"
     // install Swiper modules
     modules={[Pagination]}
     spaceBetween={40}
     slidesPerView={1}
     pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
                  <div className="client__avatar">
                      <img src={avatar} alt="Avatar One" />
                  </div>
                  <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}


export default testimonials
