import React from 'react'

import emailjs from 'emailjs-com';

import styles from './ContactMe.module.css'

function ContactMe({style}) {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_sjqmf2m', 'template_dzvrpnq', e.target, 'user_0Znqwgyp7svJTtgKIL4gz')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

    return (
        <form className={styles.contact} onSubmit={sendEmail} style={style}>
            <h2>Contact Me</h2>
            <input type="hidden" name="contact_number" />
            <label>Name</label>
            <input className= "name-input" type="text" name="user_name" placeholder="Name" />
            <label>Email</label>
            <input className= "email-input" type="email" name="user_email" placeholder="Email" />
            <label>Message</label>
            <textarea className="message-input" name="message" placeholder="Message" />
            <input type="submit" value="Send"  className="submit-button"/>
        </form>
    )
}

export default ContactMe
