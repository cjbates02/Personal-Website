import React, { useState } from 'react';

export default function ContactMe() {
    const [message, setMessage] = useState('');

    function handleMessageChange(e) {
        setMessage(e.target.value);
    }

    function handleMessageSubmit() {
        fetch('http://127.0.0.1:5000/send-email', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({message}),
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
    }

    return (
        <div className="contact-me-container">
            <div className="contact-me-title">
                <span>Let's get in touch.</span>
            </div>
            <div className="contact-input-container">
                <input className="input-email" placeholder="Email"></input>
                <textarea className="input-message" onChange={handleMessageChange} placeholder="Message"></textarea>
                <div className="submit-container">
                    <span className="submit-btn" onClick={handleMessageSubmit}>Submit</span>
                </div>
            </div>
        </div>
    )
}