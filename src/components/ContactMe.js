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
            <div>
                <label>Your Name</label>
                <input className= "name-input" type="text" name="user_name" placeholder="Name" />
            </div>
            <div>
                <label>Your Email</label>
                <input className= "email-input" type="email" name="user_email" placeholder="Email" />
            </div>
            <div>
                <label>Subject</label>
                <input className= "subject-input" type="text" name="subject" placeholder="Subject" />
            </div>
            <div>
                <label>Message</label>
                <textarea className="message-input" name="message" placeholder="Message" />
            </div>
            <input type="submit" value="Send"  className="submit-button"/>
        </form>
    )
}

export default ContactMe
