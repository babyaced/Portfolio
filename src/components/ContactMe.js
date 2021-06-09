import {useState} from 'react'

import emailjs from 'emailjs-com';

import styles from './ContactMe.module.css'
import Modal from './Modal';

function ContactMe({style}) {

    const [modalDisplay, setModalDisplay] = useState(false)
    const [sendMessageSuccess, setSendMessageSuccess] = useState(false);

    function sendEmail(e) {
        e.preventDefault();

        setSendMessageSuccess(true);
        setModalDisplay(true);
    
        // emailjs.sendForm('service_sjqmf2m', 'template_dzvrpnq', e.target, 'user_0Znqwgyp7svJTtgKIL4gz')
        //   .then((result) => {
        //       console.log(result.text);
        //       setSendMessageSuccess(true);
        //       setModalDisplay(true);
        //   }, (error) => {
        //       console.log(error.text);
        //       setSendMessageSuccess(false);
        //       setModalDisplay(true);
        //   });
      }

    return (
        <>
            <form className={styles.contact} onSubmit={sendEmail} style={style}>
                <h2>Contact Me</h2>
                <div>
                    <label for="name">Your Name</label>
                    <input className= "name-input" type="text" name="name" placeholder="Name" id="name" required/>
                </div>
                <div>
                    <label for="email">Your Email</label>
                    <input className= "email-input" type="email" name="email" placeholder="Email" id="email" required/>
                </div>
                <div>
                    <label for="subject">Subject</label>
                    <input className= "subject-input" type="text" name="subject" placeholder="Subject" id="subject" required/>
                </div>
                <div>
                    <label for="message">Message</label>
                    <textarea className="message-input" name="message" placeholder="Message" id="message" required/>
                </div>
                <input type="submit" value="Send"  className="submit-button"/>
            </form>
                { sendMessageSuccess ?
                    <Modal 
                        display={modalDisplay} 
                        onClose={() => setModalDisplay(false)}
                        heading={'Thanks'}
                    >
                        <p>I will get back to you as soon as I can</p>
                    </Modal>
                :
                    <Modal 
                        display={modalDisplay} 
                        onClose={() => setModalDisplay(false)}
                        heading={'Sorry'}
                    >
                        <p>Your message failed to send. Try sending it again</p>
                    </Modal>
                }
        </>
    )
}

export default ContactMe
