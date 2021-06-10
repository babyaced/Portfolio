import {useState} from 'react'

import emailjs from 'emailjs-com';

import styles from './ContactMe.module.css'
import Modal from './Modal';

function ContactMe({style}) {

    const [modalDisplay, setModalDisplay] = useState(false)
    const [sendMessageSuccess, setSendMessageSuccess] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [nameError,setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [subjectError, setSubjectError] = useState('');
    const [messageError, setMessageError] = useState('');

    function sendEmail(e) {
        e.preventDefault();



        const isValid = validate();

        if(isValid){
            emailjs.sendForm(process.env.REACT_APP_EMAIL_JS_SERVICE_NAME, process.env.REACT_APP_EMAIL_JS_TEMPLATE_NAME, e.target, process.env.REACT_APP_EMAIL_JS_USER_NAME)
            .then((result) => {
                console.log(result.text);
                setSendMessageSuccess(true);
                setModalDisplay(true);
            }, (error) => {
                console.log(error.text);
                setSendMessageSuccess(false);
                setModalDisplay(true);
            });

            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
            setNameError('');
            setEmailError('');
            setSubjectError('');
            setMessageError('');
        }
        else{
            return
        }

    }

    function validate(){
        let nameErr = "";
        let emailErr = "";
        let subjectErr = "";
        let messageErr = "";

        console.log("name: ", name);

        if (!name){
            nameErr = "Please enter a Name"
        }

        if (!email){
            emailErr = "Please enter a Email"
        }

        if (!subject){
            subjectErr = "Please enter a Subject"
        }

        if(!message){
            messageErr = "Please enter a Message"
        }

        if(!email.includes('@')){
            emailErr = 'Invalid Email';
        }

        if(nameErr){
            console.log(nameErr)
            setNameError(nameErr);
            
        }

        if(messageErr){
            console.log(messageErr)
            setMessageError(messageErr);
        }

        if(subjectErr){
            console.log(subjectErr)
            setSubjectError(subjectErr);
        }

        if(emailErr){
            console.log(emailErr)
            setEmailError(emailErr);
        }

        if(nameErr || emailErr || subjectErr || messageErr){
            return false;
        }

        console.log('no errors');
        return true;
    }

    return (
        <>
            <form className={styles.contactMeForm} onSubmit={sendEmail} style={style}>
                <h2>Contact Me</h2>
                <div>
                    <label for="name">Your Name </label>
                    <span>{nameError}</span>
                    {!nameError ? <input type="text" name="name" placeholder="Name" id="name" value={name} onChange={(e) =>setName(e.target.value)}/> :  <input className={styles.invalid} type="text" name="name" placeholder="Name" id="name" value={name} onChange={(e) =>setName(e.target.value)}/>}
                    
                </div>
                <div>
                    <label for="email">Your Email</label>
                    <span>{emailError}</span>
                    {!emailError ?  <input type="email" name="email" placeholder="Email" id="email" value={email} onChange={(e) =>setEmail(e.target.value)}/> : <input className={styles.invalid} type="email" name="email" placeholder="Email" id="email" value={email} onChange={(e) =>setEmail(e.target.value)}/>}
                    
                </div>
                <div>
                    <label for="subject">Subject</label>
                    <span>{subjectError}</span> 
                    {!subjectError ? <input type="text" name="subject" placeholder="Subject" id="subject" value={subject} onChange={(e) =>setSubject(e.target.value)}/> : <input className={styles.invalid} type="text" name="subject" placeholder="Subject" id="subject" value={subject} onChange={(e) =>setSubject(e.target.value)}/>}
                    
                </div>
                <div>
                    <label for="message">Message</label>
                    <span>{messageError}</span>
                    {!messageError ? <textarea className="message-input" name="message" placeholder="Message" id="message" value={message} onChange={(e) =>setMessage(e.target.value)}/> : <textarea className={styles.invalid} name="message" placeholder="Message" id="message" value={message} onChange={(e) =>setMessage(e.target.value)}/>}
                    
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
