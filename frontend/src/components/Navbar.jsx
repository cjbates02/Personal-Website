
function Navbar({ setShowAboutMe, showAboutMe }) {
    function handleAboutMeClick() {
        setShowAboutMe(!showAboutMe);
    }
    return (
        <div className="navbar-container">
            <div className="navbar-title-container">
                <span>Christian Bates</span>
            </div>
            <div className="navbar-btns">
                <span className="navbar-button" onClick={handleAboutMeClick}>About me</span>
                <span className="navbar-button">Blog</span>
                <a className="resume-upload-a" href="http://127.0.0.1:5000/download/resume">
                    <span className="navbar-button">Resume</span>
                </a>
            </div>
        </div>
    );
};

export default Navbar;