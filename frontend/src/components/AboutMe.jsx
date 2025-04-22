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
                        I am a software developer working as a junior system reliability engineer at FMX.
                    </p>
                </div>
            </div>
        </div>
    )
}