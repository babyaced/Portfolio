import React from 'react'

import {useSpring, animated, config} from "react-spring";

import styles from './VideoModal.module.css'

function VideoModal({video, showModal, closeModal}) {
    const animation = useSpring({
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0)` : `translateY(-200%)`,
        config: config.slow
    })

    if(!showModal) return null
    return (
        <animated.div style={animation} className={styles['modal']}>
                <video width="320" height="240" controls>
                    <source src={video} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video> 
                <button aria-label="Close modal" onClick={console.log('closing modal')}>
                    Close
                </button>
        </animated.div>
    )
}

export default VideoModal
