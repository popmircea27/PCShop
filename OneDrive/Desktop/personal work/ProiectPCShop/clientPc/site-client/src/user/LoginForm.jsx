import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import "../user/user-login.css";
import userLogo from "../navBar/navBarAssets/user.svg";
import lockLogo from "../navBar/navBarAssets/lock.svg";
import Cookies from 'js-cookie';
import EyeNotSee from './userAssets/EyeNotSee';
import EyeSee from './userAssets/EyeSee';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        try {
            const response = await axios.post('/api/users/login', {
                username,
                password,
            });

            const user = response.data.user;
            Cookies.set('username', user.username, { expires: 7 });
            navigate('/user-panel', { state: { username: user.username } });

        } catch (error) {
            setErrorMessage('An error occurred during login: ' + (error.response?.data?.message || error.message));
        }
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    };

    return (
        <div className='login-body'>
            <h2>Log In</h2>
            <form className='form-style' onSubmit={handleSubmit}>
                <div className='input-container'>
                    <img src={userLogo} alt="User Icon" className='icon-style' />
                    <motion.input 
                        className='input-style'
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        required
                        initial={{ scale: 1 }}
                        whileFocus={{ scale: 1.07 }} 
                    />
                </div>
                <div className='input-container'>
                    <div className='eye-icon' onClick={togglePasswordVisibility}>
                        {password ? (
                            isPasswordVisible ? (
                                <EyeSee />
                            ) : (
                                <EyeNotSee />
                            )
                        ) : (
                            <img src={lockLogo} alt="Lock Icon" className='icon-style' />
                        )}
                    </div>
                    <motion.input 
                        className='input-style password-input'
                        type={isPasswordVisible ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        initial={{ scale: 1 }}
                        whileFocus={{ scale: 1.07 }} 
                    />
                </div>
                <motion.button 
                    className='button-style' 
                    type="submit"
                    whileHover={{ scale: 1.3, transition: { duration: 0.3, ease: "easeInOut" } }} 
                >
                    Login
                </motion.button>
                <div className='other-inputs'>
                    <div className='password-reset'>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            onClick={() => navigate('/forgot-password')} // Navigate to forgot-password page
                        >
                            Forgot Password?
                        </motion.button>
                    </div>
                    <div className='new-acc'>
                        <motion.button
                            whileHover={{ scale: 1.1 }} 
                            onClick={() => navigate('/register')} // Navigate to register page
                        >
                            Create New Account
                        </motion.button>
                    </div>
                </div>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
};

export default LoginForm;
