import React from 'react';
import './Landing.css'; // Make sure you have this CSS file
import { Link } from 'react-router-dom';
import logo from './logo3.svg';
import { RiSearch2Line } from "react-icons/ri";
import { LuHeart } from "react-icons/lu";
import { PiShoppingCartBold } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
const Landing = () => {
    return (
      <div className='header-container'>
           <div className="background-image-section">
       </div>
        <nav className="navbar">
            <div className='Logo3'>
                <img src={logo} alt="ShoePlug Logo" />
            </div>
            <div className="search-bar"> 
            <div className="search-logo-container">
            <RiSearch2Line className='search-logo' size="25px" />
            </div>
            <div className='likes-container'>
            <LuHeart className='likes' size= "20px"/>
            </div>
            <div className='cart-container'>
            <PiShoppingCartBold className='cart' size="20px"/>
            </div>
            <div className='user-container'>
            <FaRegUser className='user'  size="20px"/>
            </div>
                <input type="text" placeholder="Search for shoes" /> 
            </div> 
            <div className='nav-container'>
            <Link to="/Home">HOME</Link> 
            <Link to="/Trending">TRENDING</Link>
            <Link to="/NewArrivals">NEW ARRIVALS</Link>
            <Link to="/Collections">COLLECTIONS</Link>
            </div>
        </nav>
        </div>
    );
};

export default Landing;
