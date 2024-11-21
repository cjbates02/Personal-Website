import React, { useState, useRef } from 'react';
import LoadingIcon from './LoadingIcon.jsx';
import SuccessIcon from './SuccessIcon.jsx';


export default function ContactMe() {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [showSuccessIcon, setShowSuccessIcon] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    const textAreaRef = useRef(null);
    const emailInputRef = useRef(null);

    function handleMessageChange(e) {
        setMessage(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function displaySuccessIndication(response) {
        if (response.ok) {
            setShowSuccessIcon(true);
            setTimeout(() => {
                setShowSuccessIcon(false);
            }, 2000);
        }
        else {
            displayErrorMessage();
        }
    }

    function displayErrorMessage() {
        setShowFailureMessage(true);
        setTimeout(() => {
            setShowFailureMessage(false);
        }, 5000);
    }

    function handleMessageSubmit(e) {
        if (!message || !email) {
            alert('Please enter both a message and your email and try again.');
            return
        }
        setLoading(true);
        textAreaRef.current.value = '';
        emailInputRef.current.value = '';

        fetch('https://christianbates.org/api/send-email', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({'email': email, 'message': message}),
        })
        .then(response => {
            response.json();
            setLoading(false);
            displaySuccessIndication(response);
        })
        .then(data => console.log(data))
        .catch(error => {
            setLoading(false);
            displayErrorMessage();
        })   
        setMessage('');
        setEmail('');
    }

    return (
        <div className="contact-me-container">
            <div className="contact-me-title">
                <span>Let's get in touch!</span>
            </div>
            <div className="contact-input-container">
                <input className="input-email" type="email" onChange={handleEmailChange} placeholder="Email" ref={textAreaRef} required></input>
                <textarea className="input-message" onChange={handleMessageChange} placeholder="Message" ref={emailInputRef} required></textarea>
                <div id="submit-container" className="submit-container">
                    {
                        loading ? (<LoadingIcon />) : (<span title="Submit Message" className="submit-btn" onClick={handleMessageSubmit}>Submit</span>)
                    }
                    {
                        showSuccessIcon ? (<SuccessIcon />) : (<></>)
                    }
                </div>
            </div>
                {
                    showFailureMessage ? (<span className="message-failed-span">Message failed to send, please email me directly.</span>) : (<></>)
                }
        </div>
    )
}