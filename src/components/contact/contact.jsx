import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () =>{
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ahmqube', 'template_74h8vtc', form.current, '7vGe-LOgA9OTBI4vL')
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>luis-francisco12@outlook.es</h5>
            <a href="mailto:luis-francisco12@outlook.es" target="_blank">Send a Message</a>
          </article>

          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Luis F. Alegria</h5>
            <a href="https://www.linkedin.com/in/luis-francisco-alegria-segura-ab2593260/" target="_blank">Send a Message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+57 3146443671</h5>
            <a href="https://api.whatsapp.com/send?phone=573146443671" target="_blank">Send a Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="hidden" name="to_name" value="Luis F. Alegria S." />
          <input type="text" name='from_name' placeholder='Your Full Name' required />
          <input type="email" name='from_email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    
    </section>
  )
}

export default Contact