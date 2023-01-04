import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import './Features.css'
// import emailjs from 'emailjs-com'

const Features = () => {
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_i67j7r5', 'template_gz48v4c', form.current, '6mRJGXxVNu7EOPWH6')

  //   e.target.reset()
  // };

  return (
    <section id='contact'>
      <br/>
      <br/>
      <br/>


      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>youremail@gmail.com</h5>
            <a href="mailto:marcoasf.com@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp / Phone# </h4>
            <h5>yourphone</h5>
            <a href="https://api.whatsapp.com/send?phone=14692745018" target="_blank">Send a message</a>
          </article>
        </div>
        {/* <form ref={form} onSubmit={sendEmail}> */}
        <form ref={form}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      <br/>
      <br/>
      <br/>

    </section>
    
  )
}

export default Features
