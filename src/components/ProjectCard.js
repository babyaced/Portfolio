import React from 'react'

import styles from './MusicPlayer.module.css'

function ProjectCard({projectTitle, projectRepo, projectTechStack, style}) {
    return (
        <article className={styles.musicPlayerCard} style={style}>
            <div className={styles.musicPlayerCardHeader}>
                <h1>{projectTitle}</h1>
                <a href={projectRepo} target="_blank">View Code</a>
            </div>
            <ul className={styles.techStack}>
                {projectTechStack.map((logo) =>
                    <li key={logo}>
                        <img src={logo} alt=""/>
                    </li>
                )}
            </ul>
        </article>
    )
}

export default ProjectCard
