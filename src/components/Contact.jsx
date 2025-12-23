import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    const [error, setError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setError(false); // Reset error state on new submission

        emailjs
            .sendForm('service_pb3dnem', 'template_9q4z852', form.current, {
                publicKey: 'D82krejlgjXQT9O7Q',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setDone(true);
                    setError(false);
                    form.current.reset();
                    setTimeout(() => setDone(false), 3000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setError(true);
                    setTimeout(() => setError(false), 3000);
                },
            );
    };

    return (
        <div className="section" id="contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                    background: 'var(--glass)',
                    padding: '3rem',
                    borderRadius: '20px',
                    border: '1px solid var(--glass-border)',
                    width: '100%',
                    maxWidth: '600px',
                    textAlign: 'center'
                }}
            >
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Get in <span style={{ color: 'var(--accent)' }}>Touch</span></h2>

                <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <input type="text" name="to_name" placeholder="Name" style={inputStyle} required />
                    <input type="email" name="user_mail" placeholder="Email" style={inputStyle} required />
                    <textarea name="message" placeholder="Message" style={{ ...inputStyle, minHeight: '150px' }} required />
                    <button type="submit" style={buttonStyle}>Send Message</button>

                    {done && <span style={{ color: 'var(--primary)', marginTop: '1rem', fontWeight: 'bold' }}>Thanks for contacting me!</span>}
                    {error && <span style={{ color: 'red', marginTop: '1rem', fontWeight: 'bold' }}>Something went wrong. Please try again.</span>}
                </form>

                <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                    <a href="https://github.com/Lelouch0909" target="_blank" rel="noopener noreferrer" style={{ fontSize: '2rem' }}>
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com/in/hermannlontsi" target="_blank" rel="noopener noreferrer" style={{ fontSize: '2rem' }}>
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="mailto:lontsi@fullstackhermann.site" style={{ fontSize: '2rem' }}>
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

const inputStyle = {
    padding: '1rem',
    borderRadius: '10px',
    background: 'rgba(255,255,255,0.05)',
    color: 'white',
    fontFamily: 'inherit',
    fontSize: '1rem',
    outline: 'none',
    border: '1px solid transparent',
    transition: 'border 0.3s'
};

const buttonStyle = {
    padding: '1rem',
    borderRadius: '10px',
    border: 'none',
    background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '1rem'
};

export default Contact;
