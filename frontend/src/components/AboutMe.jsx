import ProfilePhoto from "../assets/profile-photo.jpeg"

export default function AboutMe({ showAboutMe }) {
    const containerClass = showAboutMe ? "about-me-container" : "about-me-container";
    return (
        <div className="about-me-container">
            <div className="about-me-content">
                <div className="profile-photo-container">
                    <img className="profile-photo" alt="Profile" src={ProfilePhoto}></img>
                    <span className="about-me-title">Christian Bates</span>
                </div>
                <div className="about-me-body">
                    <p>
                        I keep things simple. I focus on writing reusable clean software that is easy to both use and maintain.
                    </p>
                    <p>
                        I am a software developer looking for entry level roles starting in May 2025, post graduation. I
                        have found expertise in writing backend systems and automation tools in Python, and intuitive frontends in HTML, CSS, and JavaScript.
                        This website is actually written in react with a flask backend! Currently, I work for Cantor Fitzgerald
                        writing software to support our futures exchange called FMX.
                    </p>
                </div>
            </div>
        </div>
    )
}