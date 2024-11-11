export default function Project({ title, desc, gitHubLink, demoLink }) {
    return (
        <div className="project-container">
            <a href={gitHubLink}><span className="project-title">{title}</span></a>
            <p className="project-desc">{desc}</p>
            <a href={demoLink}><span className="project-demo">Demo</span></a>
        </div>
    )
}