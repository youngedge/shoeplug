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
require("./Login.css");
const logo_svg_1 = __importDefault(require("./logo.svg"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_router_dom_1 = require("react-router-dom");
const LoginForm = ({ onSubmit }) => {
    const [username, setUsername] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(username, password);
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
    return (<div className='login-form-container'>
            <div className='Logo'>
                <img src={logo_svg_1.default} alt="ShoePlug Logo"/>
            </div>
            <form className='form' onSubmit={handleSubmit}>
                <div>
                    <div className='plug'></div>
                    <div className='welcome'> Welcome back</div>
                    <div className='dnt'>Don't have an account?<react_router_dom_1.Link to="./Signup">Sign up</react_router_dom_1.Link>
                    </div>
                    <label htmlFor="username"></label>
                    <input type="text" id="username" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="password" id="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    <button className="toggle-password-button" onClick={togglePasswordVisibility}>
                        <react_fontawesome_1.FontAwesomeIcon icon={showPassword ? free_solid_svg_icons_1.faEyeSlash : free_solid_svg_icons_1.faEye}/> 
                    </button>
                </div>
                <button type="button">
            <react_router_dom_1.Link to="/landing">Sign in</react_router_dom_1.Link> 
        </button>
            </form>
        </div>);
};
exports.default = LoginForm;
