import React from 'react'

import styles from './ProjectCard.module.css'

function ProjectCard({projectTitle, projectRepo, projectTechStack, style}) {
    return (
        <article className={styles.projectCard} style={style}>
            <div className={styles.projectCardHeader}>
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
