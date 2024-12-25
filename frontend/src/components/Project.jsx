import IconGitHub from "../assets/icons/github.svg";

export default function Project({ title, desc, gitHubLink, demoLink }) {
    return (
        <div className="project-container">
            <a href={gitHubLink} title="Source Code Link" className="project-title-container">
                <img alt="Git Hub" className="icon project-git-hub" src={IconGitHub}></img>
                <span className="project-title">{title}</span>
            </a>
            <p className="project-desc">{desc}</p>
            <div className="demo-container">
                {demoLink ? (<a href={demoLink} title="Demo Link"><span className="project-demo">Demo</span></a>) : (<span></span>)}
            </div>
        </div>
    )
}