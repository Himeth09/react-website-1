import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="socials">
                <InstagramIcon />
                <LinkedInIcon />
                <GithubIcon />
            </div>
            <p>Designed and developed by Himeth Jayakody 2021</p>
            <p>Built with <a target="_blank" href="https://reactjs.org" rel="noopener noreferrer">React.js</a></p>
        </div>
    )
}

export default Footer
