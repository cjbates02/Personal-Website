import IconEmail from "../assets/icons/email.svg"
import IconPhone from "../assets/icons/phone.svg"
import IconGitHub from "../assets/icons/github.svg"
import IconLinkedIn from "../assets/icons/linkedin.svg"



function Navbar({ setShowAboutMe, showAboutMe }) {
    function handleAboutMeClick() {
        setShowAboutMe(!showAboutMe);
    }
    return (
        <div className="navbar-container">
            <div className="navbar-btns">
                <span className="navbar-button" onClick={handleAboutMeClick}>Portfolio</span>
                <span className="navbar-button">Blog</span>
                <a className="resume-upload-a" href="http://127.0.0.1:5000/download/resume">
                    <span className="navbar-button">Resume</span>
                </a>
            </div>
            <div className="contact-icon-container">
                <span className="icon-container"><a href="https://www.linkedin.com/in/christianbates02/"><img title="LinkedIn" alt="LinkedIn" className="icon" src={IconLinkedIn}></img></a></span>
                <span className="icon-container"><a href="https://github.com/cjbates02"><img title="GitHub" alt="GitHub" className="icon" src={IconGitHub}></img></a></span>
                <span className="icon-container"><img title="Phone Number" alt="Phone Number" className="icon" src={IconPhone}></img></span>
                <span className="icon-container"><img title="Email" alt="Email" className="icon" src={IconEmail}></img></span>
            </div>
        </div>
    );
};

export default Navbar;