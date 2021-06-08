import React from 'react'

import emailjs from 'emailjs-com';

import styles from './Me.module.css';

import GithubIcon from '../assets/logos/icons8-github.svg'

import LinkedInIcon from '../assets/logos/icons8-linkedin.svg'

import TwitterIcon from '../assets/logos/icons8-twitter.svg'

import CodepenIcon from '../assets/logos/icons8-codepen.svg'





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
        <>
            <div className={styles.about}>
                <div className={styles.aboutMe}>
                    <h1>Daniel Simpson</h1>
                    <p>Hi I'm a web developer who likes making beautiful and functional web applications. Check out some of my projects</p>
                </div>
                <ul className={styles.socialLinks}>
                    <li>
                        <img src={GithubIcon} alt=""/>
                    </li>
                    <li>
                        <img src={LinkedInIcon} alt=""/>
                    </li>
                    <li>
                        <img src={CodepenIcon} alt=""/>
                    </li>
                    <li>
                        <img src={TwitterIcon} alt=""/>
                    </li>
                </ul>
            </div>
            
            <form className={styles.contact} onSubmit={sendEmail}>
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
        </>
      )
}

export default Me
