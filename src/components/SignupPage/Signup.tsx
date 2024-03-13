import React, { useState } from 'react';
import './Signup.css';
import logo from './logo2.svg'; 
import { Link } from 'react-router-dom';
import { HTMLInputElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
interface SignupFormProps {
    onSubmit: (firstName: string, lastName: string, Email: string, password: string) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSubmit }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); 
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(firstName, lastName, Email, password);
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
        <div className='signup-form-container'>
            {/* Consider adding the logo image here if relevant */}
            <div className='Logo2'>
                <img src={logo} alt="ShoePlug Logo" />
            </div>
            <form className='form' onSubmit={handleSubmit}>
                <div className='create'>
                <h2>Create an account</h2> {/* Or another appropriate heading */}
                </div>
                <div className='dha'>Already have an account?<Link to="/">Sign in</Link></div>
                <div className='input-group'>
                    <label htmlFor="firstName"></label>
                    <input type="text" id="firstName" placeholder='First name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>

                <div className='input-group'>
                    <label htmlFor="lastName"></label>
                    <input type="text" id="lastName" placeholder = 'Last name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>

                <div className='input-group'>
                    <label htmlFor="Email"></label>
                    <input type="text" id="Email" placeholder = 'Email'  value={Email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='input-group'>
                    <label htmlFor="password"></label>
                    <input type="password" id="password" placeholder = 'password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="toggle-password-button2" onClick={togglePasswordVisibility}>
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} /> 
                    </button>
                </div>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignupForm;
