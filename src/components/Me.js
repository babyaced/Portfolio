import React from 'react'

import emailjs from 'emailjs-com';

import styles from './Me.module.css';

function Me() {

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
        <div className={styles.me}>
            <div className={styles.about}>
                <h1>Daniel Simpson</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eos dicta culpa. Sunt autem doloremque dolorum officiis maxime sequi pariatur ab quisquam, vel natus esse culpa placeat qui, veritatis at?</p>
            </div>
            
            <form className={styles.contact} onSubmit={sendEmail}>
                <h1>Contact Me</h1>
                <input type="hidden" name="contact_number" />
                <div>
                    <label>Name</label>
                    <input className= "name-input" type="text" name="user_name" placeholder="Name" />
                </div>
                <div>
                    <label>Email</label>
                    <input className= "email-input" type="email" name="user_email" placeholder="Email" />
                </div>
                <div>
                    <label>Message</label>
                    <textarea className="message-input" name="message" placeholder="Message" />
                </div>
                <input type="submit" value="Send"  className="submit-button"/>
            </form>
        </div>
      )
}

export default Me
