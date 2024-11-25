import ProfilePhoto from "../assets/profile-photo.jpeg"

export default function AboutMe({projects, isMobileDevice}) {
    function handleContactMeClick(e) {
        let parentContainer = null;
        if (isMobileDevice) {
            parentContainer = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
        } else {
            parentContainer = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        }

        parentContainer.scrollTo({
            top: parentContainer.scrollHeight,
            behavior: 'smooth',
        });
    }

    return (
        <div className="about-me-container">
            <div className="about-me-content">
                <div className="profile-photo-container">
                    <img className="profile-photo" alt="Profile" src={ProfilePhoto}></img>
                    <div>
                        <div className="about-me-title">Christian Bates</div>
                        <div className="contact-me-link" onClick={handleContactMeClick}>Contact Me</div>
                    </div>
                </div>
                <div className="about-me-body">
                    <p>
                    I’m a software developer with hands-on experience in full-stack web development. During my internship at Cantor Fitzgerald, I developed real-time web applications and network automation tools using JavaScript, Python, and HTML/CSS. In addition, as Co-Director at the Center for Cybersecurity and Technology at Plattsburgh, I’ve led projects, workshops, and developed internal tools for the organization. I’m now seeking an entry-level software development role where I can leverage my skills in Python, web development, and problem-solving to contribute to impactful software solutions.
                    </p>
                </div>
            </div>
        </div>
    )
}