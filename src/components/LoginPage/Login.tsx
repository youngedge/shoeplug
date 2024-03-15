import React, { useState } from 'react';
import { HTMLInputElement } from 'react'; 
import './Login.css';
import logo from './logo.svg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';

interface LoginFormProps {
    onSubmit: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); 

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(username, password);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); 

        const passwordInput = document.getElementById("password") as HTMLInputElement; 

        if (showPassword) {
            passwordInput.type = 'text'; 
        } else {
            passwordInput.type = 'password';
        }
    };

    return (
        <div className='login-form-container'>
            <div className='Logo'>
                <img src={logo} alt="ShoePlug Logo" />
            </div>
            <form className='form' onSubmit={handleSubmit}>
                <div>
                    <div className='plug'></div>
                    <div className='welcome'> Welcome back</div>
                    <div className='dnt'>Don't have an account?<Link to="./Signup">Sign up</Link>
                    </div>
                    <label htmlFor="username"></label>
                    <input type="text" id="username" placeholder = "Email" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="password" id="password" value={password} placeholder = "Password" onChange={(e) => setPassword(e.target.value)} />
                    <button className="toggle-password-button" onClick={togglePasswordVisibility}>
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} /> 
                    </button>
                </div>
                <button type="button">
            <Link to="/landing">Sign in</Link> 
        </button>
            </form>
        </div>
    );
};

export default LoginForm;
