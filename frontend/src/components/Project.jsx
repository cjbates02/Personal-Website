import IconGitHub from "../assets/icons/github.svg";
import IconTool from "../assets/icons/tool.svg";
import ToolList from "./ToolList.jsx";
import { useState } from "react";

export default function Project({ title, desc, gitHubLink, demoLink }) {
    const [showToolList, setShowToolList] = useState(true);

    return (
        <div className="project-container">
            <div className="project-title-container">
                <a href={gitHubLink} title="Source Code Link" className="project-title-wrapper">
                    <img alt="Git Hub" className="icon project-git-hub" src={IconGitHub}></img>
                    <span className="project-title">{title}</span>
                </a>
                <img alt="Tools Used" 
                     title="Project Tools" 
                     className="icon project-tool" 
                     src={IconTool}
                     onMouseEnter={() => {setShowToolList(true)}}
                     onMouseLeave={() => {setShowToolList(false)}}
                >     
                </img>
                {showToolList ? ToolList([]) : <></>}
            </div>
            <div className="project-desc">{desc}</div>
            <div className="demo-container">
                {demoLink ? (<a href={demoLink} title="Demo Link"><span className="project-demo">Demo</span></a>) : (<span></span>)}
            </div>
        </div>
    )
}