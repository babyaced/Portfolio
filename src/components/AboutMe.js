import React from 'react'

import styles from './AboutMe.module.css';

import GithubIcon from '../assets/logos/icons8-github.svg'

import LinkedInIcon from '../assets/logos/icons8-linkedin.svg'

import TwitterIcon from '../assets/logos/icons8-twitter.svg'

import CodepenIcon from '../assets/logos/icons8-codepen.svg'

function AboutMe() {    
      return (
        <>
            
                <div className={styles.aboutMe}>
                    <h1>Daniel Simpson</h1>
                    <p>Hi I'm a web developer who likes making beautiful and functional web applications. Check out some of my projects</p>
                </div>
                <ul className={styles.socialLinks}>
                    <li>
                        <a href="https://github.com/babyaced" target="_blank" rel="noopener noreferrer"><img src={GithubIcon} alt=""/></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/daniel-simpson-975536129/" target="_blank" rel="noopener noreferrer"><img src={LinkedInIcon} alt=""/></a>
                    </li>
                    <li>
                        <a href="https://codepen.io/babyaced" target="_blank" rel="noopener noreferrer"><img src={CodepenIcon} alt=""/></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/baby_aced" target="_blank" rel="noopener noreferrer"><img src={TwitterIcon} alt=""/></a>
                    </li>
                </ul>
        </>
      )
}

export default AboutMe
