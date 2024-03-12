import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './components/LoginPage/Login';
import SignupForm from './components/SignupPage/Signup';  

const App: React.FC = () => {
   return (
       <BrowserRouter>
           <Routes>
               <Route path="/" element={<LoginPage />} />
               <Route path="/signup" element={<SignupForm />} />
           </Routes>
       </BrowserRouter>
   );
};

export default App;
