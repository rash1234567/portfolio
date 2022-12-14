import React from 'react'
import "./contact.css"
import {MdOutlineMarkEmailRead} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_6oei8o5', 'template_grwvygq', e.target, 'DFa9X1LBu0nzEyvdv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5> Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
              <MdOutlineMarkEmailRead className='contact__option-icon'/>
              <h4>Email</h4>
              <h5 className='email'>imam..@gmail.com</h5>
              <a href="mailto:imamrasheedatahmad1993@gmail.com" target="_blank">Send A Message</a>
          </article>

          <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+234 8091408145</h5>
              <a href="https://wa.me/2348091408145" target="_blank">Send A Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit= {sendEmail}>
          <input type="text" name='name' placeholder='Your Fullname' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
