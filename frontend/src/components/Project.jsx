export default function Project({ title, desc, gitHubLink, demoLink }) {
    return (
        <div className="project-container">
            <a href={gitHubLink} title="Source Code Link"><span className="project-title">{title}</span></a>
            <p className="project-desc">{desc}</p>
            <div className="demo-container"><a href={demoLink} title="Demo Link"><span className="project-demo">Demo</span></a></div>
        </div>
    )
}