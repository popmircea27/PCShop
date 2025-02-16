import React, { useState } from 'react';
import LoginForm from './LoginForm';
import UserPanel from './UserPanel';
import { useNavigate } from 'react-router-dom';

const ParentUserFile = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const handleLoginSuccess = (user) => {
        console.log('Logged in user:', user); // Verifică aici
        setUser(user); // Actualizează starea utilizatorului
        localStorage.setItem('token', user.token); // Salvează tokenul (dacă ai tokenul în obiectul user)
        navigate('/user-panel'); // Redirecționează la panoul utilizatorului
    };
    

    return (
        <div>
            {!user ? (
                <LoginForm onLoginSuccess={handleLoginSuccess} />
            ) : (
                <UserPanel user={user} />
            )}
        </div>
    );
};

export default ParentUserFile;
