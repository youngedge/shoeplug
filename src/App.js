"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Login_1 = __importDefault(require("./components/LoginPage/Login"));
const Signup_1 = __importDefault(require("./components/SignupPage/Signup"));
const Landing_1 = __importDefault(require("./components/LandingPage/Landing"));
const Cart_1 = __importDefault(require("./components/Cart/Cart"));
const App = () => {
    return (<react_router_dom_1.BrowserRouter>
           <react_router_dom_1.Routes>
               <react_router_dom_1.Route path="/" element={<Login_1.default />}/>
               <react_router_dom_1.Route path="/signup" element={<Signup_1.default />}/>
               <react_router_dom_1.Route path="/landing" element={<Landing_1.default />}/>
               <react_router_dom_1.Route path='/cart' element={<Cart_1.default />}/>
           </react_router_dom_1.Routes>
       </react_router_dom_1.BrowserRouter>);
};
exports.default = App;
