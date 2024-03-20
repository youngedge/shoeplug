"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("./Cart.css");
const logo3_svg_1 = __importDefault(require("./logo3.svg"));
const ri_1 = require("react-icons/ri");
const lu_1 = require("react-icons/lu");
const pi_1 = require("react-icons/pi");
const fa_1 = require("react-icons/fa");
class Cart extends react_1.Component {
    render() {
        return (<div>
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
                    <div className='nav-container'>
            <react_router_dom_1.Link to="/landing">HOME</react_router_dom_1.Link> 
            <react_router_dom_1.Link to="">TRENDING</react_router_dom_1.Link>
            <react_router_dom_1.Link to="">NEW ARRIVALS</react_router_dom_1.Link>
            <react_router_dom_1.Link to="">COLLECTIONS</react_router_dom_1.Link>
            </div>
            </nav>
            <div className='member-box'>
            <div className="member-content"> 
              <span className='member1'>Members get free shipping on orders ₦20,000+</span>
              <span className='member2'>Become a SHOES Member for fast free shipping on orders ₦20,000+</span>
              <span className='member3'>
              <react_router_dom_1.Link to="">Join us</react_router_dom_1.Link> <span className='or'>or</span>
              </span>
              <span className='cart-name'>Cart</span>
              <span className='member4'>
              <react_router_dom_1.Link to="">Sign in</react_router_dom_1.Link> 
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
            <react_router_dom_1.Link to="">Checkout</react_router_dom_1.Link> 
        </button>
            </div>
      </div>);
    }
}
exports.Cart = Cart;
exports.default = Cart;
