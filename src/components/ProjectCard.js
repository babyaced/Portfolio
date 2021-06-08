import {useState} from 'react'

import styles from './ProjectCard.module.css'

import VideoModal from './VideoModal.js'

function ProjectCard({projectTitle, projectRepo, projectTechStack, style, projectLink, demoVideo}) {

    const [showModal, setShowModal] = useState(false); 

    return (
        <>
        <article className={styles.projectCard} style={style}>
            <div className={styles.projectCardHeader}>
                <h2>{projectTitle}</h2>
            </div>
            <a href={projectRepo} target="_blank" rel="noreferrer">View Code</a>
            {demoVideo && <a href={`${demoVideo}`} target="_blank" rel="noreferrer">See Demo</a>}
            {projectLink && <a href={projectLink} target="_blank" rel="noreferrer">See Project</a>}
            <ul className={styles.techStack}>
                {Object.entries(projectTechStack).map(([name, logo]) =>
                    <li key={name}>
                        <img src={logo} alt="" title={name}/>
                    </li>
                )}
            </ul>
        </article>
        </>
    )
}

export default ProjectCard
