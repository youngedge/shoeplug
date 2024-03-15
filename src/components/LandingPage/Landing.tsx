import React from 'react';
import './Landing.css'; // Make sure you have this CSS file
import { Link } from 'react-router-dom';
import logo from './logo3.svg';

const Landing = () => {
    return (
        <nav className="navbar">
            <div className='Logo3'>
                <img src={logo} alt="ShoePlug Logo" />
            </div>
            <div className="search-bar"> 
                <input type="text" placeholder="Search for shoes" /> 
            </div> 
            <Link to="/">Home</Link> 
            <Link to="/profile">Profile</Link>
            <Link to="/settings">Settings</Link>
        </nav>
    );
};

export default Landing;
