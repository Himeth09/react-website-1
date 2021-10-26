import React from 'react';
import BannerImage from '../images/glass-planet-green.png';
import "../styles/Home.css";

function Home() {
    return (
        <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>
            <div className="header-container">
                <h1>Himeth Jayakody</h1>
                <p>Software Engineering @ UNC Charlotte</p>
            </div>
        </div>
    )
}

export default Home
