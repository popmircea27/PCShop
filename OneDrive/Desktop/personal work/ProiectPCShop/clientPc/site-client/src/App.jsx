import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './navBar/NavBar';
import UserPanel from './user/UserPanel';
import ParentUserFile from './user/ParentUserFile';
import RegisterForm from './user/RegisterForm';
import LoginForm from './user/LoginForm';
import LaptopPage from './laptopsDir/LaptopsPage';
import LaptopView from './laptopsDir/LaptopDetail/LaptopView';
import Cookies from 'js-cookie';
import ShopingCart from './Cart/ShopingCart';
function App() {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem('token');
    return token ? { token } : null; // Adjust this according to how your user data is structured
  });

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem('token', userData.token);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <>
      <NavBar onLogout={handleLogout} />
      <Router>
        <Routes>
          <Route path="/laptops" element={<LaptopPage />} />
          <Route path="/login" element={<LoginForm onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route
            path="/user-panel"
            element={Cookies.get('username') ? <UserPanel /> : <Navigate to="/login" />}
          />
          <Route path="/laptops/details/:id" element={<LaptopView />} />
          <Route path="/" element={<Navigate to="/laptops" />} />
          <Route path="/cart" element={<ShopingCart />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
