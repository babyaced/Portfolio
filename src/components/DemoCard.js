import React from 'react'

import {useParams} from 'react-router-dom'

import styles from './DemoCard.module.css'

function DemoCard() {

    console.log("DemoCard")

    const {videoPath} = useParams()
    

    console.log('videoPath: ',videoPath);

    return (
        <article className={styles.demoCard}>
            <video controls>
                <source src={`${videoPath}`} type="video/mp4"/>
                Your browser does not support the video tag.
            </video> 
        </article>
    )
}

export default DemoCard
