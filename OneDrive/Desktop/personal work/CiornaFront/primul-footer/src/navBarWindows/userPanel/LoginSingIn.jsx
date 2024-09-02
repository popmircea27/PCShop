import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGoogle, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './loginSinginStyle.css';
import Header from '../../Header';
// Add the icons to the FontAwesome library
library.add(faGoogle, faFacebook, faGithub, faLinkedin);

function LoginSignIn() {
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();

    // Example login handler
    const handleLogin = (e) => {
        e.preventDefault();
        // Perform your login logic here (e.g., authentication)

        // If successful, store the login state in localStorage
        localStorage.setItem('isLogged', 'true');

        // Redirect to the user panel
        navigate('/user-panel');
    };

    // Example logout handler
    const handleLogout = () => {
        // Clear the login state
        localStorage.removeItem('isLogged');

        // Redirect to the login page or homepage
        navigate('/login-signIn');
    };

    return (
        <div className="body-search">
            <Header/>
            <div className='body-container'>
                <div className={`container ${isActive ? 'active' : ''}`} id="container">
                    {/* Sign Up Form */}
                    <div className="form-container sign-up">
                        <form onSubmit={handleLogin}>
                            <h1>Create Account</h1>
                            <div className="social-icons">
                                <a href="#" className="icon">
                                    <FontAwesomeIcon icon={faGoogle} />
                                </a>
                                <a href="#" className="icon">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href="#" className="icon">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="#" className="icon">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                            <span>or use your email for registration</span>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button type="submit">Sign Up</button>
                        </form>
                    </div>

                    {/* Sign In Form */}
                    <div className="form-container sign-in">
                        <form onSubmit={handleLogin}>
                            <h1>Sign In</h1>
                            <div className="social-icons">
                                <a href="#" className="icon">
                                    <FontAwesomeIcon icon={faGoogle} />
                                </a>
                                <a href="#" className="icon">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href="#" className="icon">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="#" className="icon">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                            <span>or use your email and password</span>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <a href="#">Forget Your Password?</a>
                            <button type="submit">Sign In</button>
                        </form>
                    </div>

                    {/* Toggle Panels */}
                    <div className="toggle-container">
                        <div className="toggle">
                            <div className="toggle-panel toggle-left">
                                <h1>Welcome Back!</h1>
                                <p>Enter your personal details to use all of site features</p>
                                <button
                                    className="hidden"
                                    id="login"
                                    onClick={() => setIsActive(false)}
                                >
                                    Sign In
                                </button>
                            </div>
                            <div className="toggle-panel toggle-right">
                                <h1>Hello, Friend!</h1>
                                <p>Register with your personal details to use all of site features</p>
                                <button
                                    className="hidden"
                                    id="register"
                                    onClick={() => setIsActive(true)}
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginSignIn;
