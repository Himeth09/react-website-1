import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../images/glass-planet-green.png'
import "../styles/Home.css"

function Home() {
    return (
        <div className="home">
            <div className="header-container" style={{backgroundImage: `url(${BannerImage})`}}>
                <h1>Himeth Jayakody</h1>
                <p>Software Engineering @ University of North Carolina at Charlotte</p>
                <Link to="/Projects">
                    <button>Projects</button>
                </Link>
            </div>
        </div>
    )
}

export default Home
