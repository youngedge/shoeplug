"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./Landing.css"); // Make sure you have this CSS file
const react_router_dom_1 = require("react-router-dom");
const logo3_svg_1 = __importDefault(require("./logo3.svg"));
const ri_1 = require("react-icons/ri");
const lu_1 = require("react-icons/lu");
const pi_1 = require("react-icons/pi");
const fa_1 = require("react-icons/fa");
const Landing = () => {
    return (<div className='header-container'>
           <div className="background-image-section">
       </div>
        <nav className="navbar">
            <div className='Logo3'>
                <img src={logo3_svg_1.default} alt="ShoePlug Logo"/>
            </div>
            <div className="search-bar"> 
            <div className="search-logo-container">
            <ri_1.RiSearch2Line className='search-logo' size="25px"/>
            </div>
            <div className='likes-container'>
            <lu_1.LuHeart className='likes' size="20px"/>
            </div>
            <div className='cart-container'>
            <react_router_dom_1.Link to='/cart'> 
            <pi_1.PiShoppingCartBold className='cart' size="20px"/>
            </react_router_dom_1.Link>
            </div>
            <div className='user-container'>
            <fa_1.FaRegUser className='user' size="20px"/>
            </div>
                <input type="text" placeholder="Search for shoes"/> 
            </div> 
            <div className='Sp'>
              <span className='radwave-text'>
              SHOE PLUG
              </span>
              <span className='radwave-text-shadow'>
              SHOE PLUG
              </span>
            </div>
            <div className='explore'>
              Explore our amazing collection of 
              trendy kicks and find the perfect
              pair to rock your style
              </div>
            <button className='pill'>
                <span className='pill-tittle'>SHOP NOW</span>
            </button>
            <div className='nav-container'>
            <react_router_dom_1.Link to="/landing">HOME</react_router_dom_1.Link> 
            <react_router_dom_1.Link to="">TRENDING</react_router_dom_1.Link>
            <react_router_dom_1.Link to="">NEW ARRIVALS</react_router_dom_1.Link>
            <react_router_dom_1.Link to="">COLLECTIONS</react_router_dom_1.Link>
            </div>
        </nav>
        </div>);
};
exports.default = Landing;
