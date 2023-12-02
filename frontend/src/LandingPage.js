import React from 'react';
import './style/LandingPage.css';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div className="landing-page">
            <section className="hero">
                <div className="hero-content">
                    <h1>Learn Anything, Anytime, Anywhere</h1>
                    
                    <Link to="./Login" className="cta-button">Manage</Link>
                </div>
            </section>
            
            
        </div>
    );
}

export default LandingPage;
