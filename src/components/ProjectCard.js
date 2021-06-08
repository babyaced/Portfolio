import React from 'react'

import styles from './ProjectCard.module.css'

function ProjectCard({projectTitle, projectRepo, projectTechStack, style, projectLink}) {
    console.log(projectTechStack);
    return (
        <article className={styles.projectCard} style={style}>
            <div className={styles.projectCardHeader}>
                <h2>{projectTitle}</h2>
            </div>
            <a href={projectRepo} target="_blank" rel="noreferrer">View Code</a>
            <a href={projectLink} target="_blank" rel="noreferrer">See Demo</a>
            <ul className={styles.techStack}>
                {Object.entries(projectTechStack).map(([name, logo]) =>
                    <li key={name}>
                        <img src={logo} alt="" title={name}/>
                    </li>
                )}
            </ul>
        </article>
    )
}

export default ProjectCard
