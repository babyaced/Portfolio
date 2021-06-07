import React from 'react'

import styles from './MusicPlayer.module.css'

//Import card image
import MusicPlayerPreview from '../assets/images/SwiftMusic1.PNG'

import FirebaseLogo from '../assets/logos/Firebase.svg'
import SwiftLogo from '../assets/logos/Swift_logo_color.svg'

function MusicPlayer() {
    return (
        <article className={styles.musicPlayerCard}>
            <h1>iOS Music Streaming App</h1>
            <ul className={styles.techStack}>
                <li>
                    <img src={FirebaseLogo} alt=""/>
                </li>
                <li>
                    <img src={SwiftLogo} alt=""/>
                </li>
            </ul>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dicta fugiat commodi debitis culpa numquam. Architecto quibusdam in impedit officia ipsam optio, neque quos quasi iusto et dignissimos non repudiandae!</p>
        </article>
    )
}

export default MusicPlayer
