import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import './userPanelStyle.css'
import Button from '../../Button';

const UserPanel = () => {
    const [isLogged, setIsLogged] = useState(false);
    const navigate = useNavigate();
    const [isEditMode, setIsEditMode] = useState(false); 
    const [user, setUser] = useState({ 
        name: "Alin", 
        lastName: "Pop", 
        email: "demoemail@gmail.com", 
        age: 25, 
        activitatePref: "" 
    });
    const [activities, setActivities] = useState(["Via-Ferata", "Rafting", "Zbor Parapanta", "Escalada", "Ski"]);
    const [selectActivity, setSelectActivity] = useState("");


    const classVars = {
        hidden: {
            opacity: 0,
            pathLength: 0,
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            transition: {
                duration: 2,
                ease: "easeInOut",
            }
        },
        
    };
    const wlHover={
        onHover: {
            scale: 1.1,
            transition: {
                duration: 0.3,
            },
        }
    }

    useEffect(() => {
        const loggedIn = localStorage.getItem('isLogged');
        if (loggedIn === 'true') {
            setIsLogged(true);
            // Optionally fetch user data here from an API or localStorage
            // setUser(fetchedUserData);
        } else {
            navigate('/login-signIn');
        }
    }, [navigate]);

    const handleActivityChange = (event) => {
        const selected = event.target.value;
        setSelectActivity(selected);
        setUser((prevUser) => ({
            ...prevUser,
            activitatePref: selected,
        }));
    };

    const handleEdit = () => {
        if (isEditMode) {
            // Save data to localStorage or send to API here if needed
            localStorage.setItem('userData', JSON.stringify(user));
        }
        setIsEditMode(!isEditMode); 
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    return (
        <motion.div className='body-panel'
            variants={classVars}
            initial="hidden"
            animate="visible"
            >
            {isLogged ? (
                <motion.div
                    className='user-panel'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className='hello-text'>
                        <motion.h2
                            variants={wlHover}
                            whileHover="onHover"
                        >Hello {user.name}, Welcome Back!</motion.h2>
                    </div>
                    
                    <div className='personal-data'>
                        <div className='personal-data-text'><h1>Personal Data</h1></div> 
                        {isEditMode ? (
                            <>
                                <label>Name: 
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={user.name} 
                                        onChange={handleInputChange} 
                                    />
                                </label>
                                <label>Last Name: 
                                    <input 
                                        type="text" 
                                        name="lastName"
                                        value={user.lastName} 
                                        onChange={handleInputChange} 
                                    />
                                </label>
                                <label>Age: 
                                    <input 
                                        type="number" 
                                        name="age"
                                        value={user.age} 
                                        onChange={handleInputChange} 
                                    />
                                </label>
                                <label>Email: 
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={user.email} 
                                        onChange={handleInputChange} 
                                    />
                                </label>
                            </>
                        ) : (
                            <>
                                <h2>Name: {user.name} {user.lastName}</h2>
                                <h2>Age: {user.age}</h2>
                                <h2>Email: {user.email}</h2>
                            </>
                        )}
                        
                        <h3>Activitatea preferată: {user.activitatePref}</h3>
                        <select value={selectActivity} onChange={handleActivityChange}>
                            <option value="" disabled>Selectează o activitate</option>
                            {activities.map((activity, index) => (
                                <option key={index} value={activity}>{activity}</option>
                            ))}
                        </select>
                    </div>
                    <motion.button className="button-Edit" onClick={handleEdit}
                        variants={wlHover}
                            whileHover="onHover"
                    >
                        {isEditMode ? 'Save' : 'Edit'}
                    </motion.button>
                </motion.div>
            ) : (
                <p>Redirecting to login...</p>
            )}
        </motion.div>
    );
};

export default UserPanel;
