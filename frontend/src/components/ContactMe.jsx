import React, { useState, useRef } from 'react';
import LoadingIcon from './LoadingIcon.jsx';

export default function ContactMe() {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const textAreaRef = useRef(null);
    const emailInputRef = useRef(null);

    function handleMessageChange(e) {
        setMessage(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handleMessageSubmit(e) {
        if (!message || !email) {
            alert('Please enter both a message and your email and try again.');
            return
        }
        setLoading(true);

        textAreaRef.current.value = '';
        emailInputRef.current.value = '';

        fetch('http://127.0.0.1:5000/send-email', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({'email': email, 'message': message}),
        })
        .then(response => {
            response.json();
            setLoading(false);
        })
        .then(data => console.log(data))
        .catch(error => console.log(error));

        setMessage('');
        setEmail('');
    }

    return (
        <div className="contact-me-container">
            <div className="contact-me-title">
                <span>Let's get in touch.</span>
            </div>
            <div className="contact-input-container">
                <input className="input-email" type="email" onChange={handleEmailChange} placeholder="Email" ref={textAreaRef} required></input>
                <textarea className="input-message" onChange={handleMessageChange} placeholder="Message" ref={emailInputRef} required></textarea>
                <div id="submit-container" className="submit-container">
                    {
                        loading ? (<LoadingIcon />) : (<span title="Submit Message" className="submit-btn" onClick={handleMessageSubmit}>Submit</span>)
                    }
                </div>
            </div>
        </div>
    )
}