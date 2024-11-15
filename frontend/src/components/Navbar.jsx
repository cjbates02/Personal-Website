import IconEmail from "../assets/icons/email.svg"
import IconPhone from "../assets/icons/phone.svg"
import IconGitHub from "../assets/icons/github.svg"
import IconLinkedIn from "../assets/icons/linkedin.svg"
import IconDownload from "../assets/icons/download.svg"
import IconCopied from "../assets/icons/copy.svg"


function Navbar() {
    function handleCopyClick(e) {
        const id = e.target.id;
        const iconSrc = e.target.src;
        const copiedText = (id === 'email' ? 'cbate001@plattsburgh.edu' : '(518)-871-3802');
        navigator.clipboard.writeText(copiedText);
        e.target.src = IconCopied;
        setTimeout(() => {
            e.target.src = iconSrc;
        }, 1000);
    }

    return (
        <div className="navbar-container">
            <div className="navbar-btns">
                <a title="Download Resume" className="resume-download-a" href="http://127.0.0.1:5000/download/resume">
                    <img alt="Download Resume" className="icon download-resume-icon" src={IconDownload}></img>
                    <span className="navbar-button">Resume</span>
                </a>
            </div>
            <div className="contact-icon-container">
                <span className="icon-container">
                    <a href="https://www.linkedin.com/in/christianbates02/">
                        <img title="LinkedIn" alt="LinkedIn" className="icon" src={IconLinkedIn}></img>
                    </a>
                </span>
                <span className="icon-container"><a href="https://github.com/cjbates02"><img title="GitHub" alt="GitHub" className="icon" src={IconGitHub}></img></a></span>

                <span id="phone-number" className="icon-container">
                    <img id="phone-number" title="(518)-871-3802" alt="Phone Number" className="icon" src={IconPhone} onClick={handleCopyClick}></img>
                </span>
                <span id="email" className="icon-container">
                    <img id="email" title="cbate001@plattsburgh.edu" alt="Email" className="icon" src={IconEmail} onClick={handleCopyClick}></img>
                </span>
            </div>
        </div>
    );
};

export default Navbar;