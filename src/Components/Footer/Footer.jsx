import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div className="" >
                    <h1 style={{fontSize : '3rem'}}>LM</h1>
                    <p style={{fontSize : '1rem'}}>follow us on the networks</p>
                </div>
                <div className="">
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-github-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>
          
        </div>
    )
}

export default Footer;