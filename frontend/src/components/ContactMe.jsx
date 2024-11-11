export default function ContactMe() {
    return (
        <div className="contact-me-container">
            <div className="contact-me-title">
                <span>Let's get in touch.</span>
            </div>
            <div className="contact-input-container">
                <input className="input-email" placeholder="Email"></input>
                <textarea className="input-message" placeholder="Message"></textarea>
                <div className="submit-container">
                    <span className="submit-btn">Submit</span>
                </div>
            </div>
        </div>
    )
}