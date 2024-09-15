import React from "react";
import { useNavigate } from 'react-router-dom';


import TransparentWhite from "../components/buttons/TranspararentWhite";
import TransparentButton from "../components/buttons/TransparentButton";
import userIcon from '../navBar/navBarAssets/user.svg'; 
import searchIcon from '../navBar/navBarAssets/search.svg';
import cartIcon from '../navBar/navBarAssets/cart.svg';
import Logo from "../components/logo/Logo";

import "../navBar/navBarStyle.css";

function NavBar() {
    const handleClickUser = () => {
        navigate('/user');
    };

    const handleClickSearch = () => {
        navigate('/search');    
    };

    const handleClickCart = () => {
        navigate('/cart');
    };
    return (
        <>
            <div className="navbar">
                <div className="logo-container">
                    <Logo />
                    <h3>Shop</h3>
                </div>

                <div className="button-container">
                    <TransparentButton text={"Laptops"} path={'/laptops'} />
                    <TransparentWhite  text={"PC Office&Gaming"} path={'/pc-office-gaming'}/>  
                    <TransparentWhite  text={"Components"} path={'/components'} />      
                    <TransparentButton text={"Periferics"} path={'/periferics'} />
                </div>

                <div className="user-container">
                    <button className="search-button" onClick={handleClickSearch}>
                        <img src={searchIcon} alt="Search Icon" />
                    </button>
                    <button className="user-button" onClick={handleClickUser}>
                        <img src={userIcon} alt="User Icon" />
                    </button>
                    <button className="user-button" onClick={handleClickCart}>
                        <img src={cartIcon} alt="cart Icon" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default NavBar;
