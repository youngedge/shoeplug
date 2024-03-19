import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import logo from './logo3.svg';
import { RiSearch2Line } from "react-icons/ri";
import { LuHeart } from "react-icons/lu";
import { PiShoppingCartBold } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
export class Cart extends Component {


  render() {
    return (
      <div>
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
            <Link to='/cart'> 
            <PiShoppingCartBold className='cart' size="20px"/>
            </Link>
            </div>
            <div className='user-container'>
            <FaRegUser className='user'  size="20px"/>
            </div>
                <input type="text" placeholder="Search for shoes" /> 
            </div> 
                    <div className='nav-container'>
            <Link to="/landing">HOME</Link> 
            <Link to="">TRENDING</Link>
            <Link to="">NEW ARRIVALS</Link>
            <Link to="">COLLECTIONS</Link>
            </div>
            </nav>
            <div className='member-box'>
            <div className="member-content"> 
              <span className='member1'>Members get free shipping on orders ₦20,000+</span>
              <span className='member2'>Become a SHOES Member for fast free shipping on orders ₦20,000+</span>
              <span className='member3'>
              <Link to="">Join us</Link> <span className='or'>or</span>
              </span>
              <span className='cart-name'>Cart</span>
              <span className='member4'>
              <Link to="">Sign in</Link> 
              </span>
              </div>
            </div>

            <div className='cart-summary'>
              <span className='summary'>summary</span>
              <span className='sub-t'>Subtotal</span>
              <span className='estimated-ship-handling'>Estimated Shipping & Handling</span>
              <span className='estimated-tax'>Estimated Tax</span>
              <span className='discount-total'>Discount Total</span>
              <span className='total'>Total</span>
              <button type="button">
            <Link to="">Checkout</Link> 
        </button>
            </div>
      </div>
    )
  }
}

export default Cart
