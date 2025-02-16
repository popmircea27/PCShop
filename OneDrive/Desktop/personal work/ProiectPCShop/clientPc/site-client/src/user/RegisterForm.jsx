import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { motion } from 'framer-motion'; // pentru animații
import "./RegisterPanel.css";

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [isUsernameChecked, setIsUsernameChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Debouncing pentru a reduce apelurile la server
    const timer = setTimeout(() => {
      if (username) {
        checkUsernameAvailability(username);
      }
    }, 500); // Așteaptă 500ms după ce utilizatorul încetează să tasteze

    return () => clearTimeout(timer); // Curăță timer-ul la schimbarea username-ului
  }, [username]);

  // Functia care va verifica daca username-ul este deja folosit
  const checkUsernameAvailability = async (username) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/users/check-username/${username}`);
      setUsernameError(''); // Reset error message if username is available
      setIsUsernameChecked(true); // Indică faptul că verificarea username-ului s-a încheiat
    } catch (error) {
      setUsernameError('Username already exists.');
      setIsUsernameChecked(true); // Indică faptul că verificarea s-a încheiat
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Verificăm dacă există un mesaj de eroare pentru username sau dacă verificarea nu a fost încă efectuată
    if (usernameError || !isUsernameChecked) {
      setErrorMessage(usernameError || 'Please check if the username is available.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/users/register', {
        username: String(username),
        password: String(password),
        email: String(email),
        address: String(address),
      });

      if (response.status === 200) {
        Cookies.set('username', username, { expires: 7 });
        navigate('/user-panel');
      } else {
        setErrorMessage('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Registration failed. ' + (error.response?.data?.message || error.message || 'Unknown error.'));
    }
  };

  return (
    <div className="login-body">
      <h2>Register</h2>
      <form className="form-style" onSubmit={handleRegister}>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        
        <div className="input-container">
          <input
            className="input-styleregister"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Apelăm funcția de verificare la schimbarea username-ului
            required
          />
          {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>} {/* Afișăm eroarea pentru username */}
        </div>

        <div className="input-container">
          <input
            className="input-styleregister"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="input-container">
          <input
            className="input-styleregister"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-container">
          <input
            className="input-styleregister"
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <motion.button
          className="button-style"
          type="submit"
          whileHover={{ scale: 1.3, transition: { duration: 0.3, ease: "easeInOut" } }}
        >
          Register
        </motion.button>

        <div className="other-inputs">
          <div className="password-reset">
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => navigate('/login')}
            >
              Back to Login
            </motion.button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
