import {useEffect}from 'react'
import ReactDom from 'react-dom'

import styles from './Modal.module.css'

import ExitIcon from '../assets/icons/Exit.svg'



function Modal({display,heading, children, onClose}) {

    useEffect(()=>{  //to disable scrolling behind modal
        if(display){  //componentDidMount
            document.body.style.overflow = 'hidden';
        }

        return () =>{  //componentWillUnmount
            document.body.style.overflow='unset';
        }
    },[display]) //if display changes

    let overlayClassName=''
    let modalClassName = ''
    if(display){
        overlayClassName= 'overlayVisible'
        modalClassName = 'modalVisible'
    } 

    console.log('display: ', display)
    
    return ReactDom.createPortal(
        <>
            <div className={`${styles.overlay} ${styles[overlayClassName]}`}/>
            <div className={`${styles.modal} ${styles[modalClassName]}`} >
                <div className={styles.modalHeading}>
                    <h1>{heading}</h1>
                </div>
                {children}
                <button className={styles.okButton} onClick={onClose}>Ok</button>
            </div>
        </>,
        document.getElementById('modal-portal')
    )
}

export default Modal