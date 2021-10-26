import React from 'react'
import ImageBanner from '../images/profile-logo.jpg';
import '../styles/About.css'

function About() {
    return (
        <div className="about">
            <div className="about-top" style={{backgroundImage: `url(${ImageBanner})`}}>
                
            </div>
            <div className="about-bottom">
                <h1>About Me</h1>
                <p>Junior at the University of North Carolina at Charlotte pursuing a Bachelor's in Computer Science with a concentration in Software Engineering.
                Currently a TA for ITSC 3146 Intro to Operating Systems &amp; Networking. Been using a computer since elementary school, avid gamer and tech enthusiast, been known to tinker around with both hardware and software.
                Windows 10, my pride and joy is my desktop that I built myself. Also loaded Windows 11 on my laptop that I take to class.
                </p>
            </div>
        </div>
    )
}

export default About
