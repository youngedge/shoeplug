import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './components/LoginPage/Login';
import SignupForm from './components/SignupPage/Signup';
import LandingPage from './components/LandingPage/Landing';
import Cart from './components/Cart/Cart';
const App: React.FC = () => {
   return (
       <BrowserRouter>
           <Routes>
               <Route path="/" element={<LoginPage />} />
               <Route path="/signup" element={<SignupForm />} />
               <Route path= "/landing" element={<LandingPage/>} />
               <Route path='/cart' element={<Cart/>} />
           </Routes>
       </BrowserRouter>
   );
};

export default App;
