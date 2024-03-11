import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './components/LoginPage/Login';


const App: React.FC = () => {
   return (
       <BrowserRouter>
           <Routes>
               <Route path="/" element={<LoginPage />} />
           </Routes>
       </BrowserRouter>
   );
};

export default App;
