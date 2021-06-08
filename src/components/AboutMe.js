import React from 'react'

import styles from './AboutMe.module.css';

import GithubIcon from '../assets/logos/icons8-github.svg'

import LinkedInIcon from '../assets/logos/icons8-linkedin.svg'

import TwitterIcon from '../assets/logos/icons8-twitter.svg'

import CodepenIcon from '../assets/logos/icons8-codepen.svg'

function AboutMe() {    
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
            

        </>
      )
}

export default AboutMe
