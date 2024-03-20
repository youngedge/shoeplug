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
const react_1 = __importStar(require("react"));
require("./Signup.css");
const logo2_svg_1 = __importDefault(require("./logo2.svg"));
const react_router_dom_1 = require("react-router-dom");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const SignupForm = ({ onSubmit }) => {
    const [firstName, setFirstName] = (0, react_1.useState)('');
    const [lastName, setLastName] = (0, react_1.useState)('');
    const [Email, setEmail] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(firstName, lastName, Email, password);
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        const passwordInput = document.getElementById("password");
        if (showPassword) {
            passwordInput.type = 'text';
        }
        else {
            passwordInput.type = 'password';
        }
    };
    return (<div className='signup-form-container'>
            {/* Consider adding the logo image here if relevant */}
            <div className='Logo2'>
                <img src={logo2_svg_1.default} alt="ShoePlug Logo"/>
            </div>
            <form className='form' onSubmit={handleSubmit}>
                <div className='create'>
                <h2>Create an account</h2> {/* Or another appropriate heading */}
                </div>
                <div className='dha'>Already have an account?<react_router_dom_1.Link to="/">Sign in</react_router_dom_1.Link></div>
                <div className='input-group'>
                    <label htmlFor="firstName"></label>
                    <input type="text" id="firstName" placeholder='First name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>

                <div className='input-group'>
                    <label htmlFor="lastName"></label>
                    <input type="text" id="lastName" placeholder='Last name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>

                <div className='input-group'>
                    <label htmlFor="Email"></label>
                    <input type="text" id="Email" placeholder='Email' value={Email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className='input-group'>
                    <label htmlFor="password"></label>
                    <input type="password" id="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button className="toggle-password-button2" onClick={togglePasswordVisibility}>
                        <react_fontawesome_1.FontAwesomeIcon icon={showPassword ? free_solid_svg_icons_1.faEyeSlash : free_solid_svg_icons_1.faEye}/> 
                    </button>
                </div>

                <button type="submit2">Sign Up</button>
            </form>
        </div>);
};
exports.default = SignupForm;
