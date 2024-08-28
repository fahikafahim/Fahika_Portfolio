import React from 'react'
import './ContactMe.css'
import  ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import  ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
          iconUrl="./assets/email.png"
          text="fahikafahim82@gmail.com" />
          <ContactInfoCard
          iconUrl="./assets/github.png"
          text="https:/github.com/Fahika_Portfolio" />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm/>
        </div>
      </div>
    </section>
  )
}

export default ContactMe