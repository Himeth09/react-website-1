import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="socials">
                <a href="https://instagram.com/himeth_jayakody/" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon />
                </a>
                <a href="https://linkedin.com/in/himeth-jayakody/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                </a>
                <a href="https://github.com/Himeth09/" target="_blank" rel="noopener noreferrer">
                    <GithubIcon />
                </a>
            </div>
            <p>Designed and developed by Himeth Jayakody 2021</p>
            <p>Built with <a target="_blank" href="https://reactjs.org" rel="noopener noreferrer">React.js</a></p>
        </div>
    )
}

export default Footer
