import Project from './Project.jsx';
export default function Projects({ projects }) {
    return (
        <div className="projects-container">
            <span className="projects-title">Projects</span>
            <div className="projects-content-container">
                {projects.map((project) => {
                    return <Project
                                title={project.title} 
                                desc={project.desc}
                                gitHubLink={project.gitHubLink}
                                demoLink={project.demoLink} 
                            />
                })}
            </div>
        </div>
    )
}